const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle;

var gameState;

var divisionHeight;
var score, turn;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  score = 0;
  turn = 0;
  gameState = "play"


  ground = new Ground(width/2,height,width,20);

  divisionHeight=300
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,375));
    }
    mouseClicked();

}
 


function draw() {
  background("black");
  
  Engine.update(engine);
  strokeWeight(4);
  textSize(20);
  fill(255);
  text("Score : "+score,20,30);

  textSize(25);
  text("500",20,520);
  text("500",100,520);
  text("500",180,520);
  text("500",260,520);
  text("100",340,520);
  text("100",420,520);
  text("100",500,520);
  text("200",580,520);
  text("200",660,520);
  text("200",740,520);
  

  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

  if(particle != null){
    particle.display();
      if(particle.body.position.y > 760){
          if(particle.body.position.x < 300){
            score = score + 500;
            particle = null;
            if(turn>= 5) gameState = "end";
            if(turn>= 5 && score === 2500) gameState = "win";
          }
      }
  }
  if(particle != null){
    particle.display();
      if(particle.body.position.y > 760){
        if(particle.body.position.x > 301 && particle.body.position.x < 600){
          score = score + 100;
          particle = null;
          if(turn>= 5) gameState = "end";
          if(turn>= 5 && score === 2500) gameState = "win";
        }
      }
  }

  if(particle != null){
    particle.display();
      if(particle.body.position.y > 760){
        if(particle.body.position.x > 601 && particle.body.position.x < 900){
          score = score + 200;
          particle = null;
          if(turn>= 5) gameState = "end";
          if(turn>= 5 && score === 2500) gameState = "win";
        }
      }
  }

   if(gameState === "end"){
     strokeWeight(4);
     textSize(70);
     text("GAME OVER", 220,250);
   }
   if(gameState === "win"){
    strokeWeight(4);
    textSize(70);
    text("YOU WIN", 250,250);
  }
}
function mouseClicked(){
  if(gameState!=="end"){
    particle = new Particle(mouseX,10,10);
    turn++;
  }
}
