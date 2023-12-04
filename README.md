# TXP Prueba

Challenge solution built by Alejandro Camarillo. Using a combination of Vue 3, Vite, Pinia and TailwindCSS.

## Decisions

- Using vite for the speed when compared to Vue CLI.
- Pinia as a Store Manager instead of Vuex due to it's API.
- TailwindCSS for speed of styling, adding it early to have it all together.
- Using pravatar.cc to quickly get some avatars going.
- Will be doing some minor styling between tasks so the current product version is still appealing to the eye.
- Even when the task _implicitly_ called for a List, I ended up using a Table as it's a better tool for the job, it has great default styling and allows for this kind of tabulated data to fit nicely.

## Tasks

[x] Task 1: Create UserList Component
[ ] Task 2: Fetch Users Data
[ ] Task 3: Add User Search Functionality
[ ] Task 4: Styling

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
