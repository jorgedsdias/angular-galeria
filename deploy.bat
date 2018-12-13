ng build ---prod --output-path docs --base-href /angular-galeria/
copy docs\index.html docs\404.html
git add .
git commit -m "subindo"
git push origin master