xStart = 0;
yStart = 0;

xEnd = 0;
yEnd = 0;

pressCount = 0;

function setup() 
{
  createCanvas(windowWidth, windowHeight);
}

function draw() 
{
 background(165,212,112);

 strokeWeight(5);
 line(200,200,400,400);

 strokeWeight(2);
 circle(350,400,30);

// Make a barrier
if(pressCount == 0)
{
  xStart = mouseX;
  yStart = mouseY;

  xEnd = NaN;
  yEnd = NaN;  
}

if(pressCount == 1)
{
  xEnd = mouseX;
  yEnd = mouseY;  
}

point(xStart,yStart);

if(pressCount == 3)
{
  pressCount = 0;
}  
    
  line(xStart,yStart,xEnd,yEnd);
}

function mousePressed()
{
  pressCount = pressCount + 1;
}
