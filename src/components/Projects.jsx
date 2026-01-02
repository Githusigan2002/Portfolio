import { useState } from 'react';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const categories = ['all', 'frontend', 'tool'];

    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    return (
        <section id="projects" className="bg-bg-primary py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-accent-primary font-bold tracking-widest uppercase text-sm">My Portfolio</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary">
                        Selected <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${filter === cat
                                    ? 'bg-accent-primary border-accent-primary text-white shadow-lg shadow-accent-primary/30 scale-105'
                                    : 'border-white/10 text-text-tertiary hover:border-white/30 hover:text-text-primary'
                                }`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className="flex justify-center mt-20">
                    <a href="https://github.com/githusigan2002" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-bg-tertiary/20 border border-white/10 hover:border-accent-primary/50 px-10 py-4 rounded-2xl font-bold text-text-primary transition-all hover:-translate-y-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        View All on GitHub
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
