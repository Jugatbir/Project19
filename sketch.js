var player
var player_Running
var bananaImage,foodGroup 
var obstacleImage
var obstacleGroup
var back,backImg
var score
var invisi
function preload(){
backImg=loadImage("jungle.jpg");
bananaImage=loadImage("banana.png");
obstacleImage=loadImage("stone.png");
player_Running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png"
)

  
}

function setup() {
  createCanvas(400, 400);
  
   player=createSprite();
  player.addAnimation("running",player_Running);
  player.collide(invisi);
     
   bananaImage=createSprite();
   obstacleImage=createSprite();
   obstacleGroup=createGroup();
   foodGroup=createGroup();
   back=createSprite();
   score=0;
  invisi=createSprite(200,380,400,20);
}

function draw() {
  background(220);
  drawSprites();
}