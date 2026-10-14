@echo off
setlocal
title Push Portfolio to GitHub

echo ========================================================
echo   Pushing Portfolio to GitHub (janmajaykalyanwat-coder)
echo ========================================================
echo.

:: Ensure Git is in PATH
set "PATH=%LOCALAPPDATA%\Programs\Git\cmd;%PATH%"

where git >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Git could not be found.
    pause
    exit /b 1
)

echo Checking Git status...
git status -s

echo.
echo Adding any recent changes...
git add .

echo Creating commit...
git commit -m "Update ECE & Semiconductor Portfolio" >nul 2>&1

echo.
echo Pushing branch 'main' to https://github.com/janmajaykalyanwat-coder/Portfolio.git...
echo (If prompted, log in with your browser or enter your GitHub Personal Access Token)
echo.

git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   SUCCESS! Your portfolio is pushed to GitHub!
    echo   View online: https://github.com/janmajaykalyanwat-coder/Portfolio
    echo ========================================================
) else (
    echo.
    echo Push failed. Please check your GitHub credentials or Personal Access Token.
)

echo.
pause
