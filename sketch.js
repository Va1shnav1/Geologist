
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var plane;
var stone;
var rubber;
var s1, s2, s3, s4, s5, s6, s7, s8, s9;
var iron;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(200, 200);
	plane = new Plane(400, 680, 900, 30);
	stone = new Stone(500, 560, 70, 70);
	rubber = new Rubber(300, 560, 50)
	s1 = new Sand(320, 560, 5);
	s2 = new Sand(295, 560, 5);
	s3 = new Sand(270, 560, 5);
	s4 = new Sand(350, 560, 5);
	s5 = new Sand(700, 560, 5);
	s6 = new Sand(600, 560, 5);
	s7 = new Sand(579, 560, 5);
	s8 = new Sand(430, 560, 5);
	iron = new Iron(400, 560, 50, 50)
	Engine.run(engine);
  
}


function draw() {
	background("lightblue");
    Engine.update(engine);
	fill("red");
	hammer.display();
	fill("brown");
	plane.display();
	fill("grey");
	stone.display();
	rubber.display();
	fill("yellow");
	s1.display();
	s2.display();
	s3.display();
	s4.display();
	s5.display();
	s6.display();
	s7.display();
	s8.display();
	fill("black");
	iron.display();
}
