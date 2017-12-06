//Create two variables that will store the new objects from the class Circle
let arraySize = 1;
let circleArray = [arraySize];

function setup() {
  var canvas= createCanvas (594, 841)
  canvas.parent("myContainer");
  w = 1;
  l = 1;
  for (let i=0; i<circleArray.length; i++){
    circleArray[i] = new Circle(w, l, random(-1, 3), random(-1, 3), random(1, 1));
  }
}

function mouseClicked(){
  circleArray.push(new Circle(w, l, random(-1, 3), random(-1, 3), random(1, 1)));
}

function draw() {
  for (let i=0; i<circleArray.length; i++){
    circleArray[i].moveFunction();
    circleArray[i].displayCircle();
    num = random(5);
    num2 = random(5);
    num3 = random(5)
    num4 = num+num2/num3
    w = num4;
    l = num4;
  }
}

//Definition of the class Circle
class Circle{

  constructor(x, y, speedX, speedY, size){
    //Setup of class' variables
    this.x = 1;
    this.y = 1;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = 1;

    this.rd = random(255);
    this.grn = random(255);
    this.bl = random(255);
    this.a = random(10,130);
    this.st = random(1,3);
  }

  //Class function that takes care of motion and collision
  moveFunction(){
    //Motion system - current position and speed
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    //Based on boundaries collision, reverse direction for x and y
    if (this.x > width || this.x<0){
      this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;

}
  }

  //Class function that displays the ellipse
  displayCircle(){
    strokeWeight(this.st);
    var mouse1 = map(mouseY, 0, height, 0, 255);
    var mouse2 = map(mouseX, 0, width, 0, 255);
    var mouse3 = map(mouseY, 0, width, 255, 0);
    this.fillcol = color(this.rd, this.grn, this.bl, this.a);
    fill(mouse1, mouse2,mouse3, this.a);
    let num = random(5);
    let num2 = random(5);
    let num3 = random(5)
    let num4 = num+num2/num3
    let w = num4;
    let l = num4;

    ellipse(this.x, this.y, w, l);
  }
}
