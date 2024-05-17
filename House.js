class HouseGenerator
{
    constructor(numHouses)
    {
        this.numHouses = numHouses;
        this.houses = [];

        this.minRadius = 10;
        this.maxRadius = 50;
    }

    generateHouses()
    {
        for (let i = 0; i < this.numHouses; i++) 
            {
            let x = random(width);
            let y = random(height);
            let radius = random(this.minRadius, this.maxRadius);
            this.houses.push(new Circle(x, y, radius));
          }
    }

    displayCircles() 
    {
        for (let house of this.houses) 
        {
          house.display();
        }
    }   
}


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
      ellipse(this.x, this.y, this.radius * 2);
    }
  }