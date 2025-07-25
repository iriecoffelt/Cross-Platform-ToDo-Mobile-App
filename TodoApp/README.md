# 📝 Todo App - React Native

A beautiful, modern cross-platform to-do application built with React Native and TypeScript. Stay organized and productive with this intuitive task management app.

## ✨ Features

- **📱 Cross-Platform**: Works on both iOS and Android
- **🎨 Modern UI**: Beautiful dark theme with smooth animations
- **✅ Task Management**: Add, complete, and delete tasks
- **📊 Progress Tracking**: See pending vs completed tasks
- **🗑️ Safe Deletion**: Confirmation dialogs for task deletion
- **⌨️ Keyboard Friendly**: Optimized input handling
- **🎯 Empty States**: Helpful guidance when no tasks exist
- **📈 Statistics**: Real-time task statistics

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd TodoApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **iOS Setup** (macOS only)
   ```bash
   cd ios
   pod install
   cd ..
   ```

4. **Start the Metro bundler**
   ```bash
   npm start
   ```

5. **Run the app**

   **For iOS:**
   ```bash
   npm run ios
   ```

   **For Android:**
   ```bash
   npm run android
   ```

## 🎯 How to Use

### Adding Tasks
- Tap the input field at the top
- Type your task description
- Press the "+" button or hit "Done" on your keyboard

### Managing Tasks
- **Complete a task**: Tap on any task to mark it as completed
- **Delete a task**: Long press on a task or tap the trash icon
- **View progress**: Check the statistics at the bottom

### Task Organization
- Tasks are automatically separated into "Pending" and "Completed" sections
- New tasks appear at the top of the pending list
- Completed tasks show with a strikethrough effect

## 🛠️ Technical Details

### Architecture
- **React Native 0.80.2**: Latest stable version
- **TypeScript**: Full type safety
- **Functional Components**: Modern React patterns
- **Hooks**: useState, useEffect for state management

### Key Components
- **SafeAreaView**: Proper layout for different screen sizes
- **KeyboardAvoidingView**: Smooth keyboard handling
- **Animated**: Smooth fade-in animations
- **ScrollView**: Scrollable task list
- **Alert**: Confirmation dialogs

### Styling
- **Dark Theme**: Modern dark UI with blue accents
- **Responsive Design**: Works on all screen sizes
- **Custom Components**: Beautiful checkboxes and buttons
- **Shadow Effects**: Subtle depth and elevation

## 📱 Platform Support

- ✅ iOS 12.0+
- ✅ Android 5.0+ (API level 21+)
- ✅ React Native 0.80.2
- ✅ TypeScript 5.0.4

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📱 Simulator/Emulator Management

### Quick Scripts

We've created convenient scripts to manage iOS simulators and Android emulators:

**iOS Simulator:**
```bash
# Kill all iOS simulators
./scripts/ios-simulator.sh kill

# List available iOS simulators
./scripts/ios-simulator.sh list

# Start iPhone 16 Pro simulator
./scripts/ios-simulator.sh start

# Start a specific simulator
./scripts/ios-simulator.sh start "iPhone 16 Pro Max"

# Run the iOS app
./scripts/ios-simulator.sh run
```

**Android Emulator:**
```bash
# Kill Android emulator
./scripts/android-emulator.sh kill

# List available Android emulators
./scripts/android-emulator.sh list

# Start Pixel_7_API_35 emulator
./scripts/android-emulator.sh start

# Start a specific emulator
./scripts/android-emulator.sh start "Pixel_7_API_35"

# Run the Android app
./scripts/android-emulator.sh run
```

### Manual Commands

**iOS Simulator:**
```bash
# Kill all simulators
xcrun simctl shutdown all

# List available devices
xcrun simctl list devices

# Start specific device
xcrun simctl boot "iPhone 16 Pro"

# Run iOS app
npm run ios
```

**Android Emulator:**
```bash
# Set up environment variables
export ANDROID_HOME="/opt/homebrew/share/android-commandlinetools"
export PATH="/opt/homebrew/opt/openjdk@17/bin:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator:$PATH"

# Kill emulator
adb kill-server

# List available emulators
emulator -list-avds

# Start specific emulator
emulator -avd Pixel_7_API_35

# Run Android app
npm run android
```

### Quick Daily Commands

```bash
# Kill everything and start fresh
./scripts/ios-simulator.sh kill
./scripts/android-emulator.sh kill

# Run on iOS
./scripts/ios-simulator.sh run

# Run on Android
./scripts/android-emulator.sh run

# List all available devices
./scripts/ios-simulator.sh list
./scripts/android-emulator.sh list
```

## 📦 Build

### iOS
```bash
cd ios
xcodebuild -workspace TodoApp.xcworkspace -scheme TodoApp -configuration Release -destination generic/platform=iOS -archivePath TodoApp.xcarchive archive
```

### Android
```bash
cd android
./gradlew assembleRelease
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React Native team for the amazing framework
- TypeScript team for type safety
- The open-source community for inspiration

---

**Made with ❤️ using React Native**
