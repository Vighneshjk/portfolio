import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { socialLinks } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <span className="footer__logo gradient-text">&lt;VJ/&gt;</span>
                        <p className="footer__tagline">
                            Django Full Stack Developer · Python · AI Enthusiast
                        </p>
                    </div>
                    <nav className="footer__nav">
                        {['home', 'about', 'skills', 'projects', 'achievements', 'contact'].map((id) => (
                            <button
                                key={id}
                                className="footer__link"
                                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </button>
                        ))}
                    </nav>
                    <div className="footer__socials">
                        <a href={socialLinks.github} target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="GitHub">
                            <FiGithub size={18} />
                        </a>
                        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                            <FiLinkedin size={18} />
                        </a>
                        <a href={`mailto:${socialLinks.email}`} className="footer-social-icon" aria-label="Email">
                            <FiMail size={18} />
                        </a>
                    </div>
                </div>

                <div className="footer__divider" />

                <div className="footer__bottom">
                    <p className="footer__copy">
                        © {year} Vighnesh (VJ). Crafted with <FiHeart style={{ color: '#f43f5e', display: 'inline', verticalAlign: 'middle' }} /> in India.
                    </p>
                    <button className="footer__back-top" onClick={scrollTop}>
                        ↑ Back to Top
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
