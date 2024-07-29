# aiis-work

## Project Setup

1. `clone` the project
2. `npm install`
3. Create a `.env.local` file in the project root (or duplicate the `.env.sample` file and rename it to `.env.local`)
4. Add a `VITE_API_URL` environment variable with the right value in `.env.local` file
5. Run the project with `npm run dev` command

**Commands**

- Run the project: `npm run dev`
- Run the tests (e2e): `npm run test:e2e:dev`

## Extra info

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```

#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

#### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
