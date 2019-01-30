'use strict';
console.log('reading js');

/*capture the submit event with an event listener for onclick and a callback function of processForm
*/
document.querySelector('#s').addEventListener('click', processForm);
document.querySelector('#r').addEventListener('click', resetForm);

//define function processForm
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
  // var msgSection = document.querySelector('#msgSection');


  //message concantenation using inner.HTML
  myMsg.innerHTML = 'Every morning, I like to start my day with some coffee to wake myself up.' + ' I usually get one ' + noun1 + ' of coffee with ' + num1 + ' pumps of ' + noun2 + ' syrup, one shot of ' + adj1 + ' syrup ' + ', ' + num2 + ' sprinkle of ' + noun3 + ', a splash of ' + adj2 + ' ' + noun4 + ', and ' +
    num3 + ' drizzle of mocha on top.';

  //.show does not work
  // msgSection.className = 'show';

// prevents the page from reloading (default behavior)
  evt.preventDefault();
}

function resetForm() {
msgSection.className = 'hide';
myMsg.innerHTML = 'your order';
}
