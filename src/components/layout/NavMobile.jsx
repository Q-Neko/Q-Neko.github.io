import { useState, useRef, useEffect } from 'react';

export const NavMobile = ({ navLinks, langSwitchHref, langSwitchLabel, langSwitchLang }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="nav-mobile" ref={navRef}>
            <button className={`nav-toggle${isOpen ? " open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
            </button>
            {isOpen && (
                <div className="nav-menu overflow-auto max-h-[85vh]">
                    {navLinks.map(({ label, href }) => (
                        <a key={href} href={href}>{label}</a>
                    ))}
                    <a
                        href={langSwitchHref}
                        className="lang-switch"
                        data-lang={langSwitchLang}
                        onClick={() => {
                            try {
                                localStorage.setItem("preferred-lang", langSwitchLang);
                            } catch {}
                        }}
                    >{langSwitchLabel}</a>
                </div>
            )}
        </div>
    );
}
