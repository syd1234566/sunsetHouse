// Sydney Manimtim 
// Nicholas Brown-Hernandez
// WEB AND FX: FROM THEORY TO PRACTICE,502-A22-LA, sect. 00003 
// Sunset House
// https://openprocessing.org/sketch/1874490 
/* 
To interact with this: Move your mouse in circles around the house, try to kepp your mouse in the square/thecanvas square, otherwise,
you'll end up in a parallel universe. 
When you feel like it, 
Click on you mouse so that a moon appears, then click on space bar, maybe it is time for the people in the house to sleep...


The interaction is about being able to "play" with the time, I wanted to create an interactive 
artwork were one can control when it is time to sleep and when it is time to sleep.
I also think that my interactive artwork is, in a way a link to the daylight savings times where time
is also "controlled" by someone, the people that chose to forward or fall backwards the time for the war.
The story of my Sunset house artwork is mainly of a sun setting around
a singular pink house. In addition, I also wanted to experiment more with different things that I could do on p5js. 
*/

	
//used chatGPT for help: https://chat.openai.com/chat 

let x = 0;
let y = 0;
let spacebarClicked = false;
let circleColor = 255;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  textSize(32);
}

function draw() {
  let r = map(mouseY, 0, height, 255, 200);
  let g = map(mouseY, 0, height, 200, 100);
  let b = map(mouseX, 0, width, 50, 100);

  if (spacebarClicked) {
    background(0); // set the background color to black permanently
  } else {
    // set the background color
    background(r, g, b);
  }

  noStroke()

  // Sun/Moon 
  fill(circleColor);
  circle(mouseX, mouseY, 80)

  // Roof
  fill(204, 229, 255);
  triangle(50, 200, 200, 50, 350, 200);

  // House 
  fill(255, 178, 204);
  rect(75, 200, 250, 150);

  // Door
  fill(204,250,135);
  rect(175, 275, 50, 75);

  // windows
  if (spacebarClicked) {
    fill(0); // set the fill color to black
  } else {
    fill(255); // set the fill color to white
		
  }
	
  rect(100, 225, 50, 50);
  rect(260, 225, 50, 50);

 
  if (spacebarClicked) {
    fill(0, 102, 0);
    text("Goodnight", width/2, height/2); // display the "Goodnight" text
  }
}

function keyPressed() {
  if (keyCode === 32) { // 32 is the keyCode for the SPACE key
    spacebarClicked = true; // conditionals for the night background
  }
}

function mousePressed() {
  // when the mouse is clicked the circle turns grey like a moon. 
  let d = dist(mouseX, mouseY, x, y);
  if (d = 25) { // if it is, change the circle color to grey
    circleColor = 100;
  }
}

