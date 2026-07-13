import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import CursorTrail from "@/components/CursorTrail";

export const metadata: Metadata = {
  title: "★彡 星野ゆき 応援ページ 彡★",
  description: "声優アイドル・星野ゆきちゃんの非公式ファンサイトです♪",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
    <body>
        <CursorTrail />
      <div className="marquee-wrap">
        <div className="marquee-inner">
          ようこそ！！！星野ゆき応援ページへ★彡　当サイトはリンクフリーです♪　管理人：ゆきまる　最終更新日：2001年頃の雰囲気でお送りします☆
        </div>
      </div>

      <div className="page-wrap">
        <header>
          <h1 className="rainbow">星野ゆき 応援ページ</h1>
          <p>～ Hoshino Yuki Fan Site ～</p>
          <p className="blink">NOW LOADING... ようこそ！</p>
        </header>

        <Nav />

        <div className="content">{children}</div>

        <footer>
          <p>© 星野ゆき応援ページ　無断転載禁止</p>
        </footer>
      </div>
    </body>
    </html>
  );
}

