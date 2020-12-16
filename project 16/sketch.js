
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  }
  function Setup(){
     //creating monkey
monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x);
  
  //create banana and obstacles group
  bananaGroup=createGroup();
  obstaclesGroup=createGroup();
  }


function draw() {
background(255);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
     }
  
  monkey.velocityY=monkey.velocityY +0.8;
  
  monkey.collide(ground);
  
  Spawnobstacles();
  
  
  drawSprites();
}

function Spawnobstacles(){
  if(frameCount%60===0){
    var obstacles=createSprite(600,165,10,40);
    obstacles.velocityX=-(6+score/100);
    
    //generate random obstacles
    var rand=Math.round(random(1,6));
    switch(rand){
      case 1:obstacles.addImage(obstacleImage);
    }
    //assign scale and lifetime to the obstacles
    obstacles.scale=0.5;
    obstacles.lifetime=300;
    
    //add each obstacles to the group
    obstaclesGroup.add(obstacles);
  }
  function Spawnbanana(){
    if(frameCount%60===0){
      var banana=createSprite(600,120,40,100);
      banana.y=Math.round(random(80,120));
      banana.addImage(bananaImage);
      banana.scale=0.5;
      banana.velocityX=-3;
      
      //assign lifetime to the variable
      banana.lifetime=200;
      
      //adjust the depth
      banana.depth=monkey.depth
      monkey.depth=monkey.depth+1;
    }
  }
}
