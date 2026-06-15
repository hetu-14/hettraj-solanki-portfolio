This repo now ships a native Next.js version of the DevOps universal guide.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the guide.

## Deploy on Vercel

The app is Vercel-ready.

## Deploy

1. Push the repo to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js settings.

## Notes

- The homepage is a native React implementation, not an iframe wrapper.
- `public/devops_universal_guide.html` is kept as the original source reference.
- `vercel.json` is included for explicit Next.js deployment metadata.
