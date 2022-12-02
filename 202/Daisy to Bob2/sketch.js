/*

Officer: 8243477
CaseNum: 202-3-20175089-8243477

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Light Green filled text with a Dark Red outline in RonsFont font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(502,378);
	textSize(22);
}

function draw()
{
	background(255);

	fill(34,139,34);
	stroke(178,34,34);
	textFont(Melissa);
	// text("so", 331,90);
	fill(244,164,96);
	stroke(184,134,11);
	// text("sure", 67,161);
	fill(64,224,208);
	stroke(139,0,0);
	// text("this", 189,139);
	fill(50,205,50);
	stroke(0,0,139);
	textFont(Diggity);
	// text("?", 239,113);
	fill(154,205,50);
	stroke(0,255,127);
	textFont(Ballpointprint);
	// text("ey", 173,66);
	fill(144,238,144);
	stroke(139,0,0);
	textFont(RonsFont);
	text("go", 413,113);
	fill(0,255,255);
	stroke(128,0,0);
	textFont(Ballpointprint);
	// text("If", 217,66);
	fill(32,178,170);
	stroke(128,128,0);
	textFont(RonsFont);
	// text("I", 224,161);
	fill(34,139,34);
	stroke(0,206,209);
	textFont(Ballpointprint);
	// text("secrets,", 370,161);
	fill(255,105,180);
	stroke(255,215,0);
	textFont(Melissa);
	// text("avoiding", 165,113);
	fill(0,255,255);
	stroke(0,250,154);
	textFont(Diggity);
	// text("how", 98,161);
	fill(139,0,0);
	// text("Bob,", 86,22);
	fill(135,206,250);
	stroke(34,139,34);
	textFont(Ballpointprint);
	// text("relationship", 340,139);
	fill(144,238,144);
	stroke(139,0,0);
	textFont(RonsFont);
	text("for", 12,139);
	text("delay", 222,90);
	fill(220,20,60);
	stroke(160,82,45);
	textFont(Ballpointprint);
	// text("silence.", 12,186);
	fill(152,251,152);
	stroke(165,42,42);
	textFont(Diggity);
	// text("Are", 9,66);
	fill(238,232,170);
	stroke(128,0,128);
	textFont(RonsFont);
	// text("away", 438,113);
	push();
	fill(25,25,112);
	stroke(210,105,30);
	textFont(Melissa);
	// text("?", 328,161);
	pop();
	stroke(107,142,35);
	// text("out.", 245,139);
	fill(100,149,237);
	stroke(0,191,255);
	textFont(Melissa);
	// text("?", 205,66);
	fill(244,164,96);
	textFont(Ballpointprint);
	// text("Is", 283,139);
	fill(218,112,214);
	stroke(165,42,42);
	// text("can", 243,161);
	fill(124,252,0);
	stroke(154,205,50);
	textFont(Melissa);
	// text("nual", 197,90);
	fill(222,184,135);
	stroke(139,0,0);
	textFont(RonsFont);
	// text("not", 30,161);
	fill(0,0,139);
	stroke(0,128,128);
	// text("Daisy", 5,274);
	fill(144,238,144);
	stroke(139,0,0);
	text("safe", 433,139);
	text("I", 280,66);
	text("guard", 351,90);
	stroke(50,205,50);
	textFont(Ballpointprint);
	// text("s", 358,113);
	fill(178,34,34);
	stroke(178,34,34);
	textFont(Melissa);
	// text("yours,", 84,230);
	fill(72,209,204);
	stroke(210,105,30);
	textFont(RonsFont);
	// text("x", 55,274);
	fill(255,127,80);
	stroke(148,0,211);
	textFont(Diggity);
	// text("darling", 36,22);
	push();
	stroke(255,0,0);
	textFont(Melissa);
	// text("I'm", 6,161);
	pop();
	stroke(0,255,255);
	// text("so,", 255,66);
	fill(135,206,235);
	stroke(0,0,205);
	textFont(Melissa);
	// text("are", 306,90);
	fill(218,165,32);
	stroke(255,0,0);
	textFont(Ballpointprint);
	// text("we", 325,113);
	push();
	fill(233,150,122);
	stroke(50,205,50);
	// text("all", 219,139);
	pop();
	fill(144,238,144);
	stroke(139,0,0);
	textFont(RonsFont);
	text("you", 127,113);
	text("can", 299,66);
	fill(199,21,133);
	stroke(0,0,139);
	textFont(Ballpointprint);
	// text("longer", 12,90);
	fill(107,142,35);
	stroke(32,178,170);
	textFont(Diggity);
	// text("cash.", 370,66);
	fill(139,0,0);
	stroke(0,250,154);
	textFont(RonsFont);
	// text("more", 169,161);
	push();
	fill(107,142,35);
	stroke(32,178,170);
	textFont(Diggity);
	// text("b", 69,139);
	pop();
	stroke(128,0,128);
	textFont(Ballpointprint);
	// text("ig", 68,90);
	stroke(127,255,0);
	textFont(Melissa);
	// text("much", 135,161);
	fill(128,128,0);
	stroke(199,21,133);
	textFont(Ballpointprint);
	// text("hould", 365,113);
	fill(0,0,255);
	stroke(255,140,0);
	textFont(RonsFont);
	// text("Perhaps", 256,113);
	fill(50,205,50);
	stroke(148,0,211);
	textFont(Melissa);
	// text("My", 12,22);
	push();
	fill(0,100,0);
	stroke(127,255,0);
	textFont(Diggity);
	// text("no", 457,66);
	pop();
	stroke(0,0,255);
	textFont(Ballpointprint);
	// text("sort", 152,139);
	fill(107,142,35);
	stroke(255,255,0);
	textFont(Melissa);
	// text("our", 317,139);
	fill(165,42,42);
	stroke(0,206,209);
	textFont(RonsFont);
	// text("?", 477,139);
	fill(186,85,211);
	// text("I", 413,66);
	fill(238,130,238);
	stroke(255,215,0);
	textFont(Melissa);
	// text("me", 217,113);
	stroke(0,191,255);
	textFont(RonsFont);
	// text("take", 278,161);
	fill(75,0,130);
	stroke(148,0,211);
	textFont(Melissa);
	// text("conti", 167,90);
	fill(0,128,0);
	stroke(128,0,128);
	textFont(Diggity);
	// text("hort", 85,66);
	fill(0,0,128);
	stroke(148,0,211);
	// text("and", 118,139);
	fill(210,105,30);
	stroke(50,205,50);
	textFont(Melissa);
	// text("can", 432,66);
	push();
	fill(0,191,255);
	stroke(0,206,209);
	textFont(Diggity);
	// text("s", 78,66);
	pop();
	fill(255,165,0);
	stroke(0,191,255);
	textFont(Ballpointprint);
	// text("er", 55,230);
	push();
	fill(144,238,144);
	stroke(218,165,32);
	textFont(Diggity);
	// text("Are", 92,113);
	pop();
	stroke(0,206,209);
	textFont(Diggity);
	// text("sometimes.", 10,113);
	push();
	fill(238,232,170);
	stroke(255,140,0);
	textFont(Ballpointprint);
	// text("mon", 148,66);
	pop();
	fill(34,139,34);
	stroke(128,0,128);
	textFont(RonsFont);
	// text("ed", 408,90);
	fill(255,99,71);
	stroke(0,250,154);
	textFont(Melissa);
	// text("The", 340,161);
	push();
	fill(147,112,219);
	stroke(0,191,255);
	// text("send", 337,66);
	pop();
	fill(107,142,35);
	stroke(25,25,112);
	textFont(RonsFont);
	// text("s", 263,90);
	fill(0,255,127);
	stroke(0,128,0);
	textFont(Diggity);
	// text("of", 124,66);
	fill(25,25,112);
	stroke(128,128,0);
	textFont(Ballpointprint);
	// text("nore", 83,90);
	fill(255,0,0);
	stroke(139,0,139);
	// text("orev", 24,230);
	push();
	fill(65,105,225);
	stroke(0,0,255);
	textFont(Diggity);
	// text("reak", 77,139);
	pop();
	fill(135,206,235);
	textFont(RonsFont);
	// text("a", 51,139);
	fill(135,206,250);
	stroke(128,0,128);
	textFont(Ballpointprint);
	// text("the", 440,161);
	fill(123,104,238);
	stroke(255,69,0);
	textFont(Melissa);
	// text("You", 280,90);
	fill(233,150,122);
	stroke(46,139,87);
	textFont(Ballpointprint);
	// text("you", 44,66);
	fill(139,69,19);
	stroke(0,139,139);
	textFont(Melissa);
	// text("these", 126,90);
	push();
	fill(255,215,0);
	stroke(0,0,139);
	textFont(Ballpointprint);
	// text("F", 12,230);
	pop();

}
