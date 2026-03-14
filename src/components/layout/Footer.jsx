import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, ExternalLink } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
    return (
        <footer style={{
            background: "linear-gradient(135deg, var(--charcoal) 0%, var(--charcoal-dark) 100%)",
            color: "var(--charcoal-light)",
            padding: "60px 24px 40px",
            marginTop: "auto",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Decorative background elements */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "radial-gradient(circle at 20% 80%, rgba(186, 145, 90, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(212, 108, 43, 0.1) 0%, transparent 50%)",
                pointerEvents: "none"
            }} />

            <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
                {/* Main Footer Content */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 40, marginBottom: 40 }}>

                    {/* About Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                            <div className="ornament" style={{ fontSize: "1.5rem" }}>ॐ</div>
                            <h3 style={{
                                fontFamily: "'Cinzel', serif",
                                fontSize: "1.2rem",
                                fontWeight: 700,
                                color: "var(--gold)",
                                margin: 0,
                                letterSpacing: ".1em"
                            }}>
                                BHAGAVAD GITA
                            </h3>
                        </div>
                        <p style={{
                            fontFamily: "'Lora', serif",
                            fontSize: ".95rem",
                            lineHeight: 1.7,
                            color: "var(--charcoal-light)",
                            margin: 0
                        }}>
                            Discover the timeless wisdom of the Bhagavad Gita through its sacred verses,
                            profound teachings, and spiritual guidance for modern life.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 style={{
                            fontFamily: "'Cinzel', serif",
                            fontSize: "1rem",
                            fontWeight: 600,
                            color: "var(--saffron)",
                            marginBottom: 16,
                            letterSpacing: ".15em",
                            textTransform: "uppercase"
                        }}>
                            Quick Links
                        </h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {[
                                { text: "All Chapters", action: () => setCurrentPage('home') },
                                { text: "Privacy Policy", action: () => setCurrentPage('privacy') },
                                { text: "Terms of Service", action: () => setCurrentPage('terms') },
                                { text: "Contact Us", action: () => setCurrentPage('contact') },
                                { text: "Daily Quotes", action: () => setCurrentPage('quotes') }
                            ].map((link, index) => (
                                <li key={index} style={{ marginBottom: 8 }}>
                                    <button
                                        onClick={link.action}
                                        style={{
                                            fontFamily: "'Lora', serif",
                                            fontSize: ".9rem",
                                            color: "var(--charcoal-light)",
                                            background: "none",
                                            border: "none",
                                            textDecoration: "none",
                                            cursor: "pointer",
                                            transition: "color 0.3s ease",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 6,
                                            padding: 0
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = "var(--gold)"}
                                        onMouseLeave={(e) => e.target.style.color = "var(--charcoal-light)"}
                                    >
                                        <ExternalLink size={12} />
                                        {link.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Connect Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 style={{
                            fontFamily: "'Cinzel', serif",
                            fontSize: "1rem",
                            fontWeight: 600,
                            color: "var(--saffron)",
                            marginBottom: 16,
                            letterSpacing: ".15em",
                            textTransform: "uppercase"
                        }}>
                            Connect
                        </h4>
                        <div style={{ display: "flex", gap: 16 }}>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: "var(--charcoal-light)",
                                    transition: "all 0.3s ease",
                                    padding: 8,
                                    borderRadius: 8,
                                    background: "rgba(255,255,255,0.05)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = "var(--gold)";
                                    e.target.style.background = "rgba(186, 145, 90, 0.1)";
                                    e.target.style.transform = "translateY(-2px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = "var(--charcoal-light)";
                                    e.target.style.background = "rgba(255,255,255,0.05)";
                                    e.target.style.transform = "translateY(0)";
                                }}
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{
                        borderTop: "1px solid rgba(186, 145, 90, 0.2)",
                        paddingTop: 24,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 16
                    }}
                >
                    <p style={{
                        fontFamily: "'Lora', serif",
                        fontSize: ".85rem",
                        color: "var(--charcoal-soft)",
                        margin: 0
                    }}>
                        © {new Date().getFullYear()} Bhagavad Gita. Made with <Heart size={14} style={{ color: "var(--saffron)", display: "inline", margin: "0 4px" }} /> for spiritual enlightenment.
                    </p>

                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <span style={{
                            fontFamily: "'Cinzel', serif",
                            fontSize: ".7rem",
                            fontWeight: 600,
                            letterSpacing: ".2em",
                            color: "var(--gold-light)",
                            textTransform: "uppercase"
                        }}>
                            Powered by Vedic Scriptures API
                        </span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
