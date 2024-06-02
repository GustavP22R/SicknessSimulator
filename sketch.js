let pressCount = 1;
let barrier;

let houseGenerator;

let houseImage;
let house=[];

let human = [];
let chance = 30;
let startSick=5;

let sick = 0;

function preload()
{
  houseImage = loadImage('house.png');
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  console.log(windowWidth);

  for(let i=0;i<5;i++)
  { 
    house[i]=new House2();

    for(let j = 0; j < house.length; j++)
    {
     if(i!=j && house[i].check(house[j])==true)
      {
       house[i].relocate();
      }
    }   
 }

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

  barrier = new Barrier();

  //Choose number of houses - More than 20 houses and it crashes
  // houseGenerator = new HouseGenerator(5);
  // houseGenerator.GenerateHouses();




}

function draw() 
{ 
    background(109, 210, 247);

    push();
    fill(165,212,112);
    rect(20,20, width - 40, height - 40, 20);
    pop();



    strokeWeight(2);

    //Barrier update and display
    barrier.UpdateBarrier();
    barrier.DisplayBarrier();

    //draws people
  for (let i = 0; i < human.length; i++) {
    human[i].show();
    human[i].checkBarrierCollision(barrier);
    
    for (let j = 0; j < human.length; j++) {    
      
      if (i != j && human[i].intersectHuman(human[j])) {
        human[i].infect(human[j]);
        //    human[i].collide(human[j]);
        human[i].bounce();
      }      
        for(let k=0;k<house.length;k++)
  {
house[k].show();

if(human[i].intersectHouse(house[k]))
{
human[i].enterHouse(house[k]);

}

  }
    } 

  }


    //Houses display
  // houseGenerator.DisplayHouses(); 

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