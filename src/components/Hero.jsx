import { useEffect, useState } from 'react';

const Hero = () => {
    const roles = ['Software Engineering Student', 'Full-Stack Developer'];
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typingSpeed = isDeleting ? 30 : 70;

        const timeout = setTimeout(() => {
            if (!isDeleting && displayText === currentRole) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            } else {
                setDisplayText(prev =>
                    isDeleting ? currentRole.substring(0, prev.length - 1) : currentRole.substring(0, prev.length + 1)
                );
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section id="hero" className="bg-bg-primary pt-32 pb-16 min-h-[90vh] flex items-center relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 w-full relative z-10 flex flex-col items-center text-center">

                {/* Available for Opportunities Badge */}
                <div className="mb-12 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium text-text-secondary flex items-center gap-1.5">
                            Available for Opportunities
                            <span className="text-accent-secondary">✨</span>
                        </span>
                    </div>
                </div>

                <div className="max-w-4xl space-y-8 relative">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white animate-fade-in-up">
                        I'm <span className="text-accent-primary">J Githusigan</span>
                    </h1>

                    <div className="h-16 flex items-center justify-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl text-text-secondary font-bold flex items-center gap-1">
                            <span className="text-white/80">{displayText.substring(0, 0)}</span>
                            <span>{displayText.substring(0)}</span>
                            <span className="w-[3px] h-10 bg-accent-primary animate-pulse ml-1"></span>
                        </h2>
                    </div>

                    <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
                        Transforming complex problems into elegant AI-driven solutions. Specializing in Machine Learning, Data Science, and Full-Stack Development.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up delay-200">
                        <a href="#projects" className="bg-accent-primary hover:bg-accent-primary/90 px-10 py-4 rounded-full font-bold text-white transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group shadow-lg shadow-accent-primary/20">
                            View Portfolio
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
                        </a>
                        <a href="#contact" className="px-10 py-4 rounded-full font-bold text-text-primary border border-white/20 hover:bg-white/5 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
                            Get in Touch
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                    </div>
                </div>

                <div className="mt-20 py-10 border-t border-white/5 overflow-hidden relative">
                    <div className="flex whitespace-nowrap gap-12 animate-marquee-right">
                        {/* Marquee icons with Tailwind styling */}
                        {[1, 2].map((i) => (
                            <div key={i} className="flex gap-16 items-center shrink-0">
                                <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html" />
                                <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css" />
                                <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                                <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                                <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                                <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="invert opacity-60 hover:opacity-100" />
                                <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                                <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                                <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="figma" />
                                <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS" className="invert opacity-60 hover:opacity-100" />
                            </div>
                        ))}
                    </div>
                    {/* Fade overlay for marquee */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-bg-primary via-transparent to-bg-primary opacity-90"></div>
                </div>
            </div>
        </section>
    );
};

const TechIcon = ({ src, alt, className = "" }) => (
    <div className={`w-20 h-20 flex items-center justify-center transition-all hover:scale-125 duration-300 ${className}`}>
        <img src={src} alt={alt} className={`h-full w-auto filter transition-all`} />
    </div>
);

export default Hero;
