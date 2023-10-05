# ESBuild plugin removetestid [![test](https://github.com/mayank1513/esbuild-plugin-removetestid/actions/workflows/test.yml/badge.svg)](https://github.com/mayank1513/esbuild-plugin-removetestid/actions/workflows/test.yml) [![codecov](https://codecov.io/gh/mayank1513/esbuild-plugin-removetestid/graph/badge.svg)](https://codecov.io/gh/mayank1513/esbuild-plugin-removetestid) [![Version](https://img.shields.io/npm/v/esbuild-plugin-removetestid.svg?colorB=green)](https://www.npmjs.com/package/esbuild-plugin-removetestid) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/dt/esbuild-plugin-removetestid.svg)](https://www.npmjs.com/package/esbuild-plugin-removetestid) [![Unit Tests](https://github.com/mayank1513/esbuild-plugin-removetestid/actions/workflows/test.yml/badge.svg)](https://github.com/mayank1513/esbuild-plugin-removetestid/actions/workflows/test.yml) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/esbuild-plugin-removetestid)

> This package is deprecated in favor of [esbuild-plugin-react18](https://github.com/mayank1513/esbuild-plugin-react18).
> Please switch to [esbuild-plugin-react18](https://github.com/mayank1513/esbuild-plugin-react18), which also offers additional options and more control over your build output. There is also a [template repository](https://github.com/mayank1513/turborepo-template.git) which you can use to create your next library.

This is a simple esbuild plugin to remove `data-testid` attribute. Use this along with `esbuild-plugin-ignoretests`. [Ref](https://stackoverflow.com/questions/77027129/how-to-automatically-remove-data-testid-while-building-library-with-tsup-esbuild)

## Compatibility

- JavaScript/TypeScript React libraries using `tsup` or other builders based on `esbuild`

This plugin seamlessly integrates with `tsup` and any other builders based on `esbuild`.

## Install

```bash
$ pnpm add esbuild-plugin-removetestid
# or
$ npm install esbuild-plugin-removetestid
# or
$ yarn add esbuild-plugin-removetestid
```

## Usage

```ts
// tsup.config.ts or tsup.config.js
import { defineConfig } from "tsup";
import removeTestidPlugin from "esbuild-plugin-removetestid";

export default defineConfig(options => ({
    ...
    esbuildPlugins:[removeTestidPlugin()]
}));
```

### 🤩 Don't forger to start this repo!

Want handson course for getting started with Turborepo? Check out [React and Next.js with TypeScript](https://www.udemy.com/course/react-and-next-js-with-typescript/?referralCode=7202184A1E57C3DCA8B2)

![Repo Stats](https://repobeats.axiom.co/api/embed/2ef1a24385037998386148afe5a98ded6006f410.svg "Repobeats analytics image")

## License

Licensed as MIT open source.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
