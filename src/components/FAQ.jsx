import { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What is your development process?",
            answer: "My process involves research, planning, design, development, testing, and deployment. I work closely with clients to ensure their vision is realized."
        },
        {
            question: "Which technologies do you specialize in?",
            answer: "I specialize in the MERN stack (MongoDB, Express, React, Node.js), Java, and Python. I'm also proficient with cloud services like AWS and Firebase."
        },
        {
            question: "Are you available for freelance work?",
            answer: "Yes, I'm available for freelance projects and internships. I'm always looking for opportunities to work on innovative solutions."
        },
        {
            question: "How do you handle project deadlines?",
            answer: "I use agile methodologies and task tracking tools like Trello or Jira to manage milestones and ensure timely delivery of all project phases."
        }
    ];

    return (
        <section id="faq" className="bg-bg-secondary py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-accent-primary font-bold tracking-widest uppercase text-sm">Common Queries</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary">
                        Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4 bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl space-y-6 text-center lg:text-left">
                        <h3 className="text-2xl font-bold text-text-primary leading-tight">
                            Got any Questions? <span className="text-accent-primary">Chat with me</span>
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                            Feel free to reach out if you have any questions or just want to connect. I'm always happy to help!
                        </p>
                        <a href="#contact" className="inline-block w-full text-center bg-gradient-primary py-4 rounded-2xl font-bold text-white shadow-lg hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95">
                            Contact Me
                        </a>
                    </div>

                    <div className="lg:col-span-8 space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`group bg-white/5 border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-accent-primary/50' : 'border-white/5 hover:border-white/10'}`}>
                                <button
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                >
                                    <div className="flex items-center gap-6">
                                        <span className={`text-sm font-bold font-mono transition-colors ${openIndex === index ? 'text-accent-primary' : 'text-text-tertiary'}`}>0{index + 1}</span>
                                        <span className={`text-lg font-bold tracking-tight transition-colors ${openIndex === index ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'}`}>{faq.question}</span>
                                    </div>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-gradient-primary text-white rotate-180' : 'bg-bg-tertiary text-text-tertiary'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </div>
                                </button>
                                <div className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-60' : 'max-h-0'}`}>
                                    <div className="p-6 pt-0 border-t border-white/5">
                                        <p className="text-text-secondary leading-relaxed pl-12">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
