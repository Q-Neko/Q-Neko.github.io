import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { zipSync } from "fflate";

// Builds the Media Corner "Download all" archive from the logos in
// `public/logos/media/` so it never goes stale: drop a logo in that folder and
// it's in the next build's ZIP automatically — there is no archive to commit.
// Mirrors the `brandAssets` loader's image filter so the ZIP and the on-page
// grid always contain the same files.
const LOGO_DIR = "public/logos/media";
const ZIP_PATH = "logos/media/qneko-logo-pack.zip";
const IMAGE_RE = /\.(png|svg|jpe?g|webp)$/i;

function buildZip() {
    const files = readdirSync(LOGO_DIR).filter((f) => IMAGE_RE.test(f));
    const entries = {};
    for (const f of files) entries[f] = readFileSync(join(LOGO_DIR, f));
    return { zip: zipSync(entries, { level: 9 }), count: files.length };
}

export default function logoZip() {
    return {
        name: "logo-zip",
        hooks: {
            // Write the archive into the final build output.
            "astro:build:done": ({ dir, logger }) => {
                const out = join(fileURLToPath(dir), ZIP_PATH);
                mkdirSync(join(out, ".."), { recursive: true });
                const { zip, count } = buildZip();
                writeFileSync(out, zip);
                logger.info(`Generated ${ZIP_PATH} from ${count} logos`);
            },
            // Serve a freshly-built archive on the fly during `astro dev`.
            "astro:server:setup": ({ server }) => {
                server.middlewares.use((req, res, next) => {
                    if (req.url?.split("?")[0] !== `/${ZIP_PATH}`) return next();
                    res.setHeader("Content-Type", "application/zip");
                    res.end(Buffer.from(buildZip().zip));
                });
            },
        },
    };
}
