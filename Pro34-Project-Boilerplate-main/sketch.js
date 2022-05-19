
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var cesta,cestaimg
var fundoimg
var rope

function preload(){
cestaimg=loadImage('menino.png')
fundoimg=loadImage('fundo.jpg')
}



function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;
  

  cesta=createSprite(500,520,100,100);
  cesta.scale=0.3
  cesta.addImage('menino.png',cestaimg)

  rope = new Rope(7,{x:80,y:90});
}


function draw() 
{
  background(fundoimg);
  Engine.update(engine);
  
  drawSprites()
}

