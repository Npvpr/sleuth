/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 8243477
CaseNum: 201-3-72034975-8243477

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(326,422);
    vertex(311,410);
    vertex(330,325);
    vertex(385,332);
    vertex(383,254);
    vertex(346,148);
    vertex(370,136);
    vertex(365,75);
    vertex(391,56);
    vertex(400,60);
    vertex(406,126);
    vertex(412,120);
    vertex(406,66);
    vertex(422,67);
    vertex(452,40);
    vertex(470,46);
    vertex(440,101);
    vertex(442,104);
    vertex(474,82);
    vertex(484,103);
    vertex(503,338);
    vertex(630,315);
    vertex(667,340);
    vertex(658,363);
    vertex(622,352);
    vertex(548,376);
    vertex(525,422);
    vertex(478,438);
    vertex(435,440);
    vertex(387,401);
    vertex(390,386);
    vertex(352,367);
    vertex(341,417);
    vertex(326,422);
    endShape();

    //A helpful mouse pointer
	push();
        fill(255,0,0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
