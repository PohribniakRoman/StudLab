echo "Start building project"
git branch -D build-branch

git checkout -b build-branch
npm run build
echo "Project builded"
git add -A
git commit -m "new build"
git push -f origin build-branch
echo "Project is on git,back to main branch"
git checkout main
