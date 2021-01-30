const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, ground;

function setup() {

	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;

	var static = {

		isStatic: true

	}

	var restitution = {

		restitution: 0.1,

		density: 1.2

	}

	ground = Bodies.rectangle(200, 400, 410, 50, static);
	World.add(world, ground);

	net = Bodies.rectangle(250, 200, 10, 50, restitution);
	World.add(world, net);

	net1 = Bodies.rectangle(350, 200, 10, 50, restitution);
	World.add(world, net1);

	paper1 = new Paper(75, 200, 10,10);
	World.add(world, paper1);

}


function draw() {

	background(0);

	Engine.update(engine);

	keyPressed();
	
	rectMode(CENTER);
	rect(ground.position.x, ground.position.y, 410, 50);

	rectMode(CENTER);
	rect(net.position.x, net.position.y, 10, 50);

	rectMode(CENTER);
	rect(net1.position.x, net1.position.y, 10, 50);

	paper1.display();

}


function keyPressed() {

	if (keyCode === UP_ARROW) {

		Body.applyForce(paper1, { x: paper1.position.x, y: paper1.position.y }, { x: 0.05, y: 0 });

	}

}