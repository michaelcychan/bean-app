import Realm from 'realm';

// Invokes the shared instance of the Realm app.
const app = new Realm.App({id: 'YOUR-API-KEY'}); // Set Realm app ID here.
export default app;

// replace 'YOUR-API-KEY' with your api key