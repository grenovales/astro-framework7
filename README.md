# 🚀 Astro Framework7

![version][version-badge]
![downloads][downloads-badge]
![github actions][github-actions-badge]
![typescript][typescript-badge]
![makepr][makepr-badge]

[Framework7](https://framework7.io/) is a free and open source framework to develop mobile, desktop or web apps with native look and feel.

## 📦 Installation

### Quick Install

the `astro add` command-line tool automates the installation for you. Run one of the following commands in a new terminal window. (If you aren’t sure which package manager you’re using, run the first command.) Then, follow the prompts, and type “y” in the terminal (meaning “yes”) for each one.

```bash
# Using PNPM
pnpm astro add astro-framework7
# Using NPM
npx astro add astro-framework7
# Using Yarn
yarn astro add astro-framework7
```

### Manual Install

First, install the `framework7` & `astro-framework7` packages using your package manager. (If you aren’t sure which package manager you’re using, run the first command.)

Using PNPM

```bash
pnpm install framework7 astro-framework7
```

Using NPM

```bash
npm install framework7 astro-framework7
```

Using Yarn

```bash
yarn add framework7 astro-framework7
```

Then, apply this integration to your `astro.config.mjs` file using the integrations property:

```js
import framework7 from 'astro-framework7';

export default {
  // ...
  integrations: [framework7()]
};
```

> **Note**
>
> To make sure this integration works properly, it's recommended to put `framework7()`
> as the last element in the `integrations` array.

## 🥑 Usage


## 📖 Configuration

[Framework7 Docs](https://framework7.io/docs/app) has a list of options that allow you to customize its behavior. And this Astro integration allow you to pass those options easily in your `astro.config.mjs` file:

```js
export default defineConfig({
  integrations: [
    framework7({
      ...
    })
  ]
});
```

> **Note**
>
> 

### Available Options

Here is a list of options, that are allowed to be passed in the config:

```ts
export type Framework7Options = {
  ...
};
```


### Caveats


## Changelog

Please see the [Changelog](CHANGELOG.md) for more information on what has changed recently.

## Acknowledgements


<!-- Readme Badges -->

[version-badge]: https://img.shields.io/npm/v/astro-framework7.svg
[downloads-badge]: https://img.shields.io/npm/dt/astro-framework7
[github-actions]: https://github.com/codiume/orbit/actions
[github-actions-badge]: https://github.com/codiume/orbit/actions/workflows/node.js.yml/badge.svg
[typescript]: https://www.typescriptlang.org/dt/search?search=astro-framework7
[typescript-badge]: https://img.shields.io/npm/types/astro-framework7
[makepr]: https://makeapullrequest.com
[makepr-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square?style=flat
