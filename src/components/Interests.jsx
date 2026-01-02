const Interests = () => {
    const interests = [
        {
            icon: '💻',
            title: 'Coding',
            description: 'Building innovative solutions and exploring new technologies keeps me motivated and excited about development.'
        },
        {
            icon: '🎮',
            title: 'Gaming',
            description: 'Exploring virtual worlds and understanding game mechanics inspires creative problem-solving approaches.'
        },
        {
            icon: '📚',
            title: 'Learning',
            description: 'Constantly expanding my knowledge through courses, books, and hands-on projects in tech.'
        },
        {
            icon: '🎵',
            title: 'Music',
            description: 'Enjoying music while coding helps me focus and fuels my creativity during development sessions.'
        }
    ];

    return (
        <section id="interests" className="bg-bg-primary py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-accent-primary font-bold tracking-widest uppercase text-sm">Hobbies</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary">
                        What I <span className="bg-gradient-purple bg-clip-text text-transparent">Love</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {interests.map((interest, index) => (
                        <div key={index} className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-accent-tertiary/40 transition-all duration-500 hover:-translate-y-2 text-center">
                            <div className="text-5xl mb-6 transform group-hover:scale-125 transition-transform duration-500">{interest.icon}</div>
                            <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-accent-tertiary transition-colors">{interest.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">{interest.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Interests;
