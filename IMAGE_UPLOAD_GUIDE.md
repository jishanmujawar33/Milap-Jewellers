# ⚜️ Milap Jewellers - Image Upload & Customization Guide

This guide explains how to upload your physical jewelry photos so they display perfectly on both the development server and the final production deployment!

---

## 🚀 Why are we using the `/public` folder?
In modern Javascript frameworks like React and Vite:
- Placing images inside `/src/assets` causes the compiler to compress, obfuscate, and rename them with randomized hashes (e.g., `gold-ring-A9fb3f.png`) during deployment. If you code regular path strings, the app won't find them and they will show up broken when deployed.
- **Placing images inside `/public/` is the golden standard.** Files inside public are served *exactly as-is* without any renaming. For example, a file saved at `/public/images/products/gold-ring.jpg` can be referenced in the website code as `/images/products/gold-ring.jpg` and will work perfectly **100% of the time, before and after deploying!**

---

## 📁 Organized Image Folders
We have pre-created designated workspaces under `/public/images/`. Here is the blueprint of what files should go where, their dimensions, and matching filenames.

### 1. Showroom Tour Gallery (`/public/images/showroom/`)
*Widescreen physical photos of your boutique location in Hanuman Nagar, Kandivali East.*

| Filename | Purpose | Recommended Resolution |
| :--- | :--- | :--- |
| **`showroom-storefront.jpg`** | Hanuman Nagar Flagship Front Facade | 1200 x 800 (or wider) |
| **`showroom-gold-salon.jpg`** | Main gold & diamond viewing showroom counter | 1200 x 800 (or wider) |
| **`showroom-private-suite.jpg`** | Private family consultation bridal lounge | 1200 x 800 (or wider) |
| **`showroom-atelier-desk.jpg`** | Master Karigar live metalwork/sketch desk | 1200 x 800 (or wider) |
| **`showroom-polki-room.jpg`** | Traditional uncut Jadau collection capsule | 1200 x 800 (or wider) |
| **`showroom-solitaire-lab.jpg`** | Diamond inspection and grading chambers | 1200 x 800 (or wider) |

---

### 2. Digital Showcase Product Catalog (`/public/images/products/`)
*High-resolution, detailed photos of individual designs showing fine gold, diamond, and silver detailing.*

| Filename | Matching Product Name | Recommended Aspect |
| :--- | :--- | :--- |
| **`royal-gilded-choker.jpg`** | The Royal Gilded Choker Set | 1:1 Square or 3:4 Vertical |
| **`celestial-solitaire-ring.jpg`** | The Celestial Solitaire Ring | 1:1 Square or 3:4 Vertical |
| **`antique-heritage-kadas.jpg`** | Antique Nakshi Heritage Kadas | 1:1 Square or 3:4 Vertical |
| **`polki-medallion-jhumkas.jpg`** | Heritage Polki Medallion Jhumkas | 1:1 Square or 3:4 Vertical |
| **`temple-emerald-necklace.jpg`** | Golden Temple Emerald Necklace | 1:1 Square or 3:4 Vertical |
| **`infinite-tennis-cuff.jpg`** | Infinite Light Tennis Cuff | 1:1 Square or 3:4 Vertical |
| **`varanasi-blossom-jhumkas.jpg`** | Varanasi Blossom Jhumkas | 1:1 Square or 3:4 Vertical |
| **`imperial-kundan-mathapatti.jpg`** | Imperial Kundan Matha Patti Set | 1:1 Square or 3:4 Vertical |
| **`filigree-silver-kada.jpg`** | Imperial Filigree Silver Kada (925) | 1:1 Square or 3:4 Vertical |
| **`silver-tea-set.jpg`** | Classic Sterling Silver Tea Set | 1:1 Square or 3:4 Vertical |

---

### 3. Promotional Hero Slides (`/public/images/hero/`)
*Cinematic, beautiful landscapes or model photos showing royal ornaments in the top banner.*

| Filename | Slide Topic | Recommended Resolution |
| :--- | :--- | :--- |
| **`hero-bridal-choker.jpg`** | Heritage Royal Polki / Kundan Choker banner | 1920 x 1080 (16:9 Landscape) |
| **`hero-solitaire-sparkle.jpg`** | Flawless GIA solitaire ring banner | 1920 x 1080 (16:9 Landscape) |
| **`hero-nakshi-antique.jpg`** | Classic Temple and Antique heavy gold banner | 1920 x 1080 (16:9 Landscape) |

---

## 🛠️ How to Upload your images in AI Studio
1. Locate the **File Explorer** tab in the left panel of AI Studio.
2. Find the `/public/images/` folder.
3. Open the target subfolder (e.g., `/products/` or `/showroom/`).
4. **Drag and Drop** your offline image files from your computer's folder directly onto that file folder space.
5. In your computer, rename your images to match the exact lowercase filenames specified in this guide (e.g., rename your choker photo to `royal-gilded-choker.jpg` *before* or *after* uploading).

### ✨ Magical Fail-Safe Coding
We have implemented a **dynamic online fallback** inside the website. If you haven't uploaded a photo yet, or if a renamed file typo occurs, the webpage will automatically load our stunning curated stock replacement of the same category instead. There will be **absolutely no broken image icons on your website!**
