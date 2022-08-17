# Created by:

Abhiram Nandakumar ||
Dave Kempsell ||
Ibrahim Pala ||
Michael Chan

## Back End
The Back End application for the Bean app is placed in ./Beanend directory, it is a backend server written in JavaScript and built on Express framework. It links to Atlas MongoDB (MongoDB on cloud) using mongoose.

### Installation
When in repo root, type:
```
cd Backend
npm install
```

You need your own Atlas MongoDB account or use a local MongoDB.
.env.local and .env.sampleAtlas show the respective .env file you neeed for setup a MongoDB for the installation.

For the latest instruction to start your Atlas MongoDB, please visit the MongoDB Documentation: https://www.mongodb.com/docs/atlas/getting-started/

### Starting the Backend
To use local mongdoDB:
```
npm run start:local
```

To use Atlas mongoDB:
Copy .env.smapleAtlas to .env.test and change the DB_URI as instructed from MongoDB Atlas instruction. Then run:
```
npm run start:test
```

## Front End
The Front End application for customer/coffee drinker is placed in the ./BeanFront directory. It is designed to be a mobile application.

### Installation
to install Node.JS and Watchman:
```
brew install node
brew install watchman
``` 

### MacOS Xcode
You need to make sure you have Xcode at your machine.
- Get XCode from Mac App Store
- Install Xcode Command Line Tool (Xcode -> Preferences -> Locations)
- Install an iOS simulator (Xcode -> Prferences -> Components)

To install cocoapods dependency (needed by react native)
At Mac terminal:
```
sudo gem install -n /Users/[usr]/.rvm/gems/ruby-2.7.5/bin cocoapods
```

At the root, run:
```
npm install
```
Then run:
gem install bundler
bundle install

gem i bundler -v 2.3.19
bundle i


Then go into the ios folder and run
pod install

If you have problems with cocoapods, uninstall using
`gem list --local | grep cocoapods | awk '{print $1}' | xargs sudo gem uninstall`

### To run the front-end application
At ./BeanFront directory:
```
npm run ios
```
Wait for the xcode simulator to come up.

Bundler will start up in another terminal. It is responsible for building a bundle file for the iOS application to run. 
At the simulator, CMD + D can bring up the menu. When Fash Refresh is enabled, it will refresh the web application when the the bundel is rebuilt. 

### Special notes on running QR code scanner
The Business Application uses [React Native QRCode Scanner](https://github.com/moaazsidat/react-native-qrcode-scanner), it uses one camera dependency [React Native Camera](https://www.npmjs.com/package/react-native-camera), which in turn relies on another dependency: [React Native Permissions](https://github.com/zoontek/react-native-permissions). Because the React Native Camera is currently deprecated and there were changes in React Native the removed certain components that are required by React Native Camera, some extra works have to be done.

1. [For Android] Go to `./BeanBusiness/android/app/src/main/AndroidManifest.xml` and add `<uses-permission android:name="android.permission.VIBRATE"/>`.  
2. [For Android] Go to `./BeanBusiness/android/app/build.gradle` and add:
```
android {
  ...
  defaultConfig {
    ...
    missingDimensionStrategy 'react-native-camera', 'general' <-- insert this line
  }
}
```
3. [iOS only] Go to `./BeanBusiness/ios/BeanBusiness/Info.plist` and add the following "Privacy - Camera Usage Description" key:
```
<key>NSCameraUsageDescription</key>
<string>Your message to user when the camera is accessed for the first time</string>

<!-- Include this only if you are planning to use the camera roll -->
<key>NSPhotoLibraryUsageDescription</key>
<string>Your message to user when the photo library is accessed for the first time</string>

<!-- Include this only if you are planning to use the microphone for video recording -->
<key>NSMicrophoneUsageDescription</key>
<string>Your message to user when the microsphone is accessed for the first time</string>
```

4. Check if you have `"deprecated-react-native-prop-types"` in `./BeanBusiness/package.json`, if not, run:
```
npm i deprecated-react-native-prop-types@2.2.0
```

5. Go to `./BeanBusiness/node_modules/react-native-camera/src/RNCamera.js`, remove `ViewPropTypes` from
```
import {
      findNodeHandle,
      Platform,
      NativeModules,
      ViewPropTypes,
      requireNativeComponent,
      View,
      ActivityIndicator,
      Text,
      StyleSheet,
      PermissionsAndroid,
    } from 'react-native';
```
and add this line:
```
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
```



### Podfiles
To view your podfiles:
`open -a Xcode Podfile`

### Test
At ./BeanFront directory:
```
npm run test
```

### Multiple react native simulations
change to the same port as npm config
```
${RCT_METRO_PORT:=
```

### clear cache
```
rm -rf node_modules
npm cache clean --force
watchman watch-del-all 
rm -fr $TMPDIR/metro-cache
rm -fr $TMPDIR/react
```


## Database design

<img src="./images/bean-database-mvp.jpg" height=350px />
<img src="./images/bean-database.jpg" height=350px s/>


Wireframing

Our project contains two main user journies. 
1. The 'coffee lover' who collects loyalty points called 'beans'
2. The 'coffee shop owner' who provides rewards based on past purchases

The Coffee Lover Flow
![Customer-Wireframe](https://user-images.githubusercontent.com/46889947/182211000-46cb5662-ba80-41a3-9afc-b3c4b45a05d7.png)


The Coffee Shop Owner Flow
![Coffee-Shop-Wireframe](https://user-images.githubusercontent.com/46889947/182211023-46df8741-8b23-4f7d-96f5-3bb24bc20277.png)

## Screenshots
<img src="./images/screenshots/loyalBeanSignUpLogIn.gif" />