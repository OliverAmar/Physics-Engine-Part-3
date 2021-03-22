const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var pig;
var pig2;
var log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1100,540,50,50);
    ground = new Ground(600,590,1200,40);
    pig = new Pig(1035, 540);
    pig2 = new Pig(1035,430);
    box2 = new Box(970,540,50,50);
    box3 = new Box(1100,430,50,50);
    box4 = new Box(970,430,50,50);
    box5 = new Box(1035,380,50,50);
    log1 = new Logs(1035,480,200,PI/2);
    log2 = new Logs(1035,410,200,PI/2);
    log3 = new Logs(970,380,100,PI/7);
    log4 = new Logs(1100,380,100,-PI/7);
    bird = new Bird(60, 500);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    pig.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    box3.display();
    box4.display();
    box5.display();
}