# Bean App

## Created by
Abhiram Nandakumar ||
Dave Kempsell ||
Ibrahim Pala ||
Michael Chan

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
sudo gem install -n /usr/local/bin ffi cocoapods
```

At the root, run:
```
npm install
```

### To run the front-end application
At ./BeanFront directory:
```
npm run ios
```
Wait for the xcode simulator to come up.

Bundler will start up in another terminal. It is responsible for building a bundle file for the iOS application to run. 
At the simulator, CMD + D can bring up the menu. When Fash Refresh is enabled, it will refresh the web application when the the bundel is rebuilt. 

### Test
At ./BeanFront directory:
```
npm run test
```

