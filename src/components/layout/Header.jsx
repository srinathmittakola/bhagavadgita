import { BookOpen, List } from "lucide-react";

export default function Header({ onHome }) {
  return (
    <header style={{
      background: "rgba(255, 255, 255, 0.56)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid var(--divider)",
      position: "sticky", top: 0, zIndex: 100,
      boxShadow: "0 4px 20px rgba(186,145,90,0.05)"
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button
          onClick={onHome}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}
        >
          <div style={{ background: "linear-gradient(135deg, var(--saffron), var(--gold))", padding: 8, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BookOpen size={20} color="#fff" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--saffron-dark)", letterSpacing: ".08em" }}>
              Bhagavad Gita
            </span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: ".8rem", fontWeight: 500, color: "var(--gold)", letterSpacing: ".2em", textTransform: "uppercase" }}>
              Explorer
            </span>
          </div>
        </button>
        {/* <button onClick={onHome} className="btn-ghost" style={{ fontSize: ".8rem", padding: "8px 16px" }}>
          <List size={16} /> All Chapters
        </button> */}
      </div>
    </header>
  );
}
