import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Search as SearchIcon, X, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import { fetchVerse } from "../api/gitaApi";
import VerseCard from "../components/VerseCard";
import SkeletonVerse from "../components/ui/SkeletonVerse";

export default function ChapterPage({ chapter, onBack }) {
  const [verses, setVerses] = useState({});
  const [loadingVerse, setLoadingVerse] = useState(false);
  const [currentVerse, setCurrentVerse] = useState(1);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);

  const totalVerses = chapter.verses_count;
  const verseCardRef = useRef(null);

  const loadVerse = useCallback(async (num) => {
    if (verses[num]) { setCurrentVerse(num); return; }
    setLoadingVerse(true);
    setError(null);
    try {
      const data = await fetchChapter(chapter.chapter_number, num);
      setVerses(prev => ({ ...prev, [num]: data }));
      setCurrentVerse(num);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoadingVerse(false);
    }
  }, [chapter.chapter_number, verses]);

  useEffect(() => { loadVerse(1); }, [chapter.chapter_number, loadVerse]);

  useEffect(() => {
    if (verseCardRef.current) {
      setTimeout(() => {
        verseCardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, [currentVerse]);

  const handleSearch = async () => {
    if (!search.trim()) return;
    setSearching(true);
    setSearchResults([]);
    const results = [];
    for (let i = 1; i <= totalVerses; i++) {
      let v = verses[i];
      if (!v) {
        try {
          v = await fetchVerse(chapter.chapter_number, i);
          setVerses(prev => ({ ...prev, [i]: v }));
        } catch { continue; }
      }
      const text = [v.slok, v.transliteration, v.tej?.ht, v.tej?.et, v.siva?.et, v.purohit?.et, v.chinmay?.hc].filter(Boolean).join(" ").toLowerCase();
      if (text.includes(search.toLowerCase())) results.push(i);
    }
    setSearchResults(results);
    setSearching(false);
  };

  const clearSearch = () => { setSearch(""); setSearchResults([]); };

  const summary = chapter.summary?.en?.description || chapter.summary || "";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 80px" }}
    >
      <div style={{ padding: "40px 0 32px" }}>
        <button
          onClick={onBack}
          className="btn-ghost"
          style={{ marginBottom: 32, fontSize: ".85rem", padding: "8px 18px", border: "none", background: "rgba(255,255,255,0.4)" }}
        >
          <ArrowLeft size={16} /> Back to Chapters
        </button>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ textAlign: "center" }}>
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
            {chapter.name}
          </h1>
          {chapter.translation?.en && (
            <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", color: "var(--gold)", fontSize: "1.1rem", marginBottom: 20 }}>
              {chapter.translation?.en || chapter.translation}
            </p>
          )}
          {summary && (
            <div className="glass-panel" style={{ padding: "24px", maxWidth: 700, margin: "0 auto 24px", borderRadius: 16 }}>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "1rem", color: "var(--charcoal-mid)", lineHeight: 1.8 }}>
                {summary.slice(0, 320)}{summary.length > 320 ? "…" : ""}
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

      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ marginBottom: 32, display: "flex", gap: 12 }}>
        <div style={{ position: "relative", flex: 1 }}>
          <SearchIcon style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--gold)" }} size={18} />
          <input
            className="search-input"
            style={{ paddingLeft: 44, borderRadius: 12 }}
            type="text"
            placeholder="Search within this chapter…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSearch()}
          />
        </div>
        <button className="btn-primary" style={{ borderRadius: 12 }} onClick={handleSearch} disabled={searching || !search.trim()}>
          {searching ? "Searching…" : "Search"}
        </button>
        {search && (
          <button className="btn-ghost" style={{ padding: "10px", borderRadius: 12 }} onClick={clearSearch}>
            <X size={18} />
          </button>
        )}
      </motion.div>

      <AnimatePresence>
        {searchResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            style={{ marginBottom: 24, overflow: "hidden" }}
          >
            <div className="glass-panel" style={{ padding: "16px 20px" }}>
              <p style={{ fontFamily: "'Lora', serif", fontSize: ".9rem", color: "var(--charcoal-mid)", marginBottom: 12 }}>
                Found in <strong style={{ color: "var(--saffron-dark)" }}>{searchResults.length}</strong> verse{searchResults.length !== 1 ? "s" : ""}:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {searchResults.map(n => (
                  <button key={n}
                    className={currentVerse === n ? "btn-primary" : "btn-ghost"}
                    style={{ fontSize: ".8rem", padding: "6px 16px", borderRadius: 8 }}
                    onClick={() => { loadVerse(n); clearSearch(); }}>
                    Verse {n}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="glass-panel" style={{ marginBottom: 32, padding: "20px 24px" }}>
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".15em", color: "var(--gold-light)", marginBottom: 16 }}>JUMP TO VERSE</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {Array.from({ length: totalVerses }, (_, i) => i + 1).map(n => (
            <button
              key={n}
              onClick={() => loadVerse(n)}
              style={{
                width: 42, height: 42,
                border: currentVerse === n ? "none" : "1px solid var(--divider)",
                borderRadius: 10,
                background: currentVerse === n ? "linear-gradient(135deg, var(--saffron), var(--gold))" : "rgba(255,255,255,0.4)",
                color: currentVerse === n ? "#fff" : "var(--charcoal-soft)",
                fontFamily: "'Lora', serif", fontSize: ".95rem",
                cursor: "pointer",
                transition: "all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)",
                fontWeight: currentVerse === n ? 600 : 500,
                boxShadow: currentVerse === n ? "0 4px 12px rgba(212,108,43,0.3)" : "none"
              }}
              onMouseEnter={(e) => { if (currentVerse !== n) { e.target.style.background = "rgba(255,255,255,0.8)"; e.target.style.borderColor = "var(--gold-light)"; e.target.style.transform = "translateY(-1px)"; } }}
              onMouseLeave={(e) => { if (currentVerse !== n) { e.target.style.background = "rgba(255,255,255,0.4)"; e.target.style.borderColor = "var(--divider)"; e.target.style.transform = "none"; } }}
            >
              {n}
            </button>
          ))}
        </div>
      </motion.div>

      <div ref={verseCardRef} style={{ scrollMarginTop: 100 }}>
        {loadingVerse && <SkeletonVerse />}

        {error && (
          <div className="glass-panel" style={{ textAlign: "center", padding: "40px", borderColor: "rgba(212,108,43,0.3)" }}>
            <AlertCircle size={40} color="var(--saffron)" style={{ margin: "0 auto 12px" }} />
            <p style={{ fontFamily: "'Lora', serif", fontSize: "1.1rem" }}>{error}</p>
            <button className="btn-ghost" style={{ marginTop: 16 }} onClick={() => loadVerse(currentVerse)}>Retry Loading Verse</button>
          </div>
        )}

        {!loadingVerse && !error && verses[currentVerse] && (
          <VerseCard verse={verses[currentVerse]} verseNum={currentVerse} />
        )}
      </div>

      {!loadingVerse && !error && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
          <button
            className="btn-ghost"
            disabled={currentVerse <= 1}
            onClick={() => loadVerse(currentVerse - 1)}
            style={{ opacity: currentVerse <= 1 ? 0.4 : 1, padding: "10px 20px" }}
          >
            <ChevronLeft size={18} /> Previous
          </button>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: ".85rem", fontWeight: 700, letterSpacing: ".15em", color: "var(--gold-light)" }}>
            {currentVerse} / {totalVerses}
          </span>
          <button
            className="btn-ghost"
            disabled={currentVerse >= totalVerses}
            onClick={() => loadVerse(currentVerse + 1)}
            style={{ opacity: currentVerse >= totalVerses ? 0.4 : 1, padding: "10px 20px" }}
          >
            Next <ChevronRight size={18} />
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
