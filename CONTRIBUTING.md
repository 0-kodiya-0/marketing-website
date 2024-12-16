# Contributing to FusionSpace UI Branch

This document outlines how to set up the development environment, run the project, and contribute to the UI branch of FusionSpace.

## Getting Started

### Prerequisites

- Node.js (version compatible with TypeScript ~4.5.4)
- npm
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/0-kodiya-0/SDGP-CS-135.git
cd SDGP-CS-135
```

2. Switch to the user interface branch:

```bash
git checkout user-interface
```

3. Install dependencies:

```bash
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

- Runs the webpack dev server in development mode
- Opens [http://localhost:3000](http://localhost:3000) automatically in your default browser
- Features hot module replacement for instant updates
- Includes source maps for debugging

### `npm run build`

- Creates a production build in the `dist` folder
- Bundles and optimizes all assets
- Generates hashed filenames for cache busting
- Splits chunks for optimal loading
- Cleans the dist directory before building

### `npm run lint`

- Runs ESLint on all TypeScript and TypeScript React files in the `src` directory
- Checks code against configured rules in `.eslintrc.json`
- Ensures code follows TypeScript best practices
- Validates React hooks usage
- Checks import/export rules

## Project Configuration

### Webpack

The project uses Webpack with the following features:

- TypeScript support with `ts-loader` and `babel-loader`
- CSS handling with `style-loader` and `css-loader`
- Asset management for images (png, svg, jpg, jpeg, gif)
- Dev server with hot reload
- Source maps for debugging
- Path aliasing (`@` points to `src` directory)

### TypeScript

- Strict type checking enabled
- JSX support for React
- Module resolution via `tsconfig.json`

### ESLint

The project enforces code quality through ESLint with:

- TypeScript recommended rules
- React recommended rules
- React Hooks rules
- Import/export rules
- Custom parser options for modern JavaScript features

## Development Workflow

### 1. Create a New Feature Branch

```bash
git checkout -b feature/[feature-name]
```

### 2. Development

- Write code in the `src` directory
- Use TypeScript for all new files (.ts, .tsx)
- Follow the ESLint rules configured in the project
- Utilize the `@` alias for imports from the src directory

### 3. Testing Your Changes

1. Run the development server:

```bash
npm start
```

2. Check for linting errors:

```bash
npm run lint
```

3. Build the project to ensure it compiles:

```bash
npm run build
```

### 4. Committing Changes

We follow strict commit message guidelines to maintain a clear and useful git history. Our commit messages help automate semantic versioning and changelog generation.

#### Commit Message Template

When you run `git commit`, you'll see our template that helps structure your commit message properly:

```
# Title: Summary, imperative, start upper case, don't end with a period
# No more than 50 chars. #### 50 chars is here:  #

# Remember blank line between title and body.

# Body: Explain *what* and *why* (not *how*). Include task ID (Jira issue).
# Wrap at 72 chars. ################################## which is here:  #

# At the end: Include Co-authored-by for all contributors. 
# Include at least one empty line before it. Format: 
# Co-authored-by: name <user@users.noreply.github.com>
```

#### Setting Up the Template

1. Create the .gitmessage file:

```bash
printf "# Title: Summary, imperative, start upper case, don't end with a period\n# No more than 50 chars. #### 50 chars is here:  #\n\n# Remember blank line between title and body.\n\n# Body: Explain *what* and *why* (not *how*). Include task ID (Jira issue).\n# Wrap at 72 chars. ################################## which is here:  #\n\n\n# At the end: Include Co-authored-by for all contributors. \n# Include at least one empty line before it. Format: \n# Co-authored-by: name <user@users.noreply.github.com>\n#\n# How to Write a Git Commit Message:\n# https://chris.beams.io/posts/git-commit/\n#\n# 1. Separate subject from body with a blank line\n# 2. Limit the subject line to 50 characters\n# 3. Capitalize the subject line\n# 4. Do not end the subject line with a period\n# 5. Use the imperative mood in the subject line\n# 6. Wrap the body at 72 characters\n# 7. Use the body to explain what and why vs. how\n" > ~/.gitmessage
```

2. Configure Git to use the template:

```bash
git config --global commit.template ~/.gitmessage
```

#### Commit Message Structure

1. **Type**: The type of change being made:
   - `feat`: New feature
   - `fix`: Bug fix
   - `docs`: Documentation changes
   - `style`: Code style changes
   - `refactor`: Code changes that neither fix bugs nor add features
   - `perf`: Performance improvements
   - `test`: Test-related changes
   - `chore`: Build process or auxiliary tool changes
   - `ci`: CI configuration changes
   - `revert`: Reverting previous changes

2. **Scope**: The part of the codebase affected (optional):

   ```
   feat(auth): add OAuth support
   ```

3. **Subject**: A brief description:
   - Use imperative mood ("add" not "added" or "adds")
   - Don't end with a period
   - Keep under 50 characters
   - Capitalize first letter

4. **Body**: Detailed explanation (optional):
   - Explain the what and why (not how)
   - Wrap at 72 characters
   - Separate from subject with blank line

   ```
   refactor(dashboard): simplify data fetching logic

   Previous implementation made redundant API calls which caused
   performance issues on slow connections. This change consolidates
   the data fetching to a single request.

   Resolves #123
   ```

5. **Footer** (optional):
   - Reference issues being fixed
   - Note breaking changes
   - List co-authors

   ```
   BREAKING CHANGE: Authentication API response format has changed
   
   Co-authored-by: Jane Doe <jane@example.com>
   ```

#### Example Commits

```bash
# Simple feature addition
feat(ui): add dark mode toggle

# Bug fix with explanation
fix(api): prevent duplicate form submission

Added request debouncing to prevent users from accidentally
submitting the same form multiple times.

Fixes #456

# Documentation update
docs(readme): update installation steps

# Breaking change
feat(api)!: change authentication response format

The response format has been updated to include refresh tokens.

BREAKING CHANGE: Auth response now returns an object instead of
just the token string.
```

#### Read More About Git Commit Messages

For more detailed information about writing effective git commit messages, check out these resources:

- [How to Write Good Git Commit Messages - A Detailed Guide](https://gist.github.com/lisawolderiksen/a7b99d94c92c6671181611be1641c733)
- [How to Write a Git Commit Message](https://cbea.ms/git-commit/)
- [Conventional Commits](https://www.conventionalcommits.org/)

### 5. Push Changes and Create PR

```bash
git push origin feature/[feature-name]
```

Create a Pull Request on GitHub with:

- Clear description of changes
- Reference to related issues
- Screenshots if UI changes are included

## Need Help?

- Create an issue on the [issue tracker](https://github.com/0-kodiya-0/SDGP-CS-135/issues)
- Contact the team lead or maintainers
- Reference the existing documentation in the project

## Code Quality Standards

1. All code must:
   - Pass ESLint checks
   - Be written in TypeScript
   - Follow React best practices
   - Include proper type definitions
   - Use the configured import/export rules
   - Follow the project's file structure

2. Before submitting PR:
   - Ensure all webpack builds succeed
   - Verify dev server runs without errors
   - Check all ESLint rules pass
   - Test changes in development mode

## License

This project is privately licensed and not open for external contributions without explicit permission.
