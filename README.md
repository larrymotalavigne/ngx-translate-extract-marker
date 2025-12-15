# @ngx-translate-extract/marker

> Modern ESM-based marker function for ngx-translate-extract with Angular 19+ support

[![npm version](https://img.shields.io/npm/v/@ngx-translate-extract/marker.svg)](https://www.npmjs.com/package/@ngx-translate-extract/marker)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modernized, type-safe marker function for [ngx-translate-extract](https://github.com/biesbjerg/ngx-translate-extract) that works seamlessly with Angular 19+ and uses pure ESM.

## Features

- ✨ **Modern ESM** - Pure ES Module implementation
- 🎯 **TypeScript First** - Written in TypeScript with strict mode enabled
- 🔒 **Type Safe** - Advanced type definitions for compile-time safety
- 🚀 **Angular 19+** - Built for the latest Angular versions
- 📦 **Zero Dependencies** - No runtime dependencies
- 🪶 **Lightweight** - Minimal bundle size impact
- 🌳 **Tree-shakeable** - Optimized for modern bundlers

## What is this?

This library provides a marker function to help [ngx-translate-extract](https://github.com/biesbjerg/ngx-translate-extract) identify translation strings that need to be extracted from your Angular application.

The marker function is a pure identity function - it returns its input unchanged. Its purpose is to provide a recognizable pattern that the extraction tool can identify during static code analysis.

## Installation

```bash
npm install @ngx-translate-extract/marker
```

Or using yarn:

```bash
yarn add @ngx-translate-extract/marker
```

Or using pnpm:

```bash
pnpm add @ngx-translate-extract/marker
```

## Usage

### Basic Usage

```typescript
import { marker } from '@ngx-translate-extract/marker';

// Mark a single translation key
const title = marker('HOME.TITLE');

// Mark multiple translation keys
const keys = marker(['HOME.TITLE', 'HOME.SUBTITLE', 'HOME.DESCRIPTION']);
```

### With TranslateService

```typescript
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { marker } from '@ngx-translate-extract/marker';

@Component({
  selector: 'app-home',
  template: '<h1>{{ title }}</h1>',
})
export class HomeComponent {
  // Mark the key for extraction
  private readonly translationKey = marker('HOME.WELCOME_MESSAGE');

  title: string = '';

  constructor(private translate: TranslateService) {
    this.translate.get(this.translationKey).subscribe((res: string) => {
      this.title = res;
    });
  }
}
```

### Using the `_` Alias

For convenience, you can use the shorter `_` alias:

```typescript
import { _ } from '@ngx-translate-extract/marker';

const title = _('HOME.TITLE');
```

### Type-Safe Translation Keys

Use TypeScript's type system to ensure compile-time safety:

```typescript
import { marker, TranslationKey } from '@ngx-translate-extract/marker';

// Define your app's translation keys
type AppTranslationKeys =
  | 'HOME.TITLE'
  | 'HOME.SUBTITLE'
  | 'ABOUT.TITLE'
  | 'CONTACT.FORM.SUBMIT';

// TypeScript will enforce only valid keys
const validKey: TranslationKey<AppTranslationKeys> = marker('HOME.TITLE'); // ✓ OK
const invalidKey: TranslationKey<AppTranslationKeys> = marker('INVALID.KEY'); // ✗ Type error
```

### Array of Translation Keys

```typescript
import { marker, TranslationKeys } from '@ngx-translate-extract/marker';

type AppKeys = 'HOME.TITLE' | 'HOME.SUBTITLE' | 'HOME.DESCRIPTION';

const keys: TranslationKeys<AppKeys> = marker([
  'HOME.TITLE',
  'HOME.SUBTITLE',
  'HOME.DESCRIPTION',
]);

// Use with TranslateService
this.translate.get(keys).subscribe((translations) => {
  console.log(translations);
});
```

### In Constants and Configuration

```typescript
import { marker } from '@ngx-translate-extract/marker';

export const NAVIGATION_ITEMS = [
  { path: '/home', label: marker('NAV.HOME') },
  { path: '/about', label: marker('NAV.ABOUT') },
  { path: '/contact', label: marker('NAV.CONTACT') },
] as const;

export const ERROR_MESSAGES = {
  required: marker('ERRORS.REQUIRED'),
  email: marker('ERRORS.INVALID_EMAIL'),
  minLength: marker('ERRORS.MIN_LENGTH'),
} as const;
```

## API Reference

### `marker<T>(key: T): T`

The main marker function. Accepts a string or readonly array of strings and returns it unchanged.

**Type Parameters:**
- `T` - Must be `string` or `readonly string[]`

**Parameters:**
- `key` - The translation key(s) to mark for extraction

**Returns:**
- The same key(s) unchanged

### `_<T>(key: T): T`

Alias for `marker`. Provides a shorter alternative name.

### `TranslationKey<T>`

Type helper for single translation keys.

**Type Parameters:**
- `T` - The string literal type for valid keys (default: `string`)

### `TranslationKeys<T>`

Type helper for arrays of translation keys.

**Type Parameters:**
- `T` - The string literal type for valid keys (default: `string`)

## Integration with ngx-translate-extract

This marker function works with [ngx-translate-extract](https://github.com/biesbjerg/ngx-translate-extract) to extract translation strings from your code.

### Example Configuration

```json
{
  "scripts": {
    "extract": "ngx-translate-extract --input ./src --output ./src/assets/i18n/{en,de}.json --clean --sort --format namespaced-json"
  }
}
```

The extraction tool will automatically recognize calls to `marker()` and `_()` and extract the marked strings.

## Why Use This Library?

### Problem

In Angular applications using ngx-translate, the extraction tool can automatically find translation strings used with `TranslatePipe`, `TranslateDirective`, or `TranslateService.get()`. However, sometimes you need to mark strings for extraction that aren't used in these ways:

- Constants defined in TypeScript files
- Configuration objects
- Dynamically constructed keys
- Validation messages
- Error messages stored as constants

### Solution

The marker function provides a clear, type-safe way to mark these strings for extraction:

```typescript
// Without marker - extraction tool won't find these
const ERROR_CODES = {
  NOT_FOUND: 'ERRORS.NOT_FOUND',
  UNAUTHORIZED: 'ERRORS.UNAUTHORIZED',
};

// With marker - extraction tool will find and extract these
const ERROR_CODES = {
  NOT_FOUND: marker('ERRORS.NOT_FOUND'),
  UNAUTHORIZED: marker('ERRORS.UNAUTHORIZED'),
};
```

## Comparison with Original

This is a modernized version of [@biesbjerg/ngx-translate-extract-marker](https://github.com/biesbjerg/ngx-translate-extract-marker) with several improvements:

| Feature | Original | This Library |
|---------|----------|--------------|
| Module System | CommonJS | Pure ESM |
| Angular Version | Angular 8-15 | Angular 19+ |
| TypeScript | Basic types | Strict mode with advanced types |
| Type Safety | Basic | Enhanced with type helpers |
| Bundle Size | Larger | Smaller (tree-shakeable) |
| Build System | Angular CLI | Modern TypeScript compiler |
| Documentation | Basic | Comprehensive with examples |
| Aliases | No | Yes (`_` alias available) |

## Requirements

- Node.js >= 18.0.0
- Angular >= 19.0.0
- TypeScript >= 5.7.0

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © 2024

## Related Projects

- [ngx-translate-extract](https://github.com/biesbjerg/ngx-translate-extract) - Extract translatable strings from your projects
- [@ngx-translate/core](https://github.com/ngx-translate/core) - The internationalization (i18n) library for Angular

## Credits

Inspired by [@biesbjerg/ngx-translate-extract-marker](https://github.com/biesbjerg/ngx-translate-extract-marker)

---

Made with ❤️ for the Angular community
