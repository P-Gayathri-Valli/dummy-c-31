const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var drops=[];
var rand;
var maxDrops=100;
var man_umbrella;
var thunder1,thunder2,thunder3,thunder4;

function preload(){
    thunder1=loadImage("1.png");
    thunder2=loadImage("2.png");
    thunder3=loadImage("3.png");
    thunder4=loadImage("4.png");

}

function setup(){
  createCanvas(500,625);
  engine = Engine.create();
  world = engine.world;

  for(var i=0; i<maxDrops; i++){
      drops.push(new Drop(random(0,500),random(0,500)));
  }

  man_umbrella=new umbrella(100,260);
  
  rand=Math.round(random(1,4));
  if(frameCount%80===0){
    thunderCreatedFrame=frameCount;
    thunder=createSprite(random(10,370),random(0,30),10,10);
    switch(rand){
      case 1:thunder.addImage(thunder1);
      break;
      case 2:thunder.addImage(thunder2);
      break;
      default:break;
    }
  }
}

function draw(){
    background(0)
    Engine.update(engine);
    man_umbrella.display();

    for(var i=0; i<maxDrops; i++){
      drops[i].display();
      drops[i].updateY()
    }
    drawSprites();

}   

