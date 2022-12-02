/*

Officer: 8243477
CaseNum: 101-3-63201617-8243477

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Dark Blue filled rectangle with a Dodger Blue outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Dark Violet filled
rectangle with a Dark Goldenrod outline around him.

Identify the man reading the newspaper by drawing a Sienna filled rectangle
with a Peru outline around him.

Identify the woman with the dog by drawing a Yellow filled rectangle with a
Magenta outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	fill(0,0,139,100)
	stroke(30,144,255)
	rect(220, 92, 152, 310)

	fill(148,0,211,100)
	stroke(184,134,11)
	rect(1183, 275, 245, 330)

	fill(160,82,45,100)
	stroke(205,133,63)
	rect(615, 120, 200, 380)

	fill(255,255,0,100)
	stroke(255,0,255)
	rect(995, 60, 132, 277)

	noStroke();
	fill(255, 0, 0, 255);
	rect(100, 100, 200, 200);
	fill(0, 0, 255, 0);
	rect(100, 100, 300, 300);

	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();


}
