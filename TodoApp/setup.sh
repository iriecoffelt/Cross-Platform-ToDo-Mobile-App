#!/bin/bash

# Todo App Setup Script
echo "🚀 Setting up Todo App..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18 or higher."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# iOS setup (macOS only)
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "🍎 Setting up iOS dependencies..."
    cd ios
    if command -v pod &> /dev/null; then
        pod install
    else
        echo "⚠️  CocoaPods not found. Please install CocoaPods:"
        echo "sudo gem install cocoapods"
        echo "Then run: cd ios && pod install"
    fi
    cd ..
else
    echo "ℹ️  iOS setup skipped (not on macOS)"
fi

# Android setup
echo "🤖 Setting up Android..."
if [ -d "android" ]; then
    echo "✅ Android directory found"
else
    echo "⚠️  Android directory not found. Make sure you're in the correct project directory."
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "To run the app:"
echo "  📱 iOS:     npm run ios"
echo "  🤖 Android: npm run android"
echo "  🚀 Metro:   npm start"
echo ""
echo "Happy coding! 🎯" 