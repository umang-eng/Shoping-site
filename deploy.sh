#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Build the Next.js application
echo "Building the application..."
npm run build

# Create a .nojekyll file in the out directory to prevent GitHub Pages from running Jekyll
echo "Creating .nojekyll file..."
touch ./out/.nojekyll

echo "Deployment files prepared in 'out' directory."
echo "Now, you need to push the 'out' directory to the 'gh-pages' branch."
echo "The recommended way is using the automated GitHub Actions workflow."
echo "For a manual deploy, you can use a command like:"
echo "git subtree push --prefix out origin gh-pages"
