function setup() 
{
  createCanvas(windowWidth, windowHeight);

  console.log(windowHeight);
  console.log(windowWidth);
}

function draw() 
{
  background(165,212,112);
  
  push();
  strokeWeight(10);
  stroke(168, 68,50);
  line(400,400,600,600);
  pop();


  strokeWeight(2);
  circle(350,400,30);
}
