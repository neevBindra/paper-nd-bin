
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,bin2,bin3,paper,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,620,800,10);
	bin1 = new Bin(600,600,200,20);
	bin2 = new Bin(495,550,20,100);
	bin3 = new Bin(705,550,20,100);
	paper = new Paper();
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  background(0);
  bin1.display();
  bin2.display();
  bin3.display();
  paper.display();
  ground.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyDown("UP_ARROW")){
Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-6})  }
}



