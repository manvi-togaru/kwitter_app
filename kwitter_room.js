
var firebaseConfig = {
      apiKey: "AIzaSyCW-5csG-E69l_FhInj43Vnrqjwcg3DES8",
      authDomain: "qwitter-9d3cd.firebaseapp.com",
      databaseURL: "https://qwitter-9d3cd-default-rtdb.firebaseio.com",
      projectId: "qwitter-9d3cd",
      storageBucket: "qwitter-9d3cd.appspot.com",
      messagingSenderId: "27321542097",
      appId: "1:27321542097:web:c4a023c75a22c9ca2b2cf0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
console.log("roomname",Room_names);
row="<div classs='room_name' id="+Room_names+" onclick='redirectroomname(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row;


//End code
});});}
getData();
function addroom() 
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
 purpose:"addingroomname"
})
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function logout()
{
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location="index.html"
}
function redirectroomname(name) 
{
  console.log(name);
  localStorage.setitem("room_name",name);
  window.location="kwitterpage.html"    
}