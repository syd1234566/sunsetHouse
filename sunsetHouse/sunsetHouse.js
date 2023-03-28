// Sydney Manimtim 
// Nicholas Brown-Hernandez
// WEB AND FX: FROM THEORY TO PRACTICE,502-A22-LA, sect. 00003 
// Sunset house
// The URL link to your interactive experience
/* (Instruction) Explain how to use the interaction…*/
/* (Analysis/artist statement) Explain what is the interaction about… what story does it tell/what
meaning does the interaction have */

  //when click mouse circle goes yellow to white or light gray
  // when keyPressed(), the hole thing turns black (GOODNIGHT)
  // text saying what to do

let x= 0
let y = 0


function setup() {
  createCanvas(400, 400);

}

function draw() {
  let r = map(mouseY, 0, height, 255, 200);
  let g = map(mouseY, 0, height, 200, 100);
  let b = map(mouseX, 0, width, 50, 100);

  // set the background color
  background(r, g, b);
   noStroke()
  
circle(mouseX,mouseY,80)
  
  // Draw the roof
  fill(117, 112, 103);
  triangle(50, 200, 200, 50, 350, 200);
  
  // House 
  fill(134, 4, 8);
  rect(75, 200, 250, 150);
  
  // door
  fill(0);
  rect(175, 275, 50, 75);
  
  //  windows
  fill(255);
  rect(100, 225, 50, 50);
  rect(275, 225, 50, 50);
}
