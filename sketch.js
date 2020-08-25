

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render = Matter.Render;

var guy1,guy2,guy3, guy4,guy5, roof;
var rope1,rope2,rope3, rope4,rope5;
var world;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	roof= new Roof(width/2,height/4,width/7,20);

	guyDiameter=40;

	startGuyPositionX=width/2;
	
	startGuyPositionY=height/4+500;
	
	guy1=new Guy(startGuyPositionX-guyDiameter*2,startGuyPositionY,guyDiameter);
	guy2=new Guy(startGuyPositionX-guyDiameter,startGuyPositionY,guyDiameter);
	guy3=new Guy(startGuyPositionX,startGuyPositionY,GuyDiameter);
	guy4=new Guy(startGuyPositionX+guyDiameter,startGuyPositionY,guyDiameter);
	guy5=new Guy(startGuyPositionX+guyDiameter*2,startGuyPositionY,guyDiameter);


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  
	
	rope1= new Rope(guy1.body,roof.body,-guyDiameter*2, 0);
	rope2=new Rope(guy2.body,roof.body,-guyDiameter*1, 0);
	rope3=new Rope(guy3.body,roof.body,0, 0);
	rope4=new Rope(guy4.body,roof.body,guyDiameter*1, 0);
	rope5=new Rope(guy5.body,roof.body,guyDiameter*2, 0);

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

	guy1.display();
	guy2.display();
	guy3.display();
	guy4.display();
	guy5.display();

	roof.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();


  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(guy1.body,guy1.body.position,{x:-50,y:-45});

	}
}

function drawLine(constraint)
{
	guyBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(guyBodyPosition.x, guyBodyPosition.y, roofBodyX,roofBodyY);
}




