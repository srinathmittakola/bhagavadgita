import { motion } from "framer-motion";

export default function StaticPage({ pageData }) {
  if (!pageData) return null;

  return (
    <div style={{ padding: "60px 24px", maxWidth: 800, margin: "0 auto", minHeight: "60vh" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ background: "white", padding: "40px 50px", borderRadius: 20, boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}
      >
        <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "2.5rem", color: "var(--saffron-dark)", marginBottom: 10, textAlign: "center" }}>
          {pageData.title}
        </h1>
        {pageData.lastUpdated && (
          <p style={{ textAlign: "center", color: "var(--gold)", fontSize: "0.9rem", letterSpacing: "0.05em", marginBottom: 40, fontFamily: "'Cormorant Garamond', serif" }}>
            Last Updated: {pageData.lastUpdated}
          </p>
        )}
        <div 
          className="static-content"
          dangerouslySetInnerHTML={{ __html: pageData.content }} 
        />
      </motion.div>
    </div>
  );
}
