import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ChapterCard({ chapter, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: index * 0.06,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{
        y: -2,
        scale: 1.01,

      }}
      className="glass-panel chapter-card"
      style={{
        padding: "28px 32px",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        marginBottom: 18,
        borderRadius: 16
      }}
      onClick={() => onClick(chapter)}
    >
      {/* Left animated gradient bar */}
      <motion.div
        className="hover-bar"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: "linear-gradient(180deg, var(--saffron), var(--gold))"
        }}
      />

      {/* Glass shine animation */}
      <motion.div
        className="shine"
        initial={{ x: "-100%" }}
        whileHover={{ x: "120%" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "60%",
          height: "100%",
          background:
            "linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent)",
          transform: "skewX(-25deg)",
          pointerEvents: "none"
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 16
        }}
      >
        <div style={{ flex: 1 }}>
          {/* Top labels */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 14
            }}
          >
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: ".7rem",
                fontWeight: 700,
                letterSpacing: ".15em",
                color: "var(--saffron-dark)",
                background: "rgba(212,108,43,.12)",
                borderRadius: 6,
                padding: "5px 12px",
                textTransform: "uppercase"
              }}
            >
              Chapter {chapter.chapter_number}
            </span>

            <span
              style={{
                fontFamily: "'Lora', serif",
                fontSize: ".8rem",
                fontWeight: 500,
                color: "var(--charcoal-soft)",
                background: "rgba(255,255,255,0.6)",
                border: "1px solid var(--divider)",
                borderRadius: 6,
                padding: "4px 12px"
              }}
            >
              {chapter.verses_count} verses
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.7rem",
              fontWeight: 600,
              color: "var(--charcoal)",
              marginBottom: 6,
              lineHeight: 1.2
            }}
          >
            {chapter.name}
          </h2>

          {/* Translation */}
          {chapter.translation && (
            <p
              style={{
                fontFamily: "'Lora', serif",
                fontStyle: "italic",
                fontSize: ".95rem",
                color: "var(--gold)",
                marginBottom: 12
              }}
            >
              {chapter.translation?.en || chapter.translation}
            </p>
          )}

          {/* Summary */}
          {chapter.summary?.en && (
            <p
              style={{
                fontFamily: "'Lora', serif",
                fontSize: ".95rem",
                color: "var(--charcoal-soft)",
                lineHeight: 1.7,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }}
            >
              {chapter.summary.en}
            </p>
          )}
        </div>

        {/* Chevron */}
        <motion.div
          className="chevron"
          initial={{ x: 0, opacity: 0.6 }}
          whileHover={{ x: 6, opacity: 1 }}
          transition={{ duration: 0.25 }}
          style={{
            flexShrink: 0,
            marginTop: 4,
            color: "var(--gold-light)"
          }}
        >
          <ChevronRight size={34} strokeWidth={1.4} />
        </motion.div>
      </div>

      {/* Hover glow */}
      <style>{`
        .chapter-card:hover {
          box-shadow:
            0 8px 30px rgba(186,145,90,0.15),
            0 0 0 1px rgba(186,145,90,0.2);
          transform: translateY(-4px);
          transition: all .35s cubic-bezier(.22,1,.36,1);
        }
      `}</style>
    </motion.div>
  );
}