@echo off
echo Building SYNTHEDU Demo Installer...

REM 1. Build React frontend
cd ui
npm install
npm run build
cd ..

REM 2. Install Electron dependencies
npm install

REM 3. Copy assets and AI server
xcopy ai_agents ..\synthedu-desktop\ai_agents /s /y
xcopy assets ..\synthedu-desktop\assets /s /y

REM 4. Build Windows installer
electron-builder --win --x64 --publish never

echo Demo installer created in dist\SYNTHEDU Setup.exe
pause
