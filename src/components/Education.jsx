const Education = () => {
    const education = [
        {
            degree: "Higher National Diploma in Software Engineering",
            institution: "BCAS Campus",
            duration: "2023 – 2025",
            description: "Advanced program specializing in full-stack architecture, software life cycle management, and emerging technologies."
        },
        {
            degree: "BEng (Hons) in Software Engineering",
            institution: "ESOFT Metro Campus",
            duration: "2026 – 2027",
            description: "Advanced program specializing in full-stack architecture, software life cycle management, and emerging technologies."
        },
    ];

    return (
        <section id="education" className="bg-bg-primary py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-accent-primary font-bold tracking-widest uppercase text-sm">Academic Background</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary">
                        My <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-5.25 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2"></div>

                    {education.map((edu, index) => (
                        <div key={index} className="relative mb-12 md:mb-16">
                            {/* Dot */}
                            <div className="absolute left-0 md:left-1/2 top-8 w-11 h-11 bg-bg-primary border-4 border-accent-primary rounded-full md:-translate-x-1/2 z-10 flex items-center justify-center shadow-lg shadow-accent-primary/20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent-primary"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                            </div>

                            {/* Content */}
                            <div className={`pl-20 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:ml-auto md:pl-20 md:text-left'}`}>
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-accent-primary/30 transition-all duration-300 group">
                                    <span className="block text-accent-primary font-bold text-sm mb-2">{edu.duration}</span>
                                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2 tracking-tight group-hover:text-accent-primary transition-colors">{edu.degree}</h3>
                                    <span className="block text-sm font-bold uppercase tracking-widest text-text-tertiary mb-4">{edu.institution}</span>
                                    <p className="text-text-secondary leading-relaxed text-sm md:text-base">{edu.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
