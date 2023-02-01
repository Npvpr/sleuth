/*

Officer: 8243477
CaseNum: 502-3-33161793-8243477

Case 502 - A donation - stage 4

This final document will seal the deal. C’mon kid, let’s send these crooks down.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.


*/


var redactedText;

// data structures to be referenced in redactedText
var paper_A = [
{
	element_0: ["succeed", "protect", "smile", "rejoice"], 
	element_1: ["you", "stuff", "consider", "tug"], 
	element_2: ["stuff", "consider", "consider", "fence"]
},
{
	element_0: ["consider", "plug", "mend", "bake"], 
	element_1: ["smile", "bake", "sail", "ALGOL fish wholesalers"], 
	element_2: ["fence", "hurry", "succeed", "sneeze"]
},
{
	element_0: ["tug", "tug", "hurry", "sail"], 
	element_1: ["hurry", "fence", "clip", "plug"], 
	element_2: ["mend", "hurry", "mend", "stuff"]
},
{
	element_0: ["syndicate", "play", "consider", "bake"], 
	element_1: ["consider", "tug", "mend", "plug"], 
	element_2: ["protect", "protect", "stuff", "meddle"]
},
{
	element_0: ["play", "plug", "start", "radiate"], 
	element_1: ["succeed", "radiate", "plug", "clip"], 
	element_2: ["COBOL", "clip", "plug", "ALGOL"]
}];

var paper_B = [
{
	element_0: ["bake", "sail", "clip", "protect"], 
	element_1: ["tug", "charge", "protect", "hurry"], 
	element_2: ["Edsger", "start", "rejoice", "start"]
},
{
	element_0: ["start", "stuff", "smile", "bake"], 
	element_1: ["consider", "start", "start", "mend"], 
	element_2: ["sneeze", "clip", "sail", "Governor Zuckerberg"]
},
{
	element_0: ["fence", "clip", "consider", "development"], 
	element_1: ["play", "mend", "rejoice", "plug"], 
	element_2: ["smile", "charge", "tug", "consider"]
},
{
	element_0: ["sneeze", "charge", "hurry", "start"], 
	element_1: ["rejoice", "stuff", "mend", "smile"], 
	element_2: ["hurry", "plug", "start", "plug"]
},
{
	element_0: ["tug", "$200,000", "protect", "donation"], 
	element_1: ["sneeze", "smile", "plug", "tug"], 
	element_2: ["smile", "fence", "sail", "clip"]
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = `My dearest ${paper_B[0].element_2[0]}, I have just received your very generous ${paper_B[4].element_0[3]} of ${paper_B[4].element_0[1]}. Thank you. This will be invaluable to our campaign. ${paper_A[4].element_2[3]} is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of ${paper_A[0].element_1[0]} or ${paper_A[1].element_1[3]} to the ${paper_A[3].element_0[0]}. Your new ${paper_B[2].element_0[3]} at the ${paper_A[4].element_2[0]} can now proceed without impediment. Yours sincerely, ${paper_B[1].element_2[3]}`;

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
  text("Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg", 670, 100, 580, 600);
}
