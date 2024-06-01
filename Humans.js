
class NPC {
    constructor(chance) {
      this.speed = [-2, 2];
  
      this.r = (10*width)/800;
      this.x = random(0 + this.r, width - this.r);
      this.y = random(0 + this.r, height - this.r);
  
      this.directionX = round(random(-1, 1), 1);
      this.directionY = round(random(-1, 1), 1);
  
      this.infectChance = chance;
      this.infection = random(0, 100);
  
      this.infected = false;
      
      if (this.infection < this.infectChance) {
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
    
    house(other)
  {
    this.d = dist(this.x, this.y, other.x, other.y);
    if(this.d>this.r)
    {
return true;
    }
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
  
    show() {
      this.move();
  
      push();
      if (this.infected == true) {
        fill(92, 8, 19);
      } else {
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