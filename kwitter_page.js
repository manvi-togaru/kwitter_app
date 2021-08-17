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
room_name=localStorage.getItem("room_name")
user_name=localStorage.getItem("user_name")
function logout()
{
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location="index.html"
}
function Send() 
{
msg=document.getElementById("msg").value
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";

}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;
  firbase_message_id=childKey;
  message_data=childData;
  console.log(firebase_message_id)
  console.log(message_data)
  name1=message_data['name']
  message=message_data['message'];
  like=message_data['like']
  name_withtag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>"
  message_withtag="<h4>"+message+"</h4>"
  likebutton="<button id="+firbase_message_id+" value="+like+" onclick='updatelike(this.id)' class='btn btn-warning'>"
  spanwith="<span class='glyphicon glyphicon-thumbs-up'> like:"+like+"</span></button><hr>"
  row=name_withtag+message_withtag+likebutton+spanwith
     document.getElementById("output").innerHTML+=row;
     //End code
     }
     });});}
     getData();
     function updatelike(message_id) 
     {
    console.log(message_id)
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updatelike=Number(likes)+1;
    console.log(updatelike)
    firebase.database().ref(room_name).child(message_id).update({
      like:updatelike
    })
     }