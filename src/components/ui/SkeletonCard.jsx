export default function SkeletonCard() {
  return (
    <div className="glass-panel" style={{ padding: "28px 32px", marginBottom: "16px" }}>
      <div className="skeleton" style={{ height: 12, width: "30%", marginBottom: 16 }} />
      <div className="skeleton" style={{ height: 24, width: "60%", marginBottom: 20 }} />
      <div className="skeleton" style={{ height: 10, width: "90%", marginBottom: 10 }} />
      <div className="skeleton" style={{ height: 10, width: "70%" }} />
    </div>
  );
}
