
let npc = [];
chance=30;
sick=0;

function setup() 
{
  createCanvas(windowWidth, windowHeight);

  console.log(windowHeight);
  console.log(windowWidth);

  barrier=new Barrier();

  for (let i = 0; i < 15; i++) {
    npc[i] = new NPC(chance);
    for (let j = 0; j < npc.length; j++)
      {
        npc[j].check(npc[i]);
      }
  }   



}

function draw() 
{
  background(165,212,112);
  for (let i = 0; i < npc.length; i++) {
    npc[i].show();
    for (let j = 0; j < npc.length; j++) {
      
      if (i != j && npc[i].intersect(npc[j])) {
        npc[i].infect(npc[j]);
                npc[i].bounce();
      }
    }}

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

        this.pressCount=0;
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

class NPC {
    constructor(chance) {
      this.speed=[-2,2];
  
      this.r = 10;
      this.x = random(0 + this.r, width - this.r);
      this.y = random(0 + this.r, height - this.r);
  
      this.directionX = round(random(-1, 1),1);
      this.directionY = round(random(-1, 1),1);
  
      this.infectChance = chance;
      this.infection = random(0, 100);
  
      this.infected = false;
  
      this.groomed = false;
    }
  
    move() {
      this.x = this.x + this.directionX;
      this.y = this.y + this.directionY;
  
      if (this.x >= width - this.r || this.x < this.r) {
        this.directionX = this.directionX * -1;
      }
  
      if (this.y >= height - this.r || this.y < this.r) {
        this.directionY = this.directionY * -1;
      }
    }
  
    bounce() {
      this.directionX = this.directionX * -1;
      this.directionY = this.directionY * -1;
    }
  
    collide(other)
  {
  if(this.directionX>0 && other.directionX>0)
    {
      this.directionX=this.directionX*(-1);
       other.directionX=other.directionX*(-1);    
  
    }
    
    if(this.directionY>0 && other.directionY>0)
    {
      this.directionY=this.directionY*(-1);
       other.directionY=other.directionY*(-1);   
    }
    
  
  }
    
    check(other)
    {
       this.d = dist(this.x, this.y, other.x, other.y);
      
      if(this.d<this.r*2)
        {
             this.x = random(0 + this.r, width - this.r);
      this.y = random(0 + this.r, height - this.r);
        }
    }
  
    infect(other) {  
  
    if (other.infected == true && this.infected == false) 
    {
       this.infection = random(0, 100);
      
       if(this.infection<this.infectChance)
        {
          this.infected = true;
        }
        else
      {
        this.infected=false;
          }
         
      
    }
    }
    show() {
      this.move();
  
      push();
      
        if(this.infection<this.infectChance)
        {
          this.infected = true;
        }
      else
      {
        this.infected=false;
          }
      
      
      if (this.infected==true) {
            fill(92, 8, 19);
  
      } else
      { 
  fill(194, 179, 159);  
      }
  
  
      circle(this.x, this.y, this.r * 2);
      pop();
  
      
    }
  
    intersect(other) {
      this.d = dist(this.x, this.y, other.x, other.y);
  
      if (this.d < this.r * 2) {
        return true;    
    
      } else {
        return false;
      }
    
    } 
  } 
  