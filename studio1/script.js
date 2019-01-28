console.log('reading js');
'use strict';

document.querySelector('#s').addEventListener('click', processForm);
document.querySelector('#r').addEventListener('click', resetForm);

function processForm(evt) {

  //capture html for inputs
  var noun1 = document.querySelector('#noun1').value;

  var num1 = document.querySelector('#num1').value;

  var noun2 = document.querySelector('#noun2').value;

  var adj1 = document.querySelector('#adj1').value;

  var num2 = document.querySelector('#num2').value;

  var noun3 = document.querySelector('#noun3').value;

  var adj2 = document.querySelector('#adj2').value;

  var noun4 = document.querySelector('#noun4').value;

  var num3 = document.querySelector('#num3').value;

  //capture myMsg
  var myMsg = document.querySelector('#myMsg');

  myMsg.innerHTML = 'Hello, I like ' + noun1 + num1 + noun2 + adj1 + num2 + noun3 + adj2 + noun4
  + num3;

  evt.preventDefault();

}
