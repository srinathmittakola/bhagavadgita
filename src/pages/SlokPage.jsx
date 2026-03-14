import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, AlertCircle } from "lucide-react";
import VerseCard from "../components/VerseCard";
import SkeletonVerse from "../components/ui/SkeletonVerse";
import { fetchVerse } from "../api/gitaApi";

export default function SlokPage({ chapter, verseNum, onBack }) {
    const [verse, setVerse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!chapter || !verseNum) return;

        const loadVerse = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchVerse(chapter.chapter_number, verseNum);
                setVerse(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadVerse();
    }, [chapter, verseNum]);

    if (!chapter) return null;

    const getText = (field) => {
        if (typeof field === 'string') return field;
        if (typeof field === 'object' && field?.en) return field.en;
        if (typeof field === 'object' && field?.hi) return field.hi;
        return '';
    };

    const chapterName = getText(chapter.name);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 80px" }}
        >
            <div style={{ padding: "40px 0 16px" }}>
                <button
                    onClick={onBack}
                    className="btn-ghost"
                    style={{ marginBottom: 24, fontSize: ".85rem", padding: "8px 18px", border: "none", background: "rgba(255,255,255,0.4)" }}
                >
                    <ArrowLeft size={16} /> Back to Chapter {chapter.chapter_number}
                </button>
                
                <div style={{ textAlign: "center", marginBottom: 24 }}>
                    <span style={{
                        fontFamily: "'Cinzel', serif", fontSize: ".8rem", fontWeight: 700,
                        letterSpacing: ".2em", color: "var(--saffron-dark)", textTransform: "uppercase"
                    }}>
                        Chapter {chapter.chapter_number} • {chapterName}
                    </span>
                </div>
            </div>

            {loading && <SkeletonVerse />}

            {error && !loading && (
                <div className="glass-panel" style={{ textAlign: "center", padding: "40px", borderColor: "rgba(212,108,43,0.3)" }}>
                    <AlertCircle size={40} color="var(--saffron)" style={{ margin: "0 auto 12px" }} />
                    <p style={{ fontFamily: "'Lora', serif", fontSize: "1.1rem" }}>{error}</p>
                    <button className="btn-ghost" style={{ marginTop: 16 }} onClick={() => window.location.reload()}>Retry</button>
                </div>
            )}

            {!loading && !error && verse && (
                <VerseCard verse={verse} verseNum={verseNum} />
            )}
        </motion.div>
    );
}
