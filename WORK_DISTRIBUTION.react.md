# UI Development Work Distribution - React Phase

## Table of Contents

- [UI Development Work Distribution - React Phase](#ui-development-work-distribution---react-phase)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Component Design Distribution](#component-design-distribution)
    - [Core Components Design](#core-components-design)
    - [Composite Components Design](#composite-components-design)
    - [Layout Components Design](#layout-components-design)
    - [Feature Components Design](#feature-components-design)
  - [Development Process](#development-process)
  - [Project Structure](#project-structure)
    - [Core Components](#core-components)
    - [Composite Components](#composite-components)
    - [Layout Components](#layout-components)
    - [Feature Components](#feature-components)
  - [Status Updates](#status-updates)
    - [Status Symbols](#status-symbols)
    - [Update Process](#update-process)
  - [Commit Guidelines](#commit-guidelines)
    - [Commit Examples](#commit-examples)
    - [General Guidelines](#general-guidelines)

## Overview

React implementation phase for FusionSpace UI components, following completed Figma designs.

## Component Design Distribution

### Core Components Design

| Component Type | Designer | Design Status |
|---------------|----------|----------------|
| Buttons | Kehan | 🔄 Pending |
| Input Fields | Kehan | 🔄 Pending |
| Cards | Sanithu | 🔄 Pending |
| Modals | Sanithu | 🔄 Pending |
| Icons | Didula | 🔄 Pending |
| Typography | Didula | 🔄 Pending |

### Composite Components Design

| Component Type | Designer | Dependencies | Design Status |
|---------------|----------|--------------|---------------|
| Search Bar | Kehan | Input Fields, Icons | 🔄 Pending |
| Navigation Menu | Sanithu | Buttons, Icons | 🔄 Pending |
| File Upload | Thihan | Buttons, Progress | 🔄 Pending |
| Settings Panel | Piumal | Forms, Switches | 🔄 Pending |
| Notification Alerts | Didula | Icons, Typography | 🔄 Pending |
| Dropdown Menu | Channa | Buttons, Lists | 🔄 Pending |

### Layout Components Design

| Component | Designer | Design Status |
|-----------|----------|---------------|
| Navbar | Sanithu | 🔄 Pending |
| Footer | Piumal | 🔄 Pending |
| Left Side Panel | Kehan | 🔄 Pending |
| Right Main Panel | Thihan | 🔄 Pending |
| Sign In Form | Didula | 🔄 Pending |
| Signup Form | Didula | 🔄 Pending |

### Feature Components Design

| Component | Designer | Design Status |
|-----------|----------|---------------|
| Note Editor | Kehan | 🔄 Pending |
| Live Chat Interface | Sanithu | 🔄 Pending |
| Video Call Room | Thihan | 🔄 Pending |
| File Manager | Piumal | 🔄 Pending |

## Development Process

1. **Implementation**
   - Review Figma design
   - Create component structure
   - Implement functionality
   - Add tests

2. **Review**
   - Code review by pair
   - Lead review
   - CI checks

3. **Documentation**
   - Props documentation
   - Usage examples
   - Update README

## Project Structure

```
react/
└──component     
    ├── core/
    │   ├── buttons/
    │   ├── inputs/
    │   └── ...
    ├── composite/
    │   ├── search-bar/
    │   ├── navigation/
    │   └── ...
    ├── layouts/
    │   ├── navbar/
    │   ├── panels/
    │   └── ...
    └── features/
        ├── note-editor/
        ├── chat/
        └── ...
```

**Note** if the file didn't exists create it and then add the content with `README.md` file added to that specific folder

### Core Components

```
react/components/core/[ComponentName]/
├── index.ts
├── [ComponentName].tsx
├── [ComponentName].types.ts
├── [ComponentName].test.tsx
└── README.md
```

### Composite Components

```
react/components/composite/[ComponentName]/
├── index.ts
├── [ComponentName].tsx
├── [ComponentName].types.ts
├── [ComponentName].test.tsx
├── components/
│   ├── SubComponent1.tsx
│   └── SubComponent2.tsx
└── README.md
```

### Layout Components

```
react/layouts/[LayoutName]/
├── index.ts
├── [LayoutName].tsx
├── [LayoutName].types.ts
├── components/
│   ├── [Section1].tsx
│   └── [Section2].tsx
└── README.md
```

### Feature Components

```
react/components/features/[FeatureName]/
├── index.ts
├── [FeatureName].tsx
├── [FeatureName].types.ts
├── hooks/
│   └── use[FeatureName].ts
├── components/
│   ├── [SubFeature1].tsx
│   └── [SubFeature2].tsx
└── README.md
```

## Status Updates

### Status Symbols

- 🔄 Pending
- ⏳ In Progress
- ✅ Complete
- 🔍 In Review
- ❌ Blocked

### Update Process

1. Create status update branch
2. Update status in document
3. Create pull request

## Commit Guidelines

1. **Adding New Design Exports**

```bash
Add [component-type] design exports

Description:
- Added PNG exports for [list components]
- Resolution: 2x
- Location: docs/designs/[component-type]

Components:
- [component1].tsx
- [component2].tsx

Co-authored-by: [Name] <[email]>
```

2. **Updating Design Status**

```bash
Update [component-type] design status

Description:
- [Component]: [Old Status] -> [New Status]
- [Component]: [Old Status] -> [New Status]

Design Notes:
- List design changes
- Note any pending reviews
- Highlight blockers

Co-authored-by: [Name] <[email]>
```

3. **Design Review Updates**

```bash
Complete design review for [component-type]

Review Notes:
- [Component]: [Feedback points]
- [Component]: [Approved/Changes needed]

Next Steps:
- List required changes
- Export timeline
- Implementation dependencies

Co-authored-by: [Name] <[email]>
```

### Commit Examples

1. **Adding Core Button Designs**

```bash
Add core/button design exports

Description:
- Added .tsx exports for button variants
- Resolution: 2x
- Location: docs/designs/core/buttons

Components:
- button.tsx

Co-authored-by: Sanithu <0-kodiya-0>
```

2. **Updating Layout Status**

```bash
Update layout design status

Description:
- Navbar: ⏳ -> ✅
- Left Panel: 🔄 -> ⏳
- Footer: 🔄 -> ⏳

Design Notes:
- Navbar ready for review
- Left panel navigation flow in progress
- Footer social icons pending

Co-authored-by: Sanithu <0-kodiya-0>
```

### General Guidelines

1. **Before Starting**:
   - Review react designs thoroughly
   - Check component dependencies
   - Discuss with team lead if unclear

2. **During Development**:
   - Follow TypeScript best practices
   - Implement proper error handling
   - Add comprehensive tests
   - Document props and usage

3. **Before Committing**:
   - Run all tests
   - Check for lint errors
   - Verify responsive behavior
   - Update documentation

4. **Code Review Process**:
   - Request review from assigned pair
   - Address all comments
   - Get final approval from lead
   - Merge only when CI passes

---
