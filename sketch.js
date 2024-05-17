let pressCount = 1;
let barrier;

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  console.log(windowWidth);

  barrier = new Barrier();
}

function draw() 
{
    background(165,212,112);

    strokeWeight(5);
    line(200,200,500,200);

    strokeWeight(2);
    circle(350,400,30);


    barrier.updateBarrier();
    barrier.display();
}

function mousePressed() 
{
  if (pressCount < 3) 
  {
    pressCount++;
  }
}



