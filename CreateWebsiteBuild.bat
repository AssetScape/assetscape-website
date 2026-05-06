@echo off
setlocal

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\create-official-build.ps1"
exit /b %ERRORLEVEL%
