let firebaseConfig = {
    apiKey: "AIzaSyCP0COzwhPdXJiG3iYRwoKR5Y0W81ztcCs",
    authDomain: "blogging-website-28de1.firebaseapp.com",
    projectId: "blogging-website-28de1",
    storageBucket: "blogging-website-28de1.appspot.com",
    messagingSenderId: "696448260462",
    appId: "1:696448260462:web:e379c618646771dd23c97f"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

db = firebase.firestore();