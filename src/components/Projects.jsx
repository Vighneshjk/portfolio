import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import './Projects.css';

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            ref={ref}
            className="project-card glass-card"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            style={{ '--card-color': project.color }}
        >
            {/* Top Glow Bar */}
            <div className="project-card__bar" style={{ background: project.color }} />

            <div className="project-card__body">
                {/* Header */}
                <div className="project-card__header">
                    <div className="project-emoji" style={{ background: `${project.color}18`, border: `1px solid ${project.color}40` }}>
                        {project.emoji}
                    </div>
                    <div className="project-links">
                        <motion.a href={project.github} target="_blank" rel="noreferrer" className="project-icon-btn" whileHover={{ scale: 1.15, color: project.color }}>
                            <FiGithub size={18} />
                        </motion.a>
                        <motion.a href={project.demo} target="_blank" rel="noreferrer" className="project-icon-btn" whileHover={{ scale: 1.15, color: project.color }}>
                            <FiExternalLink size={18} />
                        </motion.a>
                    </div>
                </div>

                {/* Title & Desc */}
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                {/* Features Accordion */}
                <button
                    className="project-card__toggle"
                    onClick={() => setExpanded(!expanded)}
                    style={{ color: project.color }}
                >
                    {expanded ? 'Hide Features' : 'Show Features'}
                    {expanded ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                </button>

                <motion.div
                    className="project-card__features"
                    initial={false}
                    animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ overflow: 'hidden' }}
                >
                    <ul>
                        {project.features.map((f) => (
                            <li key={f}>
                                <span className="feature-dot" style={{ background: project.color }} />
                                {f}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Tech Stack */}
                <div className="project-card__tech">
                    {project.tech.map((t) => (
                        <span key={t} className="tech-badge" style={{ borderColor: `${project.color}50`, color: project.color, background: `${project.color}10` }}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="projects" id="projects" ref={ref}>
            <div className="orb orb-fire" style={{ width: 450, height: 450, bottom: '-5%', left: '-10%' }} />
            <div className="container">
                <motion.div
                    className="projects__header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-tag">What I've Built</span>
                    <h2 className="section-title">
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        A showcase of real-world applications — from AI systems to full-stack web platforms.
                    </p>
                </motion.div>

                <div className="projects__grid">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
