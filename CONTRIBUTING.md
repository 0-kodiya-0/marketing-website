# Contributing to FusionSpace UI Branch

## Table of Contents

- [Contributing to FusionSpace UI Branch](#contributing-to-fusionspace-ui-branch)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Development Setup](#development-setup)
    - [Available Scripts](#available-scripts)
  - [Project Configuration](#project-configuration)
    - [Webpack Features](#webpack-features)
    - [TypeScript Configuration](#typescript-configuration)
    - [ESLint Rules](#eslint-rules)
  - [3. Testing Process](#3-testing-process)
  - [Code Quality Standards](#code-quality-standards)
    - [Requirements](#requirements)
  - [Contributing](#contributing)
  - [Need Help?](#need-help)
  - [License](#license)

## Overview

This guide specifically covers contributing to the UI branch of FusionSpace, focusing on frontend development and proper commit message formatting.

## Getting Started

### Prerequisites

- Node.js (version compatible with TypeScript ~4.5.4)
- npm
- Git

### Installation

```bash
git clone https://github.com/0-kodiya-0/SDGP-CS-135.git
cd SDGP-CS-135
git checkout user-interface
npm install
```

## Development Setup

### Available Scripts

```bash
# Development Server
npm start
# Opens http://localhost:3000
# Features hot module replacement

# Production Build
npm run build
# Creates optimized build in dist/

# Code Linting
npm run lint
# ESLint checking for TS/TSX files
```

## Project Configuration

### Webpack Features

- TypeScript support via `ts-loader` and `babel-loader`
- CSS processing with style-loader and css-loader
- Asset management for images
- Dev server with hot reload
- Source maps for debugging
- Path aliasing (`@` points to `src`)

### TypeScript Configuration

- Strict type checking
- JSX support
- Module resolution settings

### ESLint Rules

- TypeScript recommended rules
- React recommended rules
- Hook rules
- Import/export rules

## 3. Testing Process

```bash
# Development Testing
npm start

# Lint Checking
npm run lint

# Build Verification
npm run build
```

## Code Quality Standards

### Requirements

1. Code Must:
   - Pass ESLint
   - Use TypeScript
   - Follow React best practices
   - Include type definitions
   - Follow import/export rules
   - Match project structure

2. PR Requirements:
   - Successful webpack build
   - Clean dev server run
   - Passing ESLint checks
   - Development mode testing

## Contributing

We welcome contributions to FusionSpace! `user-interface` branch. Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) file in branch `main` for detailed guidelines on how to:

- Set up your development environment
- Create branches and make changes
- Submit pull requests
- Report issues
- Follow coding standards

Before contributing, make sure to review our:

- Commit message guidelines
- Code review process
- Development workflow
- Testing requirements

We use GitHub issues for tracking requests and bugs. Please check existing issues before filing new ones.

## Need Help?

- Use the [issue tracker](https://github.com/0-kodiya-0/SDGP-CS-135/issues)
- Contact team lead/maintainers
- Check existing documentation `/docs` or branch `main/docs`

## License

Privately licensed - requires explicit permission for external contributions.

---
