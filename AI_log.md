# AI Change Log

## Project updates

- Configured Tailwind CSS v4 with the Vite plugin, theme tokens, responsive utilities, and class-based dark mode.
- Added a reusable `useLocalStorage` hook and a persistent theme toggle.
- Added a `useRepos` hook with loading, error, and empty states, plus a 10-minute GitHub repository cache and loading skeleton.
- Connected the GitHub repositories section to the hook and fixed repository links.
- Used native `<dialog>` for project details with Escape-key and backdrop dismissal.
- Converted project cards and their responsive grid to Tailwind utilities while retaining the existing card content.
- Added a mobile navigation menu with a 767px breakpoint.
- Converted 24 portfolio images to resized WebP assets and enabled lazy loading for gallery images.
- Improved document language, title, description metadata, image loading priority, and carousel touch targets.

## Validation

- `npm run build` — passed.
- `npm run lint` — passed.

## Notes

- Lighthouse scores were not re-measured after these changes.
- Deployment to Vercel has not been performed.
