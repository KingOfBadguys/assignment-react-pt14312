import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAvbMAZI5kWDZpHp7ulKnSVIkvT92x0uP0",
    authDomain: "upload-images-abd5c.firebaseapp.com",
    databaseURL: "https://upload-images-abd5c.firebaseio.com",
    projectId: "upload-images-abd5c",
    storageBucket: "upload-images-abd5c.appspot.com",
    messagingSenderId: "890193883337",
    appId: "1:890193883337:web:d20c7bd9591ae999551d18",
    measurementId: "G-6T5TY8GZVD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;
