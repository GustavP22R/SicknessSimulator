let pressCount = 1;
let barrier;

let houseGenerator;

let houseImage;

function preload()
{
  houseImage = loadImage('house.png');
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  console.log(windowWidth);

  barrier = new Barrier();

  //Choose number of houses - More than 20 houses and it crashes
  houseGenerator = new HouseGenerator(5);
  houseGenerator.GenerateHouses();
}

function draw() 
{ 
    background(109, 210, 247);

    push();
    fill(165,212,112)
    rect(20,20, width - 40, height - 40, 20);
    pop();

    strokeWeight(2);
    circle(350,400,30);

    //Barrier update and display
    barrier.UpdateBarrier();
    barrier.DisplayBarrier();

    //Houses display
    houseGenerator.DisplayHouses(); 
}

//mousePressed function to help the barrier
function mousePressed() 
{
  if (pressCount < 3) 
  {
    pressCount++;
  }
}



