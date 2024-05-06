xStart=0;
yStart=0;

xEnd=0;
yEnd=0;

pressCount=0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 


if(pressCount==0)
{
  xStart=mouseX;
yStart=mouseY;

xEnd=NaN;
yEnd=NaN;  
}
  if(pressCount == 1)
  {
   xEnd=mouseX;
    yEnd=mouseY;  
  }
point(xStart,yStart);
  if(pressCount == 3)
  {
 pressCount=0;
  }  
    
    line(xStart,yStart,xEnd,yEnd);

    console.log(pressCount);
}

function mousePressed()
{
  pressCount=pressCount+1;
}
