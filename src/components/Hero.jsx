import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiCode } from 'react-icons/fi';
import { socialLinks, TYPING_ROLES } from '../data/portfolioData';
import FireParticles from './FireParticles';
import resumeFile from '../assets/vighneshjk.pdf';
import './Hero.css';

/* ── Floating network-particle canvas (behind content) ──────────────── */
const HeroCanvas = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;
        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        const particles = [];
        const init = () => {
            particles.length = 0;
            for (let i = 0; i < 55; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 1.8 + 0.4,
                    dx: (Math.random() - 0.5) * 0.35,
                    dy: (Math.random() - 0.5) * 0.35,
                    hue: Math.random() > 0.4 ? 230 : 270,
                });
            }
        };
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.x += p.dx; p.y += p.dy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue},90%,70%,0.5)`;
                ctx.fill();
            });
            particles.forEach((a, i) => {
                particles.slice(i + 1).forEach((b) => {
                    const d = Math.hypot(a.x - b.x, a.y - b.y);
                    if (d < 110) {
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(139,92,246,${0.12 * (1 - d / 110)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });
            animId = requestAnimationFrame(draw);
        };
        resize(); init(); draw();
        window.addEventListener('resize', () => { resize(); init(); });
        return () => cancelAnimationFrame(animId);
    }, []);
    return <canvas ref={canvasRef} className="hero__canvas" />;
};

/* ── 3-D Floating fire orb with CSS perspective ─────────────────────── */
const FireOrb = () => (
    <div className="fire-orb-wrapper">
        <motion.div
            className="fire-orb"
            animate={{ rotateY: [0, 360] }}
            transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
        >
            <div className="fire-orb__ring fire-orb__ring--1" />
            <div className="fire-orb__ring fire-orb__ring--2" />
            <div className="fire-orb__ring fire-orb__ring--3" />
            <div className="fire-orb__core">
                <span className="fire-orb__emoji"></span>
                <span className="fire-orb__label gradient-text fire-text">VJ</span>
            </div>
        </motion.div>
        <div className="fire-orb__particles-container">
            <FireParticles intensity={40} style={{ height: '150%', bottom: '-25%' }} />
        </div>

        {/* Floating holo-badges */}
        {[
            { label: '🐍 Python', cls: 'holo holo--tl', delay: 0 },
            { label: '⚛️ React', cls: 'holo holo--tr', delay: 0.5 },
            { label: '🤖 Gen AI', cls: 'holo holo--br', delay: 1 },
            { label: '☁️ Cloud', cls: 'holo holo--bl', delay: 1.5 },
        ].map(({ label, cls, delay }) => (
            <motion.div
                key={label}
                className={cls}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 + delay * 0.4, delay, ease: 'easeInOut' }}
            >
                {label}
            </motion.div>
        ))}
    </div>
);

/* ── Hero Section ────────────────────────────────────────────────────── */
const Hero = () => {
    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    // Build TypeAnimation sequence from data
    const typeSeq = TYPING_ROLES.flatMap((r) => [r, 2000]);

    return (
        <section className="hero" id="home">
            <HeroCanvas />
            <div className="hero__orb hero__orb--blue" />
            <div className="hero__orb hero__orb--purple" />
            {/* Subtle fire ambient at bottom of hero */}
            <div className="hero__fire-ambient">
                <FireParticles intensity={120} />
            </div>

            <div className="container hero__container">
                {/* ─── Left Content ─────────────────────────────────── */}
                <motion.div
                    className="hero__content"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                >
                    <motion.div
                        className="hero__badge"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="badge__dot" />
                        <span>Available for Internship &amp; Projects</span>
                    </motion.div>

                    <motion.h1
                        className="hero__title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Hi, I'm{' '}
                        <span className="fire-text">Vighnesh JK</span>
                    </motion.h1>

                    {/* Typewriter */}
                    <motion.div
                        className="hero__typewriter"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <TypeAnimation
                            sequence={typeSeq}
                            wrapper="span"
                            speed={50}
                            deletionSpeed={65}
                            repeat={Infinity}
                        />
                        <span className="cursor-blink">|</span>
                    </motion.div>

                    <motion.p
                        className="hero__role-tags"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.75 }}
                    >
                        Django&nbsp;•&nbsp;React&nbsp;•&nbsp;Generative AI
                        <span className="role-divider"> | </span>
                        Building Scalable Web Applications
                    </motion.p>

                    <motion.p
                        className="hero__description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.85 }}
                    >
                        BCA student & AI-powered developer crafting intelligent web platforms,
                        real-time AI systems, and cloud-deployed full-stack applications that
                        solve real problems.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <motion.a
                            href={resumeFile}
                            download="VighneshJK_Resume.pdf"
                            className="btn btn-fire"
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiDownload /> Download Resume
                        </motion.a>
                        <motion.button
                            className="btn btn-outline"
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollTo('projects')}
                        >
                            <FiCode /> View Projects
                        </motion.button>
                    </motion.div>

                    {/* Socials */}
                    <motion.div
                        className="hero__socials"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.15 }}
                    >
                        {[
                            { href: socialLinks.github, Icon: FiGithub, label: 'GitHub' },
                            { href: socialLinks.linkedin, Icon: FiLinkedin, label: 'LinkedIn' },
                            { href: `mailto:${socialLinks.email}`, Icon: FiMail, label: 'Email' },
                        ].map(({ href, Icon, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon"
                                aria-label={label}
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Icon size={20} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* ─── Right: Fire Orb ──────────────────────────────── */}
                <motion.div
                    className="hero__visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.9, type: 'spring', stiffness: 90 }}
                >
                    <FireOrb />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="hero__scroll-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <motion.div
                    className="scroll-dot"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                />
                <span>Scroll Down</span>
            </motion.div>
        </section>
    );
};

export default Hero;
