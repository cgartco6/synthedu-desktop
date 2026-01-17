@echo off
title SYNTHEDU Demo Launcher

echo Starting AI backend...
start /min cmd /c python ai_agents\live_demo_server.py

timeout /t 3 >nul

echo Starting Desktop App...
start "" dist\SYNTHEDU.exe

exit
