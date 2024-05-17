class Barrier
{
   constructor()
   {
    this.xStart = 0;
    this.yStart = 0;
    this.xEnd = 0;
    this.yEnd = 0;
    this.barrierLimit = 0.15625 * windowWidth;

    this.timer = null;

    this.barrierColorR = 0;
    this.barrierColorG = 0;
    this.barrierColorB = 0;
   }

   updateBarrier() 
   {
      if (pressCount === 1) 
      {
         this.xStart = mouseX;
         this.yStart = mouseY;

         this.xEnd = NaN;
         this.yEnd = NaN;

         this.barrierColorR = 0;
         this.barrierColorG = 0;
         this.barrierColorB = 0;
      } 

      else if (pressCount === 2) 
      {
         let lengthX = mouseX - this.xStart;
         let lengthY = mouseY - this.yStart;
         let barrierLength = sqrt(sq(lengthX) + sq(lengthY));

         this.barrierColorR = 0;
         this.barrierColorG = 0;
         this.barrierColorB = 0;

        if (barrierLength >= this.barrierLimit) 
        {
          let angle = atan2(lengthY, lengthX);
          this.xEnd = this.xStart + cos(angle) * this.barrierLimit;
          this.yEnd = this.yStart + sin(angle) * this.barrierLimit;
        } 

        else 
        {
          this.xEnd = mouseX;
          this.yEnd = mouseY;
        }

        
          // Start the timer to clear the line after 2 seconds
          if (this.timer) 
          {
            clearTimeout(this.timer);
          }

          this.timer = setTimeout(() => this.clearBarrier(), 2000);
        
      }
   }


   display() 
   {
      if (pressCount === 1 || pressCount === 2 || pressCount === 3) 
      {
        // Draws barrier
        strokeWeight(5);
        point(this.xStart, this.yStart);

        if (!isNaN(this.xEnd) && !isNaN(this.yEnd)) 
        {
          push();
          if(pressCount === 3)
          {
            this.barrierColorR = 255;
            this.barrierColorG = 0;
            this.barrierColorB = 0;
          }
          
          stroke(this.barrierColorR, this.barrierColorG, this.barrierColorB);
          line(this.xStart, this.yStart, this.xEnd, this.yEnd);
          pop();
        }
      }
   }

   clearBarrier() 
   {
      pressCount = 1;
      this.xStart = 0;
      this.yStart = 0;
      this.xEnd = 0;
      this.yEnd = 0;
      this.timer = null;
   }
}