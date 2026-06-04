
import { set } from 'astro:schema';
import { useState, useRef, useEffect } from 'react';

export const NewsletterFormCard = ({ t }) => {

    const [formData, setFormData] = useState({
        email: '',
        privacyPolicyAccepted: false,
    });

    const [formErrors, setFormErrors] = useState({
        email: null,
        privacyPolicyAccepted: null,
    });

    const [submittedNotification, setSubmittedNotification] = useState(false);

    const handleFormDataChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (formErrors[field]) {
            setFormErrors(prev => ({ ...prev, [field]: null }));
        }

    }

    const validateForm = () => {
        //TODO: this is very basic validation, consider using a library for more complex forms
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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            //TODO: handle form submission, e.g. send data to backend or email service
            console.log('Form submitted:', formData);

            setFormData({
                email: '',
                privacyPolicyAccepted: false,
            });

            setSubmittedNotification(true);

            setTimeout(() => {
                setSubmittedNotification(false);
            }, 3000);
        }

        else {
            console.log('Form has errors:', formErrors);
        }
    };

    return (
        <div className="base-card opacity-0 animate-fadeUp1 max-w-2xl flex flex-col gap-4">

            <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">{t.pageContent.newsletter.emailLabel}</label>
                    <input
                        type="text"
                        placeholder={t.pageContent.newsletter.emailPlaceholder}
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => handleFormDataChange('email', e.target.value)}
                    />
                    {formErrors.email && <p className="form-error">{formErrors.email}</p>}

                    <div className="flex mt-2 gap-2 items-center">
                        <input type="checkbox" className="form-checkbox" checked={formData.privacyPolicyAccepted} onChange={(e) => handleFormDataChange('privacyPolicyAccepted', e.target.checked)} />
                        <p>{t.pageContent.contact.form.privacyPolicyText} <a href={t.pageContent.contact.form.privacyPolicyLink} className="text-blue hover:underline">
                            {t.pageContent.contact.form.privacyPolicyLinkText}
                        </a></p>
                    </div>
                    {formErrors.privacyPolicyAccepted && <p className="form-error">{formErrors.privacyPolicyAccepted}</p>}
                </div>

                <button className="btn-primary self-start">{t.pageContent.newsletter.subscribeCta}</button>
                {submittedNotification && <p className="text-green-600 mt-2">{t.pageContent.newsletter.submitSuccess}</p>}
            </form>
        </div>
    )
}