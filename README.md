# Ranges Sugar Holdings — Portfolio Edition

An ongoing collaborative client website presenting a Kenyan sugar beet processing business, its agricultural activities and its manufacturing work.

**Status:** In active development with client feedback and content updates in progress.  
**Contributors:** Patience Nduta ([@Nduta06](https://github.com/Nduta06)) and Alfred Muriu.  
**Client website:** **[Link to be added after client deployment]**

> This is a sanitized, independent portfolio edition. It has fresh Git history and no deployment connection to the private client repository. Changes here do not update the client website.

## Project purpose

The project gives visitors a clear introduction to the company, explains the sugar beet approach, presents farming and factory activities, and provides navigation to company information and contact pages.

The public edition demonstrates the application structure and interactive features while replacing client assets and contact information with illustrative sample content.

## Features

- Six pages: Home, About, Why Sugar Beet, Our People, Gallery and Contact.
- Reusable navigation, hero, footer, motion and call-to-action components.
- Responsive layouts and mobile navigation with keyboard focus handling.
- Filterable gallery with a modal viewer, Escape-to-close behavior and image error feedback.
- Production-film placeholder ready for a future approved video.
- Page metadata, sitemap structure and reduced-motion support.
- Static HTML export with no database or authentication requirement.

## Stack

| Technology | Use |
| --- | --- |
| Next.js App Router | Routing, metadata and static export |
| React + TypeScript | Typed components and interaction state |
| Tailwind CSS | Responsive styling |
| Framer Motion + Lenis | Animation and scrolling |
| Lucide React | Icons |

## Collaboration

Patience Nduta and Alfred Muriu are collaborating on this ongoing client project. This repository showcases their shared website work; it does not claim that either contributor built every feature independently. Individual feature ownership is not documented here.

The portfolio edition retains the implementation patterns while removing client-specific infrastructure and assets. Its preparation does not replace or rewrite the authorship history of the private project.

## Run locally

Requires Node.js 22.13 or later and npm.

```bash
git clone https://github.com/Nduta06/Rangers-Sugar-Holdings-Portfolio.git
cd Rangers-Sugar-Holdings-Portfolio
npm ci
npm run dev
```

Open http://localhost:3000.

```bash
npm run typecheck
npm run lint
npm run build
```

The production build exports the site to `out/`. Serve that folder with a static hosting service that supports directory index pages. No deployment workflow is connected to the client.

Optionally copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your own portfolio deployment URL. The default is the reserved example domain. System fonts are used so the build does not fetch Google Fonts.

## Structure

```text
app/             Pages, layout, styling and metadata routes
components/      Shared UI and gallery interactions
lib/             Sample site configuration and film placeholder
public/media/    Neutral SVG illustrations (no client originals)
docs/            Portfolio notes and verification record
```

## Privacy and separation

- Client email, phone numbers, street/postal details and map identifiers are replaced or withheld.
- Original photos, people images, logo and videos are excluded; local SVG illustrations keep media references functional.
- Hosting project identifiers, connector/auth scaffolding, internal handover notes and original Git history are excluded.
- There are no client deployment credentials, database exports or environment files in this edition.
- Demo phone controls lead to the sample contact page. The email uses the reserved `example.com` domain.
- Search indexing is disabled for the demo, and client business structured data is excluded.
- The company/project name and general public-facing description are retained for context.

Use reviewed snapshots when bringing future changes into this repository. Do not mirror the private repository or copy its history/environment files.

## Ongoing work

- Final client review and deployment.
- Final production film and approved media integration in the private client version.
- Add the public client website link above after deployment.

## Rights

Published for portfolio review. No open-source license is granted for the project code. Client names and any associated marks remain the property of their respective owners. Third-party packages retain their own licenses; the neutral placeholder illustrations are supplied solely for this portfolio edition.

See [verification notes](docs/verification.md) for checks and limitations.
