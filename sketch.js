
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone;
var ground;
var rubber;



function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = Bodies.rectangle(400, 400, 200, 60, {density:2, friction:1});
	World.add(world, hammer);
	
	stone = Bodies.rectangle(200, 200, 150, 150, {restitution:0.7, density:1.5, friction:1});
	World.add(world, stone);
	Engine.run(engine);

	ground = Bodies.rectangle(400, 770, 800, 20, {isStatic:true});
	World.add(world, ground);

	rubber = Bodies.circle(600, 400, 60, {density:1, restitution:1,friction:0.7});
	World.add(world, rubber);
  
}


function draw() {
  	rectMode(CENTER);
  	background(41, 230, 230);

	hammer.position.x = mouseX;
	hammer.position.y = mouseY; 

	rect(ground.position.x, ground.position.y, 800, 20);
	rect(hammer.position.x, hammer.position.y, 200, 60);
	rect(stone.position.x, stone.position.y, 150, 150);
	ellipse(rubber.position.x, rubber.position.y, 60);
 
	

}



