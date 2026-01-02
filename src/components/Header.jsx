import { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${scrolled ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-white/5 h-[70px]' : 'h-24 bg-transparent'
            } flex items-center`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center w-full">
                <div className="logo">
                    <a href="#hero" className="text-xl font-bold text-text-primary tracking-tight">
                        Githusigan
                    </a>
                </div>

                <nav className={`fixed lg:static top-0 ${mobileMenuOpen ? 'right-0' : '-right-full'} w-full lg:w-auto h-screen lg:h-auto bg-bg-primary/95 lg:bg-transparent backdrop-blur-2xl lg:backdrop-blur-none transition-all duration-500 lg:transition-none flex flex-col lg:flex-row items-center justify-center lg:justify-start z-[1001] lg:z-auto`}>
                    <ul className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-lg lg:text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors duration-300"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-6">
                    <button
                        className="lg:hidden flex flex-col justify-between w-8 h-6 relative z-[1002]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`w-full h-0.5 bg-text-primary rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-text-primary rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-text-primary rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                    </button>
                    <a href="#contact" className="hidden sm:inline-flex bg-gradient-primary px-6 py-2 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-all hover:-translate-y-1 active:scale-95 shadow-xl shadow-accent-primary/20">
                        Hire Me
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
