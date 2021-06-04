const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, engine, world, ball;
var box1;
//var rope;

function setup() {
	createCanvas(1200, 1200);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, 1200);

	//ball = new Ball(400, 150, 50, 50);

	//rope = new Rope(ball.body, {x: 500, y: 500});

	box1 = new Box(100, 100);
	box2 = new Box(100, 130);
	box3 = new Box(100, 160);
	box4 = new Box(100, 190);
	box5 = new Box(100, 220);
	box6 = new Box(100, 250);
	box7 = new Box(100, 280);
	box8 = new Box(100, 310);
	box9 = new Box(100, 340);
	box10 = new Box(100, 370);
	box11 = new Box(100, 400);
	box12 = new Box(100, 430);
	box13 = new Box(100, 460);
	box14 = new Box(100, 490);
	box15 = new Box(100, 520);
	box16 = new Box(100, 550);
	box17 = new Box(100, 580);
	box18 = new Box(100, 610);
	box19 = new Box(100, 640);
	box20 = new Box(100, 670);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);

  //drawSprites();

  ground.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  //ball.display();
  //rope.display();
}



