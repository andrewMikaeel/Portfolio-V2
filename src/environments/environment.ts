// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
};
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyD1DucXxLrbyqXA4ovKVjEhCQ5rxKGI5wo",
    authDomain: "portfolio-83bfd.firebaseapp.com",
    projectId: "portfolio-83bfd",
    storageBucket: "portfolio-83bfd.appspot.com",
    messagingSenderId: "902661401576",
    appId: "1:902661401576:web:2f4d4682e7dc665f55925d",
    measurementId: "G-QSD16VEMZ5"
  },
  firebaseAnalytics: firebase.analytics()
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
