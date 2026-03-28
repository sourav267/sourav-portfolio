# Sourav Kumar | Senior Engineer Portfolio

A React + Vite portfolio highlighting senior full-stack engineering experience, featured projects, and core technical skills.

## Tech Stack

- React 19
- TypeScript
- Vite
- Motion
- Lucide React

## Local Development

Prerequisite: Node.js 20+ (or current LTS).

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the app:

```text
http://localhost:3000
```

## Available Scripts

- `npm run dev`: Start local development server on port 3000.
- `npm run build`: Create production build in `dist/`.
- `npm run preview`: Preview production build locally.
- `npm run lint`: Run TypeScript type checks (`tsc --noEmit`).

## Project Structure

```text
src/
   components/
      Navbar.tsx
      Profile.tsx
      Experience.tsx
      Education.tsx
      Projects.tsx
      Skills.tsx
      Footer.tsx
   App.tsx
   App.module.css
   constants.tsx
   index.css
   main.tsx
```

## Deployment

This app is static and can be deployed to GitHub Pages, Vercel, or Netlify.

### Vercel

1. Import the GitHub repository in Vercel.
2. Framework preset: Vite.
3. Build command: `npm run build`.
4. Output directory: `dist`.

### GitHub Pages

1. Add a deploy flow (for example, with `gh-pages` or GitHub Actions).
2. If deploying to a project path, set Vite `base` in `vite.config.ts`.

## Contact

- GitHub: https://github.com/sourav267
- LinkedIn: https://linkedin.com/in/sourav13
