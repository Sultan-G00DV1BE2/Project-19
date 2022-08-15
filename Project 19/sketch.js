var playerCar, carGroup;
var playerCarImg, bcarImg, rcarImg, pcarImg, policecarImg;
var policecar;
var road, roadImg;
var invisibleWall1, invisibleWall2;
var gameOver
var PLAY=0
var END=1
var gameState = PLAY



var gameOverImg;
var restartImg;

var score;

function preload(){

playerCarImg = loadImage("image_processing20200410-18222-11upxlw.png");
bcarImg = loadImage("bluecar.png");
rcarImg = loadImage("red-car-top-view-hi.png");
pcarImg = loadImage("54-546442_cartoon-car-top-view.png")
roadImg = loadImage("road_0.png")
gameOverImg = loadImage("game_over_PNG57.png")
restartImg = loadImage("383-3833748_transparent-restart-png-restart-png-png-download.png")
policeCarImg = loadImage("police-car-top-png-11.png")
}

function setup(){
createCanvas(600,900)



road=createSprite(300,400)
road.addImage(roadImg)
road.scale=0.6
road.velocityY=5

invisibleWall1=createSprite(20,450,30,900);
invisibleWall1.visible=false
invisibleWall2=createSprite(580,450,30,900);
invisibleWall2.visible=false


playerCar=createSprite(300,550)
playerCar.addImage(playerCarImg)
playerCar.scale=0.2
playerCar.rotation=270

policeCar=createSprite(300,730)
policeCar.addImage(policeCarImg)
policeCar.rotation=90
policeCar.scale=0.38

gameOver=createSprite(300,450)
gameOver.addImage(gameOverImg)
gameOver.scale=0.4
gameOver.visible=false

restart=createSprite(300,150)
restart.addImage(restartImg)
restart.scale=0.3
restart.visible=false

carGroup=new Group()


score=0




/*bcar=createSprite(300,600)
bcar.addImage(bcarImg)
bcar.scale=0.28
bcar.rotation=270

rcar=createSprite(300,600)
rcar.addImage(rcarImg)
rcar.scale=0.28
rcar.rotation=270

pcar=createSprite(300,600)
pcar.addImage(pcarImg)
pcar.scale=0.28
pcar.rotation=270*/







}
function draw(){
  
    


if(gameState===PLAY){
   
    
road.velocityY = (6+score/100); 


score = score + Math.round(getFrameRate()/10);



if(keyDown("left_arrow")){
    playerCar.x = playerCar.x - 10
   
}
if(keyDown("right_arrow")){
    playerCar.x = playerCar.x + 10
    
}
if(road.y>500){
road.y=300
}


playerCar.collide(invisibleWall1);
playerCar.collide(invisibleWall2);

policeCar.x=playerCar.x

if(carGroup.isTouching(playerCar)){
   gameState=END
}  



spawnCar()
}
else if(gameState===END){
    gameOver.visible=true;
    restart.visible=true
    road.velocityY=0

    carGroup.setVelocityYEach(0);

    if(mousePressedOver(restart)){
        reset()
      }
    
}
function reset(){
    gameState=PLAY
    carGroup.destroyEach()
    score=0
    restart.visible=false
    gameOver.visible=false


}


drawSprites()

textSize(20)
fill("cyan")
text("Score: "+ score, 455,30);

}

function spawnCar(){
if(frameCount % 100 === 0 ){
var car = createSprite(200,-100,30,30);
car.x=Math.round(random(100,500));
car.scale=0.28
car.velocityY = (6+score/100); 
carGroup.add(car)

var rand = Math.round(random(1,3));
switch(rand) {

case 1:
     car.addImage(bcarImg)
break;
case 2:
     car.addImage(rcarImg)
break;
case 3:
     car.addImage(pcarImg)
break;
default: 
break;

}

car.rotation=270
car.lifeTime=300;




}


}


