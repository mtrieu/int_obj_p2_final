var mic;
var movX;
var movY;

function setup() {
  createCanvas(windowWidth,windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  movX=50;
  movY=50;
}

function draw(){
  background(0);
  var vol = mic.getLevel();
  var lvl = vol*1000
  
  fill(70);
  ellipse(movX,movY,100,100);
  
  if (lvl > 3){
    movX=movX+1
  }
  
  if (lvl > 6){
    movY=movY+1
  }
  
  console.log(lvl);
}