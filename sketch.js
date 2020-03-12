var circle1,rand2,rand3,redg,greenr,bluer,rectangle2;
function setup(){
  createCanvas(800,400);
    rectangle2=createSprite(50,186,50,50);
}
function draw(){
  rand2=map(mouseX,0,800,0,255);
//   console.log(hi2)
  rand3=color(rand2,125,rand2);
  redg=rand3;
  greenr=(rand2-180,250,rand2+40);
  bluer=(rand2-50,0,rand2);
    rectangle2.x=World.mouseX
  background(redg,greenr,bluer);
  rectangle2.shapeColor=rand2+20;
  drawSprites();
}
// var r = 0;
// var g = 50;
// var b=255;

// // INITIALIZE ALL YOUR VARIABLES
// // Ideally you would create 3 variables. red blue green or r, g, b


// function setup(){

//   createCanvas(1200,400);
// }


// function draw(){

//   // change the value of Red based on the mouse movement about the X axis
//   // change the value of Green based on the mouse movement about the X axis
//   // change the value of Blue based on the mouse movement about the X axis

//   // Use the map() function to do so. 

//   // Pass the values to the background() function you have learnt previously.

//   // Create an ellipse that will move around with you mouse about the X axis.
//   // Remember to fill the canvas with white paint before creating the ellipse.
// }