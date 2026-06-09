// Matomo Tag Manager loader, gated on analytics consent (see CookieConsent.jsx).
// We never inject the container until the user has opted in, so nothing is
// tracked and no Matomo cookies are set before consent — the GDPR-compliant
// default. Configure via env (PUBLIC_ so it reaches the client bundle):
//
//   PUBLIC_MATOMO_URL=analytics.example.org      # host only, no scheme
//   PUBLIC_MATOMO_CONTAINER_ID=abc123
//
// When either is unset the loader is a no-op, so builds without analytics
// configured stay green.

let injected = false;

// Inject the MTM container <script> exactly once per page load. Safe to call
// repeatedly (e.g. on mount and again when the user clicks "Accept").
export function loadMatomo(matomoUrl, containerId) {
    if (injected || !matomoUrl || !containerId || typeof window === "undefined") return;
    injected = true;

    const src = new URL(`/js/container_${containerId}.js`, `https://${matomoUrl}`).toString();

    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });
    (function () {
        var d = document, g = d.createElement("script"), s = d.getElementsByTagName("script")[0];
        g.async = true; g.src = src; s.parentNode.insertBefore(g, s);
    })();
}

// Called when consent is withdrawn: drop Matomo's own cookies (`_pk_*`,
// `mtm_*`). Full removal of an already-loaded container only completes on the
// next navigation; clearing the cookies stops tracking from persisting.
export function clearMatomoConsent() {
    if (typeof document === "undefined") return;
    for (const pair of document.cookie.split(";")) {
        const name = pair.split("=")[0].trim();
        if (name.startsWith("_pk_") || name.startsWith("mtm_")) {
            document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`;
        }
    }
}