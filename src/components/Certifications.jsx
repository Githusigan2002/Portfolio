const Certifications = () => {
    const certifications = [
        {
            id: 1,
            title: 'Python Object-Oriented Programming',
            provider: 'Udemy',
            year: '2024',
            description: 'Comprehensive course covering OOP concepts, design patterns, and best practices in Python'
        },
        {
            id: 2,
            title: 'Python Programming',
            provider: 'University of Moratuwa',
            year: '2024',
            description: 'Foundational Python programming course covering syntax, data structures, and algorithms'
        }
    ];

    return (
        <section id="certifications" className="bg-bg-primary py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-accent-primary font-bold tracking-widest uppercase text-sm">Achievements</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary">
                        Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certifications.map((cert) => (
                        <div key={cert.id} className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-accent-primary/40 transition-all duration-500 hover:-translate-y-1">
                            <div className="flex gap-6 items-start">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-primary flex items-center justify-center text-white shadow-lg shadow-accent-primary/20 group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                </div>
                                <div className="space-y-4 flex-grow">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">{cert.title}</h3>
                                        <span className="text-xs font-bold uppercase tracking-widest text-text-tertiary mt-1 block">{cert.provider}</span>
                                    </div>
                                    <p className="text-text-secondary text-sm leading-relaxed">{cert.description}</p>
                                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                        <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-text-tertiary uppercase tracking-widest">{cert.year}</span>
                                        <a href="#" className="inline-flex items-center gap-2 text-sm font-bold bg-gradient-primary bg-clip-text text-transparent group-hover/link:text-text-primary transition-all">
                                            View Certificate
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
