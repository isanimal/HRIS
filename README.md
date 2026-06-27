# HRIS IDOR Lab

Aplikasi demo HRIS berbasis Next.js untuk latihan memahami IDOR (Insecure Direct Object Reference). Aplikasi ini menampilkan dashboard HRIS, halaman profil karyawan, dan endpoint API profil yang sengaja dibuat rentan untuk kebutuhan training lokal.

> Catatan: data di aplikasi ini adalah dummy. Jangan gunakan pola akses data pada demo ini untuk production.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- lucide-react

## Prasyarat

Pastikan sudah terpasang:

- Node.js 20 atau lebih baru
- npm

Cek versi:

```bash
node -v
npm -v
```

## Cara Menjalankan Aplikasi

1. Masuk ke folder project:

```bash
cd "/Users/macbookpro/Visual Studio Code/HRIS"
```

2. Install dependency:

```bash
npm install
```

3. Jalankan development server:

```bash
npm run dev
```

4. Buka aplikasi di browser:

```text
http://localhost:3000
```

Halaman utama akan otomatis diarahkan ke:

```text
http://localhost:3000/dashboard
```

## Route Penting

- `/dashboard` - dashboard utama HRIS
- `/profile?id=123` - profil karyawan aktif
- `/profile?id=124` - contoh profil karyawan lain untuk demo IDOR
- `/api/profile?id=123` - response JSON profil karyawan
- `/api/profile?id=124` - contoh API yang mengembalikan data karyawan lain

## Demo IDOR

Aplikasi ini sengaja menggunakan `id` dari query string tanpa validasi ownership.

Contoh:

```text
/profile?id=123
/profile?id=124
```

User aktif di-hardcode sebagai employee `123`, tetapi halaman dan API tetap bisa menampilkan data employee lain jika parameter `id` diganti. Ini digunakan untuk menunjukkan kenapa object-level authorization perlu diterapkan sebelum data profil dikembalikan.

## Script yang Tersedia

Jalankan development server:

```bash
npm run dev
```

Build aplikasi:

```bash
npm run build
```

Jalankan hasil build production:

```bash
npm run start
```

Cek TypeScript:

```bash
npm run typecheck
```

## Struktur Folder Singkat

```text
app/
  api/profile/route.ts   Endpoint API profil
  dashboard/page.tsx     Halaman dashboard
  profile/page.tsx       Halaman profil karyawan
components/
  Avatar.tsx             Komponen avatar
  LabShell.tsx           Layout utama aplikasi
lib/
  data.ts                Data dummy employee
```

## Troubleshooting

Jika port `3000` sudah digunakan, Next.js biasanya akan menawarkan port lain. Buka URL yang muncul di terminal, misalnya:

```text
http://localhost:3001
```

Jika dependency bermasalah, hapus `node_modules` lalu install ulang:

```bash
rm -rf node_modules
npm install
```
