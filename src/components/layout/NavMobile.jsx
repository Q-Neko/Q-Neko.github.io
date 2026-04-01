import { useState, useRef, useEffect } from 'react';

export const NavMobile = () => {
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
                    <a href="/mission">Mission</a>
                    <a href="/consortium">Consortium</a>
                    <a href="/quantum-computers">Quantum Computers</a>
                    <a href="/hpc">HPC</a>
                    <a href="/posts">Posts</a>
                    <a href="/search">Search</a>
                </div>
            )}
        </div>
    );
}