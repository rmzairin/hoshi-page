export default function HitCounter({ value }: { value: number }) {
  const digits = String(value).padStart(6, "0").split("");

  return (
    <div>
      <p>
        あなたは <span className="rainbow">{value}</span> 人目の訪問者です
      </p>
      <div className="hit-counter">
        {digits.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
    </div>
  );
}