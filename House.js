// This class genereates houses and is used to communicate with humans

class House
{
    constructor() 
    {  
      //Size of house
      this.radius = (50*width)/1920;

      //Random Position of house
      this.x = random(this.radius*2, width - this.radius*2);
      this.y = random(this.radius*2, height - this.radius*2); 
      
    
    }
  
  show()
  { 
    //Projects house onto random position
    image(houseImage, this.x - this.radius * 1.5, this.y - this.radius * 1.6, this.radius * 3.2, this.radius * 3.2);
    text(round(this.x) + " " + round(this.y), this.x, this.y);

    circle(this.x,this.y,20);
  }
 
  check(other)
  {
    //Distance between houses
    this.d = dist(this.x,this.y,other.x,other.y);

      //If two houses are too close return true
      if (this.d < 300) 
      {
        return true;
      }
      else 
      {
        return false;
      }
  }

  //relocates house if two are two close
  relocate()
  {
    this.x = random(this.radius * 2, width - this.radius * 2);
    this.y = random(this.radius * 2, height - this.radius * 2);
  }
}