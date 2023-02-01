/*

Officer: 8243477
CaseNum: 701-0-95933592-8243477

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist tamica ashely and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. The person I saw was female. They were wearing a black hoodie. It was very dark and I could barely see, It was very dark and I could barely see, I'll never forget their black eyes. I can't remember anything else about them.

*/

var lineupLog = [
	{ 
		"name": "PIERRE MAUBERT",
		"eyes": "pale",
		"coat": "black overcoat",
		"gender": "male"
	},
	{ 
		"name": "TU FORSLIN",
		"eyes": "black",
		"coat": "black hoodie",
		"gender": "female"
	},
	{ 
		"name": "DRUSILLA PEGORD",
		"eyes": "grey",
		"coat": "blue overcoat",
		"gender": "female"
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here
function testProperties(suspectObj){
	if((suspectObj.eyes == "black") && (suspectObj.coat == "black hoodie") && (suspectObj.gender == "female")){
		return true;
	}
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < lineupLog.length; i++){
    if(testProperties(lineupLog[i]) == true){
      fill(255,0,0);
      text(lineupLog[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(lineupLog[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
