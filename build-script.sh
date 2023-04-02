echo "Start building project"
git branch -D build-branch

git checkout -b build-branch
npm run build

rm -rf public
rm -rf src
rm -rf package-lock.json
rm -rf package.json
rm -rf tsconfig.json
rm -rf tsconfig.node.json
rm -rf vite.config.ts
rm -rf build-script.sh

mv dist/index.html index.html
mv dist/vite.svg vite.svg
mv dist/assets assets

echo "Project builded"
git add -A
git commit -m "new build"
git push -f origin build-branch
echo "Project is on git,back to main branch"
git checkout main
