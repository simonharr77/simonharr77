//Create two variables that will store the new objects from the class Circle
let arraySize = 1;
let circleArray = [arraySize];

function setup() {
  var canvas= createCanvas (594,841)
  canvas.parent("myContainer"); //global for styles link
  //starting sizes
  w = 1;
  l = 1;
  //creating the first ellipse
  for (let i=0; i<circleArray.length; i++){
    circleArray[i] = new Circle(w, l, random(-1, 3), random(-1, 3), random(1, 1));
  }
 }



//function for adding another ellipse
function mouseClicked(){
  circleArray.push(new Circle(w, l, random(-1, 3), random(-1, 3), random(1, 1)));
}
//start of the moving function
function draw() {
  for (let i=0; i<circleArray.length; i++){
    circleArray[i].moveFunction();
    circleArray[i].displayCircle();
  }
}

//Definition of the class Circle
class Circle{

  constructor(x, y, speedX, speedY, size){
    //Setup of class' variables

//makes it spawn in a random location on the canvas
    this.x = random(594);
    this.y = random(841);
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = 1;//size of the ellipse
//randomizing the colors
    this.rd = random(255);
    this.grn = random(255);
    this.bl = random(255);
    this.a = random(10,130);//opacity
    this.st = random(1,3);//strokeWeight
  }
  //Class function that takes care of motion and collision
  moveFunction(){
    //Motion system - current position and speed
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    //Based on boundaries collision, reverse direction for x and y
    if (this.x > width || this.x<0){//when it reaches the boundry 0 it changes direction
      this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
    }
  }
  //Class function that displays the ellipse
  displayCircle(){
    strokeWeight(this.st);//random strokeweight
    //mapping color change using mouse movement
    let mouse1 = map(mouseY, 0, height, 0, 255);
    let mouse2 = map(mouseX, 0, width, 0, 255);
    let mouse3 = map(mouseY, 0, width, 255, 0);
    this.fillcol = color(this.rd, this.grn, this.bl, this.a);
    fill(mouse1, mouse2,mouse3, this.a);
    //creating the sizes of the randomizing ellipse
    let num = random(5);
    let num2 = random(5);
    let num3 = random(5)
    let num4 = num+num2/num3
    let w = num4;//this is to make it more eratic and less uniform

    //constraining the size, sizes where too big.
    w = constrain(w, 1, 299);
      //size and position of the ellipse
  ellipse(this.x, this.y, w, w);
  }
}
