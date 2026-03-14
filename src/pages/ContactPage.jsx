import { siteContent } from "../config/siteContent";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const { contact } = siteContent;

  return (
    <div style={{ padding: "60px 24px", maxWidth: 800, margin: "0 auto", minHeight: "60vh" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "2.5rem", color: "var(--saffron-dark)", marginBottom: 20, textAlign: "center" }}>
          {contact.title}
        </h1>
        <p style={{ textAlign: "center", color: "var(--charcoal-soft)", fontSize: "1.1rem", marginBottom: 50, lineHeight: 1.6 }}>
          {contact.description}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 30 }}>
          <div style={{ background: "white", padding: 30, borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.05)", textAlign: "center" }}>
            <Mail size={32} color="var(--gold)" style={{ margin: "0 auto 16px" }} />
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.2rem", color: "var(--charcoal)", marginBottom: 8 }}>Email</h3>
            <p style={{ color: "var(--charcoal-soft)" }}>{contact.email}</p>
          </div>
          
          <div style={{ background: "white", padding: 30, borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.05)", textAlign: "center" }}>
            <Phone size={32} color="var(--gold)" style={{ margin: "0 auto 16px" }} />
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.2rem", color: "var(--charcoal)", marginBottom: 8 }}>Phone</h3>
            <p style={{ color: "var(--charcoal-soft)" }}>{contact.phone}</p>
          </div>

          <div style={{ background: "white", padding: 30, borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.05)", textAlign: "center" }}>
            <MapPin size={32} color="var(--gold)" style={{ margin: "0 auto 16px" }} />
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.2rem", color: "var(--charcoal)", marginBottom: 8 }}>Address</h3>
            <p style={{ color: "var(--charcoal-soft)", lineHeight: 1.5 }}>{contact.address}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
