import { motion } from "framer-motion";

export default function SlokMiniCard({ verse, verseNum, onClick }) {
  if (!verse) return null;

  const getText = (field) => {
    if (typeof field === 'string') return field;
    if (typeof field === 'object' && field?.en) return field.en;
    if (typeof field === 'object' && field?.hi) return field.hi;
    return '';
  };

  const slok = getText(verse.slok) || "";
  const tej = getText(verse.tej?.ht) || getText(verse.tej?.et) || "";
  const siva = getText(verse.siva?.et) || "";
  const purohit = getText(verse.purohit?.et) || "";
  const translation = tej || siva || purohit || getText(verse.prabhu?.et) || "";
  
  const shortTranslation = translation?.length > 120 ? translation.slice(0, 120) + "..." : translation;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(212,108,43,0.15)", borderColor: "var(--gold-light)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="glass-panel"
      onClick={() => onClick(verse, verseNum)}
      style={{ 
        padding: "24px 32px", 
        marginBottom: "16px", 
        position: "relative", 
        cursor: "pointer",
        transition: "border-color 0.3s ease"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
        <div style={{ flex: 1 }}>
            <span style={{
                fontFamily: "'Cinzel', serif", fontSize: ".7rem", fontWeight: 700,
                letterSpacing: ".15em", color: "var(--saffron-dark)",
                background: "rgba(212,108,43,.06)", borderRadius: 30, padding: "4px 12px",
                border: "1px solid rgba(212,108,43,.15)", display: "inline-block", marginBottom: 12
            }}>
                VERSE {verseNum}
            </span>
            
            {slok && (
                <p style={{
                    fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
                    fontSize: "1.3rem", fontWeight: 600,
                    color: "var(--charcoal)", lineHeight: 1.6,
                    marginBottom: 12, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden"
                }}>
                    {slok.split("\n")[0]} {slok.split("\n").length > 1 ? "..." : ""}
                </p>
            )}
            
            {shortTranslation && (
                <p style={{
                    fontFamily: "'Lora', serif", fontSize: ".95rem", color: "var(--charcoal-mid)", lineHeight: 1.6
                }}>
                    {shortTranslation}
                </p>
            )}
        </div>
        
        <div style={{ 
            color: "var(--gold)", 
            opacity: 0.6, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            paddingTop: 8
        }}>
           <span style={{ fontSize: "1.2rem", transform: "translateX(4px)" }}>→</span>
        </div>
      </div>
    </motion.div>
  );
}
