let x;
let y;
let speedX;
let speedY;


function setup(){
  var canvas= createCanvas (800, 800)
  canvas.parent("myContainer");
  x = width/2;
  y = height/2;

  speedX = random(-10., 30);
  speedY = random(-10., 30.);
  r = random (255);
  g = random (255);
  b = random (255);

  textSize(16);
  rectMode(CENTER);
  background(r,g,b);

}

function draw(){

  l = random(30);
  w = random(30);
  p = random(y,x);
  s = random(w/8,l/8);
  x = x + speedX;
  y = y + speedY;
  strokeWeight(s);


  if (x>801){
    fill(mouseX,mouseY,r);
    x = p;
    speedX = random(-5., 15.);
    speedY = random(-5., 15.);
  }

  if (x<-1){
    fill(mouseX,mouseY,r);
    x = p;
    speedX = random(-5., 15.);
    speedY = random(-5., 15.);
  }

  if (y>801){
    fill(mouseX,mouseY,r);
    y = p;
    speedX = random(-5., 15.);
    speedY = random(-5., 15.);
  }
  if (y<-1){
    fill(mouseX,mouseY,255);
    y = p;
    speedX = random(-5., 15.);
    speedY = random(-5., 15.);
  }

  fill(mouseX,mouseY,r);
  rect(x, y, l, w);
  ellipse(y, x, l, w);
  frameRate(28);



}
