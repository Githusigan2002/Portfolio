const Services = () => {
    const services = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
            title: 'Web Development',
            description: 'Building modern, responsive, and high-performance web applications using the MERN stack.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.5 1.5"></path><path d="M7 11l-4 4"></path><path d="M5 9l-4 4"></path></svg>,
            title: 'UI/UX Design',
            description: 'Crafting intuitive user interfaces and engaging user experiences focused on user needs.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>,
            title: 'API Development',
            description: 'Designing and implementing secure, scalable RESTful APIs for seamless data communication.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
            title: 'Project Management',
            description: 'Coordinating development cycles, task allocation, and ensuring timely project delivery.'
        }
    ];

    return (
        <section id="services" className="bg-bg-secondary py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-accent-primary font-bold tracking-widest uppercase text-sm">My Specializations</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary">
                        What I <span className="bg-gradient-primary bg-clip-text text-transparent">Offer</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-accent-primary/40 hover:shadow-2xl hover:shadow-accent-primary/10 flex flex-col h-full">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center text-white mb-8 shadow-lg shadow-accent-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-accent-primary transition-colors">{service.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">{service.description}</p>
                            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold bg-gradient-primary bg-clip-text text-transparent hover:text-text-primary transition-all group/link w-fit uppercase tracking-widest">
                                Know More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
