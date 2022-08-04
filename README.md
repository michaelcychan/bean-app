# Created by:

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

