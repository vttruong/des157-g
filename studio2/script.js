'use strict';
console.log('reading js');

// global variable
var bottle = document.querySelector('#bottle');
var computer = document.querySelector('#computer');
var mouse = document.querySelector('#mouse');

var bottleOverlay = document.querySelector('#bottleOverlay');
var bottleClose = document.querySelector('#bottleClose');

var computerOverlay = document.querySelector('#computerOverlay');
var computerClose = document.querySelector('#computerClose');

var mouseOverlay = document.querySelector('#mouseOverlay');
var mouseClose = document.querySelector('#mouseClose');


// using anon functions to do overlays
bottle.addEventListener('click', function() {
  bottleOverlay.style.display='block';
})

bottleClose.addEventListener('click', function() {
  bottleOverlay.style.display='none';
})

computer.addEventListener('click', function() {
  computerOverlay.style.display='block';
})

computerClose.addEventListener('click', function() {
  computerOverlay.style.display='none';
})

mouse.addEventListener('click', function() {
  mouseOverlay.style.display='block';
})

mouseClose.addEventListener('click', function() {
  mouseOverlay.style.display='none';
})
