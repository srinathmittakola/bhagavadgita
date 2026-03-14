export default function Spinner() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "48px 0" }}>
      <div style={{
        width: 44, height: 44,
        border: "3px solid var(--divider)",
        borderTopColor: "var(--saffron)",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite"
      }} />
    </div>
  );
}
