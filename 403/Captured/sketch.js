/*

Officer: 8243477
CaseNum: 403-3-29086003-8243477

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Adele Street.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 211 meters from Courthouse then alert local police by drawing a DarkCyan circle around it with a radius of 211 pixels.
- if Shiffman is in Gates Department Store then the neighbourhood watch must be notified by drawing a MediumOrchid rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a PaleVioletRed rectangle covering the area between Reynolds Street, Turing Place, Adele Street and Huffman Street.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  else
  fill()  - Use r,g,b values between 0 and 255.
  dist()
  ellipse()
  rect()
  mouseX
  mouseY

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
    if(dist(mouseX, mouseY, 1092, 353) <= 211){
      fill(0,139,139);
      ellipse(1092, 353, 422, 422);
    }else if(mouseX > 1731 && mouseX < 1867 && mouseY < 287 && mouseY > 223){
      fill(186,85,211);
      rect(1731, 223, 135, 64);
    }else{
      fill(219,112,147);
      rect(1055, 395, 320, 415);
    }    

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);


    // a helpful mouse coordinate pointer
    fill(255,0,0);
    noStroke();
    text(`${mouseX},${mouseY}`,mouseX, mouseY);
}
