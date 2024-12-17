# UI Development Work Distribution - Figma Phase

## Table of Contents

- [UI Development Work Distribution - Figma Phase](#ui-development-work-distribution---figma-phase)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Design Resources](#design-resources)
  - [Component Design Distribution](#component-design-distribution)
    - [Core Components Design](#core-components-design)
    - [Composite Components Design](#composite-components-design)
    - [Layout Components Design](#layout-components-design)
    - [Feature Components Design](#feature-components-design)
  - [Design Process](#design-process)
    - [Project Structure](#project-structure)
  - [Status Updates](#status-updates)
    - [Status Symbols](#status-symbols)
    - [Update Process](#update-process)
  - [Commit Guidelines](#commit-guidelines)
    - [Commit Examples](#commit-examples)
    - [General Guidelines](#general-guidelines)

## Overview

Design phase for FusionSpace UI components using Figma. Implementation phase will begin after design completion and approval.

## Design Resources

- Figma Project: [Team Library](https://www.figma.com/design/zVfigy0ewfheKKX0HQe0Vf/w2052292's-team-library?node-id=3311-2&t=SSUjMtidzcBLpae9-1)
- Export Format: PNG files for documentation

## Component Design Distribution

### Core Components Design

| Component Type | Designer | Design Status | PNG Export |
|---------------|----------|----------------|------------|
| Buttons | Kehan | 🔄 Pending | Not Exported |
| Input Fields | Kehan | 🔄 Pending | Not Exported |
| Cards | Sanithu | 🔄 Pending | Not Exported |
| Modals | Sanithu | 🔄 Pending | Not Exported |
| Icons | Didula | 🔄 Pending | Not Exported |
| Typography | Didula | 🔄 Pending | Not Exported |

### Composite Components Design

| Component Type | Designer | Dependencies | Design Status | PNG Export |
|---------------|----------|--------------|---------------|------------|
| Search Bar | Kehan | Input Fields, Icons | 🔄 Pending | Not Exported |
| Navigation Menu | Sanithu | Buttons, Icons | 🔄 Pending | Not Exported |
| File Upload | Thihan | Buttons, Progress | 🔄 Pending | Not Exported |
| Settings Panel | Piumal | Forms, Switches | 🔄 Pending | Not Exported |
| Notification Alerts | Didula | Icons, Typography | 🔄 Pending | Not Exported |
| Dropdown Menu | Channa | Buttons, Lists | 🔄 Pending | Not Exported |

### Layout Components Design

| Component | Designer | Design Status | PNG Export |
|-----------|----------|---------------|------------|
| Navbar | Sanithu | 🔄 Pending | Not Exported |
| Footer | Piumal | 🔄 Pending | Not Exported |
| Left Side Panel | Kehan | 🔄 Pending | Not Exported |
| Right Main Panel | Thihan | 🔄 Pending | Not Exported |
| Sign In Form | Didula | 🔄 Pending | Not Exported |
| Signup Form | Didula | 🔄 Pending | Not Exported |

### Feature Components Design

| Component | Designer | Design Status | PNG Export |
|-----------|----------|---------------|------------|
| Note Editor | Kehan | 🔄 Pending | Not Exported |
| Live Chat Interface | Sanithu | 🔄 Pending | Not Exported |
| Video Call Room | Thihan | 🔄 Pending | Not Exported |
| File Manager | Piumal | 🔄 Pending | Not Exported |

## Design Process

1. **Component Design**
   - Create in Figma
   - Add all variants
   - Include responsive states
   - Document interactions

2. **Review**
   - Design lead review
   - Team feedback
   - Iteration if needed

3. **Export**
   - Export as PNG 2x
   - Follow naming convention
   - Place in correct folder

### Project Structure

```
figma/
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

## Status Updates

### Status Symbols

- 🔄 Pending
- ⏳ In Progress
- ✅ Complete
- 🔍 In Review
- ✨ Approved
- 📤 Exported

### Update Process

1. Update status in this document
2. Export designs if complete
3. Commit changes with proper message

## Commit Guidelines

1. **Adding New Design Exports**

```bash
Add [component-type] design exports

Description:
- Added PNG exports for [list components]
- Resolution: 2x
- Location: docs/designs/[component-type]

Components:
- [component1].png
- [component2].png

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
- Added PNG exports for button variants
- Resolution: 2x
- Location: docs/designs/core/buttons

Components:
- button-primary.png
- button-secondary.png
- button-danger.png
- button-states.png

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

1. **Before Committing**
   - Verify PNG export quality
   - Check file naming conventions
   - Update status tables
   - Add design notes if needed

2. **Commit Order**
   - Add PNG exports
   - Update documentation
   - Update status tables

3. **After Committing**
   - Notify design leads
   - Update Figma with any changes
   - Tag relevant team members
  
---
