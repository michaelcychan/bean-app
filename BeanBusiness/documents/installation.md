### How to build the back-end application
In a seperate terminal window, enter:
npx react-native start

Withing VSCode Settings 
- Search for 'Javascript Validate'
- Disable this setting

### To run the back-end application

At ./BeanBusiness directory:
npm run ios
Within the ./BeanBusiness/ios directory:
pod install


Wait for the xcode simulator to come up.

Bundler will start up in another terminal. It is responsible for building a bundle file for the iOS application to run.
At the simulator, CMD + D can bring up the menu. When Fash Refresh is enabled, it will refresh the web application when the the bundel is rebuilt.