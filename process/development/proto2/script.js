'use strict';
console.log('reading js');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBWRYKANEZWWJ0txSheC7wRvFnP4OSp1IE",
  authDomain: "immi-84514.firebaseapp.com",
  databaseURL: "https://immi-84514.firebaseio.com",
  projectId: "immi-84514",
  storageBucket: "immi-84514.appspot.com",
  messagingSenderId: "532792550104"
};

  firebase.initializeApp(config);

//Reference messages collection
var messagesRef = firebase.database().ref('messages');

//Listen for form SUBMIT
document.getElementById('shareForm').addEventListener('submit', submitForm);

//Submit form
function submitForm(e){
  e.preventDefault();

  //Get values
  var major = getInputVal('major');
  var age = getInputVal('age');
  var story = getInputVal('story');

  //Save message
  saveMessage(major, age, story);

  //Show Alert
  document.querySelector('.alert').style.display = 'block';

  //Hide alert after time
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  //Clear form after submission
  document.getElementById('shareForm').reset();
}

//Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

//Save message to firebasejs
function saveMessage(major, age, story){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    major: major,
    age: age,
    story: story
  });

}
