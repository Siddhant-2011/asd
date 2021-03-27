var firebaseConfig = {
    apiKey: "AIzaSyBpWHqqmT3oxW0SYS8aFl0PVE6GmicEc4U",
    authDomain: "chat-app-3c540.firebaseapp.com",
    databaseURL: "https://chat-app-3c540.firebaseio.com",
    projectId: "chat-app-3c540",
    storageBucket: "chat-app-3c540.appspot.com",
    messagingSenderId: "534637847733",
    appId: "1:534637847733:web:0fe6df52852e1fc7674afc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

