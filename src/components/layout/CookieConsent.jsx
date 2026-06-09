import { useState, useEffect } from "react";
import { loadMatomo, clearMatomoConsent } from "./matomo";

// Consent choice is stored in localStorage; analytics (anonymous Matomo) is only
// loaded once consent is given, and a `tracking` cookie mirrors the choice so it
// is visible to the user/inspectable.
const CONSENT_KEY = "consentAnalytics";
const TRACKING_COOKIE = "tracking";

// Host + container id for Matomo Tag Manager. Loader no-ops when unset.
const MATOMO_URL = import.meta.env.PUBLIC_MATOMO_URL;
const MATOMO_CONTAINER_ID = import.meta.env.PUBLIC_MATOMO_CONTAINER_ID;
const ONE_YEAR = 60 * 60 * 24 * 365;

function setTrackingCookie() {
    document.cookie = `${TRACKING_COOKIE}=1; path=/; max-age=${ONE_YEAR}; SameSite=Lax`;
}

function deleteTrackingCookie() {
    document.cookie = `${TRACKING_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
}

function readStoredConsent() {
    try {
        return localStorage.getItem(CONSENT_KEY); // "true" | "false" | null
    } catch {
        return null;
    }
}

export const CookieConsent = ({ t }) => {
    const c = t.cookies.banner;

    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);
    const [analytics, setAnalytics] = useState(false);

    useEffect(() => {
        setMounted(true);

        const stored = readStoredConsent();
        setAnalytics(stored === "true");
        // Returning visitor who already opted in: load Matomo for this page.
        if (stored === "true") loadMatomo(MATOMO_URL, MATOMO_CONTAINER_ID);
        // Show automatically on first visit (no choice recorded yet).
        if (stored !== "true" && stored !== "false") setOpen(true);

        // Allow re-opening the settings from anywhere via a link/button marked
        // with [data-cookie-settings], or a custom window event.
        const openSettings = (e) => {
            if (e && typeof e.preventDefault === "function") e.preventDefault();
            setAnalytics(readStoredConsent() === "true");
            setOpen(true);
        };
        const onDocClick = (e) => {
            const trigger = e.target.closest?.("[data-cookie-settings]");
            if (trigger) openSettings(e);
        };
        document.addEventListener("click", onDocClick);
        window.addEventListener("qneko:cookie-settings", openSettings);
        return () => {
            document.removeEventListener("click", onDocClick);
            window.removeEventListener("qneko:cookie-settings", openSettings);
        };
    }, []);

    const persist = (accepted) => {
        try {
            localStorage.setItem(CONSENT_KEY, accepted ? "true" : "false");
        } catch {
            /* storage may be unavailable; cookie still reflects the choice */
        }
        if (accepted) {
            setTrackingCookie();
            loadMatomo(MATOMO_URL, MATOMO_CONTAINER_ID);
        } else {
            deleteTrackingCookie();
            clearMatomoConsent();
        }
        setAnalytics(accepted);
        setOpen(false);
    };

    if (!mounted || !open) return null;

    return (
        <div
            className="cookie-banner"
            role="dialog"
            aria-modal="false"
            aria-label={c.title}
            data-pagefind-ignore="all"
        >
            <div className="cookie-inner">
                <div className="cookie-text">
                    <h2 className="cookie-title">{c.title}</h2>
                    <p className="cookie-body">
                        {c.body}{" "}
                        <a href="/cookies">{c.learnMore}</a>
                    </p>
                </div>

                <div className="cookie-options">
                    <div className="cookie-option">
                        <input
                            type="checkbox"
                            className="form-checkbox mt-0.5"
                            checked
                            disabled
                            aria-label={c.necessaryTitle}
                        />
                        <div>
                            <p className="cookie-option-title">
                                {c.necessaryTitle}{" "}
                                <span className="cookie-always-on">· {c.alwaysOn}</span>
                            </p>
                            <p className="cookie-option-desc">{c.necessaryDesc}</p>
                        </div>
                    </div>

                    <label className="cookie-option cursor-pointer">
                        <input
                            type="checkbox"
                            className="form-checkbox mt-0.5"
                            checked={analytics}
                            onChange={(e) => setAnalytics(e.target.checked)}
                        />
                        <div>
                            <p className="cookie-option-title">{c.analyticsTitle}</p>
                            <p className="cookie-option-desc">{c.analyticsDesc}</p>
                        </div>
                    </label>
                </div>

                <div className="cookie-actions">
                    <button
                        type="button"
                        className="btn-secondary"
                        onClick={() => persist(false)}
                    >
                        {c.rejectAll}
                    </button>
                    <button
                        type="button"
                        className="btn-secondary"
                        onClick={() => persist(analytics)}
                    >
                        {c.save}
                    </button>
                    <button
                        type="button"
                        className="btn-primary"
                        onClick={() => persist(true)}
                    >
                        {c.acceptAll}
                    </button>
                </div>
            </div>
        </div>
    );
};
