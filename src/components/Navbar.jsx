import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/portfolioData';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine active section
            const sections = navLinks.map((l) => document.getElementById(l.id));
            const scrollPos = window.scrollY + 120;
            sections.forEach((sec) => {
                if (sec && sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
                    setActive(sec.id);
                }
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
        setActive(id);
    };

    return (
        <>
            <motion.nav
                className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <div className="navbar__container">
                    {/* Logo */}
                    <motion.div
                        className="navbar__logo"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => scrollTo('home')}
                    >
                        <span className="logo__bracket">&lt;</span>
                        <span className="logo__name fire-text">VJ108</span>
                        <span className="logo__bracket">/&gt;</span>
                    </motion.div>

                    {/* Desktop Links */}
                    <ul className="navbar__links">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <button
                                    className={`navbar__link ${active === link.id ? 'navbar__link--active' : ''}`}
                                    onClick={() => scrollTo(link.id)}
                                >
                                    {link.label}
                                    {active === link.id && (
                                        <motion.span className="link__underline" layoutId="underline" />
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Hire Me CTA */}
                    <motion.button
                        className="navbar__cta btn btn-fire"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollTo('contact')}
                    >
                        🔥 Hire Me
                    </motion.button>

                    {/* Hamburger */}
                    <button
                        className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        <ul>
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.id}
                                    initial={{ opacity: 0, x: 40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                >
                                    <button
                                        className={`mobile-link ${active === link.id ? 'mobile-link--active' : ''}`}
                                        onClick={() => scrollTo(link.id)}
                                    >
                                        {link.label}
                                    </button>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.07 }}
                            >
                                <button className="btn btn-primary" style={{ width: '100%', marginTop: 16 }} onClick={() => scrollTo('contact')}>
                                    Hire Me
                                </button>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
