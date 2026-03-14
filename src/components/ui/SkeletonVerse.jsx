export default function SkeletonVerse() {
  return (
    <div className="glass-panel" style={{ padding: "40px 44px" }}>
      <div className="skeleton" style={{ height: 16, width: "20%", margin: "0 auto 32px" }} />
      <div className="skeleton" style={{ height: 20, width: "70%", margin: "0 auto 12px" }} />
      <div className="skeleton" style={{ height: 20, width: "65%", margin: "0 auto 36px" }} />
      <div className="skeleton" style={{ height: 12, width: "85%", margin: "0 auto 10px" }} />
      <div className="skeleton" style={{ height: 12, width: "75%", margin: "0 auto 10px" }} />
      <div className="skeleton" style={{ height: 12, width: "65%", margin: "0 auto" }} />
    </div>
  );
}
