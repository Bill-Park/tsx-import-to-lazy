# Lazy Import Converter

`Lazy Import Converter` is a Visual Studio Code extension that helps you convert regular TypeScript React component imports to lazy-loaded imports. This can improve the performance of your React applications by splitting your code into smaller bundles that are loaded on demand.

## Features

- Convert selected import statements to lazy-loaded imports with a single command.

## Installation

- Install the extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/).

## Usage

1. Open a TypeScript file with an import statement.
2. Select the import statement you want to convert.
3. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
4. Run the command `Convert to Lazy Import`.

### Example

**Before:**

```typescript
import LoadingPage from "@/components/LoadingPage";
```

**After:**

```typescript
const LoadingPage = lazy(() => import("@/components/LoadingPage"));
```
