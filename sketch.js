var boat, boatImg;
var shark, sharkImg;
var ocean, oceanImg;
var obstacle, obstacleImg;
var gameover, gameoverImg;
var gameState = "PLAY";
var gameState = "END";

function preload(){
//loading images
boatImg = loadImage("boat.png");
sharkImg = loadImage("shark.jpg");
oceanImg = loadImage("ocean.jpg");
obstacleImg = loadImage("obstacle.png");
gameoverImg = loadImage("Game-over.png");

}

function setup() {
createCanvas(400, 400);


//making sprites
boat = createSprite (100, 350, 10, 10);
shark = createSprite (30, 350, 10, 10);
ocean = createSprite (230, 200, 200, 10);
obstacle = createSprite (410, 300, 10, 10)
gameover = createSprite (200, 200);

}

gameState = "PLAY"

function draw() {
    var rand = Math.round (random (220, 350));

//adding images 
boat.addImage (boatImg);
shark.addImage (sharkImg);
ocean.addImage (oceanImg);
obstacle.addImage (obstacleImg);
gameover.addImage (gameoverImg);

//changing size
boat.scale = 0.2;
shark.scale = 0.2;
ocean.scale = 2.5;
obstacle.scale = 0.15;

gameover.visible = false;

ocean.depth = boat.depth - 1;

if (gameState == "PLAY") {

shark.y = boat.y;
boat.y = World.mouseY;

obstacle.velocityX = -4;
ocean.velocityX = obstacle.velocityX;

if (ocean.x < 150) {
    ocean.x = 230;
}

if (frameCount & 100 == 0) {
    obstacle.velocityX += -1
}

if (boat.y < 220) {
    boat.y = 219;
}

if (boat.y > 350) {
    boat.y = 349;
}

if (obstacle.x < -10){
    obstacle.x = 410;
    obstacle.y = rand;
}

}

if (obstacle.isTouching (boat)) {
    gameState = "END";
    obstacle.velocityX = 0
    shark.velocityX = 1;

}

if (gameState == "END" && shark.isTouching (boat)) {

    shark.velocityX = 0;
    gameover.visible = true;

    ocean.velocityX = 0;


}

drawSprites();
}

