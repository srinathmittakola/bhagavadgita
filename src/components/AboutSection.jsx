export default function AboutSection() {
    return (
        <section
            style={{
                padding: "100px 24px",
                background:
                    "linear-gradient(180deg, var(--color-warm-cream) 0%, #F5EDE0 100%)"
            }}
            id="about"
        >
            <div style={{ margin: "0 auto" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                        gap: 60,
                        alignItems: "center"
                    }}
                    className="about-grid"
                >
                    {/* LEFT CONTENT */}
                    <div>
                        <p
                            style={{
                                fontSize: 13,
                                letterSpacing: "0.25em",
                                textTransform: "uppercase",
                                marginBottom: 14,
                                color: "var(--color-burnt-orange)"
                            }}
                        >
                            About the Scripture
                        </p>

                        <h2
                            style={{
                                fontFamily: "Cormorant Garamond",
                                fontSize: "clamp(2.5rem,4vw,3.2rem)",
                                fontWeight: 700,
                                marginBottom: 20,
                                color: "var(--color-deep-maroon)"
                            }}
                        >
                            The Divine Dialogue
                        </h2>

                        <p
                            style={{
                                fontSize: 18,
                                lineHeight: 1.8,
                                marginBottom: 18,
                                color: "var(--color-rich-brown)"
                            }}
                        >
                            The Bhagavad Gita, meaning "The Song of God," is a 700-verse
                            Hindu scripture that is part of the Indian epic Mahabharata. It
                            presents a conversation between Prince Arjuna and Lord Krishna
                            on the battlefield of Kurukshetra.
                        </p>

                        <p
                            style={{
                                fontSize: 18,
                                lineHeight: 1.8,
                                marginBottom: 26,
                                color: "var(--color-rich-brown)"
                            }}
                        >
                            This sacred text addresses the moral and philosophical dilemmas
                            faced by Arjuna and through Krishna's teachings offers profound
                            insights into duty, righteousness and the path to spiritual
                            liberation.
                        </p>

                        {/* FEATURES */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                            <Feature text="Sanskrit & Translation" />
                            <Feature text="Commentary" />
                            <Feature text="Audio Recitation" />
                        </div>
                    </div>

                    {/* RIGHT SIDE SYMBOL */}
                    <div style={{ position: "relative" }}>
                        <div
                            style={{
                                aspectRatio: "1",
                                borderRadius: 20,
                                background: "var(--color-deep-maroon)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                overflow: "hidden"
                            }}
                        >
                            <svg viewBox="0 0 200 200" style={{ width: "90%", opacity: 0.2 }}>
                                
                                <circle cx="100" cy="100" r="80" fill="none" stroke="#D4AF37" strokeWidth="1"  />
                                <circle cx="100" cy="100" r="60" fill="none" stroke="#D4AF37" strokeWidth="1" />
                                <circle cx="100" cy="100" r="40" fill="none" stroke="#D4AF37" strokeWidth="1" />
                            </svg>

                            <div style={{ position: "absolute", textAlign: "center" }}>
                                <p
                                    style={{
                                        fontSize: 90,
                                        marginBottom: 10,
                                        color: "var(--color-sacred-gold)",
                                        textShadow: "0 0 40px rgba(212,175,55,0.5)"
                                    }}
                                >
                                    ॐ
                                </p>

                                <p
                                    style={{
                                        letterSpacing: "0.2em",
                                        color: "var(--color-sacred-gold)"
                                    }}
                                >
                                    KRISHNA & ARJUNA
                                </p>
                            </div>
                        </div>

                        <div
                            style={{
                                position: "absolute",
                                bottom: -20,
                                right: -20,
                                width: 120,
                                height: 120,
                                borderRadius: "50%",
                                background: "var(--color-sacred-gold)",
                                opacity: 0.2,
                                filter: "blur(40px)"
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* RESPONSIVE GRID */}
            <style>{`
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
        </section>
    );
}

function Feature({ text }) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "var(--color-sacred-gold)" }}>✔</span>
            <span style={{ fontWeight: 500, color: "var(--color-deep-maroon)" }}>
                {text}
            </span>
        </div>
    );
}