# Contributing to FusionSpace

Thank you for your interest in contributing to FusionSpace! This document provides guidelines and instructions for contributing to our project.

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

4. Create a new branch for your feature:
```bash
git checkout -b feature/your-feature-name
```

### Running the Application Locally

1. Start the development server:
```bash
npm run dev
```

2. Build the application:
```bash
npm run build
```

3. Run tests:
```bash
npm test
```

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