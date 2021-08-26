const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
var newx=500
var platform
var platformImg
var playerImg
var obstacleImg

var PLAY = 1;
var WIN =2 
var END = 0;
var gameState = PLAY;



var score=0;


function preload() {
  platformImg=loadImage("wall.jpg")
  
  playerImg=loadAnimation("p1.png","p2.png","p3.png","p4.png")
  obstacleImg=loadImage("ob2.png")
  startwall=loadImage("srtwall.png")
}
function setup(){
  var canvas=createCanvas(displayWidth,displayHeight);
engine=Engine.create()
world=engine.world
platformGroup= new Group()
ObstacleGroup= new Group()

startWall= createSprite(height-90,500,200,200)
startWall.addImage(startwall)
startWall.setCollider("rectangle",0,300,400,250)
startWall.debug=true
//startWall.scale=5

for (var i=0;i<25;i++){
platform1 =new Platform(newx)
newx=newx+platform1.width+500
platformGroup.add (platform1.body)
ObstacleGroup.add (platform1.body2)
}
finishline=createSprite(newx,height/2)
player= new Player()

}
function draw(){
  background(0);


  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    
    if(keyDown("space") && player.body.y >= 159) {
      player.body.velocityY = -12;
          
    }
    if(ObstacleGroup.isTouching(player.body)){
      gameState = END;
      
  }
    
  }
  



  camera.position.x=player.body.x+300
  camera.position.y=height/2
  drawSprites()
  player.gravity()
  player.body.collide(platformGroup)
  ObstacleGroup.collide(platformGroup)
  player.body.collide(startWall)
  player.body.displace(ObstacleGroup)
  //startWall.collide(player.body)
ObstacleGroup.setVelocityEach(0,10)

  if (keyDown('right')){
    player.moveRight()
  }
  
  if(keyDown('left')){
    player.moveLeft()
  }

  if(keyDown('up')&& player.body.velocityY===0){
    player.moveUp()
  }
}
