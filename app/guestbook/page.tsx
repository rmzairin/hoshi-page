import GuestbookClient from "./GuestbookClient";

export default function GuestbookPage() {
  return (
    <div>
      <h2>掲示板（げすとぶっく）</h2>
      <p>自由に書き込んでね♪</p>
      <GuestbookClient />
    </div>
  );
}