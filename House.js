class House
{
    constructor() 
    {  
      this.radius = (50*width)/1920;

      this.x = random(this.radius*2, width - this.radius*2);
      this.y = random(this.radius*2, height - this.radius*2); 
      
    
    }
  
  show()
  { 
    image(houseImage, this.x - this.radius * 1.5, this.y - this.radius * 1.6, this.radius * 3.2, this.radius * 3.2);
    text(round(this.x)+" "+round(this.y),this.x,this.y);

    circle(this.x,this.y,20);
  }
 
  check(other)
  {
this.d=dist(this.x,this.y,other.x,other.y);
if (this.d < 300) {
    return true;
  } else {
    return false;
  }
  }

  relocate()
  {
        this.x = random(this.radius*2, width - this.radius*2);
    this.y = random(this.radius*2, height - this.radius*2);
  }
  }