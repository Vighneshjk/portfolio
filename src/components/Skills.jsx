import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolioData';
import './Skills.css';

const SkillBar = ({ name, level, color, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="skill-bar" ref={ref}>
            <div className="skill-bar__info">
                <span className="skill-bar__name">{name}</span>
                <span className="skill-bar__pct" style={{ color }}>{level}%</span>
            </div>
            <div className="skill-bar__track">
                <motion.div
                    className="skill-bar__fill"
                    style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : {}}
                    transition={{ duration: 1.2, delay, ease: 'easeOut' }}
                />
            </div>
        </div>
    );
};

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="skills" id="skills" ref={ref}>
            <div className="orb orb-fire" style={{ width: 500, height: 500, top: '-10%', right: '-15%' }} />
            <div className="container">
                <motion.div
                    className="skills__header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-tag">What I Know</span>
                    <h2 className="section-title">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="section-subtitle">
                        A curated set of technologies I've worked with across frontend, backend, AI, and cloud.
                    </p>
                </motion.div>

                <div className="skills__grid">
                    {skills.map((cat, ci) => (
                        <motion.div
                            key={cat.category}
                            className="skill-category glass-card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: ci * 0.1 }}
                            whileHover={{ y: -4, boxShadow: `0 16px 48px ${cat.color}22` }}
                        >
                            <div className="skill-category__header">
                                <div className="skill-category__icon" style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}40` }}>
                                    <span>{cat.icon}</span>
                                </div>
                                <div>
                                    <h3 className="skill-category__title" style={{ color: cat.color }}>
                                        {cat.category}
                                    </h3>
                                    <span className="skill-category__count">{cat.items.length} skills</span>
                                </div>
                            </div>

                            <div className="skill-bars">
                                {cat.items.map((item, ii) => (
                                    <SkillBar
                                        key={item.name}
                                        name={item.name}
                                        level={item.level}
                                        color={cat.color}
                                        delay={ci * 0.1 + ii * 0.08}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
