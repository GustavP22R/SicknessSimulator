//Global variables 

let pressCount = 1;
let barrier;

let houseGenerator;

let houseImage;
let house=[];

let human = [];
let chance = 30;
let startSick = 5;

let sick = 0;

let numberHouses = 2;

//Loads image of house
function preload()
{
  houseImage = loadImage('house.png');
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);

  //Creates houses
  for(let i = 0; i < numberHouses; i++)
  { 
    house[i] = new House();

    for(let j = 0; j < house.length; j++)
    {
      //Moves house again if houses to close
      if(i!=j && house[i].check(house[j])==true)
        {
        house[i].relocate();
        }
    }   
  }

  //Creates humans
  for (let k = 0; k < 15; k++) 
  {
    human[k] = new Human(chance,startSick,k);

    for (let l = 0; l < human.length; l++) 
    {
       if (k != l && human[k].intersectHuman(human[l])) 
       {
          human[k].check(human[l]);
       }
     }  
  }

  //Barrier
  barrier = new Barrier();

}

function draw() 
{ 
    background(109, 210, 247);

    //Background of map
    push();
    fill(165,212,112);
    rect(20,20, width - 40, height - 40, 20);
    pop();

    strokeWeight(2);

    //Barrier update and display
    barrier.UpdateBarrier();
    barrier.DisplayBarrier();

    //draws people
    for (let i = 0; i < human.length; i++) 
    {
      human[i].show();
      human[i].checkBarrierCollision(barrier);
    
      for (let j = 0; j < human.length; j++) 
      {    
      
        //Humans touch eachother
        if (i != j && human[i].intersectHuman(human[j])) 
        {
          //Infect human
          human[i].infect(human[j]);

          //Give human new direction
          human[i].bounce();
        }      
        
        for(let k = 0; k < house.length; k++)
        {
          //Show image on house
          house[k].show();

            //If human and house touch
            if(human[i].intersectHouse(house[k]))
            {
            human[i].enterHouse(house[k]);
            }
         }
      } 
     }

  //text on how man are infected and number of humans   
  push();
  textSize(20);
  strokeWeight(1);
  stroke(0);
  text("Amount of people: " + human.length,45,60);
  text("Amount of infected: " + sick,45,110);
  pop();
}



//mousePressed function to help the barrier
function mousePressed() 
{
  if (pressCount < 3) 
  {
    pressCount++;
  }
}