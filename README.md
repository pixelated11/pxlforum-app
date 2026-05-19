# Pixel's Forum App



An desktop, and mobile app for [Pixel's Forum](https://pixelated11.page.gd).

<br>

## Android Builds

### Requirements

- Android Studio (latest)

- JDK 17

- Android SDK API 21+



### Build Instructions



1. Clone the repository:

```bash

git clone https://github.com/pixelated11/PixelsForum-Android.git

```



2. Open the project in Android Studio:

&#x20;  - Click **File → Open**

&#x20;  - Select the cloned folder



3. Wait for Gradle to sync



4. Build the APK:

&#x20;  - Click **Build → Build Bundle(s) / APK(s) → Build APK(s)**

&#x20;  - Or via terminal:

```bash

./gradlew assembleDebug

```



5. Find the APK at:

```

app/build/outputs/apk/debug/app-debug.apk

```



### Install

Transfer the APK to your Android device and install it. You may need to enable **Install unknown apps** in your phone settings.

***

## Windows Builds

### Requirements
- Node.js v17.0 or later
- A working terminal/powershell/command pronpt

0. Clone the repository
```
git clone https://github.com/pixelated11/pxlforum-app
# then
cd pxlforum-app
```
1. Switch to `win` branch
```
git checkout win
```

3. Install npm dependencies
```
npm install
```

3. Build the app
```
npm run build
```

**To run the app locally:**
```
npm run start
```

Contribution

Contributions are welcome. Email: itspixelatd@proton.me to request contribution. Make sure you follow the [code of conduct.](https://github.com/pixelated11/pxlforum-app/CODE_OF_CONDUCT.md)
