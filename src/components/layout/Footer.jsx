import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, ExternalLink, ChevronUp, Sparkles } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleLinkClick = (action) => {
        action();
        setTimeout(scrollToTop, 100); // Small delay to allow page transition
    };

    return (
        <footer style={{
            // Semi-transparent background for the glass effect
            background: "var(--glass-bg)",
            // The "Magic" behind glassmorphism
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",

            color: "#e0e0e0",
            padding: "80px 24px 20px",
            marginTop: "auto",
            position: "relative",
            overflow: "hidden",

            // The Goldy Border: Linear gradient for a metallic look
            borderTop: "2px solid",
            borderImage: "linear-gradient(90deg, transparent, #BA915A, #FFD700, #BA915A, transparent) 1",

            // Soft gold glow beneath the border
            boxShadow: "0 -10px 40px rgba(186, 145, 90, 0.15)",
        }}>
            {/* Futuristic Background Effects */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
          radial-gradient(circle at 20% 80%, rgba(186, 145, 90, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(212, 108, 43, 0.1) 0%, transparent 50%),
          linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.02) 50%, transparent 70%)
        `,
                pointerEvents: "none"
            }} />

            {/* Animated Grid Pattern */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
          linear-gradient(rgba(186, 145, 90, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(186, 145, 90, 0.03) 1px, transparent 1px)
        `,
                backgroundSize: "50px 50px",
                animation: "gridMove 20s linear infinite",
                pointerEvents: "none"
            }} />

            <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        .footer-link {
          position: relative;
          overflow: hidden;
        }
        .footer-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(186, 145, 90, 0.2), transparent);
          transition: left 0.5s;
        }
        .footer-link:hover::before {
          left: 100%;
        }
        .glow-text {
          text-shadow: 0 0 10px rgba(186, 145, 90, 0.5);
        }
      `}</style>

            <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
                {/* Header Section with Scroll to Top */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: "center",
                        marginBottom: 60,
                        position: "relative"
                    }}
                >
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 16,
                        marginBottom: 20
                    }}>
                        <div style={{
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #D46B2B, #BA915A)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 0 30px rgba(186, 145, 90, 0.3)",
                            position: "relative"
                        }}>
                            <span style={{
                                fontSize: "2rem",
                                filter: "drop-shadow(0 0 10px rgba(255,255,255,0.8))"
                            }}>ॐ</span>
                            <div style={{
                                position: "absolute",
                                inset: -2,
                                borderRadius: "50%",
                                background: "linear-gradient(45deg, #D46B2B, #BA915A, #D46B2B)",
                                opacity: 0.3,
                                animation: "rotate 3s linear infinite"
                            }} />
                        </div>
                        <div>
                            <h2 style={{
                                fontFamily: "'Cinzel', serif",
                                fontSize: "2.5rem",
                                fontWeight: 700,
                                color: "#BA915A",
                                margin: 0,
                                letterSpacing: ".1em",
                                textShadow: "0 0 20px rgba(186, 145, 90, 0.5)"
                            }}>
                                BHAGAVAD GITA
                            </h2>
                            <p style={{
                                fontFamily: "'Lora', serif",
                                fontSize: "1rem",
                                color: "black",
                                margin: "8px 0 0",
                                fontStyle: "italic"
                            }}>
                                Ancient Wisdom • Modern Interface
                            </p>
                        </div>
                    </div>

                    {/* Scroll to Top Button */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            background: "linear-gradient(135deg, #D46B2B, #BA915A)",
                            border: "none",
                            borderRadius: "50%",
                            width: 50,
                            height: 50,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            boxShadow: "0 4px 20px rgba(186, 145, 90, 0.4)",
                            position: "absolute",
                            right: 20,
                            top: "50%",
                            transform: "translateY(-50%)"
                        }}
                    >
                        <ChevronUp size={24} color="white" />
                    </motion.button>
                </motion.div>

                {/* Main Footer Content */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 50,
                    marginBottom: 60
                }}>

                    {/* About Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            marginBottom: 20
                        }}>
                            <Sparkles size={24} color="#BA915A" />
                            <h3 style={{
                                fontFamily: "'Cinzel', serif",
                                fontSize: "1.3rem",
                                fontWeight: 700,
                                color: "#BA915A",
                                margin: 0,
                                letterSpacing: ".1em"
                            }}>
                                OUR MISSION
                            </h3>
                        </div>
                        <p style={{
                            fontFamily: "'Lora', serif",
                            fontSize: "1rem",
                            lineHeight: 1.7,
                            color: "black",
                            margin: 0
                        }}>
                            Bringing the eternal wisdom of the Bhagavad Gita to the digital age through
                            immersive technology and spiritual enlightenment for seekers worldwide.
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
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: "#D46B2B",
                            marginBottom: 20,
                            letterSpacing: ".15em",
                            textTransform: "uppercase",
                            display: "flex",
                            alignItems: "center",
                            gap: 8
                        }}>
                            <div style={{
                                width: 4,
                                height: 20,
                                background: "linear-gradient(to bottom, #D46B2B, #BA915A)",
                                borderRadius: 2
                            }} />
                            NAVIGATION
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            {[
                                { text: "All Chapters", action: () => handleLinkClick(() => setCurrentPage('home')) },
                                { text: "Privacy Policy", action: () => handleLinkClick(() => setCurrentPage('privacy')) },
                                { text: "Terms of Service", action: () => handleLinkClick(() => setCurrentPage('terms')) },
                                { text: "Contact Us", action: () => handleLinkClick(() => setCurrentPage('contact')) },
                                { text: "Daily Quotes", action: () => handleLinkClick(() => setCurrentPage('quotes')) }
                            ].map((link, index) => (
                                <motion.button
                                    key={index}
                                    onClick={link.action}
                                    className="footer-link"
                                    whileHover={{ x: 5 }}
                                    style={{
                                        fontFamily: "'Lora', serif",
                                        fontSize: "1rem",
                                        color: "black",
                                        background: "none",
                                        border: "none",
                                        textDecoration: "none",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        padding: "8px 0",
                                        textAlign: "left",
                                        position: "relative"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = "#BA915A";
                                        e.target.style.textShadow = "0 0 8px rgba(186, 145, 90, 0.5)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = "black";
                                        e.target.style.textShadow = "none";
                                    }}
                                >
                                    <div style={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: "50%",
                                        background: "#BA915A",
                                        opacity: 0.6,
                                        transition: "all 0.3s ease"
                                    }} />
                                    {link.text}
                                    <ExternalLink size={14} style={{ marginLeft: "auto", opacity: 0.5 }} />
                                </motion.button>
                            ))}
                        </div>
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
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: "#D46B2B",
                            marginBottom: 20,
                            letterSpacing: ".15em",
                            textTransform: "uppercase",
                            display: "flex",
                            alignItems: "center",
                            gap: 8
                        }}>
                            <div style={{
                                width: 4,
                                height: 20,
                                background: "linear-gradient(to bottom, #D46B2B, #BA915A)",
                                borderRadius: 2
                            }} />
                            CONNECT
                        </h4>
                        <p style={{
                            fontFamily: "'Lora', serif",
                            fontSize: "0.95rem",
                            color: "black",
                            marginBottom: 20,
                            lineHeight: 1.6
                        }}>
                            Join our community of spiritual seekers and stay connected with the latest updates.
                        </p>
                        <div style={{ display: "flex", gap: 16 }}>
                            <motion.a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    color: "gray",
                                    transition: "all 0.3s ease",
                                    padding: 12,
                                    borderRadius: 12,
                                    background: "rgba(255,255,255,0.05)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                    border: "1px solid gray",
                                    backdropFilter: "blur(10px)"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = "#BA915A";
                                    e.target.style.background = "rgba(186, 145, 90, 0.1)";
                                    e.target.style.borderColor = "#BA915A";
                                    e.target.style.boxShadow = "0 0 20px rgba(186, 145, 90, 0.3)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = "gray";
                                    e.target.style.background = "rgba(255,255,255,0.05)";
                                    e.target.style.borderColor = "gray";
                                    e.target.style.boxShadow = "none";
                                }}
                            >
                                <Github size={20} />
                            </motion.a>
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
                        paddingTop: 30,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 20
                    }}
                >
                    <p style={{
                        fontFamily: "'Lora', serif",
                        fontSize: ".9rem",
                        color: "#888",
                        margin: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: 8
                    }}>
                        © {new Date().getFullYear()} Bhagavad Gita
                        <Heart size={14} style={{ color: "#D46B2B" }} />
                        Made with devotion for spiritual enlightenment.
                    </p>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 20,
                        flexWrap: "wrap"
                    }}>
                        <span style={{
                            fontFamily: "'Cinzel', serif",
                            fontSize: ".8rem",
                            fontWeight: 600,
                            letterSpacing: ".2em",
                            color: "#BA915A",
                            textTransform: "uppercase",
                            textShadow: "0 0 10px rgba(186, 145, 90, 0.3)"
                        }}>
                            Powered by Vedic API
                        </span>
                        <div style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: "#4CAF50",
                            boxShadow: "0 0 10px rgba(76, 175, 80, 0.5)",
                            animation: "pulse 2s infinite"
                        }} />
                    </div>
                </motion.div>
            </div>

            <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
