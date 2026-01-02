import { useState } from 'react';
import { skillsData } from '../data/projectsData';

const Skills = () => {
    const categories = Object.keys(skillsData);
    const [activeTab, setActiveTab] = useState(categories[0]);

    return (
        <section id="skills" className="bg-bg-secondary py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-accent-primary font-bold tracking-widest uppercase text-sm">Abilities</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary">
                        Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Proficiency</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Categories Sidebar/Top Bar */}
                    <div className="lg:col-span-3 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`relative flex-shrink-0 lg:flex-shrink flex items-center justify-between px-6 py-4 rounded-xl font-bold transition-all duration-300 border-2 ${activeTab === cat
                                        ? 'bg-bg-tertiary border-accent-primary text-text-primary shadow-lg shadow-accent-primary/10'
                                        : 'bg-white/5 border-transparent text-text-tertiary hover:bg-white/10'
                                    }`}
                                onClick={() => setActiveTab(cat)}
                            >
                                <span className="text-sm md:text-base">{skillsData[cat].title}</span>
                                {activeTab === cat && (
                                    <div className="absolute right-0 top-0 h-full w-1 bg-gradient-primary hidden lg:block rounded-r-xl"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Progress Bars View */}
                    <div className="lg:col-span-9 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl min-h-[450px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            {skillsData[activeTab].skills.map((skill, index) => (
                                <div key={index} className="space-y-4 transition-all duration-300 hover:translate-x-2">
                                    <div className="flex justify-between items-end">
                                        <span className="text-lg font-bold text-text-primary tracking-tight">{skill.name}</span>
                                        <span className="text-sm font-bold bg-gradient-primary bg-clip-text text-transparent">{skill.level}%</span>
                                    </div>
                                    <div className="h-3 w-full bg-bg-primary rounded-full p-0.5 overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out relative"
                                            style={{ width: `${skill.level}%` }}
                                        >
                                            <div className="absolute top-0 right-0 h-full w-2 bg-white/20 blur-[2px]"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-primary/5 blur-3xl rounded-full -translate-y-1/2 -z-10"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-tertiary/5 blur-3xl rounded-full -translate-y-1/2 -z-10"></div>
        </section>
    );
};

export default Skills;
