
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var tree1, treeImg;
var stone1;
var boy1;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var chain1;
function preload()
{
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

 
	//Create the Bodies Here.
ground1 = new ground(900,height,1800,40);
tree1 = new tree(1290,410,500,550);
stone1 = new stone(270,450,40);
boy1 = new boy(350,550,150,250);
mango1 = new mango(1320,230,25);
mango2 = new mango(1220,390,30);
mango3 = new mango(1120,350,25);
mango4 = new mango(1420,300,30);
mango5 = new mango(1480,370,25);
mango6 = new mango(1290,340,30);
mango7 = new mango(1240,250,25);

chain1 = new chain(boy1.body,stone1.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  ground1.display();
  tree1.display();
  boy1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  chain1.display();
  stone1.display();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  drawSprites();
 
}

function mouseDragged(){
Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  chain1.fly();
}

function detectCollision(stone,mango){
  mangoBodyPosition = mango.body.position
  stoneBodyPosition = stone.body.position

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=mango.radius + stone.radius){
    Matter.Body.setStatic(mango.body,false);
  }
}

function keyPressed(){
  if(keyCode === 32){
Matter.Body.setPosition(stone1.body,{x:290,y:490});
chain1.attach(stone1.body);
  }
}
