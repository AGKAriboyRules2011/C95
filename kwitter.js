
function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

var firebaseConfig = {
  apiKey: "AIzaSyBfTOuVFQPemrwr8oXDBzcIBVYNqAKhA8Q",
  authDomain: "c94-practice-8e263.firebaseapp.com",
  databaseURL: "https://c94-practice-8e263-default-rtdb.firebaseio.com",
  projectId: "c94-practice-8e263",
  storageBucket: "c94-practice-8e263.appspot.com",
  messagingSenderId: "377960993406",
  appId: "1:377960993406:web:3eaaac272a78bc40367e2f"
};



firebase.initializeApp(firebaseConfig);

 function addUser()
 {
    user_name =document.getElementById("user_name").value;
    console.log(user_name);
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    })
 }