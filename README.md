# K. Hakesh Reddy — Documentary Filmmaker & Film Director Portfolio

Official personal portfolio web application of **K. Hakesh Reddy**, documentary filmmaker, film director, and B.Sc. Digital Filmmaking student at Jain (Deemed-to-be University), Bengaluru, India.

## Features
- **Cinematic Visuals & Atmospheric Design**: 35mm projector projector light beam atmosphere, vintage gold marquee banner, and custom typography (`Cinzel`, `Space Grotesk`, `JetBrains Mono`).
- **Award-Winning Spotlight Cut & Footage Archive**: Embedded Instagram reels showcasing the IFP 50-hour challenge submission and visual studies.
- **Interactive Resume Modal & PDF Generator**: Complete professional CV with education, work experience, awards, and direct A4 PDF download.
- **Private Google Drive Vault**: Secure owner-only Google Drive integration using Firebase Auth and Google Drive API to manage scripts, call sheets, and production notes in strict privacy.

---

## Publishing & Deploying to GitHub

To publish this project to GitHub and deploy it live:

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: K. Hakesh Reddy Portfolio"
   ```

2. **Push to GitHub**:
   Create a new repository on [GitHub](https://github.com), then run:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Build for Production**:
   To generate the production-ready static bundle in the `dist/` directory:
   ```bash
   npm run build
   ```

4. **Deploy Options**:
   - **GitHub Pages**: You can deploy the `dist/` folder using GitHub Actions or gh-pages package.
   - **Vercel / Netlify**: Simply connect your GitHub repository to Vercel or Netlify with build command `npm run build` and output directory `dist`.
