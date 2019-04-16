import Firebase from 'firebase';

let config= {
    apiKey: "AIzaSyAe2H7_uZbG2xy8HbqcJBnpm8ZD6-FKuPI",
    authDomain: "fir-demo-4cfe3.firebaseapp.com",
    databaseURL: "https://fir-demo-4cfe3.firebaseio.com",
    projectId: "fir-demo-4cfe3",
    storageBucket: "fir-demo-4cfe3.appspot.com",
    messagingSenderId: "393775081106"
  };
  let app =  Firebase.initializeApp(config);

  export const db = app.database();