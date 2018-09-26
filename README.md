[![npm version](https://badge.fury.io/js/%40gradiant%2Fsmart-xapi-dsl.svg)](https://badge.fury.io/js/%40gradiant%2Fsmart-xapi-dsl)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

# Smart XAPI DSL

Specific xAPI vocabulary for SMART projects

## Overview

Includes everything exported from [@gradiant-xapi-dsl/types](https://github.com/Gradiant/gradiant-xapi-dsl/tree/master/src/types) and a sub set of [@gradiant-xapi-dsl/dsl](https://github.com/Gradiant/gradiant-xapi-dsl/tree/master/src/dsl) vocabulary specific for SMART projects.

It also include a set of utility functions to checks for specific activity types, verbs, recipes, etc

Check the [markdown documentation](./docs/README.md) for more info about what is exported

## Docs

## Scripts

### npm run build

Compile typescript files from the `src` folder inside the `build` folder

### npm run clean

Remove the following directories/files

- **build**
- **reports**

### npm test

Run tests files inside the `tests` folder that matches **\*.test.ts** pattern

### npm run cover

The same as as `npm test` and generates coverages reports in `reports/coverage`

### npm run lint

Run `tslint` and `prettier` and exit on error

### npm run lint:fix

Run `tslint` and `prettier` applying the available fixes

### npm run ci

Check linters and run the tests
