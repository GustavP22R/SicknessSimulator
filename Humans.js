
class Human 
{
    constructor(chance,amount,number) 
    {
      //Human speed, amount of humans and number of humans infected
      this.speed = [-2, 2];
      this.amount = amount;
      this.number = number;
  
      //Random spawn place of humans
      this.r = (10 * width) / 800;
      this.x = random(0 + this.r + 20, width - this.r - 20);
      this.y = random(0 + this.r + 20, height - this.r - 20);
  
      //Random direction given to human
      this.directionX = round(random(-2, 2));
      this.directionY = round(random(-2, 2));
  
      //Chance of infection
      this.infectChance = chance;
      this.infection = random(0, 100);
  
      this.infected = false;
      
      //Based on randomness humans are infected
      if (this.number < this.amount) 
      {
        this.infected = true;
        sick += 1;
      } 
      else 
      {
        this.infected = false;
      }
    }
  
    //Function that moves humans
    move() 
    {
      //Direction of human
      this.x = this.x + this.directionX;
      this.y = this.y + this.directionY;
  
      //Changes direction of human when hitting corner of map
      if (this.x >= width - this.r-20 || this.x < this.r+20) 
      {
        this.directionX = this.directionX * -1;
      }
      if (this.y >= height - this.r-20 || this.y < this.r+20) 
      {
        this.directionY = this.directionY * -1;
      }
    }
  
    //Changes direction of humans when two hit eachother
    bounce() 
    {
      this.directionX = this.directionX * -1;
      this.directionY = this.directionY * -1;
    }
  
    //Checks if humans spawn on top of eachother, if they do give the new spawn location
    check(other) 
    {
      //distance between humans
      this.d = dist(this.x, this.y, other.x, other.y);
  
      //New spawn location
      if (this.d < this.r * 2) 
      {
        this.x = random(0 + this.r, width - this.r);
        this.y = random(0 + this.r, height - this.r);
      }
    }
    
    //Makes it so humans enter the house
    enterHouse(other)
    {
      this.x = other.x;
      this.y = other.y;

      this.directionX = 0;
      this.directionY = 0;
    }

  //Spawns humans after set times out of house
  exitHouse()
  {
    this.x = this.x;
    this.y = this.y+50;

     
    this.directionX = round(random(-2, 2));
    this.directionY = round(random(-2, 2));
  }

  //Infects other person if one who is infected touches one who isn't
  infect(other) 
  {
      //Checks if two humans have different status effect
      if (other.infected == true && this.infected == false) 
      {
        //Chooses chance of getting infected
        this.infection = random(0, 100);
        
        //If number of infection higher than infectChance then infect human
        if (this.infection < this.infectChance) 
        {
          if (!this.infected)
            sick += 1;
          
          this.infected = true;
        } 
        else 
        {
          if (this.infected)
            sick -= 1;
          
          this.infected = false;        
        }
      }
    }
  

    //Checks collision between Barrier and Humans
    checkBarrierCollision(barrier) 
    {
        if (barrier.IsColliding(this.x, this.y, this.r)) 
        {
          //Uses normalVector to change the humans direction
          let normal = barrier.GetNormal(this.x, this.y);
          this.directionX = this.directionX - 2 * (this.directionX * normal.x) * normal.x;
          this.directionY = this.directionY - 2 * (this.directionY * normal.y) * normal.y;

          // Move the NPC slightly away from the barrier to avoid getting stuck
          this.x += normal.x * this.r;
          this.y += normal.y * this.r;
        }
    }

    //Shows humans on canvas and changes color if infected
    show(barrier) 
    {
      this.move();
  
      push();
      if (this.infected == true) 
      {
        fill(92, 8, 19);
      } 
      else 
      {
        fill(194, 179, 159);
      }
  
      circle(this.x, this.y, this.r * 2);
      pop();

      text(this.time,this.x,this.y);
    }
    
    //Function returns true if two humans touch
    intersectHuman(other) 
    {
      this.d = dist(this.x, this.y, other.x, other.y);
  
      if (this.d < this.r * 2) 
      {
        return true;
      } 
      else 
      {
        return false;
      }
    }

    //Function returns true if house and human touch
    intersectHouse(other) 
    {
      this.d = dist(this.x, this.y, other.x, other.y);
  
      if (this.d < this.r + other.r) 
      {
        return true;
      } 
      else 
      {
        return false;
      }
    }
}