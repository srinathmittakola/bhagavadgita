import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function SloksPage({ chapter, onBack, onSelectSlok }) {
    const totalVerses = chapter.verses_count;

    const getText = (field) => {
        if (typeof field === 'string') return field;
        if (typeof field === 'object' && field?.en) return field.en;
        if (typeof field === 'object' && field?.hi) return field.hi;
        return '';
    };

    const chapterName = getText(chapter.name);
    const chapterTranslation = getText(chapter.translation);
    const summary = chapter.summary?.en?.description || getText(chapter.summary) || "";

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 80px" }}
        >
            {/* Header */}
            <div style={{ padding: "40px 0 32px" }}>
                <button
                    onClick={onBack}
                    className="btn-ghost"
                    style={{ marginBottom: 32, fontSize: ".85rem", padding: "8px 18px", border: "none", background: "rgba(255,255,255,0.4)" }}
                >
                    <ArrowLeft size={16} /> Back to Chapters
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{ textAlign: "center" }}
                >
                    <span style={{
                        fontFamily: "'Cinzel', serif", fontSize: ".8rem", fontWeight: 700,
                        letterSpacing: ".2em", color: "var(--saffron-dark)", textTransform: "uppercase"
                    }}>
                        Chapter {chapter.chapter_number}
                    </span>
                    <h1 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(2rem, 5vw, 3.2rem)",
                        fontWeight: 700, color: "var(--charcoal)",
                        marginTop: 12, marginBottom: 8, lineHeight: 1.15
                    }}>
                        {chapterName}
                    </h1>
                    {chapterTranslation && (
                        <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", color: "var(--gold)", fontSize: "1.1rem", marginBottom: 20 }}>
                            {chapterTranslation}
                        </p>
                    )}
                    {summary && (
                        <div className="glass-panel" style={{ padding: "24px", maxWidth: 700, margin: "0 auto 24px", borderRadius: 16 }}>
                            <p style={{ fontFamily: "'Lora', serif", fontSize: "1rem", color: "var(--charcoal-mid)", lineHeight: 1.8 }}>
                                {summary}
                            </p>
                        </div>
                    )}
                    <p style={{ fontFamily: "'Cinzel', serif", fontSize: ".8rem", fontWeight: 600, letterSpacing: ".15em", color: "var(--gold-light)", marginTop: 12 }}>
                        <span style={{ display: "inline-block", padding: "4px 12px", border: "1px solid var(--divider)", borderRadius: 12 }}>
                            {totalVerses} VERSES
                        </span>
                    </p>
                </motion.div>
            </div>

            {/* Number Grid */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
                    gap: 16,
                    padding: "24px",
                    background: "rgba(255, 255, 255, 0.4)",
                    borderRadius: 24,
                    border: "1px solid rgba(255, 255, 255, 0.6)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.04)"
                }}
            >
                {Array.from({ length: totalVerses }, (_, i) => {
                    const verseNum = i + 1;

                    return (
                        <motion.button
                            key={verseNum}
                            onClick={() => onSelectSlok(null, verseNum)}
                            whileHover={{ y: -4, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                height: 80,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6))",
                                border: "1px solid var(--divider)",
                                borderRadius: 16,
                                cursor: "pointer",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
                                transition: "all 0.2s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "var(--gold-light)";
                                e.currentTarget.style.boxShadow = "0 8px 24px rgba(212,108,43,0.15)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "var(--divider)";
                                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.02)";
                            }}
                        >
                            <span style={{
                                fontFamily: "'Cinzel', serif", 
                                fontSize: "1.4rem", 
                                fontWeight: 700,
                                color: "var(--charcoal)",
                                marginBottom: 4
                            }}>
                                {verseNum}
                            </span>
                            <span style={{
                                fontFamily: "'Lora', serif",
                                fontSize: "0.65rem",
                                color: "var(--gold)",
                                letterSpacing: ".1em",
                                textTransform: "uppercase"
                            }}>
                                Verse
                            </span>
                        </motion.button>
                    );
                })}
            </motion.div>
        </motion.div>
    );
}