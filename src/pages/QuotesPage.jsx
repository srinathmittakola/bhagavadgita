import { siteContent } from "../config/siteContent";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function QuotesPage() {
  const { quotes } = siteContent;

  return (
    <div style={{ padding: "60px 24px", maxWidth: 1200, margin: "0 auto", minHeight: "60vh" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "2.8rem", color: "var(--saffron-dark)", marginBottom: 10, textAlign: "center" }}>
          Divine Quotes
        </h1>
        <p style={{ textAlign: "center", color: "var(--charcoal-soft)", fontSize: "1.1rem", marginBottom: 50, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
          Timeless wisdom from the Bhagavad Gita
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(390px, 1fr))", gap: 30 }}>
          {quotes.map((quote, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              style={{
                background: "white",
                padding: 40,
                borderRadius: 20,
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <Quote size={40} color="var(--gold-light)" style={{ opacity: 0.2, position: "absolute", top: 20, right: 20 }} />
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.3rem",
                lineHeight: 1.6,
                fontWeight: "bold",
                color: "var(--gold)",
                flex: 1,
                fontStyle: "italic",
                marginRight: 30,
                marginBottom: 20
              }}>
                "{quote.text}"
              </p>
              <div style={{
                borderTop: "1px solid var(--divider)",
                paddingTop: 16,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.9rem", color: "var(--saffron-dark)" }}>
                  Chapter {quote.chapter}
                </span>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.9rem", color: "var(--gold)" }}>
                  Verse {quote.verse}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
