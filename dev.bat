@echo off
title Portfolio Development Server
echo Starting Portfolio Dev Server on http://localhost:3000...
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
