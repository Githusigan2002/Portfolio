const ProjectCard = ({ project }) => {
    const { title, description, techStack, github, liveDemo, demo, image } = project;

    return (
        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden flex flex-col h-full hover:border-accent-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-primary/10 hover:-translate-y-2">
            <div className="h-56 w-full relative overflow-hidden bg-linear-to-br from-bg-tertiary to-bg-primary">
                {/* Project Image */}
                {image && (
                    <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                )}
                {/* Image Placeholder Fallback */}
                {!image && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 opacity-30 group-hover:opacity-10 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                        <span className="text-[10px] uppercase tracking-tighter font-bold">{title} Screenshot</span>
                    </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-bg-primary/70 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    {github && <ProjectLink icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>} href={github} label="Source" />}
                    {demo && <ProjectLink icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>} href={demo} label="Demo" />}
                </div>
            </div>

            <div className="p-8 flex flex-col grow">
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 grow">{description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                    {techStack.map((tech, index) => (
                        <span key={index} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/5 text-text-tertiary rounded-md border border-white/5">{tech}</span>
                    ))}
                </div>
                <a href={github || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold bg-gradient-primary bg-clip-text text-transparent hover:text-text-primary transition-all group/link w-fit">
                    View Project Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
                {liveDemo && (
                    <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold bg-gradient-primary bg-clip-text text-transparent hover:text-text-primary transition-all group/link w-fit">
                        Live Demo
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </a>
                )}
            </div>
        </div>
    );
};

const ProjectLink = ({ icon, href, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-accent-primary rounded-full flex items-center justify-center text-white shadow-xl shadow-accent-primary/20 hover:scale-110 active:scale-90 transition-all" title={label}>
        {icon}
    </a>
);

export default ProjectCard;
