import HitCounter from "@/components/HitCounter";

export default function Home() {
  return (
    <div>
      <h2>はじめまして！ここは星野ゆきちゃんの非公式ファンサイトです♪</h2>
      <p>管理人「ゆきまる」が趣味でまったり更新中～</p>
      <HitCounter value={128340} />
    </div>
  );
}