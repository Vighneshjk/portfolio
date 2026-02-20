import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSend, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { socialLinks } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate async send (integrate EmailJS / Formspree later)
        await new Promise((r) => setTimeout(r, 1500));
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(null), 4000);
    };

    return (
        <section className="contact" id="contact" ref={ref}>
            <div className="orb orb-fire" style={{ width: 500, height: 500, bottom: '-15%', left: '-15%' }} />
            <div className="orb orb-gold" style={{ width: 400, height: 400, top: '-10%', right: '-10%' }} />

            <div className="container">
                <motion.div
                    className="contact__header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-tag">Get In Touch</span>
                    <h2 className="section-title">
                        Contact <span className="gradient-text">Me</span>
                    </h2>
                    <p className="section-subtitle">
                        Have a project in mind, or just want to say hi? I'm always open to interesting conversations.
                    </p>
                </motion.div>

                <div className="contact__grid">
                    {/* Info Side */}
                    <motion.div
                        className="contact__info"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="contact__info-heading">Let's build something amazing together</div>

                        <div className="contact__detail-list">
                            <div className="contact__detail">
                                <div className="contact__detail-icon"><FiMail /></div>
                                <div>
                                    <div className="detail-label">Email</div>
                                    <a href={`mailto:${socialLinks.email}`} className="detail-value">{socialLinks.email}</a>
                                </div>
                            </div>
                            <div className="contact__detail">
                                <div className="contact__detail-icon"><FiGithub /></div>
                                <div>
                                    <div className="detail-label">GitHub</div>
                                    <a href={socialLinks.github} target="_blank" rel="noreferrer" className="detail-value">
                                        {socialLinks.github.replace('https://', '')}
                                    </a>
                                </div>
                            </div>
                            <div className="contact__detail">
                                <div className="contact__detail-icon"><FiLinkedin /></div>
                                <div>
                                    <div className="detail-label">LinkedIn</div>
                                    <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="detail-value">
                                        {socialLinks.linkedin.replace('https://', '')}
                                    </a>
                                </div>
                            </div>
                            <div className="contact__detail">
                                <div className="contact__detail-icon"><FiMapPin /></div>
                                <div>
                                    <div className="detail-label">Location</div>
                                    <span className="detail-value">India — Available Remotely</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Quick Links */}
                        <div className="contact__socials">
                            <motion.a href={socialLinks.github} target="_blank" rel="noreferrer" className="social-btn" whileHover={{ scale: 1.08, y: -2 }}>
                                <FiGithub size={18} /> GitHub
                            </motion.a>
                            <motion.a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="social-btn" whileHover={{ scale: 1.08, y: -2 }}>
                                <FiLinkedin size={18} /> LinkedIn
                            </motion.a>
                            <motion.a href={`mailto:${socialLinks.email}`} className="social-btn social-btn--primary" whileHover={{ scale: 1.08, y: -2 }}>
                                <FiMail size={18} /> Email Me
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        className="contact__form-wrapper glass-card"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
                            <div className="form-group">
                                <label htmlFor="cf-name">Your Name</label>
                                <input
                                    id="cf-name"
                                    type="text"
                                    name="name"
                                    placeholder="Vighnesh..."
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cf-email">Email Address</label>
                                <input
                                    id="cf-email"
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cf-message">Message</label>
                                <textarea
                                    id="cf-message"
                                    name="message"
                                    placeholder="Tell me about your project or idea..."
                                    rows={6}
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="btn btn-primary contact__submit"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? (
                                    <><span className="spinner" /> Sending...</>
                                ) : status === 'sent' ? (
                                    <>✅ Message Sent!</>
                                ) : (
                                    <><FiSend /> Send Message</>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
