#!/bin/bash

# Android Emulator Management Script

# Set up environment variables
export ANDROID_HOME="/opt/homebrew/share/android-commandlinetools"
export PATH="/opt/homebrew/opt/openjdk@17/bin:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator:$PATH"

case "$1" in
    "kill")
        echo "🛑 Killing Android emulator..."
        adb kill-server
        ;;
    "list")
        echo "🤖 Available Android emulators:"
        emulator -list-avds
        ;;
    "start")
        if [ -z "$2" ]; then
            echo "🤖 Starting Pixel_7_API_35 emulator..."
            emulator -avd Pixel_7_API_35
        else
            echo "🤖 Starting $2 emulator..."
            emulator -avd "$2"
        fi
        ;;
    "run")
        echo "🚀 Running Android app..."
        npm run android
        ;;
    *)
        echo "🤖 Android Emulator Management"
        echo ""
        echo "Usage:"
        echo "  ./scripts/android-emulator.sh kill    - Kill emulator"
        echo "  ./scripts/android-emulator.sh list    - List available emulators"
        echo "  ./scripts/android-emulator.sh start   - Start Pixel_7_API_35"
        echo "  ./scripts/android-emulator.sh start \"AVD Name\" - Start specific emulator"
        echo "  ./scripts/android-emulator.sh run     - Run the app"
        ;;
esac 