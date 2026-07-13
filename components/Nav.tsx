import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/">★ ホーム</Link>
      {" | "}
      <Link href="/profile">♪ プロフィール</Link>
      {" | "}
      <Link href="/gallery">☆ ギャラリー</Link>
      {" | "}
      <Link href="/guestbook">✎ 掲示板</Link>
      {" | "}
      <Link href="/links">⛓ リンク集</Link>
    </nav>
  );
}