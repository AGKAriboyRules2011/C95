
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBfTOuVFQPemrwr8oXDBzcIBVYNqAKhA8Q",
  authDomain: "c94-practice-8e263.firebaseapp.com",
  databaseURL: "https://c94-practice-8e263-default-rtdb.firebaseio.com",
  projectId: "c94-practice-8e263",
  storageBucket: "c94-practice-8e263.appspot.com",
  messagingSenderId: "377960993406",
  appId: "1:377960993406:web:3eaaac272a78bc40367e2f"
};
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


firebase.initializeApp(firebaseConfig);

 function addUser()
 {
    user_name =document.getElementById("user_name").value;
    console.log(user_name);
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    })
 }
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
