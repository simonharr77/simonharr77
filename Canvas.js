function setup(){
   var canvas= createCanvas (1000, 1000)
   canvas.parent("myContainer");
}
function draw(){
  background(171,171,171)
  var text = createDiv('This is an HTML string!');
    text.position(50,50);
}
