
var ship, ship_running, edges;
var seaImage;

function preload(){
  ship_running = loadAnimation("ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(600,600);
  
 
  ship = createSprite(150,160,120,150);
  ship.addAnimation("running", ship_running);
  edges = createEdgeSprites();
  
  
  //ship.scale = 0.5;
  ship.x = 150
sea=createSprite(200,180,400,20);
sea.addImage("running",seaImage);
sea.x=sea.width/2;


}


function draw(){
   
  background("blue");
  if(sea.x<0){
    sea.x=sea.width/2;

    }
  
  console.log(ship.x)
  
  
  if(keyDown("right")){
    //ship.velocityX = 10;
  }
  
  //ship.velocityX = ship.velocityX + 0.5;
  
 
  ship.collide(edges[3])
  drawSprites();
}