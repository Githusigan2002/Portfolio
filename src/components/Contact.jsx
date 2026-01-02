import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitting, setSubmitting] = useState(false);
    const [modal, setModal] = useState({
        show: false,
        type: '', // 'success' or 'error'
        title: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const showModal = (type, title, message) => {
        setModal({ show: true, type, title, message });
    };

    const closeModal = () => {
        setModal({ show: false, type: '', title: '', message: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await fetch('https://formspree.io/f/xkogrnve', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                showModal(
                    'success',
                    'Message Sent Successfully!',
                    'Thank you for reaching out. I\'ll get back to you as soon as possible.'
                );
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                showModal(
                    'error',
                    'Failed to Send Message',
                    'Something went wrong. Please try again or contact me directly via email.'
                );
            }
        } catch (err) {
            showModal(
                'error',
                'Network Error',
                'Unable to send message. Please check your internet connection and try again.'
            );
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="contact" className="bg-bg-primary py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-accent-primary font-bold tracking-widest uppercase text-sm">Get In Touch</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary">
                        Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
                    </h2>
                </div>

                <div className="grid grid-cols-0 lg:grid-cols gap-12 items-start">
                    {/* Left: Contact Form */}
                    <div className="lg:col-span-8 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormGroup label="Full Name" htmlFor="name">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your Full Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup label="Email Address" htmlFor="email">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="example@gmail.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
                                        required
                                    />
                                </FormGroup>
                            </div>
                            <FormGroup label="Subject" htmlFor="subject">
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Project Proposal"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
                                    required
                                />
                            </FormGroup>
                            <FormGroup label="Your Message" htmlFor="message">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all resize-none"
                                    required
                                ></textarea>
                            </FormGroup>
                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full bg-gradient-primary py-5 rounded-2xl font-bold text-white shadow-xl shadow-accent-primary/20 hover:opacity-90 transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {submitting ? 'Sending...' : 'Send Message'}
                                {!submitting && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* <div className="space-y-6">
                            <ContactInfoItem
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>}
                                label="Email Me At"
                                value="jeyarupangithusigan@gmail.com"
                            />
                            <ContactInfoItem
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>}
                                label="Call Me At"
                                value="+94 76 118 8370"
                            />
                            <ContactInfoItem
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>}
                                label="My Location"
                                value="Sri Lanka"
                            />
                        </div> */}

                        {/* <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center space-y-6">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-text-secondary">Follow My Socials</h4>
                                                        <div className="flex justify-center gap-4">
                                <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer">
                                    <SocialBtn icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>} />
                                </a>
                                <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer">
                                    <SocialBtn icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>} />
                                </a>
                                <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer">
                                    <SocialBtn icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>} />
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal
                show={modal.show}
                type={modal.type}
                title={modal.title}
                message={modal.message}
                onClose={closeModal}
            />
        </section>
    );
};

const FormGroup = ({ label, htmlFor, children }) => (
    <div className="flex flex-col gap-2">
        <label htmlFor={htmlFor} className="text-sm font-bold text-text-tertiary ml-2 uppercase tracking-widest">{label}</label>
        {children}
    </div>
);

const ContactInfoItem = ({ icon, label, value }) => (
    <div className="flex gap-6 p-6 bg-white/5 rounded-4xl border border-white/5 hover:border-accent-primary/30 transition-all group">
        <div className="w-12 h-12 shrink-0 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary transition-transform group-hover:scale-110 group-hover:bg-accent-primary group-hover:text-white duration-500">
            {icon}
        </div>
        <div className="space-y-1">
            <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-text-tertiary">{label}</h4>
            <p className="text-lg font-bold text-text-primary tracking-tight">{value}</p>
        </div>
    </div>
);

const SocialBtn = ({ icon }) => (
    <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-white hover:border-accent-primary hover:-translate-y-1 transition-all duration-300">
        {icon}
    </a>
);

const Modal = ({ show, type, title, message, onClose }) => {
    if (!show) return null;

    const isSuccess = type === 'success';

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={onClose}
        >
            <div
                className="bg-bg-secondary border border-accent-primary/30 rounded-3xl p-8 max-w-md w-full shadow-2xl shadow-accent-primary/10 transform animate-scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-accent-primary/10 flex items-center justify-center relative">
                        {isSuccess ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-primary">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-secondary">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="15" y1="9" x2="9" y2="15"></line>
                                <line x1="9" y1="9" x2="15" y2="15"></line>
                            </svg>
                        )}
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-xl"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4 mb-8">
                    <h3 className="text-2xl font-extrabold text-text-primary">{title}</h3>
                    <p className="text-text-secondary leading-relaxed">{message}</p>
                </div>

                {/* Button */}
                <button
                    onClick={onClose}
                    className="w-full bg-gradient-primary py-4 rounded-2xl font-bold text-white shadow-xl shadow-accent-primary/20 hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95"
                >
                    Got It
                </button>
            </div>
        </div>
    );
};

export default Contact;
