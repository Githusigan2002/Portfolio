const Experience = () => {
    const experiences = [
        {
            role: 'Freelance Web Developer',
            company: 'Self-Employed',
            duration: '2024 – Present',
            description: 'Designing and developing custom web solutions for local clients, focusing on React-based SPAs and modern UI/UX principles.',
            type: 'Experience'
        }
    ];

    return (
        <section id="experience" className="bg-bg-secondary py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-accent-primary font-bold tracking-widest uppercase text-sm">Professional Path</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary">
                        Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-5.25 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className="relative mb-12 md:mb-16">
                            {/* Dot */}
                            <div className="absolute left-0 md:left-1/2 top-8 w-11 h-11 bg-bg-primary border-4 border-accent-tertiary rounded-full md:-translate-x-1/2 z-10 flex items-center justify-center shadow-lg shadow-accent-tertiary/20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent-tertiary"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                            </div>

                            {/* Content */}
                            <div className={`pl-20 md:pl-0 md:w-1/2 ${index % 2 !== 0 ? 'md:pr-20 md:text-right' : 'md:ml-auto md:pl-20 md:text-left'}`}>
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-accent-tertiary/30 transition-all duration-300 group">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                        <span className="text-accent-tertiary font-bold text-sm order-2 md:order-1">{exp.duration}</span>
                                        <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-text-tertiary order-1 md:order-2">{exp.type}</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2 tracking-tight group-hover:text-accent-tertiary transition-colors">{exp.role}</h3>
                                    <span className="block text-sm font-bold bg-gradient-purple bg-clip-text text-transparent mb-4">{exp.company}</span>
                                    <p className="text-text-secondary leading-relaxed text-sm md:text-base">{exp.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
