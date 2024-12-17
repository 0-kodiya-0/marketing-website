# UI Development Work Distribution Figma

## Table of Contents

- [UI Development Work Distribution Figma](#ui-development-work-distribution-figma)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Design Phase](#design-phase)
    - [Design Resources](#design-resources)
  - [Team Expertise](#team-expertise)
  - [Component Design Distribution](#component-design-distribution)
    - [Core Components Design](#core-components-design)
    - [Composite Components Design](#composite-components-design)
    - [Layout Components Design](#layout-components-design)
    - [Feature Components Design](#feature-components-design)
  - [Design Guidelines](#design-guidelines)
    - [Implementation Planning](#implementation-planning)
    - [File Organization](#file-organization)
    - [Export Process](#export-process)
    - [Status Update Process](#status-update-process)
  - [Commit Guidelines](#commit-guidelines)
    - [Design Update Commits](#design-update-commits)
    - [Commit Examples](#commit-examples)
    - [Commit Process](#commit-process)

## Overview

This document outlines the initial Figma design phase for UI components. Development of .tsx files will begin after design completion and approval.

## Design Phase

### Design Resources

- Figma Project: [Team Library](https://www.figma.com/design/zVfigy0ewfheKKX0HQe0Vf/w2052292's-team-library?node-id=3311-2&t=SSUjMtidzcBLpae9-1)
- Export Format: PNG files for documentation
- Design Lead: Kehan, Sanithu

## Team Expertise

| Developer | Experience Level | Design Focus |
|-----------|-----------------|--------------|
| Kehan | Advanced | Component Design, UI/UX |
| Sanithu | Advanced | Layout Systems |
| Didula | Intermediate | Basic Components |
| Thihan | Intermediate | Form Elements |
| Piumal | Intermediate | Navigation Elements |
| Channa | Intermediate | Feature Interfaces |

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

## Design Guidelines

### Implementation Planning

Development of .tsx files will begin after:

1. All component designs are approved
2. PNG exports are completed
3. Component documentation is ready
4. Team review of full design system

### File Organization

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

### Export Process

1. Export design as PNG at 2x resolution
2. Use naming convention: `[component-type]-[component-name].png`
3. Add to appropriate docs folder
   
### Status Update Process

1. Update the status in tables using:
   - 🔄 Pending: Not started
   - ⏳ Designing: In progress
   - ✅ Designed: Ready for review
   - 🔍 In Review: Under design review
   - ✨ Approved: Ready for PNG export
   - 📤 Exported: PNG files added to docs

## Commit Guidelines

### Design Update Commits

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
<!-- 
### Branch Naming Convention

1. **For Design Exports**
```bash
design/exports/[component-type]/[component-name]
```

2. **For Status Updates**
```bash
design/status/[date-YYYYMMDD]
```

3. **For Design Reviews**
```bash
design/review/[component-type]
``` -->

### Commit Process

1. **Before Committing**
   - Verify PNG export quality
   - Check file naming conventions
   - Update status tables
   - Add design notes if needed

2. **Commit Order**
   1. Add PNG exports
   2. Update documentation
   3. Update status tables

3. **After Committing**
   - Notify design leads
   - Update Figma with any changes
   - Tag relevant team members
  
---
