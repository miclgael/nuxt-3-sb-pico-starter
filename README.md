# [Nuxt 3](https://nuxt.com/), [Storybook (Vite)](https://storybook.js.org/docs/vue/builders/vite), [Vitest](https://vitest.dev/), [Pico CSS](https://picocss.com/) starter

Check out the [Nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Features

- [x] 🎨 Pico.css minimal CSS framework
- [x] 📚 Storybook
- [x] 🏗️ 4 Starter components (`v-grid`, `v-section`, `v-markup`, `v-button`), with stories and unit tests
- [x] 💚 Vite-friendly
- [x] 😎 BYO everything else!
- [x] ✨ `pnpm` by default

## Setup

Make sure to install the dependencies:

```bash
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Storybook

To work on components in isolation using Storybook:

```bash
pnpm run storybook
```

## Testing

Run tests with [Vitest](https://vitest.dev/api/) and [Vue test utils](https://test-utils.vuejs.org/)

```bash
pnpm run test
```
