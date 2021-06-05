var surfer1, surferImg, octopus, octopusImg,lol,rock2Img, islandRand;
var water, waterImg, fort,island, islandImg,fishImg,pearl,oysterImg,castleDoor;;
var rock, rockImg, coin, coinImg, b1,b1img,island1Img, island2Img, island3Img;
var rockGroup, islandGroup, coinGroup, octopusGroup, fortGroup,rock1Img,lighthouseImg,restart, restartImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY
var score = 0;
var soundJump, bottle1Img, bottle1;

function preload() {
  surferImg = loadImage("girlAngleOnly.png");
 waterImg = loadAnimation("gifWater-0.png","gifWater-1.png","gifWater-2.png","gifWater-3.png","gifWater-4.png","gifWater-5.png","gifWater-6.png","gifWater-7.png","gifWater-8.png")
  octopusImg = loadAnimation("octopusRed1.png","octopusRed2.png","octopusRed3.png","octopusRed4.png");
  castleImg = loadAnimation("castle1.png","castle2.png","castle3.png","castle4.png","castle5.png")
  islandImg = loadImage("island.png")
  rockImg = loadImage("rock.png");
  coinImg = loadImage("coin.png");
 soundJump = loadSound("jumpInTheWater.wav")
 fishImg = loadAnimation("animatedFish1.png","animatedFish2.png","animatedFish3.png","animatedFish4.png","animatedFish5.png","animatedFish6.png","animatedFish7.png","animatedFish8.png","animatedFish9.png","animatedFish10.png","animatedFish11.png","animatedFish12.png","animatedFish13.png",)
 oysterImg = loadAnimation("animatedOyster1.png","animatedOyster2.png","animatedOyster3.png")
 rock1Img = loadImage("rock1.png");
 rock2Img = loadImage("rock2.png");
 island1Img = loadImage("nightLand1.png");
 island2Img = loadAnimation("island1.png","island2.png","island3.png","island4.png","island5.png","island6.png","island7.png")
lighthouseImg = loadAnimation("lightHouse1.png","lightHouse2.png")
 restartImg = loadImage("restart.png")
castleDoorImg = loadAnimation("castleDoor1.png","castleDoor2.png","castleDoor3.png","castleDoor4.png","castleDoor5.png")
 soundJump = loadSound("jumpInTheWater.wav")
 rockGroup = new Group();
 islandGroup = new Group();
 coinGroup = new Group();
 octopusGroup = new Group();
 fortGroup = new Group();

}

function setup() {
  createCanvas(1300,600);
  // creating a background
  b1 = createSprite(1300,600);
  b1.addAnimation("waterWater",waterImg);
  b1.velocityY = -(1* b1.y/100)
  b1.scale = 6;
  //restart Image
  restart = createSprite(650,300,20,20)
  restart.addImage(restartImg)
  //creating a surfer
  surfer1 = createSprite(150, 60, 200, 200);
  surfer1.addImage(surferImg);
  surfer1.scale = 0.05;
  //surfer1.velocityY = 1;
 surfer1.setCollider("rectangle",100,100,200,200)

}

function draw() {  
  background(255);

  if (b1.y <80 ){
    b1.y = height/2;
  }
  
  if (gameState === PLAY) {
    
    if (keyDown(RIGHT_ARROW)) {
      surfer1.x += 5
    }
    if (keyDown(LEFT_ARROW)) {
      surfer1.x += -5
    }

    if (islandGroup.isTouching(surfer1)) {
      surfer1.velocityY = 0
      soundJump.play();
      gameState = END
    }
    if (octopusGroup.isTouching(surfer1)) {
      surfer1.velocityY = 0
      soundJump.play();
      gameState = END
    }
    if (fortGroup.isTouching(surfer1)) {
      surfer1.velocityY = 0
      soundJump.play();
      gameState = END
    }
    if (rockGroup.isTouching(surfer1)) {
      surfer1.velocityY = 0
      soundJump.play();
      gameState = END
    }
    if (coinGroup.isTouching(surfer1)) {
      //surfer1.velocityY += 0.5
      score++
      
      coinGroup[0].destroy();
    }
    spawnrock();
    spawnfort();
    spawncoin();
    spawnoctopus();
    spawnisland(); 
  }
 
  

else if (gameState === END){

  b1.velocityY = 0;
  surfer1.velocityY = 0;
  surfer1.velocityX = 0;

  rockGroup.setLifetimeEach(-1);
  islandGroup.setLifetimeEach(-1);
  coinGroup.setLifetimeEach(-1);
  octopusGroup.setLifetimeEach(-1);
  fortGroup.setLifetimeEach(-1);

  rockGroup.setVelocityY(0);
  islandGroup.setVelocityY(0);
  coinGroup.setVelocityY(0);
  octopusGroup.setVelocityY(0);
  fortGroup.setVelocityY(0);
}
  drawSprites()

  strokeWeight(2)
  stroke("black")
  textSize(30)
  text("Score : " + score, windowWidth / 2 + 350, windowHeight / 2 - 250);
  if (mousePressedOver(restart)){
    reset()
  }
}

