const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground
function setup() {
	createCanvas(800,800);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   var options= {
	isStatic : true ,
   }
    ground = Bodies.rectangle(400,680,1500,7.0,options)
	World.add(world,ground)
	fill ("yellow")
	Engine.run(engine);
  
	paper1 = new paper(70,350,80)
	dustbinwall1 = new dustbin(600,570,170,200)
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background("red");
 
 keyPressed()



rect(ground.position.x,ground.position.y,1500,20)

paper1.display();
 dustbinwall1.display();
}

function keyPressed () {
	if (keyCode === UP_ARROW)  {
		      Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});			  
	}
} 