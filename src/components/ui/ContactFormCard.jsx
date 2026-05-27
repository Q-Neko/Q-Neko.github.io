
import { set } from 'astro:schema';
import { useState, useRef, useEffect } from 'react';

export const ContactFormCard = ({ t }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        privacyPolicyAccepted: false,
    });

    const [ formErrors, setFormErrors ] = useState({
        name: null,
        email: null,
        message: null,
        privacyPolicyAccepted: null,
    });

    const [ submittedNotification, setSubmittedNotification ] = useState(false);

    const handleFormDataChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (formErrors[field]) {
            setFormErrors(prev => ({ ...prev, [field]: null }));
        }
    }

    const validateForm = () => {
        //TODO: this is very basic validation, consider using a library for more complex forms
        const errors = {};
        const e = t.pageContent.contact.form.errors;

        if (!formData.name.trim()) {
            errors.name = e.nameRequired;
        }

        if (!formData.email.trim()) {
            errors.email = e.emailRequired;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = e.emailInvalid;
        }

        if (!formData.message.trim()) {
            errors.message = e.messageRequired;
        }

        if (!formData.privacyPolicyAccepted) {
            errors.privacyPolicyAccepted = e.privacyRequired;
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
                name: '',
                email: '',
                message: '',
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
                    <label className="form-label">{t.pageContent.contact.form.nameLabel}</label>
                    <input type="text" className="form-input" placeholder={t.pageContent.contact.form.nameLabel} value={formData.name} onChange={(e) => handleFormDataChange('name', e.target.value)} />
                    {formErrors.name && <p className="fomr-error">{formErrors.name}</p>}
                </div>

                <div>
                    <label className="form-label">{t.pageContent.contact.form.emailLabel}</label>
                    <input type="text" className="form-input" placeholder={t.pageContent.contact.form.emailLabel} value={formData.email} onChange={(e) => handleFormDataChange('email', e.target.value)} />
                    {formErrors.email && <p className="fomr-error">{formErrors.email}</p>}
                </div>

                <div>
                    <label className="form-label">{t.pageContent.contact.form.messageLabel}</label>
                    <textarea className="form-input" placeholder={t.pageContent.contact.form.messageLabel} value={formData.message} onChange={(e) => handleFormDataChange('message', e.target.value)} />
                    {formErrors.message && <p className="fomr-error">{formErrors.message}</p>}
                </div>

                <div>
                    <label className="form-label">{t.pageContent.contact.form.privacyPolicyLabel}</label>
                    <div className="flex gap-4 items-center">
                        <input type="checkbox" className="form-checkbox" checked={formData.privacyPolicyAccepted} onChange={(e) => handleFormDataChange('privacyPolicyAccepted', e.target.checked)} />
                        <p>{t.pageContent.contact.form.privacyPolicyText} <a href={t.pageContent.contact.form.privacyPolicyLink} className="text-blue hover:underline">
                            {t.pageContent.contact.form.privacyPolicyLinkText}
                        </a></p>
                    </div>
                    {formErrors.privacyPolicyAccepted && <p className="fomr-error">{formErrors.privacyPolicyAccepted}</p>}
                </div>

                <button type="submit" className="btn-primary self-start">{t.pageContent.contact.form.submitCta}</button>
                {submittedNotification && <p className="text-green-600 mt-2">{t.pageContent.contact.form.submitSuccess}</p>}
            </form>
        </div>
    )
}