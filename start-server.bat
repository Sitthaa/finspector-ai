@echo off
echo.
echo ========================================
echo  Red Teaming Challenge 2026
echo  FinSpector AI Platform
echo ========================================
echo.
echo Starting Local Server...
echo.
echo Server will start at: http://localhost:8000
echo Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

REM Try Python 3 first
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Using Python...
    python -m http.server 8000
    goto :end
)

REM Try Python 3 with 'python3' command
python3 --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Using Python 3...
    python3 -m http.server 8000
    goto :end
)

REM Try PHP
php --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Using PHP...
    php -S localhost:8000
    goto :end
)

REM If nothing works
echo.
echo ERROR: Neither Python nor PHP is installed!
echo.
echo Please install Python from: https://www.python.org/downloads/
echo Or install PHP from: https://www.php.net/downloads
echo.
echo Then run this script again.
echo.
pause
goto :end

:end
