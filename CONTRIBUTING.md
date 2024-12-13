# Contributing to FusionSpace

Thank you for your interest in contributing to FusionSpace! This document provides guidelines and instructions for contributing to our project.

## Important Project Links

- [Project Setup Guide](./docs/setup.md)
- [Code Style Guide](./docs/style-guide.md)
- [API Documentation](./docs/api/README.md)
- [Database Schema](./docs/database/schema.md)
- [UI Components](./src/components/README.md)

## Development Environment Setup

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)
- Git

### Setting Up Your Development Environment

1. Fork the repository
2. Clone your fork:
```bash
git clone https://github.com/YOUR_USERNAME/FusionSpace.git
cd FusionSpace
```

3. Install dependencies:
```bash
npm install
```

## Available Scripts

Our project uses several npm scripts for development, building, and deployment. Here's what each script does:

### `npm start`
```bash
"start": "electron-forge start"
```
- Starts the application in development mode
- Launches both the Electron process and development server
- Enables hot reload for React components
- Shows developer tools automatically
- Use this during development for testing changes

### `npm run package`
```bash
"package": "electron-forge package"
```
- Creates a directory with executable files
- Bundles your application without creating installers
- Useful for testing the packaged application
- Output is placed in the `out` directory
- Doesn't create installation files

### `npm run make`
```bash
"make": "electron-forge make"
```
- Creates platform-specific distributables (installers)
- Builds the application for production
- Creates installation files for your OS
- Outputs installers to the `out` directory
- Use this when preparing a release

### `npm run publish`
```bash
"publish": "electron-forge publish"
```
- Packages and publishes the application
- Creates installers and publishes to configured targets
- Can publish to platforms like GitHub Releases
- Requires proper configuration in forge.config.js
- Use for releasing new versions

### `npm run lint`
```bash
"lint": "eslint --ext .ts,.tsx ."
```
- Checks code for style and potential errors
- Runs ESLint on TypeScript and TSX files
- Helps maintain code quality
- Must pass before submitting PRs
- Can automatically fix some issues with `--fix` flag

## Development Workflow

1. Start development:
```bash
npm start
```

2. Make your changes and test them locally

3. Check for linting errors:
```bash
npm run lint
```

4. Test packaging:
```bash
npm run package
```

5. Create installers for testing:
```bash
npm run make
```

6. When ready to publish:
```bash
npm run publish
```

[... rest of the previous CONTRIBUTING.md content ...]
## Development Guidelines

### Technology Stack
- Electron
- React
- Webpack
- Babel
- TypeScript

### Code Style
- Use TypeScript for all new code
- Follow the existing code formatting style
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages following conventional commits

### TypeScript Guidelines
- Enable strict mode in TypeScript configuration
- Use interfaces for object shapes
- Avoid using `any` type
- Document complex types and interfaces

### Component Guidelines
- Use functional components with hooks
- Keep components small and focused
- Implement proper error handling
- Write unit tests for components
- Use proper prop-types or TypeScript interfaces

### Testing
- Write unit tests for new features
- Ensure all tests pass before submitting PR
- Maintain minimum 80% code coverage
- Use Jest and React Testing Library

## Pull Request Process

1. Update documentation and README.md if needed
2. Ensure your code follows our style guidelines
3. Run all tests and ensure they pass
4. Update the changelog with your changes
5. Submit a pull request with a clear description of changes

### PR Title Format
Use conventional commits format:
- `feat: add new feature`
- `fix: resolve bug`
- `docs: update documentation`
- `chore: update dependencies`
- `refactor: improve code structure`

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring
- [ ] Other (please specify)

## How Has This Been Tested?
Describe testing steps

## Checklist
- [ ] Code follows style guidelines
- [ ] Tests pass locally
- [ ] Documentation updated
- [ ] Changelog updated
```

## Reporting Bugs

### Bug Report Template
```markdown
### Bug Description
Clear description of the bug

### Steps to Reproduce
1. Step 1
2. Step 2
3. ...

### Expected Behavior
What should happen

### Actual Behavior
What actually happens

### Environment
- OS:
- Node version:
- npm version:
- Browser (if applicable):
```

## Feature Requests

### Feature Request Template
```markdown
### Feature Description
Clear description of proposed feature

### Problem It Solves
Explain the problem this feature would solve

### Proposed Solution
Your suggested implementation

### Alternative Solutions
Other solutions you've considered
```

## Code Review Process

1. At least one maintainer must approve changes
2. All comments must be resolved
3. CI checks must pass
4. Documentation must be updated

## License
By contributing to FusionSpace, you agree that your contributions will be licensed under the MIT License.