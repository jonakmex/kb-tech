# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Knowledge base (KB Tech)

This repository is set up to publish short, reusable technical examples.

### Recommended structure

- `docs/`: MDX documentation (tutorials, reference, troubleshooting).
- `examples/`: runnable source code by topic.
- `static/downloads/`: downloadable ZIP files for examples.

### Included templates

In `docs/templates` you already have three templates to speed up content creation:

- `tutorial-template.mdx`
- `reference-template.mdx`
- `troubleshooting-template.mdx`

### Suggested workflow per article

1. Create the MDX document in `docs/<topic>/<subtopic>/...`.
2. Add the runnable example in `examples/<example-name>/`.
3. Publish the ZIP file in `static/downloads/`.
4. Add the download section with `ExampleDownloadSection`.
5. Register the page in `sidebars.js`.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
