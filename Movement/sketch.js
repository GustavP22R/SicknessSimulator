let npc=[];

let width = 400;
let height = 400;

function setup() 
{
  createCanvas(width, height);

    for(let i =0; i<15;i++)
    {
      npc[i]=new NPC();
    }
}

function draw() 
{
  background(220);
   for(let i=0;i<npc.length;i++)
    {
      npc[i].show();

}
}

class NPC
{
  constructor()
  {
    this.r=10;
this.x=random(0+this.r,width-this.r);
this.y=random(0+this.r,height-this.r);

this.directionX=random(-2,2);
this.directionY=random(-2,2);
  }

  move()
  {
    this.x=this.x+this.directionX;
this.y=this.y+this.directionY;

if(this.x>=width-this.r || this.x<this.r)
  {
this.directionX=this.directionX*-1;
  }

  if(this.y>=height-this.r || this.y<this.r)
  {
this.directionY=this.directionY*-1;
  }
  }

  bounce()
  {
    this.directionX=this.directionX*-1;
    this.directionY=this.directionY*-1;
  }

  show()
  {
   this.move();
   circle(this.x,this.y,this.r*2);

  }

  intersect(other)
  {
    this.d=dist(this.x,this.y,other.x,other.y);

    if(this.d< this.r+other.r)
    {
     return true;
    }
    else
   {
   return false;
   }
   
  }
}