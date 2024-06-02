
class Human {
    constructor(chance,amount,number) {
      this.speed = [-2, 2];
      this.amount=amount;
      this.number=number;
  
      this.r = (10*width)/800;
      this.x = random(0 + this.r+20, width - this.r-20);
      this.y = random(0 + this.r+20, height - this.r-20);
  
      this.directionX = round(random(-2, 2));
      this.directionY = round(random(-2, 2));
  
      this.infectChance = chance;
      this.infection = random(0, 100);
  
      this.infected = false;
      
      if (this.number < this.amount) {
        this.infected = true;
        sick += 1;
      } else {
        this.infected = false;
      }
  
      this.groomed = false;
    }
  
    move() {
      this.x = this.x + this.directionX;
      this.y = this.y + this.directionY;
  
      if (this.x >= width - this.r-20 || this.x < this.r+20) {
        this.directionX = this.directionX * -1;
      }
  
      if (this.y >= height - this.r-20 || this.y < this.r+20) {
        this.directionY = this.directionY * -1;
      }
    }
  
    bounce() {
      this.directionX = this.directionX * -1;
      this.directionY = this.directionY * -1;
    }
  
    collide(other) {
      if (this.directionX > 0 && other.directionX > 0) {
        if (this.directionY > 0) this.directionX = this.directionX * -1;
        other.directionX = other.directionX * -1;
      }
  
      if (this.directionY > 0 && other.directionY > 0) {
        this.directionY = this.directionY * -1;
        other.directionY = other.directionY * -1;
      }
    }
  
    check(other) {
      this.d = dist(this.x, this.y, other.x, other.y);
  
      if (this.d < this.r * 2) {
        this.x = random(0 + this.r, width - this.r);
        this.y = random(0 + this.r, height - this.r);
      }
    }
    
    enterHouse(other)
  {
    this.x=other.x;
    this.y=other.y;

    this.directionX=0;
    this.directionY=0;
  }

  exitHouse()
  {
    this.x = this.x;
    this.y = this.y+50;

     
    this.directionX = round(random(-2, 2));
    this.directionY = round(random(-2, 2));
  }


  
    infect(other) {
      if (other.infected == true && this.infected == false) {
        this.infection = random(0, 100);
  
        if (this.infection < this.infectChance) {
          if (!this.infected)
            sick += 1;
          
          this.infected = true;
        } else {
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


    show(barrier) 
    {
      this.move();
  
      push();
      if (this.infected == true) {
        fill(92, 8, 19);
      } else {
        fill(194, 179, 159);
      }
  
      circle(this.x, this.y, this.r * 2);
      pop();

      text(this.time,this.x,this.y);
    }
    
    intersectHuman(other) {
      this.d = dist(this.x, this.y, other.x, other.y);
  
      if (this.d < this.r * 2) {
        return true;
      } else {
        return false;
      }
    }

    intersectHouse(other) {
      this.d = dist(this.x, this.y, other.x, other.y);
  
      if (this.d < this.r+other.r) {
        return true;
      } else {
        return false;
      }
    }
  }