# primo_pre_interview

A TypeScript implementation of a merge function that combines three sorted number collections into a single sorted array in ascending order.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (bundled with Node.js)

## Setup

Install all dependencies:

```bash
npm install
```

## Project Structure

```
├── src/
│   └── merge.ts        # merge function implementation
├── tests/
│   └── merge-tests.ts  # Jest unit tests
├── jest.config.js
└── tsconfig.json
```

## Usage

The `merge` function accepts three sorted number arrays and returns a single merged array sorted in ascending order.

- `collection_1` — sorted ascending
- `collection_2` — sorted ascending
- `collection_3` — sorted descending

```typescript
import { merge } from "./src/merge";

const result = merge([1, 2, 3], [2, 4], [9, 6, 3]);
// result: [1, 2, 2, 3, 3, 4, 6, 9]
```

## Running Unit Tests

```bash
npx jest
```

To run tests with verbose output:

```bash
npx jest --verbose
```
