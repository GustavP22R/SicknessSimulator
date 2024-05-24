// This class generates houses that humans can go into, to then be cured from the diseases

class HouseGenerator
{
    constructor(numHouses)
    {
        this.numHouses = numHouses;
        this.houses = [];

        this.minRadius = 10;
        this.maxRadius = 50;
    }

    //Generate houses position
    generateHouses()
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
            while (this.isTooClose(x, y));

            this.houses.push(new House(x, y, radius));
          }
    }

    //Checks if the houses is to close to eachother, then the generateHouses() know to relocate house
    isTooClose(x, y) 
    {
      for (let house of this.houses) 
        {
          let distance = dist(x, y, house.x, house.y);
          if (distance < 200) 
          {
              return true;
          }
        }
      return false;
    }

    //Displays the house on the canvas
    displayHouses() 
    {
        for (let house of this.houses) 
        {
          house.display();
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
  
    display() 
    {
      fill(125, 164, 227);
      ellipse(this.x, this.y, this.radius * 2);
    }
  }