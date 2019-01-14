console.log('reading js');

/*function setup(){
  // size is createCanvas in p5
  // create a variable to reference the createCanvas
  var myCanvas = createCanvas(800,250);

  // connect myCanvas to mySketch
  myCanvas.parent('mySketch')
}

function draw(){
  ellipse(mouseX,mouseY,50,50);
}*/

function setup(){
  var myCanvas = createCanvas(800,250);
  //colors should be put into quotations '' in order to be recognized
  background('#143756');
  stroke('#f2cd71');
  noFill();

  myCanvas.parent('mySketch')
}

function draw(){
  ellipse(mouseX,mouseY,50,50);
  stroke('#f2cd71');
  noFill();
    if (mouseX<=400) {
      strokeWeight(1);
    } else{
      strokeWeight(2);
    }
    if (mouseIsPressed) {
      fill('#143756');
      noStroke();
    }
}
