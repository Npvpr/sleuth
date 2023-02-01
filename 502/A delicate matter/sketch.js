/*

Officer: 8243477
CaseNum: 502-1-84866233-8243477

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way. This message is a little more tricky to decipher, but I know you can do it.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var A_listing = [
	{detail_0: "charge", detail_1: "play", detail_2: "radiate"}, 
	{detail_0: "protect", detail_1: "a donation", detail_2: "plug"}, 
	{detail_0: "meddle", detail_1: "start", detail_2: "start"}, 
	{detail_0: "stuff", detail_1: "start", detail_2: "succeed"}, 
	{detail_0: "protect", detail_1: "radiate", detail_2: "stuff"}, 
	{detail_0: "start", detail_1: "protect", detail_2: "delicate"}, 
	{detail_0: "charge", detail_1: "capital", detail_2: "clip"}, 
	{detail_0: "rejoice", detail_1: "consider", detail_2: "play"}, 
	{detail_0: "smile", detail_1: "tug", detail_2: "charge"}, 
	{detail_0: "sail", detail_1: "mend", detail_2: "sneeze"}
];

var B_listing = [
	{detail_0: "COBOL", detail_1: "sneeze", detail_2: "sneeze"}, 
	{detail_0: "smile", detail_1: "Edsger", detail_2: "she has"}, 
	{detail_0: "Hopper’s", detail_1: "bake", detail_2: "radiate"}, 
	{detail_0: "smile", detail_1: "sneeze", detail_2: "rejoice"}, 
	{detail_0: "smile", detail_1: "sneeze", detail_2: "romantic"}, 
	{detail_0: "plug", detail_1: "sneeze", detail_2: "clip"}, 
	{detail_0: "smile", detail_1: "tug", detail_2: "syndicate"}, 
	{detail_0: "fence", detail_1: "mend", detail_2: "tug"}, 
	{detail_0: "charge", detail_1: "meddle", detail_2: "protect"}, 
	{detail_0: "protect", detail_1: "plug", detail_2: "Governor Zuckerberg"}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = `My dearest ${B_listing[1].detail_1}, Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about ${B_listing[2].detail_0} intervention. I suspect that ${B_listing[1].detail_2} a ${B_listing[4].detail_2} interest at the ${B_listing[0].detail_0}. I and the ${B_listing[6].detail_2} appreciate your many contributions over the years. However, this is a most ${A_listing[5].detail_2} matter which would require significant ${A_listing[6].detail_1} for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps ${A_listing[1].detail_1} to my forthcoming campaign would help. Yours sincerely, ${B_listing[9].detail_2}`;

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text("Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg", 670, 100, 580, 600);
}
