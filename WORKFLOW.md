# Git Subtree Workflow for Paradigm UI

This document explains how to maintain paradigm-ui as a separate repository while keeping it in sync with your portfolio project.

## Overview

Git subtree allows you to keep the `registry/` directory from your portfolio in sync with the paradigm-ui repository. Changes can flow in both directions:

- **Portfolio → paradigm-ui**: When you add/update components in your portfolio
- **paradigm-ui → Portfolio**: When you make improvements to the library

## Initial Setup

### Step 1: Create the paradigm-ui GitHub Repository

1. Go to GitHub and create a new public repository named `paradigm-ui`
2. **Do NOT** initialize with README, .gitignore, or license (we already have these)
3. Copy the repository URL (e.g., `https://github.com/yourusername/paradigm-ui.git`)

### Step 2: Initialize the paradigm-ui Repository Locally

```bash
# Navigate to the paradigm-ui directory
cd paradigm-ui

# Initialize git
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Paradigm UI component library

- Flexbox layout primitives (Flex, FlexRow, FlexCol, Box)
- Typography components (Hero, Heading, Paragraph)
- Animation utilities (Appear)
- Social components (SocialLinks)
- Full test coverage
- shadcn/ui registry compatible"

# Add remote
git remote add origin https://github.com/yourusername/paradigm-ui.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Copy Registry Files to paradigm-ui

```bash
# From the portfolio root directory
cd ..

# Copy the registry directory into paradigm-ui
cp -r registry paradigm-ui/

# Commit the registry files
cd paradigm-ui
git add registry
git commit -m "Add registry components from portfolio"
git push
```

### Step 4: Set Up Subtree in Portfolio Repository

```bash
# Navigate back to portfolio root
cd ..

# Add paradigm-ui as a remote
git remote add paradigm-ui https://github.com/yourusername/paradigm-ui.git

# Verify remote was added
git remote -v
```

## Daily Workflow

### Pushing Changes FROM Portfolio TO paradigm-ui

When you make changes to components in your portfolio's `registry/` directory:

```bash
# Make your changes in portfolio/registry/
# Commit them to your portfolio repo first
git add registry
git commit -m "feat: add new component X"

# Push the registry subtree to paradigm-ui
git subtree push --prefix=registry paradigm-ui main

# Or if you prefer to squash commits
git subtree push --prefix=registry paradigm-ui main --squash
```

### Pulling Changes FROM paradigm-ui TO Portfolio

When you make improvements directly in the paradigm-ui repo:

```bash
# First, make changes in the paradigm-ui repo and push them
cd paradigm-ui
# ... make changes ...
git add .
git commit -m "feat: improve component X"
git push

# Then pull those changes into your portfolio
cd ../portfolio  # or wherever your portfolio is
git subtree pull --prefix=registry paradigm-ui main --squash
```

## Common Scenarios

### Scenario 1: Adding a New Component

```bash
# In portfolio project
# 1. Create new component in registry/new-york/ui/my-component.tsx
# 2. Add tests in registry/new-york/ui/__tests__/my-component.test.tsx
# 3. Commit to portfolio
git add registry
git commit -m "feat: add MyComponent with layout utilities"

# 4. Push to paradigm-ui
git subtree push --prefix=registry paradigm-ui main
```

### Scenario 2: Fixing a Bug

```bash
# In portfolio project
# 1. Fix bug in registry/new-york/ui/flex.tsx
# 2. Update tests
# 3. Commit
git add registry
git commit -m "fix: correct alignItems mapping in Flex component"

# 4. Push to paradigm-ui
git subtree push --prefix=registry paradigm-ui main
```

### Scenario 3: Updating Documentation in paradigm-ui

```bash
# In paradigm-ui repo
cd paradigm-ui
# 1. Update README.md or EXAMPLES.md
git add README.md
git commit -m "docs: add new usage examples"
git push

# No need to pull into portfolio since docs aren't in the registry/ folder
```

### Scenario 4: Syncing After Making Changes in Both Repos

```bash
# 1. First, pull from paradigm-ui to get any remote changes
git subtree pull --prefix=registry paradigm-ui main --squash

# 2. Resolve any conflicts if they exist
# 3. Then push your local registry changes
git subtree push --prefix=registry paradigm-ui main
```

## Helper Scripts (Optional)

Add these to your portfolio's `package.json`:

```json
{
  "scripts": {
    "sync:push": "git subtree push --prefix=registry paradigm-ui main",
    "sync:pull": "git subtree pull --prefix=registry paradigm-ui main --squash"
  }
}
```

Then you can simply run:
```bash
npm run sync:push  # Push registry changes to paradigm-ui
npm run sync:pull  # Pull paradigm-ui changes into registry
```

## Important Notes

### ✅ Do's

- **Always commit to portfolio first**, then push to paradigm-ui
- **Use `--squash`** when pulling to keep history clean
- **Test thoroughly** before pushing to paradigm-ui
- **Write good commit messages** that will make sense in both repos
- **Keep the registry/ structure intact** when making changes

### ❌ Don'ts

- **Don't make conflicting changes** in both repos simultaneously
- **Don't delete the `registry/` folder** from portfolio
- **Don't rename the `registry/` directory**
- **Don't force push** unless you know what you're doing
- **Don't forget to pull** before making new changes

## Troubleshooting

### "Updates were rejected because the remote contains work..."

```bash
# Pull first, then push
git subtree pull --prefix=registry paradigm-ui main --squash
git subtree push --prefix=registry paradigm-ui main
```

### "Refusing to merge unrelated histories"

```bash
# Use --allow-unrelated-histories flag
git subtree pull --prefix=registry paradigm-ui main --squash --allow-unrelated-histories
```

### "Working tree has modifications"

```bash
# Commit or stash your changes first
git add .
git commit -m "WIP: changes in progress"
# Then retry the subtree command
```

### Conflicts During Pull

```bash
# Resolve conflicts manually in the registry/ files
# Then complete the merge
git add registry
git commit -m "merge: resolve conflicts from paradigm-ui"
```

## Alternative: Sync Script

Create `scripts/sync-registry.sh`:

```bash
#!/bin/bash

# Script to sync registry between portfolio and paradigm-ui

case "$1" in
  push)
    echo "Pushing registry to paradigm-ui..."
    git subtree push --prefix=registry paradigm-ui main
    echo "✓ Done!"
    ;;
  pull)
    echo "Pulling from paradigm-ui to registry..."
    git subtree pull --prefix=registry paradigm-ui main --squash
    echo "✓ Done!"
    ;;
  *)
    echo "Usage: ./scripts/sync-registry.sh [push|pull]"
    exit 1
    ;;
esac
```

Make it executable:
```bash
chmod +x scripts/sync-registry.sh
```

Then use:
```bash
./scripts/sync-registry.sh push  # Push to paradigm-ui
./scripts/sync-registry.sh pull  # Pull from paradigm-ui
```

## Benefits of This Workflow

1. ✅ **Separate showcase repo** for portfolio
2. ✅ **Automatic sync** with simple git commands
3. ✅ **No manual copying** or file management
4. ✅ **Full git history** in both repos
5. ✅ **Flexibility** to work in either repo
6. ✅ **Professional** - shows you understand git workflows
7. ✅ **Can publish** to npm later if desired

## Next Steps

After setup:

1. Update `package.json` and `README.md` with your GitHub username
2. Update LICENSE with your name
3. Add a nice banner/logo to the README
4. Set up GitHub Actions for automated testing (optional)
5. Add a demo site using GitHub Pages (optional)
6. Consider publishing to npm when ready
