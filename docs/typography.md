# Typography Guide

## Table of Contents

- [Typography Guide](#typography-guide)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Font System](#font-system)
    - [Font Family](#font-family)
    - [Why System Fonts?](#why-system-fonts)
  - [Scale \& Measurements](#scale--measurements)
    - [Font Scale \& Line Height](#font-scale--line-height)
    - [Base Font Size](#base-font-size)
    - [Font Weight](#font-weight)
  - [Typography Usage](#typography-usage)
    - [Light Theme Text Colors](#light-theme-text-colors)
    - [Dark Theme Text Colors](#dark-theme-text-colors)
  - [Implementation Guidelines](#implementation-guidelines)
    - [Design Principles](#design-principles)
  - [Change Request Process](#change-request-process)
    - [Requesting Typography Changes](#requesting-typography-changes)
    - [Change Request Considerations](#change-request-considerations)
  - [Notes](#notes)

## Overview

Typography is the foundation of a systematic visual design. The difference from traditional graphic design is that the font-scale system is constructed with mathematical order and systematically. We strongly recommend it since it has been verified by a large number of products.

## Font System

### Font Family

```css
/* System Default Fonts */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
"Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
"Noto Color Emoji";
```

### Why System Fonts?

- Better performance (no font loading)
- Native experience for users
- Consistent rendering across platforms
- Professional and reliable appearance

## Scale & Measurements

### Font Scale & Line Height

Our font scale is based on the pentametric scale, providing natural and balanced proportions:

| Font Size (px) | Line Height (px) |
|----------------|------------------|
| 12             | 20              |
| 14             | 22              |
| 16             | 24              |
| 20             | 28              |
| 24             | 32              |
| 30             | 38              |
| 38             | 46              |
| 46             | 54              |
| 56             | 64              |
| 68             | 76              |

### Base Font Size

- Default text: 14px
- Optimal reading distance: 50cm
- For most common monitors based on display distance

### Font Weight

Three primary weights for systematic usage:

- Regular (400): Body text and general content
- Medium (500): Emphasis and subheadings
- Semibold (600): Headings and important highlights

## Typography Usage

### Light Theme Text Colors

- Title: @Black 85%
- Primary text: @Black 65%
- Secondary text: @Black 45%
- Disable: @Black 25%
- Border: @Black 15%
- Dividers: @Black 6%
- Background: @Black 4%
- Table header: @Black 2%

### Dark Theme Text Colors

- Title: @White 85%
- Primary text: @White 65%
- Secondary text: @White 45%
- Disable: @White 30%
- Border: @White 20%
- Dividers: @White 12%
- Background: @White 8%
- Table header: @White 4%

## Implementation Guidelines

### Design Principles

1. Establish systematic design thinking:
   - Use consistent scales
   - Maintain clear hierarchy
   - Follow mathematical relationships

2. Limit usage:
   - Avoid excessive font weights
   - Minimize font size variations
   - Keep styles focused and purposeful

3. Text Color Ratios:
   - Main text to background: 7:1
   - Secondary text to background: 4.5:1
   - Disabled text to background: 3:1

## Change Request Process

### Requesting Typography Changes

```markdown
---
name: Typography Change Request
about: Suggest changes to typography system
title: ''
labels: 'typography'
assignees: ''

---

**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is. Example: Text is difficult 
to read at current size in [specific context]

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context about the request:
- Affected text elements
- Current vs. proposed measurements
- Screenshots/examples
- User feedback if available
```

### Change Request Considerations

1. Scale Integrity
   - Does the change maintain the established scale?
   - How does it affect the existing hierarchy?

2. Technical Feasibility
   - Browser support
   - Performance impact
   - Implementation complexity

3. Accessibility
   - WCAG compliance
   - Readability metrics
   - Contrast ratios

4. System Impact
   - Effect on existing components
   - Documentation updates needed
   - Testing requirements

## Notes

- All typography should align with the mathematical scale
- Maintain consistent ratios in line heights
- Consider reading distance in different contexts
- Test all changes across supported platforms

Remember: Typography changes should enhance readability and maintain system consistency while following our established mathematical relationships.

---
