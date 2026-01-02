const Footer = () => {
    return (
        <footer className="bg-bg-primary pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <span className="text-2xl font-bold text-text-primary tracking-tighter">Githusigan</span>
                        <p className="text-text-tertiary text-sm max-w-xs text-center md:text-left">
                            Building digital experiences with passion and precision.
                        </p>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-bold text-text-secondary hover:text-accent-primary transition-colors uppercase tracking-widest"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent mb-10"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm">
                    <div className="flex gap-6">
                        {['Github', 'Linkedin', 'Twitter', 'Medium'].map((social) => (
                            <a key={social} href="#" className="text-text-tertiary hover:text-text-primary transition-colors font-medium">
                                {social}
                            </a>
                        ))}
                    </div>
                    <div className="text-text-tertiary font-medium">
                        © {new Date().getFullYear()} Githusigan Jeyarupan. All Rights Reserved.
                    </div>
                </div>
            </div>

            {/* Decorative blurs */}
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent-tertiary/5 blur-[100px] rounded-full pointer-events-none"></div>
        </footer>
    );
};

export default Footer;
