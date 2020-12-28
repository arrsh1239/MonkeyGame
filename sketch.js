var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var invisbleGround;
var survivalTime = 0;  
var score;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 400);
  monkey = createSprite(60, 200, 20, 20);
  monkey.addAnimation("sprite_0", monkey_running)
  monkey.scale = 0.2


  invisibleGround = createSprite(200, 390, 800, 10); 

  score = 0;
}
    

function draw() {
  background("cyan");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
       
 stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  
  text("Survival Time : " + survivalTime,100,50);  
  if (keyDown("space") && monkey.y >= 300) {
    monkey.velocityY = -12


  }

  monkey.velocityY = monkey.velocityY + 0.35
  monkey.collide(invisibleGround);

  createBanana();
  createObstacle();
  drawSprites();
}

function createBanana() {
  if (frameCount % 80 === 0) {
    banana = createSprite(540, 200, 20, 20);
    banana.y = Math.round(random(120, 200));

    banana.addImage("banana", bananaImage)
    banana.scale = 0.2
    banana.velocityX = -6
    banana.lifeTime = 90;
  }
}
function createObstacle(){
    if (frameCount % 300 === 0) {
      obstacle = createSprite(540, 350, 20, 20);
  obstacle.addImage("obstacle", obstacleImage)
  obstacle.scale = 0.2;
  obstacle.velocityX = -6
  obstacle.lifeTime = 90;

}
}