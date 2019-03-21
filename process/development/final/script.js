'use strict';
console.log('reading js');

var exploreWindow = document.querySelector('#exploreWindow');
var overlay = document.querySelector('#overlay');
var p = document.querySelector('#overlay p');
var close = document.querySelector('#close');

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

//retrieve data from firebase
var database = firebase.database();

var ref = database.ref('messages');
ref.on('value', gotData, errData);

function gotData(data) {

  //put into array
  var messages = data.val();
  var keys = Object.keys(messages);
  console.log(keys);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var major = messages[k].major;
    var age = messages[k].age;
    var story = messages[k].story;
    console.log(major, age, story);

    //display data
    exploreWindow.addEventListener('click', function(){
      overlay.style.display ='block';
      p.innerHTML = major + ' ,' + age  + '  -  '  + story ;
    });

    close.addEventListener('click', function() {
        overlay.style.display = "none";
    })
  }
}

function errData(err) {
  console.log('Error!');
  console.log(err);
}

//display data
// exploreWindow.addEventListener('click', function(){
//   overlay.style.display ='block';
//   p.innerHTML = major + ' ,' + age + '/u2014' + story ;
// });
//
// close.addEventListener('click', function() {
//     overlay.style.display = "none";
// })





//first time visit
var firstVisit = localStorage.getItem('firstVisit');

if (firstVisit === true) {
  localStorage.setItem('firstVisit');
  document.getElementById('start').onclick = function() {
    window.location.href = './index.html#resources';
};
  }  else {
    document.getElementById('start').onclick = function() {
      window.location.href = './index.html#explore';
  };
}
