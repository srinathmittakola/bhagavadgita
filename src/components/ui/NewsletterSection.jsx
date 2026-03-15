import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }

    setMessage("Thank you! Daily verse will arrive in your inbox.");
    setEmail("");
  };

  return (
    <section
      style={{
        padding: "50px 24px",
        background: "var(--color-deep-maroon)"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem,4vw,2.6rem)",
            fontWeight: 700,
            marginBottom: 16,
            color: "var(--color-warm-cream)"
          }}
        >
          Daily Verse Inspiration
        </h2>

        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: 32,
          }}
        >
          Receive a verse from the Bhagavad Gita every morning to guide your day
        </p>

        <form
          onSubmit={handleSubscribe}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            maxWidth: 420,
            margin: "0 auto"
          }}
          className="newsletter-form"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "16px 24px",
              borderRadius: 40,
              fontSize: "1rem",
              outline: "none",
              border: "1px solid rgba(212,175,55,0.3)",
              background: "rgba(255,255,255,0.1)",
              color: "var(--color-warm-cream)"
            }}
          />

          <button
            type="submit"
            style={{
              padding: "16px",
              borderRadius: 40,
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "1rem",
              background:
                "linear-gradient(135deg,#D4AF37,#F2D680)",
              color: "var(--color-deep-maroon)"
            }}
          >
            Subscribe
          </button>
        </form>

        {message && (
          <p
            style={{
              marginTop: 16,
              fontSize: ".9rem",
              color: "rgba(253,248,240,0.6)"
            }}
          >
            {message}
          </p>
        )}
      </div>

      <style>{`
        @media (min-width:640px){
          .newsletter-form{
            flex-direction:row;
          }
          .newsletter-form input{
            flex:1;
          }
        }
      `}</style>
    </section>
  );
}