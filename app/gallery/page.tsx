const items = [
  "きらきら星",
  "夏祭りver.",
  "お星さま観察中",
  "カラオケの日",
  "プリクラ集",
];

export default function GalleryPage() {
  return (
    <div>
      <h2>ギャラリー</h2>
      <div className="construction">
        ⚠ 只今工事中のページがあります ⚠ ご了承ください ⚠
      </div>
      <p>画像は準備中のものが多いです、ごめんなさい🙏</p>

      <div className="gallery-grid">
        {items.map((label) => (
          <div className="polaroid" key={label}>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}