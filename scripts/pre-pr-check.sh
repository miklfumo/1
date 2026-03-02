#!/usr/bin/env bash
set -euo pipefail

printf "Checking PHP syntax...\n"
php -l index.php >/dev/null
php -l handlers/register.php >/dev/null
for f in includes/*.php sections/*.php; do
  php -l "$f" >/dev/null
done

printf "Checking git state...\n"
branch=$(git rev-parse --abbrev-ref HEAD)
if [[ "$branch" == "main" || "$branch" == "master" ]]; then
  echo "❌ You are on $branch. Create a feature branch before opening PR."
  exit 1
fi

if [[ -z "$(git status --short)" ]]; then
  echo "✅ Working tree is clean."
else
  echo "⚠️ You have uncommitted changes:"
  git status --short
fi

echo "✅ Pre-PR check finished."
