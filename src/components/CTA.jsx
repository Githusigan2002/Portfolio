const CTA = () => {
    return (
        <section className="bg-bg-primary py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="relative z-10 bg-linear-to-br from-white/[0.08] to-white/[0.02] border border-white/10 p-12 md:p-20 rounded-[3rem] overflow-hidden shadow-2xl">
                    {/* Decorative radial gradients */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.1),transparent_50%)]"></div>

                    <div className="relative z-10 text-center space-y-10">
                        <div className="inline-block p-4 bg-white/5 rounded-3xl text-4xl animate-bounce">🚀</div>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-text-primary leading-tight max-w-4xl mx-auto">
                            Ready to Elevate Your Project with <span className="bg-gradient-primary bg-clip-text text-transparent">Me?</span>
                        </h2>
                        <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            Let's build something exceptional together. I'm currently
                            available for new projects and professional opportunities.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="#contact" className="w-full sm:w-auto px-12 py-5 bg-gradient-primary rounded-2xl font-bold text-lg text-white shadow-2xl shadow-accent-primary/30 hover:opacity-90 transition-all hover:-translate-y-1 active:scale-95">
                                Let's Connect
                            </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-white/5">
                            <StatItem num="2+" label="Clients" />
                            <StatItem num="100%" label="Commitment" />
                            <StatItem num="24/7" label="Support" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background floating shapes */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-10 w-2 h-2 bg-accent-primary rounded-full animate-ping"></div>
                <div className="absolute top-1/3 right-20 w-3 h-3 bg-accent-tertiary rounded-full animate-ping delay-700"></div>
                <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-accent-secondary rounded-full animate-ping delay-1000"></div>
            </div>
        </section>
    );
};

const StatItem = ({ num, label }) => (
    <div className="flex flex-col items-center gap-1 group">
        <span className="text-3xl font-extrabold bg-gradient-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{num}</span>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-text-tertiary">{label}</span>
    </div>
);

export default CTA;
