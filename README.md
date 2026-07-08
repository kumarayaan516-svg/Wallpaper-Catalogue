# Atelier Wallcoverings — Sample Book (21 pages)

A free, self-hosted flipbook catalogue. No subscription, no watermark,
built on the open-source `page-flip.js` library.

## What's in this folder
```
wallpaper-catalogue/
├── index.html              ← the catalogue page itself
├── css/style.css           ← all visual design lives here
├── js/
│   ├── catalogue-data.js   ← EDIT THIS to add your real wallpaper designs
│   └── app.js               ← builds the pages, don't need to touch this
└── images/
    ├── patterns/            ← flat/close-up photos of each design
    └── rooms/                ← optional "in situ" room photos
```

## 1. Add your own wallpapers
Open `js/catalogue-data.js`. It's a list of 18 entries (one per pattern
page). For each one, fill in:
- `code`, `name`, `family` — your product name/SKU
- `description` — one or two sentences
- `width`, `repeat`, `finish` — spec details, like a real sample book
- `swatch` — a hex colour matching the design (shown as a small corner dot)
- `image` — path to a close-up photo of the pattern
- `roomImage` — path to a styled room photo (or set to `""` to hide it)

Drop your real photos into `images/patterns/` and `images/rooms/`,
then point each entry's `image`/`roomImage` at the new filename.

Keep exactly 18 pattern entries so the book totals 21 pages
(cover + intro + 18 designs + back cover). You can add or remove
entries — the book will just be a different total length.

## 2. Preview locally (optional)
Just double-click `index.html` to open it in a browser. Everything
(images, fonts, the flip library) loads normally, no server needed.

## 3. Publish for free with GitHub Pages
1. Create a free account at github.com
2. Create a new **public** repository, e.g. `wallpaper-catalogue`
3. Upload every file/folder from this project into it (drag-and-drop
   works fine, or use GitHub Desktop for many files)
4. Go to the repo's **Settings → Pages**, set Branch to `main` / `root`, save
5. After ~1 minute your catalogue is live at:
   `https://yourusername.github.io/wallpaper-catalogue/`

## 4. Embed on your SITE123 site
1. Open the page in the SITE123 editor where you want the catalogue
2. **+ Add New Section** → a text/content element → **Custom Code**
3. Paste:
   ```html
   <iframe src="https://yourusername.github.io/wallpaper-catalogue/index.html"
           width="100%" height="700" frameborder="0" allowfullscreen></iframe>
   ```
4. Use the Custom Height slider to fit it nicely, then Save & Publish

## Notes
- Fonts (Fraunces, Work Sans, Space Mono) and the page-flip library load
  from free public CDNs — no files to manage for those.
- Everything is editable: colours and type live in `css/style.css`
  under the `:root` section at the top if you want to match your brand.
