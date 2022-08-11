# Loyalty Bean

  It is the Engineering Project III of the Makers Bootcamp

## The team

Abhiram Nandakumar   
Dave Kempsell   
Ibrahim Pala   
Michael Chan  

## Tech used
<p float="left">
  <img src="images/tech-brands/reactnative.png" style="height:100px" />
  <img src="images/tech-brands/nodejs.png" style="height:100px" />
  <img src="images/tech-brands/express.png" style="height:100px" />
  <img src="images/tech-brands/mongodbatlas.png" style="height:100px" />
  <img src="images/tech-brands/heroku.png" style="height:100px" />
</p>

[React Native](https://reactnative.dev/) for the two frontend applications  
[Node.js](https://nodejs.org/) for backend Javascript runtime  
[Express](https://expressjs.com/) for the web framework for Node.js  
[MongoDb Atlas](https://www.mongodb.com/) for backend database  
[Heroku](https://www.heroku.com) for hosting the backend server

## Back End

  The Back End application for the Bean app is placed in `./Beanend` directory. It can link to a local MongoDB or MongoDB Atlas using mongoose. See below for different setup.

### Installation

When in repo root, type:
```
cd Backend
npm install
```

You need your own Atlas MongoDB account or use a local MongoDB.
`.env.local` and `.env.sampleAtlas` show the respective `.env` file you neeed for setup a MongoDB for the installation.

For the latest instruction to start your Atlas MongoDB, please visit the MongoDB Documentation: https://www.mongodb.com/docs/atlas/getting-started/

### Starting the Backend

To use local mongdoDB:
```
npm run start:local
```

To use Atlas mongoDB:
Copy .env.smapleAtlas to .env.test and change the `DB_URI` as instructed from MongoDB Atlas [instructions](https://www.mongodb.com/docs/atlas/driver-connection/). Then run:
```
npm run start:test
```

If the backend server could run on the local server, you should be able to see the following messages on your terminal:
```
Server started, listening to port: 5050   <-- or other assigned ports
Connection to database successful
```

## Front End
The Front End application for customer/coffee drinker is placed in the `./BeanFront` directory. It is designed to be a mobile application.

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
```
gem install bundler
bundle install
gem i bundler -v 2.3.19
bundle i
```

Then go into the ios folder and run:
`pod install`

If you have problems with cocoapods, uninstall using:

`gem list --local | grep cocoapods | awk '{print $1}' | xargs sudo gem uninstall`

### To run the front-end application
At ./BeanBusiness or ./BeanCustomer directory:

`npm run ios` or `npm run android`

Wait for the xcode simulator / android emulator / connected physical device to load the application.

Bundler will start up in another terminal. It is responsible for building a bundle file for the mobile application to run. 
At the simulator, CMD + D can bring up the menu. When Fash Refresh is enabled, it will refresh the web application when the the bundel is rebuilt. 

### Podfiles (iOS only)
To view your podfiles:
`open -a Xcode Podfile`

### clear cache
```
rm -rf node_modules
npm cache clean --force
watchman watch-del-all 
rm -fr $TMPDIR/metro-cache
rm -fr $TMPDIR/react
```


## Heroku setup

Additional steps are needed to setup the Heroku for it to work properly:

Settings:  

Config Vars:  
DB_URI: add your mongodb connection domain  
PROJECT_PATH: Backend/  

Buildpacks:  
https://github.com/timanovsky/subdir-heroku-buildpack.git  
heroku/nodejs  

## Database design

<img src="./images/bean-database-mvp.jpg" height=350px />
<img src="./images/bean-database.jpg" height=350px />


Wireframing

Our project contains two main user journies. 
1. The 'coffee lover' who collects loyalty points called 'beans'
2. The 'coffee shop owner' who provides rewards based on past purchases

The Coffee Lover Flow
![Customer-Wireframe](https://user-images.githubusercontent.com/46889947/182211000-46cb5662-ba80-41a3-9afc-b3c4b45a05d7.png)


The Coffee Shop Owner Flow
![Coffee-Shop-Wireframe](https://user-images.githubusercontent.com/46889947/182211023-46df8741-8b23-4f7d-96f5-3bb24bc20277.png)

