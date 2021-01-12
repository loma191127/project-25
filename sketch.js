const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var bin,wall;
function setup() {
 createCanvas(1280,685);
 engine = Engine.create();
 world = engine.world;
 ground=new Ground(width/2,height-10,width,20);
 paper= new Paper(200,200,70);
 bin=new Bin(870,670,200,200);
 wall=new Wall(995,422.5,100,685)
}
function draw() {
 rectMode(CENTER);
 background("black");
 Engine.update(engine);
 ground.display();
 paper.display();
 bin.display();
 //wall.display();
 drawSprites();
}
function keyPressed(){
    if (keyCode === UP_ARROW) {
 Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-260});}
}
