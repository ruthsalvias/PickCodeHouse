# PickCode House Website Starter

Website statis sederhana untuk PickCode House. Semua tombol konsultasi diarahkan langsung ke WhatsApp.

## Isi folder

```txt
pickcode-house-website/
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   ├── img/pickcode-house-promo.png
│   └── icons/favicon.svg
├── vercel.json
├── netlify.toml
├── _headers
├── package.json
└── README.md
```

## Cara edit nomor WhatsApp

Buka file:

```txt
assets/js/main.js
```

Lalu ubah bagian ini:

```js
const WHATSAPP_NUMBER = "6289502051985";
```

Gunakan format angka saja, contoh:

```js
const WHATSAPP_NUMBER = "6281234567890";
```

## Cara edit isi pesan WhatsApp

Di `index.html`, cari atribut `data-wa-text`.

Contoh:

```html
<a class="btn btn-primary js-whatsapp" href="#" data-wa-text="Halo PickCode House, saya ingin konsultasi pembuatan website.">
  Konsultasi via WhatsApp
</a>
```

Ubah kalimat di dalam `data-wa-text` sesuai kebutuhan.

## Cara jalan di laptop

Cara paling mudah:

1. Buka folder ini.
2. Klik dua kali `index.html`.
3. Website akan terbuka di browser.

Cara dengan local server:

```bash
npm install
npm run dev
```

Lalu buka alamat yang muncul di terminal.

## Deploy ke Vercel

1. Upload folder ini ke GitHub.
2. Masuk ke Vercel.
3. Add New Project.
4. Pilih repository project ini.
5. Deploy.

Tidak perlu build command khusus karena ini website statis.

## Deploy ke Netlify

1. Masuk ke Netlify.
2. Pilih Add new site.
3. Bisa import dari GitHub atau drag-and-drop folder.
4. Publish directory: `.`

## Deploy ke Cloudflare Pages

1. Upload folder ini ke GitHub.
2. Masuk ke Cloudflare Pages.
3. Create project.
4. Hubungkan repository GitHub.
5. Build command dikosongkan.
6. Output directory: `/`

## Bagian yang bisa kamu edit cepat

- Nama brand: `PickCode House`
- Nomor WhatsApp: `assets/js/main.js`
- Teks layanan: bagian `#layanan` di `index.html`
- Paket harga: bagian `#paket` di `index.html`
- Foto utama: `assets/img/pickcode-house-promo.png`
