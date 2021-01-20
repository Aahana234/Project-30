const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var groundObject;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;


function setup(){
var canvas = createCanvas(1200,800);
engine = Matter.engine;
world = engine.world;

} 

ground = new Ground(600,400,1200,20);
//create a ground

//level one 

block1 = new Block(200,300,40,400);
block2 = new Block(300,400,40,500);
block3 = new Block(400,500,40,500);
block4 = new Block(500,600,40,650);
block5 = new Block(600,700,40,700);
block6 = new Block(700,790,40,750);
block7 = new Block(820,600,40,870);


//level two

block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,235,30,40);

//level three

block13 = new Block(360,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(420,195,30,40);

//top

block16 = new Block(390,155,30,40);



function draw(){
ground.display();


    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display()
    block7.display();
    block8.display();
    fill("pink");
    block9.display();
    fill("gold");
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y40,40);

slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});   
}

function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
slingshot.attach(this.polygon);

    }
}

drawSprites();




