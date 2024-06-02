// This class generates houses that humans can go into, to then be cured from the diseases

class HouseGenerator
{
    constructor(numHouses)
    {
        this.numHouses = numHouses;
        this.houses = [];

        this.minRadius = (50*width)/1920;
        this.maxRadius = (50*width)/1920;
        
    }

    //Generate houses position
    GenerateHouses()
    {
        for (let i = 0; i < this.numHouses; i++) 
          {
            let x, y, radius;

            do 
            {
            x = random(100, width - 100);
            y = random(100, height - 100);
            radius = random(this.minRadius, this.maxRadius);
            }   
            while (this.IsTooClose(x, y));
            
            this.houses.push(new House(x, y, radius));
          }
    }

    //Checks if the houses is to close to eachother, then the generateHouses() know to relocate house
    IsTooClose(x, y) 
    {
      for (let house of this.houses) 
        {
          let   distance = dist(x, y, house.x, house.y);
          if (distance < 200) 
          {
              return true;
          }
        }
      return false;
    }

    intersect(other)
    {
      this.d=dist(this.x,this.y,other.x,other.y);

      if(this.d<200)
      {
return true;
      }
      else {return false;}
    }

    //Displays the house on the canvas
    DisplayHouses() 
    {
        for (let house of this.houses) 
        {
          house.Display();
        }
    }   
}

//Class that constructs cirkel on house position
class House 
{
    constructor(x, y, radius) 
    {
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
  
    Display() 
    {
      //If circle instead of house
      // fill(125, 164, 227);
      // ellipse(this.x, this.y, this.radius * 2);

      //Draws house.png on top of circle
      image(houseImage, this.x - this.radius * 1.5, this.y - this.radius * 1.6, this.radius * 3.2, this.radius * 3.2);

      text(round(this.x)+" "+round(this.y),this.x,this.y);
    }

  }