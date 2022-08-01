# Bean App

## Created by
Abhiram Nandakumar ||
Dave Kempsell ||
Ibrahim Pala ||
Michael Chan

## Installation
to install Node.JS and Watchman:
```
brew install node
brew install watchman
```

### MacOS
You need to make sure you have Xcode at your machine.
- Get XCode from Mac App Store
- Install Xcode Command Line Tool (Xcode -> Preferences -> Locations)
- Install an iOS simulator (Xcode -> Prferences -> Components)

To install cocoapods dependency (needed by react native)
At Mac terminal:
```
sudo gem install -n /usr/local/bin ffi cocoapods
```

At the root, run:
```
npm install
```

## To run the webpage
```
npx react-native run-ios
```
Wait for the xcode simulator to come up.