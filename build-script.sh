echo "\nStart building project\n"
git checkout -b build-branch
npm run build
echo "\nProject builded\n"
git add -A
git commit -m "new build"
git push
echo "\nProject is on git,back to main branch\n"
git checkout -b main
