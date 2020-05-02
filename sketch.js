const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var holder_options={
    isStatic: true
  }
  holder = Bodies.rectangle(200,100,200,20,holder_options);
  World.add(world,holder);

  var ball_options = {
    restitution : 1.0,
    density : 1.0
  }
  ball  = Bodies.circle(300,200,40,ball_options);
  World.add(world,ball);


  var options = {
    bodyA : ball,
    bodyB : holder,
    stiffness: 0.004,
    length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("White");
}


function draw() {
  background("yellow"); 
  Engine.update(engine);

  fill("black");
  text("Press space bar to oscillate the pendulam to left and right with mouse",15,20);
  text("press any other key to let it oscilate on it own",80,40)
  text("Press Enter to stop the Pendulum from oscillating",70,60);

  fill ("black");
  rectMode(CENTER);
  rect(holder.position.x,holder.position.y,200,20);

  fill("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40);

  strokeWeight(8);
  stroke("white");
  line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)


  if(keyCode===32){
    ball.position.y = mouseY;
    ball.position.x = mouseX;
  }

  else if (keyCode === ENTER){
    ball.position.x = 200;
    ball.position.y = 300;
  }

}