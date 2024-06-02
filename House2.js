class House2 
{
    constructor() 
    {  
      this.r = (50*width)/1920;

      this.x = random(this.r*2, width - this.r*2);
      this.y = random(this.r*2, height - this.r*2); 
      
    
    }
  
  show()
  { 
  //  image(houseImage, this.x - this.r * 1.5, this.y - this.r * 1.6, this.r * 3.2, this.r * 3.2);

    circle(this.x,this.y,10);
  }
 
  check(other)
  {
this.d=dist(this.x,this.y,other.x,other.y);
if (this.d < 500) {
    return true;
  } else {
    return false;
  }
  }

  relocate()
  {
        this.x = random(this.r*2, width - this.r*2);
    this.y = random(this.r*2, height - this.r*2);
  }
  }