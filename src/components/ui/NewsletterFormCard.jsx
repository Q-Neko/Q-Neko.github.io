
import { useState } from 'react';

export const NewsletterFormCard = ({ t }) => {
    const privacyPolicy = t.pageContent.contact.form;
    const isJapanesePrivacyPolicy = privacyPolicy.privacyPolicyLink.startsWith('/ja/');

    const [formData, setFormData] = useState({
        email: '',
        privacyPolicyAccepted: false,
    });

    const [formErrors, setFormErrors] = useState({
        email: null,
        privacyPolicyAccepted: null,
    });

    const [submittedNotification, setSubmittedNotification] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFormDataChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (formErrors[field]) {
            setFormErrors(prev => ({ ...prev, [field]: null }));
        }

    }

    const validateForm = () => {
        const errors = {};

        if (!formData.email.trim()) {
            errors.email = t.pageContent.newsletter.emailRequired;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = t.pageContent.newsletter.emailInvalid;
        }
        if (!formData.privacyPolicyAccepted) {
            errors.privacyPolicyAccepted = t.pageContent.contact.form.errors.privacyRequired;
        }
        setFormErrors(errors);

        return Object.keys(errors).length === 0;
    }

    const LIANA_BASE = 'https://q-neko.mail-eur.net';

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        if (!validateForm()) return;

        const form = e.currentTarget;
        setIsSubmitting(true);
        try {
            // Mirrors LianaMailer's official embed flow (see the generated embed snippet):
            // 1) GET a fresh CSRF token from the subscription page's JSON config, then
            // 2) POST the url-encoded form to the `?ajax` endpoint with the token in the
            //    `cfcfcfcfcf` field (the exact field name the embed uses — if Liana
            //    regenerates the embed and this changes, update it here).
            const config = await fetch(`${LIANA_BASE}/json?_=${Date.now()}`).then((res) => res.json());

            const body = new URLSearchParams(new FormData(form));
            body.set('cfcfcfcfcf', config.csrf_token);

            // Responds with { success, error_key, error_msg }.
            const data = await fetch(`${LIANA_BASE}/account?ajax`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: body.toString(),
            }).then((res) => res.json());

            if (data.success) {
                setFormData({ email: '', privacyPolicyAccepted: false });
                setSubmittedNotification(true);
                setTimeout(() => setSubmittedNotification(false), 3000);
            } else {
                setFormErrors((prev) => ({
                    ...prev,
                    email: data.error_key === 'email-already-registered'
                        ? t.pageContent.newsletter.alreadySubscribed
                        : t.pageContent.newsletter.submitError,
                }));
            }
        } catch {
            setFormErrors((prev) => ({ ...prev, email: t.pageContent.newsletter.submitError }));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="base-card opacity-0 animate-fadeUp1 max-w-2xl flex flex-col gap-4">

            {/* TODO add action="https://q-neko.mail-eur.net/account" */}
            <form method="post"  id="lianamailer" className='lianamailer flex flex-col gap-6' onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">{t.pageContent.newsletter.emailLabel}</label>
                    <input
                        name="email"
                        type="email"
                        placeholder={t.pageContent.newsletter.emailPlaceholder}
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => handleFormDataChange('email', e.target.value)}
                    />
                    {formErrors.email && <p className="form-error">{formErrors.email}</p>}

                    {/* LianaMailer honeypot: must stay empty; hidden from real users. */}
                    <input type="text" name="lm-gtfo" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" defaultValue="" />

                    <div className="flex flex-col mt-2 gap-2">
                        <div className="flex gap-2">
                            <input type="checkbox" id="newsletter-consent" name="consent[]" value="4665-1-en" className="form-checkbox" aria-labelledby="newsletter-consent-label" checked={formData.privacyPolicyAccepted} onChange={(e) => handleFormDataChange('privacyPolicyAccepted', e.target.checked)} />
                            <p id="newsletter-consent-label">
                                {isJapanesePrivacyPolicy ? (
                                    <>
                                        <a href={privacyPolicy.privacyPolicyLink} className="text-blue hover:underline">
                                            {privacyPolicy.privacyPolicyLinkText}
                                        </a>
                                        {privacyPolicy.privacyPolicyText}
                                    </>
                                ) : (
                                    <>
                                        {privacyPolicy.privacyPolicyText} <a href={privacyPolicy.privacyPolicyLink} className="text-blue hover:underline">
                                            {privacyPolicy.privacyPolicyLinkText}
                                        </a>
                                    </>
                                )}
                            </p>
                        </div>

                    </div>
                    {formErrors.privacyPolicyAccepted && <p className="form-error">{formErrors.privacyPolicyAccepted}</p>}
                </div>

                {/* TODO: change disabled to disabled={isSubmitting} */}
                <input value={t.pageContent.newsletter.subscribeCta} type="submit" disabled className="btn-primary self-start disabled:cursor-not-allowed disabled:opacity-60" />
                {submittedNotification && <p className="text-green-600 mt-2">{t.pageContent.newsletter.submitSuccess}</p>}
            </form>
        </div>
    )
}
