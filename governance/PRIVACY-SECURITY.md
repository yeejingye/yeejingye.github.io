# Privacy and security decisions

Updated: 2026-10-07

## Implemented

- Removed Analytics initialization, page tracking, react-ga4 and the build-time GA ID injection. Setting an existing GitHub secret no longer enables tracking.
- Fonts and their OFL licenses are stored in public/fonts. No Google Fonts request is needed.
- Added privacy and legal notice routes and footer links. No optional tracking or consent banner.
- Restricted production CSP to same-origin scripts, connections, fonts and images (plus data images). Exact hashes permit the inline SPA redirect and structured data; inline styles remain allowed for React/Radix components. No unsafe-eval.
- Added strict-origin-when-cross-origin referrer policy to the normal and fallback HTML.
- Removed generated node_modules, dist and legacy docs from Git tracking; local copies remain. npm ci and the lockfile define dependencies.
- Pull requests run the build, typecheck and privacy checks without deploying. Node 22 is used for builds.
- Deployment tokens have Pages write and OIDC permissions only in the deployment job.

## Legal information and review

- Owner supplied the service address on 2026-10-07; added it to LegalNotice.tsx and Privacy.tsx. Name confirmed by owner: Jingye Yee; display preference: Yee, Jingye.
- Owner/legal adviser must confirm Impressum applicability and any further mandatory details under DDG and applicable media law.
- Confirm the privacy notice matches actual email retention, hosting relationship, providers and transfer arrangements. GitHub’s public Pages documentation does not specify a precise security-log retention period; do not invent one.

## Infrastructure/account work (not implemented in HTML)

- GitHub Pages does not offer repository-defined custom response headers. To add frame-ancestors 'none', X-Content-Type-Options: nosniff and Permissions-Policy, configure a hosting layer that supports HTTP headers. X-Frame-Options and CSP frame-ancestors cannot be implemented using HTML meta tags. Do not add a misleading _headers file to this repository.
- At that layer, deliver CSP as an HTTP header as well, preserving hashes or replacing inline scripts appropriately. Restrict framing, disable camera/microphone/geolocation, retain HTTPS/HSTS and set Referrer-Policy.
- Confirmed via GitHub API: master currently has no branch protection.
- Review registrar/GitHub MFA, recovery, collaborators, least privilege, domain verification and branch protection. Protect master with pull requests and required build/privacy checks if compatible with the owner’s publishing workflow. Changes to access controls need a separate verified account operation.
- Remove obsolete VITE_GA_ID secret from repository settings if present. No secret values are needed in this static site.
- No GA account configuration is required while Analytics is removed. Any reintroduction requires an explicit privacy review, consent before any request, withdrawal, retention/advertising settings and processor/transfer review.

## Validation

Run npm run build, npx tsc --noEmit, npm run check:privacy and targeted lint. Review npm audit output after dependency changes; avoid forced major upgrades without migration testing.
Visually verify desktop/mobile privacy/footer layouts, local fonts, and direct routes through the 404 fallback. Check that no third-party resources are requested, and inspect browser storage in a clean session before release.

## Sources

- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
- https://www.gesetze-im-internet.de/ddg/__5.html
- https://www.gesetze-im-internet.de/ttdsg/__25.html
- https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679

## Dependency audit (2026-10-07)

Compatible lockfile updates reduced npm audit findings from 26 (18 high, 8 moderate) to 11 (5 high, 6 moderate). Remaining advisories are in the Tailwind 3 build-tool chain (braces/chokidar/micromatch/fast-glob and postcss-selector-parser/typography/postcss-nested), lovable-tagger via Tailwind, and React Router 6. The npm-proposed fixes require breaking major upgrades or unsuitable downgrades. No forced migration was applied.

Current exposure: CSS/glob input is repository-controlled, not supplied by site visitors; this is a static SPA with no SSR hydration or user-controlled navigation destinations. This reduces current exposure but does not remove the advisories. Review untrusted pull requests and keep CI tokens read-only. Plan a separately tested Tailwind 4 / Router 7 migration; do not describe the dependency tree as vulnerability-free.
