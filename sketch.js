const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;
var engine;
var world;
var ground1;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,
    box19,box20;
var super1;
var rope1; 
var bg; 
var monster1;

function preload(){
bg=loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(3000,800);
  engine=Engine.create();
  world=engine.world;

  ground1=new ground(600,600,1600,20);

  box1=new box(900,100,70,70);
  box2=new box(900,100,70,70);
  box3=new box(900,100,70,70);
  box4=new box(900,100,70,70);
  box5=new box(900,100,70,70);
  box6=new box(900,100,70,70);
  box7=new box(800,100,70,70);
  box8=new box(800,100,70,70);
  box9=new box(800,100,70,70);
  box10=new box(800,100,70,70);
  box11=new box(800,100,70,70);
  box12=new box(800,100,70,70);
  box13=new box(700,100,70,70);
  box14=new box(700,100,70,70); 
  box15=new box(700,100,70,70);
  box16=new box(700,100,70,70);
  box17=new box(700,100,70,70);
  box18=new box(700,100,70,70);
  box19=new box(700,100,70,70);
  box20=new box(700,100,70,70);

  super1=new superhero(200,200,50,50);
  
  rope1=new rope(super1.body,{x:450,y:50});

  monster1=new monster(1300,400,150); 

}

function draw() {
  background(bg);
  Engine.update(engine);
   
  ground1.display();

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
  
  super1.display();
  
  rope1.display(); 
  
  monster1.display();

}

  function mouseDragged(){
  Matter.Body.setPosition(super1.body,{x:mouseX,y:mouseY})
  } 