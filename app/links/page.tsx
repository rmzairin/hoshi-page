const links = [
  { name: "ゆきまるの落書き帳", desc: "管理人の個人サイト（イラスト中心）" },
  { name: "月影スターズ非公式wiki", desc: "作品情報まとめサイト" },
  { name: "星座観察日記", desc: "星好きが集うブログ" },
];

export default function LinksPage() {
  return (
    <div>
      <h2>リンク集</h2>
      <p>当サイトはリンクフリーです！相互リンク募集中♪</p>

      <table className="old-table">
        <thead>
          <tr>
            <th>サイト名</th>
            <th>紹介</th>
          </tr>
        </thead>
        <tbody>
          {links.map((l) => (
            <tr key={l.name}>
              <td>{l.name}</td>
              <td>{l.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}