var pol,  slingshot,pol_img


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

    
function preload() {
    pol_img= loadImage("polygon/polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    //plat 1
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(810,160,70,70);
    box4 = new Box(810,160,70,70);
    box5 = new Box(810,160,70,70);  
    box6 = new Box(810,160,70,70);
    box7 = new Box(810,160,70,70);
    box8 = new Box(810,160,70,70);
    box9 = new Box(810,160,70,70);
    box10 = new Box(810,160,70,70);
    box11 = new Box(810,160,70,70);
    platfrom = new Platfrom(300,400,200,5)


    box12 = new Box(700,320,70,70);
    box13 = new Box(920,320,70,70);
    box14 = new Box(810,160,70,70);
    box15 = new Box(810,160,70,70);
    box16 = new Box(810,160,70,70);  
    box17 = new Box(810,160,70,70);
    box18 = new Box(810,160,70,70);
    box19 = new Box(810,160,70,70);
    box20 = new Box(810,160,70,70);
    box21 = new Box(810,160,70,70);
    box22 = new Box(810,160,70,70);
    platfrom1 = new Platfrom(300,400,200,5)
  

  pol = Bodies.circle (50,200,20)
    World.add (world,pol)
   
    slingshot = new SlingShot(pol.body,{x:100, y:200});



	Engine.run(engine);

    
}

function draw(){
    background(backgroundImg);
    //Engine.update(engine);
    strokeWeight(4);
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
    box21.display();
    box22.display();
    ground.display();
   pol.display();
    

    platform.display();
    platform1.display();
    slingshot.display();    
    imageMode(CENTER)
  image(pol_img,pol.position.x,pol.position.y,40,40);
}

function mouseDragged(){
    Matter.Body.setPosition(pol.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
