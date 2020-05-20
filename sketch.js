var fixedRect, movingRect;
var object1, object2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  object1 = createSprite(300,300,60,60);
  object2 = createSprite(350,380,60,60);
  object1.shapeColor = "blue";
  object2.shapeColor = "red";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  object1.x=mouseX;
  object1.y=mouseY;
  bounceOff(movingRect, fixedRect);
  if (isTouching(object1,object2)){
    object1.shapeColor="yellow";
    object2.shapeColor="orange";
  }
  else {
    object1.shapeColor="blue";
    object2.shapeColor="red";
  }
  drawSprites();
}
