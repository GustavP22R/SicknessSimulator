

function setup() 
{
  createCanvas(windowWidth, windowHeight);

  console.log(windowHeight);
  console.log(windowWidth);

  barrier=new Barrier();



}

function draw() 
{
  background(165,212,112);

  strokeWeight(5);
  line(200,200,400,400);

  strokeWeight(2);
  circle(350,400,30);
  
barrier.createBarrier();
}

class Barrier
{
    constructor(mouseX, mouseY, windowHeight)
    {
        this.barrierLength = windowHeight / 4;

        this.mouseXPosition = mouseX;   
        this.mouseYPosition = mouseY;
    }

    createBarrier()
    {
        push();
        strokeWeight(10);
        stroke(168, 68,50);
        line(this.xStart,this.yStart,this.xSlut,this.ySlut);
        pop();

        if(mouseIsPressed)
        {
            this.pressCount += 1;
        }

        if(this.pressCount == 0)
        {
            this.xStart = this.mouseXPosition;
            this.yStart = this.mouseYPosition;
            
            this.xSlut = this.mouseXPosition;
            this.ySlut = this.mouseYPosition;
        }

        if(this.pressCount == 1)
        {
            this.xStart = this.mouseXPosition;
            this.yStart = this.mouseYPosition;
        }

        if(this.pressCount == 2)
        {
            this.xSlut = this.mouseXPosition;
            this.ySlut = this.mouseYPosition;

        }
    }

    destroyBarrier()
    {

    }
}
