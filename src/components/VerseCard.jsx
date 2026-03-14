import { motion } from "framer-motion";

export default function VerseCard({ verse, verseNum }) {
  if (!verse) return null;

  const getText = (field) => {
    if (typeof field === 'string') return field;
    if (typeof field === 'object' && field?.en) return field.en;
    if (typeof field === 'object' && field?.hi) return field.hi;
    return '';
  };

  const slok = getText(verse.slok) || "";
  const transliteration = getText(verse.transliteration) || "";
  const tej = getText(verse.tej?.et) || "";
  const siva = getText(verse.siva?.et) || "";
  const purohit = getText(verse.purohit?.et) || "";
  const chinmay = getText(verse.chinmay?.et) || "";
  const translation_en = getText(verse.siva?.et) || "";
  const translation_hi = getText(verse.tej?.ht) || "";
  const commentary = chinmay || getText(verse.rams?.hc) || getText(verse.raman?.et) || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel"
      style={{ padding: "40px 48px", marginBottom: "32px", position: "relative", overflow: "hidden" }}
    >
      {/* Decorative corners */}
      <div style={{ position: "absolute", top: 16, left: 16, width: 20, height: 20, borderTop: "2px solid var(--gold-light)", borderLeft: "2px solid var(--gold-light)", opacity: 0.5 }} />
      <div style={{ position: "absolute", top: 16, right: 16, width: 20, height: 20, borderTop: "2px solid var(--gold-light)", borderRight: "2px solid var(--gold-light)", opacity: 0.5 }} />
      <div style={{ position: "absolute", bottom: 16, left: 16, width: 20, height: 20, borderBottom: "2px solid var(--gold-light)", borderLeft: "2px solid var(--gold-light)", opacity: 0.5 }} />
      <div style={{ position: "absolute", bottom: 16, right: 16, width: 20, height: 20, borderBottom: "2px solid var(--gold-light)", borderRight: "2px solid var(--gold-light)", opacity: 0.5 }} />

      {/* Verse number badge */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <span style={{
          fontFamily: "'Cinzel', serif", fontSize: ".75rem", fontWeight: 700,
          letterSpacing: ".18em", color: "var(--saffron-dark)",
          background: "rgba(212,108,43,.08)", borderRadius: 30, padding: "6px 20px",
          border: "1px solid rgba(212,108,43,.2)"
        }}>
          VERSE {verseNum}
        </span>
      </div>

      {/* Sanskrit Sloka */}
      {slok && (
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            fontSize: "clamp(1.3rem, 4vw, 1.8rem)", fontWeight: 600,
            color: "var(--charcoal)", lineHeight: 2,
            whiteSpace: "pre-line"
          }}>
            {slok}
          </p>
        </div>
      )}

      {/* Elegant Divider */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "24px 0" }}>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, var(--divider))" }} />
        <span className="ornament" style={{ fontSize: "1rem" }}>✦</span>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, var(--divider))" }} />
      </div>

      {/* Transliteration */}
      {transliteration && (
        <p style={{
          fontFamily: "'Lora', serif", fontStyle: "italic",
          fontSize: ".95rem", color: "var(--charcoal-soft)",
          textAlign: "center", lineHeight: 1.9, marginBottom: 32,
          whiteSpace: "pre-line"
        }}>
          {transliteration}
        </p>
      )}

      {/* Translation English */}
      {translation_en && (
        <div style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.8)", borderRadius: 16, padding: "24px 28px", marginBottom: commentary ? 16 : 0, boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
          <p style={{ fontFamily: "'Lora', serif", fontSize: "1.05rem", color: "var(--charcoal-mid)", lineHeight: 1.8 }}>
            <strong style={{ fontFamily: "'Cinzel', serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".15em", color: "var(--saffron-dark)", display: "block", marginBottom: 12 }}>TRANSLATION (ENGLISH)</strong>
            {translation_en}
          </p>
        </div>
      )}

      {/* Translation Hindi */}
      {translation_hi && (
        <div style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.8)", borderRadius: 16, padding: "24px 28px", marginBottom: commentary ? 16 : 0, boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
          <p style={{ fontFamily: "'Lora', serif", fontSize: "1.05rem", color: "var(--charcoal-mid)", lineHeight: 1.8 }}>
            <strong style={{ fontFamily: "'Cinzel', serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".15em", color: "var(--saffron-dark)", display: "block", marginBottom: 12 }}>TRANSLATION (HINDI)</strong>
            {translation_hi}
          </p>
        </div>
      )}

      {/* Commentary */}
      {commentary && (
        <div style={{ background: "rgba(194,145,47,.05)", border: "1px solid rgba(194,145,47,.1)", borderRadius: 16, padding: "24px 28px", marginTop: 16 }}>
          <p style={{ fontFamily: "'Lora', serif", fontSize: ".95rem", color: "var(--charcoal-soft)", lineHeight: 1.85 }}>
            <strong style={{ fontFamily: "'Cinzel', serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".15em", color: "var(--gold)", display: "block", marginBottom: 12 }}>COMMENTARY</strong>
            {commentary}
          </p>
        </div>
      )}
    </motion.div>
  );
}
