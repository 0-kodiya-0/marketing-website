# Folder Structure Guide

## Table of Contents

- [Folder Structure Guide](#folder-structure-guide)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Root Structure](#root-structure)
    - [Key Directories Explained](#key-directories-explained)
  - [Component Organization](#component-organization)
    - [Component Types](#component-types)
    - [Component Folder Structure](#component-folder-structure)
  - [Asset Management](#asset-management)
    - [Images and Icons](#images-and-icons)
    - [SVG Management](#svg-management)
  - [Style Organization](#style-organization)
    - [Tailwind CSS Structure](#tailwind-css-structure)
    - [Style Guidelines](#style-guidelines)
  - [Implementation Guidelines](#implementation-guidelines)
    - [Naming Conventions](#naming-conventions)
    - [File Organization Rules](#file-organization-rules)
    - [Type Management](#type-management)
  - [Change Request Process](#change-request-process)
    - [Requesting Structure Changes](#requesting-structure-changes)
    - [Change Considerations](#change-considerations)
  - [Notes](#notes)

## Overview

A well-organized folder structure is crucial for maintainability, scalability, and developer efficiency. This guide outlines our React application's folder structure, focusing on component organization and file management.

## Root Structure

```
fusionspace/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   ├── assets/
│   ├── types/
│   ├── services/
│   └── context/
├── public/
├── tests/
└── config/
```

### Key Directories Explained

- `src/`: Source code of the application
- `public/`: Static files
- `tests/`: Test files
- `config/`: Configuration files for webpack, babel, etc.

## Component Organization

### Component Types

1. **Core Components** (`src/components/core/`)
   - Basic building blocks
   - Highly reusable
   - Example: buttons, inputs, cards

   ```
   core/
   ├── Button/
   │   ├── Button.tsx
   │   ├── Button.test.tsx
   │   └── index.ts
   └── Input/
   ```

2. **Composite Components** (`src/components/composite/`)
   - Combinations of core components
   - Feature-specific components
   - Example: forms, search bars

   ```
   composite/
   ├── SearchBar/
   └── UserForm/
   ```

3. **Layout Components** (`src/layouts/`)
   - Page structures
   - Navigation patterns
   - Example: sidebars, headers

   ```
   layouts/
   ├── MainLayout/
   ├── AuthLayout/
   └── DashboardLayout/
   ```

4. **Feature Components** (`src/components/features/`)
   - Role-specific features
   - Business logic components

   ```
   features/
   ├── StudentDashboard/
   ├── LecturerTools/
   └── LawyerWorkspace/
   ```

### Component Folder Structure

```
ComponentName/
├── index.ts
├── ComponentName.tsx
├── ComponentName.test.tsx
├── ComponentName.types.ts
└── components/
    └── SubComponent.tsx
```

## Asset Management

### Images and Icons

```
assets/
├── images/
│   ├── backgrounds/
│   └── logos/
├── icons/
│   ├── navigation/
│   └── actions/
└── fonts/
```

### SVG Management

- Store SVG components in `src/components/icons/`
- Use React components for dynamic SVGs
- Store static SVGs in `assets/icons/`

## Style Organization

### Tailwind CSS Structure

```
styles/
├── globals.css
├── components/
│   └── custom-components.css
└── utilities/
    └── custom-utilities.css
```

### Style Guidelines

1. Use Tailwind utility classes primarily
2. Create custom components for repeated patterns
3. Maintain theme configuration in `tailwind.config.js`

## Implementation Guidelines

### Naming Conventions

1. Components: PascalCase

   ```typescript
   // Good
   UserProfile.tsx
   NavigationBar.tsx
   
   // Bad
   userProfile.tsx
   navigationbar.tsx
   ```

2. Utilities/Hooks: camelCase

   ```typescript
   // Good
   useAuthState.ts
   formatDateTime.ts
   
   // Bad
   UseAuthState.ts
   FormatDateTime.ts
   ```

### File Organization Rules

1. One component per file
2. Group related files together
3. Keep directory depth reasonable (max 3 levels)
4. Use index files for clean imports

### Type Management

```typescript
// types/index.ts
export interface User {
  id: string;
  role: 'student' | 'lecturer' | 'lawyer';
  // ...
}

// Component types
// ComponentName.types.ts
export interface ComponentProps {
  // ...
}
```

## Change Request Process

### Requesting Structure Changes

```markdown
---
name: Folder Structure Change Request
about: Suggest changes to project organization
title: ''
labels: 'structure'
assignees: ''

---

**Is your feature request related to a problem? Please describe.**
A clear and concise description of the organizational issue.

**Describe the solution you'd like**
Describe the proposed structure change:
- Affected directories
- New structure proposal
- Migration strategy
- Impact assessment

**Describe alternatives you've considered**
Alternative organizational approaches considered.

**Additional context**
- Examples from similar projects
- Benefits of the change
- Potential challenges
```

### Change Considerations

1. Impact Analysis
   - Build process effects
   - Import path changes
   - CI/CD pipeline updates
   - Developer workflow impact

2. Migration Strategy
   - Gradual vs. immediate changes
   - Version control considerations
   - Documentation updates
   - Team communication plan

## Notes

- Follow component isolation principles
- Maintain clear separation of concerns
- Document significant structural decisions
- Consider scalability in organization choices
- Keep commonly accessed files easily reachable

---
