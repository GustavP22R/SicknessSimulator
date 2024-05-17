let pressCount = 1;
let barrier;

let houseGenerator;

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  console.log(windowWidth);

  barrier = new Barrier();

  houseGenerator = new HouseGenerator(3);
  houseGenerator.generateHouses();
}

function draw() 
{
    background(165,212,112);

    strokeWeight(5);
    line(200,200,500,200);

    strokeWeight(2);
    circle(350,400,30);

    //Barrier update and display
    barrier.updateBarrier();
    barrier.display();

    //Houses display
    circleGenerator.displayCircles(); 
}

//mousePressed function to help the barrier
function mousePressed() 
{
  if (pressCount < 3) 
  {
    pressCount++;
  }
}



