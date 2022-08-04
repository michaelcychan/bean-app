import Realm from 'realm';

// Invokes the shared instance of the Realm app.
const app = new Realm.App({id: 'tasktracker-rhbek'}); // Set Realm app ID here.
export default app;
