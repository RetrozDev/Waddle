# Contributing to Waddle

Thank you for your interest in contributing to Waddle! This document provides guidelines and branch structure for contributors.

## Branch Structure

```
main                 # Production branch
├── develop          # Main development branch
│   ├── feature/*    # New features
│   ├── fix/*        # Bug fixes
│   ├── docs/*       # Documentation updates
│   ├── refactor/*   # Code refactoring
│   ├── perf/*       # Performance improvements
│   └── test/*       # Testing
└── release/*        # Release preparation
```

### Branch Naming Convention

- `feature/button-component`
- `fix/dropdown-click-event`
- `docs/api-documentation`
- `refactor/form-validation`
- `perf/reduce-bundle-size`
- `test/unit-tests-setup`
- `release/v1.0.0`

## Development Workflow

1. Fork and clone the repository
```bash
git clone git@github.com:yourusername/waddle.git
cd waddle
npm install
```

2. Create a new branch from develop
```bash
git checkout develop
git checkout -b feature/your-feature
```

3. Make your changes following our guidelines

4. Commit your changes using conventional commits
```bash
feat: add Button component
fix: resolve hover state bug
docs: update README
style: format code
refactor: simplify form logic
perf: optimize render performance
test: add unit tests for Modal
```

5. Push your branch and create a Pull Request
