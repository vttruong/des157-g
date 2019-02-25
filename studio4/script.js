'use strict';
console.log('reading js');

var major = document.getElementById('major');
var age = document.getElementById('age');
var story = document.getElementById('story');

document.querySelector('#s').addEventListener('click', submitForm);

//define function processForm
function submitForm(evt) {
  localStorage.getItem('major', 'age', 'story');

  //capture html for input
  localStorage.setItem('major', document.getElementById('major').value);
  localStorage.setItem('age', document.getElementById('age').value);
  localStorage.setItem('story', document.getElementById('story').value);

  displayStory();
  evt.preventDefault();
}

console.log('display');

// function displayStory() {
//   var myStory = document.querySelector('#myStory');
//   var storySection = document.querySelector('#storySection');
//
// }
  //capture myStory
  //display using inner.HTML
  // myStory.innerHTML = 'Hello';
  //
  // storySection.className = 'show';

// prevents the page from reloading (default behavior)
