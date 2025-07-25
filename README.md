# 📝 Cross-Platform ToDo Mobile App

A beautiful, modern cross-platform to-do application built with React Native and TypeScript. This project demonstrates best practices for React Native development with a modular, maintainable codebase.

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

1. **Navigate to the TodoApp directory:**
   ```bash
   cd TodoApp
   ```

2. **Run the setup script:**
   ```bash
   ./setup.sh
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **iOS Setup** (macOS only)
   ```bash
   cd ios
   pod install
   cd ..
   ```

5. **Start the Metro bundler**
   ```bash
   npm start
   ```

6. **Run the app**

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
**IOS DEVICE**
```bash
# Run on physical iOS device
npx react-native run-ios --device
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

## 📁 Project Structure & Development Guide

### 🎯 **Files/Folders with YOUR APP CODE:**

**Main Application Files:**
```
📄 App.tsx                 # 🎯 MAIN APP ENTRY POINT - Your primary app component
📄 index.js                # 🎯 APP BOOTSTRAP - Entry point for React Native
```

**Your Source Code:**
```
📁 src/                    # 🎯 YOUR MAIN CODE DIRECTORY
├── 📁 components/         # 🎯 REUSABLE UI COMPONENTS
│   ├── 📄 TodoItem.tsx   # Individual todo item component
│   ├── 📄 TodoInput.tsx  # Input field component
│   ├── 📄 TodoList.tsx   # List of todos component
│   ├── 📄 TodoStats.tsx  # Statistics display component
│   └── 📄 index.ts       # Component exports
├── 📁 types/              # 🎯 TYPE DEFINITIONS
│   └── 📄 index.ts       # TypeScript interfaces
└── 📁 utils/              # 🎯 UTILITY FUNCTIONS
    └── 📄 index.ts       # Helper functions
```

**Tests:**
```
📁 __tests__/              # 🎯 YOUR TEST FILES
└── 📄 App-test.tsx       # Tests for main App component
```

**Documentation & Scripts:**
```
📄 README.md               # 🎯 PROJECT DOCUMENTATION
📁 scripts/                # 🎯 YOUR HELPER SCRIPTS
├── 📄 ios-simulator.sh   # iOS simulator management
└── 📄 android-emulator.sh # Android emulator management
```

### ❌ **Files/Folders to AVOID Editing:**

**Build & Configuration Files:**
```
📁 ios/                    # iOS native code - avoid unless you need native iOS features
📁 android/                # Android native code - avoid unless you need native Android features
📁 node_modules/           # Dependencies - never edit manually
📁 vendor/                 # React Native vendor files - never edit
📁 .bundle/                # Build artifacts - auto-generated
📁 ios/build/              # iOS build output - auto-generated
📁 android/build/          # Android build output - auto-generated
📁 ios/Pods/               # iOS dependencies - auto-generated
📁 android/.gradle/        # Android build cache - auto-generated
📁 android/.kotlin/        # Kotlin cache - auto-generated
```

**Configuration Files (Edit with Caution):**
```
📄 package.json            # Dependencies and scripts - edit carefully
📄 package-lock.json       # Lock file - auto-generated
📄 tsconfig.json           # TypeScript config - edit carefully
📄 metro.config.js         # Metro bundler config - edit carefully
📄 babel.config.js         # Babel config - edit carefully
📄 jest.config.js          # Test config - edit carefully
📄 .eslintrc.js            # Linting rules - edit carefully
📄 .prettierrc.js          # Code formatting - edit carefully
📄 ios/Podfile             # iOS dependencies - edit carefully
📄 android/build.gradle    # Android build config - edit carefully
📄 android/gradle.properties # Android properties - edit carefully
```

### 🎯 **Where to Focus Your Development:**

**Primary Development Areas:**
1. **`App.tsx`** - Main app logic and state management
2. **`src/components/`** - All your reusable UI components
3. **`src/types/`** - TypeScript type definitions
4. **`src/utils/`** - Helper functions and utilities
5. **`__tests__/`** - Your test files

**Secondary Development Areas:**
1. **`README.md`** - Documentation updates
2. **`scripts/`** - Custom helper scripts
3. **`package.json`** - Adding new dependencies

**Avoid Unless Necessary:**
1. **`ios/` and `android/`** - Only for native code integration
2. **Configuration files** - Only when you need to change build/test settings
3. **Auto-generated files** - Never edit these

### 💡 **Quick Reference:**

**✅ Safe to Edit:**
- `App.tsx` and `src/` folder
- `__tests__/` folder
- `README.md` and `scripts/` folder

**⚠️ Edit with Caution:**
- Configuration files (`.json`, `.js` config files)
- `package.json` (for dependencies)

**❌ Avoid Editing:**
- `ios/` and `android/` folders
- `node_modules/` and build folders
- Auto-generated files

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
