# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-12-15

### Added
- Pure ESM module implementation
- Support for Angular 19+
- TypeScript strict mode with advanced type checking
- `TranslationKey<T>` type helper for type-safe keys
- `TranslationKeys<T>` type helper for arrays
- `_` alias for the marker function
- Comprehensive test suite with Vitest (21 passing tests)
- Modern build system using TypeScript compiler
- Enhanced documentation with detailed examples
- ESLint and Prettier configuration
- Vitest for testing
- Full type declarations with declaration maps
- GitHub Actions CI/CD workflows
- Package published as @larrym/ngx-translate-extract-marker

### Features
- Pure identity function that returns input unchanged
- Works with ngx-translate-extract for static code analysis
- Type-safe with generic constraints
- Tree-shakeable for optimal bundle size
- Zero runtime dependencies

### Notes
This is a modernized fork inspired by [@biesbjerg/ngx-translate-extract-marker](https://github.com/biesbjerg/ngx-translate-extract-marker), completely rewritten with:
- ESM instead of CommonJS
- Angular 19+ support (previously Angular 8-15)
- Modern TypeScript with strict mode
- Enhanced type safety and developer experience
