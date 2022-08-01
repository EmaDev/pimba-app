import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
    apiKey: "AIzaSyDlE0ZwrejI2ui27FlWidd1TryOkgsphZM",
    authDomain: "pimba-app.firebaseapp.com",
    projectId: "pimba-app",
    storageBucket: "pimba-app.appspot.com",
    messagingSenderId: "543325091680",
    appId: "1:543325091680:web:334f0a2d6c77459be31005",
    measurementId: "G-17BT99TTJ9"
};

const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(firebaseApp);

export {
    firebaseApp,
    //analytics
}