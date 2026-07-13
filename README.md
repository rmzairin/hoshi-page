# ★彡 星野ゆき 応援ページ 彡★

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel" alt="Vercel" />
  <img src="https://img.shields.io/badge/status-work%20in%20progress-ffcc00?style=for-the-badge" alt="Status" />
</p>

<p align="center">
  <b>Fan site bergaya website Jepang era 2000-an (Geocities/Yahoo! Japan vibes)</b><br/>
  Dibangun dari nol pakai Next.js 14 (App Router) + TypeScript, sambil belajar konsep dasar React & routing.
</p>

---

## 📖 Tentang Project

`hoshi-page` adalah fan site **fiktif** untuk karakter original "Hoshino Yuki" (星野ゆき) — dibuat murni untuk latihan belajar Next.js sambil bernostalgia sama estetika website Jepang jadul: marquee bergerak, teks blink & rainbow, hit counter LED, guestbook, dan segala kenorakan khas era itu 😄

> Karakter dan judul yang dipakai bersifat fiktif/original, bukan properti hak cipta pihak lain.

## ✨ Fitur

| Fitur | Deskripsi |
|---|---|
| 🎗️ Marquee | Teks berjalan ala pengumuman jadul |
| 🌈 Rainbow & Blink Text | Animasi teks warna-warni & berkedip pakai CSS `@keyframes` |
| 🔢 Hit Counter | Counter pengunjung ala LED digital hijau |
| 📝 Guestbook | Buku tamu interaktif (client-side state dengan React `useState`) |
| 🖼️ Gallery | Galeri foto ala polaroid dengan layout `flexbox` |
| 🔗 Link Page | Halaman link banner ala webring |
| ⭐ Cursor Trail | Efek bintang mengikuti kursor mouse |
| 🚧 Under Construction Banner | Banner "工事中" garis kuning-hitam khas web lama |

## 🛠️ Tech Stack

- **[Next.js 14](https://nextjs.org/)** — App Router, React Server & Client Components
- **[TypeScript](https://www.typescriptlang.org/)** — type safety
- **CSS murni** — tanpa framework, semua animasi & layout ditulis manual (biar paham konsepnya dari nol)

## 📁 Struktur Project

```
hoshi-page/
├── app/
│   ├── layout.tsx          # Bingkai utama (header, nav, marquee, footer)
│   ├── page.tsx             # Halaman utama
│   ├── globals.css          # Semua styling & animasi
│   ├── profile/page.tsx     # Halaman profil karakter
│   ├── gallery/page.tsx     # Halaman galeri
│   ├── guestbook/
│   │   ├── page.tsx
│   │   └── GuestbookClient.tsx  # Komponen interaktif (client component)
│   └── links/page.tsx       # Halaman link banner
├── components/
│   ├── Nav.tsx               # Navigasi
│   ├── HitCounter.tsx        # Counter pengunjung (props-based)
│   └── CursorTrail.tsx       # Efek bintang ikuti kursor (useEffect)
└── public/
```

## 🚀 Menjalankan di Lokal

Pastikan sudah install [Node.js](https://nodejs.org/) terlebih dahulu.

```bash
# Clone repository
git clone https://github.com/rmzairin/hoshi-page.git
cd hoshi-page

# Install dependency
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📦 Build untuk Production

```bash
npm run build
npm run start
```

## ☁️ Deployment

Project ini di-deploy menggunakan **[Vercel](https://vercel.com/)**, terintegrasi otomatis dengan repository GitHub ini — setiap `git push` ke branch `main` akan otomatis memicu deployment baru.

## 🗺️ Roadmap

- [ ] Tambah efek MIDI player palsu
- [ ] Tambah lebih banyak badge webring
- [ ] Simpan data guestbook secara persisten

## 📄 Lisensi

Project ini dibuat untuk tujuan belajar/pribadi. Bebas dipakai sebagai referensi belajar Next.js.

---

<p align="center">
  ✦ Best viewed at 800x600 ✦ Since 2001-ish vibes ✦
</p>
