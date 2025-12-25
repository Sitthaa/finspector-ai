#!/bin/bash

echo ""
echo "========================================"
echo " Red Teaming Challenge 2026"
echo " FinSpector AI Platform"
echo "========================================"
echo ""
echo "Starting Local Server..."
echo ""
echo "Server will start at: http://localhost:8000"
echo "Press Ctrl+C to stop the server"
echo ""
echo "========================================"
echo ""

# Try Python 3 first
if command -v python3 &> /dev/null; then
    echo "Using Python 3..."
    python3 -m http.server 8000
    exit 0
fi

# Try Python
if command -v python &> /dev/null; then
    echo "Using Python..."
    python -m http.server 8000
    exit 0
fi

# Try PHP
if command -v php &> /dev/null; then
    echo "Using PHP..."
    php -S localhost:8000
    exit 0
fi

# If nothing works
echo ""
echo "ERROR: Neither Python nor PHP is installed!"
echo ""
echo "Please install Python:"
echo "  - Mac: brew install python3"
echo "  - Linux: sudo apt install python3"
echo ""
echo "Or install PHP:"
echo "  - Mac: brew install php"
echo "  - Linux: sudo apt install php"
echo ""
echo "Then run this script again."
echo ""
