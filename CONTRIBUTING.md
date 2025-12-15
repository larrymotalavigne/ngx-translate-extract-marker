# Contributing to @ngx-translate-extract/marker

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/ngx-translate-extract-marker.git`
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## Development

### Prerequisites

- Node.js >= 18.0.0
- npm, yarn, or pnpm

### Available Scripts

```bash
# Build the project
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Lint code
npm run lint

# Format code
npm run format
```

### Project Structure

```
├── src/
│   ├── marker.ts       # Main marker function implementation
│   ├── marker.spec.ts  # Tests for marker function
│   └── index.ts        # Public API exports
├── dist/               # Built output (generated)
├── package.json        # Package configuration
├── tsconfig.json       # TypeScript configuration
├── vitest.config.ts    # Vitest configuration
└── README.md           # Documentation
```

## Making Changes

### Code Style

- Follow the existing code style
- Use TypeScript with strict mode
- Write clear, descriptive JSDoc comments
- Format code with Prettier before committing
- Ensure ESLint passes without errors

### Testing

- Write tests for new features
- Ensure all tests pass before submitting
- Aim for high test coverage
- Test edge cases and error conditions

### Commit Messages

Use clear and descriptive commit messages following the conventional commits format:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `test:` Test additions or changes
- `refactor:` Code refactoring
- `chore:` Maintenance tasks

Examples:
```
feat: add support for nested translation keys
fix: resolve type inference issue with arrays
docs: update usage examples in README
test: add tests for edge cases
```

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Update the CHANGELOG.md with your changes
3. Ensure all tests pass and the build succeeds
4. Ensure code is properly formatted and linted
5. Write a clear PR description explaining your changes
6. Link any related issues in the PR description

### PR Checklist

- [ ] Tests added/updated and passing
- [ ] Code follows the project's style guidelines
- [ ] Documentation updated (if applicable)
- [ ] CHANGELOG.md updated
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Code formatted with Prettier

## Reporting Issues

When reporting issues, please include:

1. A clear and descriptive title
2. Steps to reproduce the issue
3. Expected behavior
4. Actual behavior
5. Your environment (Node.js version, Angular version, etc.)
6. Any relevant code samples or error messages

## Feature Requests

Feature requests are welcome! Please:

1. Check existing issues to avoid duplicates
2. Clearly describe the feature and its use case
3. Explain why this feature would be useful
4. Provide examples if possible

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors.

### Our Standards

- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards others

## Questions?

If you have questions, feel free to:

- Open an issue with the "question" label
- Check existing documentation and issues

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to @ngx-translate-extract/marker!
