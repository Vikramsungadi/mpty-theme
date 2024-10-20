# Project Running Guide

## Prerequisites to run shopify theme locally

- Node.js (18.20+, 20.10 or higher)
- Shopify CLI
- A valid Shopify store for theme development

## How to run shopify theme locally

1. Clone the repository https://github.com/Vikramsungadi/mpty-theme.git
2. Install dependencies `npm install`
3. Run `npm run dev`
4. Run `npm run tw` to start tailwind css compiler.

## External dependencies

- [Splidejs](https://splidejs.com/) for slider
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Prettier](https://prettier.io/) for code formatting

## Development Status

- **In Progress**:

  - Rich Text (Shital)
  - Media banner (Vikram)

- **Completed**:

  - Marquee (Vikram)
  - Announcement Bar (Vikram)

---

## Edge Cases to Consider

- Proper fallbacks for missing images or content.
- Handling long texts and overflowing content on smaller devices.
- Accessibility features for screen readers and keyboard navigation.
- Responsive behavior across various device sizes.

---

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to maintain a clear and consistent commit history.

### Common Types:

- **feat**: Adds a new feature.
- **fix**: Fixes a bug.
- **docs**: Documentation changes.
- **style**: Code style changes (formatting, etc.).
- **refactor**: Code refactoring without changing features or fixing bugs.
- **test**: Adds or updates tests.
- **chore**: Routine tasks like updating build processes, package management, or tools.
- **json**: for json(customiser) changes.

### Example

- feat(auth): add user login functionality
- fix(cart): correct price calculation for discounts
- docs(readme): update installation instructions

### Breaking Changes:

Include `BREAKING CHANGE:` in the commit body when a major breaking change is introduced.

### Example

- BREAKING CHANGE: The /auth/login endpoint has been removed in favor of OAuth.
