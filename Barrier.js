// This class generates barriers that humans can't go though

class Barrier
{
   constructor()
   {
      //Position and length of barrier
      this.xStart = 0;
      this.yStart = 0;
      this.xEnd = 0;
      this.yEnd = 0;
      this.barrierLimit = 0.15625 * windowWidth;

      //Timer to reset barrier
      this.timer = null;

      //Barrier color
      this.barrierColorR = 0;
      this.barrierColorG = 0;
      this.barrierColorB = 0;
   }

   //Updates the barrier based on number of presses
   UpdateBarrier() 
   {
      //On pressCount = 1, barrier is not visible
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

      //On pressCount = 2, barrier is visible, but not placed yet
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

        //On pressCount = 3, barrier is visible and placed.
        else 
        {
          this.xEnd = mouseX;
          this.yEnd = mouseY;
        }

          // Start the timer to clear the barrier after 2 seconds
          if (this.timer) 
          {
            clearTimeout(this.timer);
          }

          this.timer = setTimeout(() => this.ClearBarrier(), 2000);
      }
   }


   //Draws barrier
   Display() 
   {
      if (pressCount === 1 || pressCount === 2 || pressCount === 3) 
      {
        strokeWeight(5);
        point(this.xStart, this.yStart);

        //Checks if barrier is placed
        if (!isNaN(this.xEnd) && !isNaN(this.yEnd)) 
        {
          //Shows barrier is placed with a different color
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

   //Variables barrier is reset to, based on timer
   ClearBarrier() 
   {
      pressCount = 1;
      this.xStart = 0;
      this.yStart = 0;
      this.xEnd = 0;
      this.yEnd = 0;
      this.timer = null;
   }
}