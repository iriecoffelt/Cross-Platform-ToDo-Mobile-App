#!/bin/bash

# iOS Simulator Management Script

case "$1" in
    "kill")
        echo "🛑 Killing all iOS simulators..."
        xcrun simctl shutdown all
        ;;
    "list")
        echo "📱 Available iOS simulators:"
        xcrun simctl list devices
        ;;
    "start")
        if [ -z "$2" ]; then
            echo "📱 Starting iPhone 16 Pro simulator..."
            xcrun simctl boot "iPhone 16 Pro"
            open -a Simulator
        else
            echo "📱 Starting $2 simulator..."
            xcrun simctl boot "$2"
            open -a Simulator
        fi
        ;;
    "run")
        echo "🚀 Running iOS app..."
        npm run ios
        ;;
    *)
        echo "📱 iOS Simulator Management"
        echo ""
        echo "Usage:"
        echo "  ./scripts/ios-simulator.sh kill    - Kill all simulators"
        echo "  ./scripts/ios-simulator.sh list    - List available simulators"
        echo "  ./scripts/ios-simulator.sh start   - Start iPhone 16 Pro"
        echo "  ./scripts/ios-simulator.sh start \"Device Name\" - Start specific device"
        echo "  ./scripts/ios-simulator.sh run     - Run the app"
        ;;
esac 