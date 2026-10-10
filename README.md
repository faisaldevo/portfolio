You can visit my [portfolio](https://portfolio-ashy-two-42.vercel.app/)
# Faisal Shakeel — Computer Vision & AI Portfolio

A production-ready React portfolio focused on Computer Vision, Machine Learning, Data Analytics, Intelligent Video Processing, GIS, and Transportation Asset Management.

## Stack

- React 19 + TypeScript
- Vite
- Framer Motion
- React Router DOM
- Lucide React
- Recharts
- Modern responsive CSS with reduced-motion support

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production checks

```bash
npm run lint
npm run build
npm run preview
```

The production output is created in `dist/`.

## Editing portfolio content

Most editable content lives in `src/data/portfolio.ts`:

- `socials` — update Upwork, Fiverr, LinkedIn, and email URLs
- `projects` — add or edit typed case studies, filters, pipelines, technologies, and metrics
- `skillGroups`, `experiences`, `services`, `technologies`, and `workflow` — update the corresponding sections

To add a project, duplicate a project object, give it a unique `slug`, and choose relevant filter names from `src/components/Projects.tsx`. A dedicated route is created automatically at `/projects/your-slug`.

## Résumé and profile

- The supplied résumé has been copied to `public/resume.pdf`. Replace this file with an updated PDF while keeping the same name to preserve all résumé links.
- To add a real profile image later, place it at `public/profile.jpg` and update `src/components/About.tsx`. The current design intentionally uses an abstract computer-vision identity panel instead of generating a fake photograph.

## Contact section

The contact section uses a direct email call to action. Update the address and subject line in `src/components/Contact.tsx` when needed.

## Push to GitHub

Create an empty repository named `portfolio` under [github.com/faisaldevo](https://github.com/faisaldevo), then run these commands from this project folder:

```bash
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/faisaldevo/portfolio.git
git push -u origin main
```

When creating the repository on GitHub, do not add another README or `.gitignore` because this project already contains both.

## Deploy to Vercel

1. Open [Vercel](https://vercel.com/) and sign in with GitHub.
2. Click **Add New Project**.
3. Select the `faisaldevo/portfolio` repository.
4. Confirm the framework preset is **Vite**.
5. Set **Build Command** to `npm run build`.
6. Set **Output Directory** to `dist`.
7. Click **Deploy**.

Vercel will provide a public HTTPS URL similar to `https://portfolio-faisaldevo.vercel.app`. Future pushes to the `main` branch will redeploy the site automatically.

The included `vercel.json` rewrites React Router routes to `index.html`, so refreshing a project case-study URL works after deployment.
