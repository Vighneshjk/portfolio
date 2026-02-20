import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements } from '../data/portfolioData';
import './Achievements.css';

const Achievements = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="achievements" id="achievements" ref={ref}>
            <div className="orb orb-gold" style={{ width: 450, height: 450, top: '10%', right: '-15%' }} />
            <div className="container">
                <motion.div
                    className="achievements__header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-tag">What I Bring</span>
                    <h2 className="section-title">
                        Achievements &amp; <span className="gradient-text">Strengths</span>
                    </h2>
                    <p className="section-subtitle">
                        Core strengths and highlights that define my developer journey so far.
                    </p>
                </motion.div>

                <div className="achievements__grid">
                    {achievements.map((ach, i) => (
                        <motion.div
                            key={ach.title}
                            className="ach-card glass-card"
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.09 }}
                            whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(79, 110, 247, 0.2)' }}
                        >
                            <div className="ach-card__icon">{ach.icon}</div>
                            <h3 className="ach-card__title">{ach.title}</h3>
                            <p className="ach-card__desc">{ach.desc}</p>
                            <div className="ach-card__shine" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
