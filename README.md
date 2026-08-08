# Papua Chronicles

Papua Chronicles is an open reference site for learning about the history, customary regions, people, and important terms of Papua. The project is maintained by the Papua Open Source community, and its content can be reviewed and improved through GitHub.

[![Website](https://img.shields.io/badge/Website-papuachronicles.com-b74624)](https://papuachronicles.com)

## Available collections

- **FAQ** — concise answers to common questions about Papua
- **Glosarium** — explanations of important local and administrative terms
- **Jejak Sejarah** — sourced events presented as a chronological timeline
- **Wilayah Adat** — the seven customary regions and their communities
- **Tokoh Papua** — profiles of notable Papuan figures

Collections about galleries, languages, art, nature, contemporary Papua, and further reading are planned but not yet published.

## Features

- Static, content-focused pages built with Astro
- Responsive navigation and accessible keyboard focus
- Light and dark themes with the preference stored locally in the browser
- Markdown-based content collections with structured frontmatter
- Source lists for historical, regional, and biographical entries
- No account required to read the site

## Run locally

Requirements: Node.js and [pnpm](https://pnpm.io/).

```bash
git clone https://github.com/papuaopensource/papuachronicles.git
cd papuachronicles
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) in a browser.

Useful commands:

```bash
pnpm dev      # start the local development server
pnpm build    # create the production build in dist/
pnpm preview  # preview the production build locally
```

## Content structure

Content is stored as Markdown in `src/content/`:

```text
src/content/
├── faq/
├── glosarium/
├── sejarah/
├── tokoh/
└── wilayah/
```

Collection schemas are defined in `src/content.config.ts`. Existing entries provide the expected frontmatter and citation format for new content.

## Tech stack

- [Astro 6](https://astro.build/) for the static site
- [Tailwind CSS 4](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for interface icons
- [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) for deployment

## Contributing

Corrections, additional sources, and new entries are welcome. Read the [contribution guide](https://papuachronicles.com/kontribusi/) or open the repository on GitHub to create an issue, discussion, or pull request.

Please use clear Indonesian, cite factual claims, prefer primary or academic sources where available, and present sensitive topics with appropriate context.

## Privacy

The site does not require an account. Its theme preference is stored in browser `localStorage`. See the [privacy policy](https://papuachronicles.com/kebijakan-privasi/) for details about hosting, external links, and email communication.

## License

The repository software is available under the [MIT License](LICENSE). Quotes, images, linked sources, and other third-party material remain subject to their respective rights and terms.
