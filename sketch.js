xStart = 0;
yStart = 0;

xEnd = 0;
yEnd = 0;

pressCount = 1;

let timer;

function setup() 
{
  createCanvas(windowWidth, windowHeight);

  barrierLimit = 0.15625 * windowWidth;

  console.log(windowWidth);
}

function draw() 
{
    background(165,212,112);

    strokeWeight(5);
    line(200,200,500,200);

    strokeWeight(2);
    circle(350,400,30);

    
  // Make a barrier
  if (pressCount == 1) {
    xStart = mouseX;
    yStart = mouseY;

    xEnd = NaN;
    yEnd = NaN;
  } 
    
  else if (pressCount == 2) 
    {
    let lengthX = mouseX - xStart;
    let lengthY = mouseY - yStart;
    let barrierLength = sqrt(sq(lengthX) + sq(lengthY));

    if (barrierLength >= barrierLimit) 
    {
      let angle = atan2(lengthY, lengthX);
      xEnd = xStart + cos(angle) * barrierLimit;
      yEnd = yStart + sin(angle) * barrierLimit;
    } 
    else 
    {
      xEnd = mouseX;
      yEnd = mouseY;
    }

    // Start the timer to clear the line after 2 seconds
    if (timer) 
    {
      clearTimeout(timer);
    }
    //Second perimeter is time in ms
    timer = setTimeout(clearBarrier, 2000);
  }

  if (pressCount > 3) 
  {
    pressCount = 1;
  }

 
    strokeWeight(5);
    point(xStart, yStart);
    line(xStart, yStart, xEnd, yEnd);
    
  
}

function mousePressed() 
{
  pressCount++;
}

// Function to clear the barrier
function clearBarrier() 
{
  pressCount = 1;
  xStart = 0;
  yStart = 0;
  xEnd = 0;
  yEnd = 0;
  timer = null;
}