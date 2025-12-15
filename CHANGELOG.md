# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-12-15

### Added
- Pure ESM module implementation
- Support for Angular 19+
- TypeScript strict mode with advanced type checking
- `TranslationKey<T>` type helper for type-safe keys
- `TranslationKeys<T>` type helper for arrays
- `_` alias for the marker function
- Comprehensive test suite with Vitest
- Modern build system using TypeScript compiler
- Enhanced documentation with detailed examples
- ESLint and Prettier configuration
- Vitest for testing
- Full type declarations with declaration maps

### Changed
- Migrated from CommonJS to pure ESM
- Updated to use latest TypeScript (5.7+)
- Improved TypeScript type definitions with readonly arrays
- Enhanced JSDoc comments for better IDE support
- Modernized package.json with proper exports field
- Package name changed to @larrym/ngx-translate-extract-marker

### Removed
- Angular CLI build dependency
- CommonJS support (use ESM imports only)

## [1.0.0] - Previous Version

Original implementation by @biesbjerg with CommonJS support for Angular 8-15.
