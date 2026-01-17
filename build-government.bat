@echo off
echo Building Government White-Label Edition...

copy assets\gov_logo.ico assets\logo.ico
copy electron\config\gov.yaml electron\config\system.yaml

npm run build
electron-builder --win --x64

echo Government Installer Ready
pause
