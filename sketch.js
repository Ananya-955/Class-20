var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor= "green";
  movingRect = createSprite (200,50,40,40);
  movingRect.shapeColor= "green";
}

function draw() {
  background(0);  
  rectMode(CENTER);

  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;

  if (movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    (fixedRect.x - movingRect.x< movingRect.width/2 + fixedRect.width/2) && 
    (movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2 )&& 
    (fixedRect.y - movingRect.y< movingRect.height/2 + fixedRect.height/2 )){

      movingRect.shapeColor= "blue";
      fixedRect.shapeColor= "pink";
  }
else {
fixedRect.shapeColor= "green";
movingRect.shapeColor= "green";
}

  drawSprites();
}