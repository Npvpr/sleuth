/*

Officer: 8243477
CaseNum: 202-1-96593401-8243477

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Lawn Green filled text with a Dark Blue outline 
(see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(590,454);
	textFont(letterFont);
	textSize(29);
}

function draw()
{
	background(255);

	fill(127,255,212);
	stroke(255,140,0);
	// text("you.", 279,156);
	fill(238,232,170);
	stroke(148,0,211);
	// text("darling", 39,29);
	fill(138,43,226);
	stroke(128,0,128);
	// text("arms.", 342,120);
	fill(222,184,135);
	stroke(160,82,45);
	// text("is", 484,87);
	fill(233,150,122);
	stroke(0,100,0);
	// text("stare", 408,120);
	fill(210,105,30);
	stroke(178,34,34);
	// text("this", 382,220);
	fill(128,0,128);
	// text("sky,", 52,156);
	fill(176,224,230);
	stroke(124,252,0);
	// text("How", 7,87);
	fill(255,0,0);
	stroke(255,69,0);
	// text("un", 451,156);
	fill(0,250,154);
	stroke(50,205,50);
	// text("you", 262,120);
	fill(72,209,204);
	stroke(32,178,170);
	// text("x", 56,368);
	fill(25,25,112);
	stroke(0,206,209);
	// text("again", 503,156);
	fill(64,224,208);
	stroke(107,142,35);
	// text("the", 248,87);
	fill(123,104,238);
	stroke(160,82,45);
	// text("much", 123,220);
	fill(0,191,255);
	stroke(0,206,209);
	// text("and", 92,156);
	fill(107,142,35);
	stroke(184,134,11);
	// text("For", 7,310);
	fill(138,43,226);
	stroke(0,128,128);
	// text("?", 548,156);
	fill(25,25,112);
	// text("do", 222,220);
	fill(135,206,235);
	stroke(0,100,0);
	// text("hav", 105,87);
	fill(222,184,135);
	stroke(50,205,50);
	// text("your", 94,252);
	fill(147,112,219);
	stroke(255,140,0);
	// text("without", 158,189);
	fill(139,0,0);
	stroke(0,128,0);
	// text("How", 84,220);
	fill(238,130,238);
	stroke(139,0,139);
	// text("Even", 7,189);
	fill(255,0,255);
	stroke(255,165,0);
	// text("the", 69,189);
	fill(255,105,180);
	stroke(0,255,127);
	// text("b", 9,252);
	fill(0,0,139);
	stroke(32,178,170);
	// text("ited", 466,156);
	fill(153,50,204);
	stroke(0,0,139);
	// text("will", 364,156);
	fill(255,127,80);
	stroke(0,255,127);
	// text("s,", 108,310);
	fill(165,42,42);
	stroke(32,178,170);
	// text("your", 75,310);
	fill(186,85,211);
	stroke(218,165,32);
	// text("long", 164,120);
	fill(255,0,255);
	stroke(255,0,255);
	// text("of", 254,156);
	fill(153,50,204);
	stroke(139,0,0);
	// text("?", 133,120);
	fill(220,20,60);
	// text("Daisy", 7,368);
	fill(100,149,237);
	stroke(107,142,35);
	// text("we", 7,120);
	fill(255,140,0);
	stroke(0,250,154);
	// text("since", 523,87);
	fill(233,150,122);
	stroke(0,0,255);
	// text("I'm", 492,220);
	fill(147,112,219);
	stroke(127,255,0);
	// text("you", 227,189);
	fill(0,0,128);
	stroke(128,0,0);
	// text("small", 390,189);
	fill(34,139,34);
	stroke(160,82,45);
	// text("we", 396,156);
	fill(124,252,0);
	stroke(128,128,0);
	// text("?", 476,220);
	fill(153,50,204);
	stroke(210,105,30);
	// text("I", 393,120);
	fill(50,205,50);
	stroke(0,0,255);
	// text("ing", 132,87);
	fill(0,0,128);
	stroke(255,69,0);
	// text("can", 140,156);
	fill(25,25,112);
	stroke(255,0,255);
	// text("My", 7,29);
	fill(34,139,34);
	stroke(0,0,139);
	// text("to", 200,120);
	fill(30,144,255);
	stroke(220,20,60);
	// text("desolate.", 7,220);
	fill(128,128,0);
	stroke(255,69,0);
	// text("miss", 61,87);
	fill(128,0,0);
	stroke(255,255,0);
	// text("you", 159,87);
	fill(255,165,0);
	stroke(0,0,139);
	// text("swift", 134,252);
	fill(139,0,139);
	stroke(255,0,255);
	// text("night", 7,156);
	fill(127,255,212);
	stroke(218,165,32);
	// text("How", 332,87);
	fill(0,255,255);
	stroke(160,82,45);
	// text("place.", 282,87);
	fill(255,140,0);
	stroke(46,139,87);
	// text("last", 38,120);
	fill(186,85,211);
	stroke(255,69,0);
	// text("be", 427,156);
	fill(50,205,50);
	stroke(218,165,32);
	// text("many", 371,87);
	stroke(154,205,50);
	// text("I", 247,220);
	fill(222,184,135);
	stroke(128,0,128);
	// text("feels", 482,189);
	fill(250,128,114);
	stroke(0,0,205);
	// text("I", 125,156);
	fill(255,215,0);
	stroke(0,0,255);
	// text("return.", 188,252);
	fill(244,164,96);
	stroke(255,0,255);
	// text("town", 436,189);
	fill(238,232,170);
	stroke(0,128,128);
	// text("the", 509,120);
	fill(165,42,42);
	stroke(46,139,87);
	// text("I", 46,87);
	fill(250,128,114);
	stroke(107,142,35);
	// text("it", 504,87);
	fill(255,105,180);
	stroke(128,0,0);
	// text("ger", 189,220);
	fill(220,20,60);
	stroke(139,0,0);
	// text("Bob,", 95,29);
	fill(0,0,205);
	stroke(124,252,0);
	// text("my", 312,120);
	fill(255,69,0);
	stroke(0,0,139);
	// text("ever", 33,310);
	fill(178,34,34);
	stroke(160,82,45);
	// text("think", 173,156);
	fill(139,0,139);
	stroke(0,206,209);
	// text("When", 314,156);
	fill(184,134,11);
	stroke(0,100,0);
	// text("this", 352,189);
	fill(0,0,139);
	stroke(255,255,0);
	// text("only", 218,156);
	fill(255,165,0);
	stroke(210,105,30);
	// text("to", 305,220);
	fill(255,0,0);
	stroke(255,0,255);
	// text("longing", 420,220);
	fill(255,127,80);
	stroke(32,178,170);
	// text("in", 51,189);
	fill(154,205,50);
	stroke(128,0,128);
	// text("mon", 418,87);
	fill(64,224,208);
	stroke(0,0,139);
	// text("kis", 76,120);
	stroke(160,82,45);
	// text("ths", 449,87);
	fill(240,128,128);
	stroke(0,191,255);
	// text("my", 284,189);
	fill(124,252,0);
	stroke(32,178,170);
	// text("around", 191,87);
	fill(32,178,170);
	stroke(107,142,35);
	// text("have", 262,220);
	fill(173,216,230);
	stroke(0,0,128);
	// text("sed", 98,120);
	fill(0,139,139);
	stroke(184,134,11);
	// text("anking", 17,252);
	fill(240,128,128);
	stroke(160,82,45);
	// text("I", 149,120);
	fill(139,69,19);
	stroke(210,105,30);
	// text("at", 259,189);
	fill(124,252,0);
	stroke(0,0,139);
	text("up", 460,120);
	fill(255,255,0);
	stroke(255,215,0);
	// text("in", 294,120);
	fill(0,206,209);
	stroke(148,0,211);
	// text("lon", 169,220);
	fill(124,252,0);
	stroke(0,0,139);
	text("spring", 103,189);
	text("hold", 225,120);
	text("store", 330,220);
	text("side", 314,189);
	text("at", 484,120);
	fill(0,255,127);
	stroke(25,25,112);
	// text("on", 70,252);



}
