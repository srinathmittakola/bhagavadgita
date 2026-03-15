import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, AlertCircle } from "lucide-react";
import { fetchChapters } from "../api/gitaApi";
import ChapterCard from "../components/ChapterCard";
import SkeletonCard from "../components/ui/SkeletonCard";
import AboutSection from "../components/AboutSection";
import NewsletterSection from "../components/ui/NewsletterSection";

export default function ChaptersPage({ onSelectChapter }) {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchChapters()
      .then(setChapters)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

const filtered = chapters.filter(c =>
  search === "" ||
  c.name?.toLowerCase().includes(search.toLowerCase()) ||
  c.translation.toLowerCase().includes(search.toLowerCase()) ||
  String(c.chapter_number).includes(search)
);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px" }}>
      {/* Hero Section */}
      <div style={{ textAlign: "center", padding: "80px 0 60px" }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="ornament" 
          style={{ marginBottom: 24, fontSize: "3rem",color: "var(--gold)"  }}
        >
          ॐ
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 700, 
            color: "var(--charcoal)",
            lineHeight: 1.1, 
            marginBottom: 20,
            textShadow: "0 2px 10px rgba(186,145,90,0.1)"
          }}
        >
          Bhagavad Gita
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          style={{
            fontFamily: "'Lora', serif", fontStyle: "italic",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "var(--charcoal-soft)", maxWidth: 520, margin: "0 auto 40px",
            lineHeight: 1.8
          }}
        >
          The Song of God — 18 chapters of divine wisdom<br />
          spoken on the battlefield of Kurukshetra
        </motion.p>

        {/* Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{ position: "relative", maxWidth: 460, margin: "0 auto" }}
        >
          <Search style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", color: "var(--gold)", zIndex: 2 }} size={20} />
          <input
            className="search-input"
            type="text"
            placeholder="Search chapters by name or number…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </motion.div>
      </div>

      {/* List */}
      <div style={{ position: "relative", minHeight: 400 }}>
        {loading && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {error && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="glass-panel"
            style={{ textAlign: "center", padding: "48px 24px", borderColor: "rgba(212,108,43,0.3)" }}
          >
            <AlertCircle size={48} color="var(--saffron)" style={{ margin: "0 auto 16px" }} />
            <p style={{ fontFamily: "'Lora', serif", fontSize: "1.1rem", color: "var(--charcoal)", marginBottom: 8 }}>{error}</p>
            <p style={{ fontSize: ".9rem", color: "var(--charcoal-soft)" }}>Please check your connection and try again.</p>
          </motion.div>
        )}

        {!loading && !error && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "16px" }}>
            {filtered.length === 0 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "40px 0" }}>
                <p style={{ color: "var(--charcoal-soft)", fontSize: "1.05rem", fontStyle: "italic" }}>
                  No chapters found matching "{search}"
                </p>
                <button className="btn-ghost" style={{ marginTop: 16 }} onClick={() => setSearch("")}>Clear Search</button>
              </motion.div>
            ) : (
              filtered.map((ch, i) => (
                <ChapterCard key={ch.chapter_number} chapter={ch} index={i} onClick={onSelectChapter} />
              ))
            )}
          </div>
        )}
      </div>

      <AboutSection />
      <NewsletterSection />
    </div>
  );
}
