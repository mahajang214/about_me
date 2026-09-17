export default function SectionTitle({ number, eyebrow, title, children }) {
  return (
    <div className="section-title">
      <div>
        <p className="eyebrow">{number} — {eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children && <div className="section-intro">{children}</div>}
    </div>
  );
}