function spawnrock(){
  if(frameCount % -(Math.round(random(70,100))) === 0){
   rock = createSprite(600, 780, 20, 20);
  rock.x = Math.round(random(1,800))
  rock.scale = 0.1;
    rock.velocityY = -5
    rock.lifetime = 300
 rock.depth = surfer1.depth;
    surfer1.depth +=1   
    lol = Math.round(random(1,3));
    switch(lol) {
      case 1:rock.addImage(rockImg);
              break;
     case 2: rock.addImage(rock2Img);
             break;
     case 3: rock.addImage(rock1Img);
             break;
      default: break;
  }
  rockGroup.add(rock)
}
}
function spawnfort(){
  if(frameCount % -300 === 0 ){
    fort = createSprite(50, 780, 20, 20);
    fort.scale = 0.7;
    fort.depth = surfer1.depth;
    surfer1.depth +=1
    fort.x = Math.round(random(1,1200))
    fort.velocityY = -5
     rand = Math.round(random(1,2));
    switch(rand) {
      case 2:fort.addAnimation("fortBig",castleImg);
              break;
     case 1: fort.addAnimation("fortSmall",castleDoorImg);
             break;
      default: break;
  }
  fortGroup.add(fort)
}
}
function spawncoin(){
  if(frameCount % -(Math.round(random(10,40))) === 0){
  coin = createSprite(Math.round(random(400,1000)),750 , 20, 20);
    coin.addImage(coinImg);
    coin.depth = surfer1.depth;
    surfer1.depth +=1
    coin.scale = 0.05;
    coin.velocityY = -5
    coin.x = Math.round(random(50,1200))
    coinGroup.add(coin)
  }
}
function spawnoctopus(){
  if(frameCount % -100 === 0){
    octopus = createSprite(150, 780, 20, 20);
    octopus.depth = surfer1.depth;
    surfer1.depth +=1
    octopus.scale = 0.5;
     octopus.velocityY = -5;
      octopus.x = Math.round(random(1,1200));
      pearl = Math.round(random(1,3));
      switch(pearl) {
        case 3:octopus.addAnimation("fish",fishImg);
                break;
       case 2: octopus.addAnimation("octopus1",octopusImg);
               break;
       case 1: octopus.addAnimation("oyster",oysterImg);
               break;
        default: break;
}
octopusGroup.add(octopus)
}
}
function spawnisland(){
  if(frameCount % -(Math.round(random(300,450))) === 0){
    island = createSprite(350, 780, 20, 20);
    island.depth = surfer1.depth;
    surfer1.depth +=1
    island.scale = 1;
     island.velocityY = -5;
      island.x = Math.round(random(50,1000));
      islandRand = Math.round(random(1,2));
      switch(islandRand) {
       case 1:island.addAnimation("moving land",island2Img);
               break;
        case 2:island.addAnimation("light",lighthouseImg );
         break;     
        default: break;
}
islandGroup.add(island)
}}
function reset(){
  gameState = PLAY ;
  restart.visible = false;
  rockGroup.destroyEach();
  fortGroup.destroyEach();
  islandGroup.destroyEach();
  octopusGroup.destroyEach();
  score = 0;
}
