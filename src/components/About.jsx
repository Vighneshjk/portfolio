import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile, hireMe } from '../data/portfolioData';
import { FiDownload, FiCheckCircle, FiMapPin, FiCalendar, FiMail } from 'react-icons/fi';
import resumeFile from '../assets/vighneshjk.pdf';
import ThunderParticles from './ThunderParticles';
import './About.css';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="about" id="about" ref={ref}>
            <div className="orb orb-thunder" style={{ width: 500, height: 500, top: '5%', left: '-10%' }} />
            <ThunderParticles intensity={40} style={{ opacity: 0.4 }} />

            <div className="container">
                <div className="about__grid">

                    {/* ── Left: Profile Card ──────────────────── */}
                    <motion.div
                        className="about__profile-wrapper"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="profile-card glass-card">
                            <div className="profile-card__header">
                                <div className="profile-avatar-container">
                                    <img
                                        src={profile.avatar}
                                        alt={profile.name}
                                        className="profile-avatar"
                                        onContextMenu={(e) => e.preventDefault()}
                                        draggable="false"
                                    />
                                    <span className="status-indicator" title="Available for Hire" />
                                </div>
                                <h3 className="profile-name">{profile.name}</h3>
                                <p className="profile-role gradient-text">{profile.role}</p>
                            </div>

                            <div className="profile-card__body">
                                <div className="profile-info-row">
                                    <FiMapPin className="info-icon" />
                                    <span>{profile.location}</span>
                                </div>
                                <div className="profile-info-row">
                                    <FiCalendar className="info-icon" />
                                    <span>{profile.availability}</span>
                                </div>
                                <div className="profile-info-row">
                                    <FiMail className="info-icon" />
                                    <a href={`mailto:${profile.email}`} className="info-link">{profile.email}</a>
                                </div>
                            </div>

                            <div className="profile-card__stats">
                                {profile.stats.map((stat, index) => (
                                    <div key={index} className="stat-item">
                                        <span className="stat-value">{stat.value}</span>
                                        <span className="stat-label">{stat.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="profile-card__actions">
                                <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full">
                                    <FiDownload /> View CV
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Right: Bio & Hire Me ─────────────────────────── */}
                    <motion.div
                        className="about__content"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="section-tag">Professional Profile</span>
                        <h2 className="section-title">
                            Why <span className="gradient-text">Hire Me?</span>
                        </h2>

                        <div className="about__text">
                            <p>
                                I am an <strong className="highlight">AI-Powered Full Stack Developer</strong> with a proven track record of building scalable web applications. My expertise spans from crafting intuitive UIs with <strong>React</strong> to engineering robust backends with <strong>Django</strong>.
                            </p>
                            <p>
                                I don't just write code; I <strong className="highlight">solve real-world problems</strong>. Whether it's integrating Generative AI for smarter apps or optimizing cloud deployments for speed, I bring a product-first mindset to every project.
                            </p>
                        </div>

                        <div className="hire-me-grid">
                            {hireMe.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="hire-card glass-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <div className="hire-card__icon">
                                        <FiCheckCircle />
                                    </div>
                                    <div className="hire-card__content">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
