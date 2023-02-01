/*

Officer: 8243477
CaseNum: 701-2-89724512-8243477

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from tu tintle. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. 
They were wearing a green army coat. 
The person I saw was male. They brobably weigh between 64 and 74 kg.
It's so hard to remember right now. They were fairly tall, I think between a height of 151 and 210 cm. 
They were carrying a metal briefcase.
I distinctly remember that they were wearing a orange socks, I remember thinking that was quite unusual.
They wore blue glasses. I'm not quite sure. They seemed to be between the age of 28 and 58 years old.
That's all I can remember about them. 

*/

var lineupLog = [
	{ 
		"name": "DRUSILLA PORTOS",
		"item": "net weave shirt",
		"gender": "male",
		"accessory": "plastic box",
		"glasses": "light tan",
		"age": 47,
		"weight": 76,
		"height": 184
	},
	{ 
		"name": "PIERRE MYRLE",
		"item": "pair of leather trousers",
		"gender": "male",
		"accessory": "big black envelope",
		"glasses": "red",
		"age": 71,
		"weight": 80,
		"height": 176
	},
	{ 
		"name": "RANDEE DEAUVILLE",
		"item": "orange socks",
		"gender": "male",
		"accessory": "metal briefcase",
		"glasses": "blue",
		"age": 44,
		"weight": 65,
		"height": 164
	},
	{ 
		"name": "JACQUELINE CASIMERE",
		"item": "pink scarf",
		"gender": "female",
		"accessory": "orange plastic bag",
		"glasses": "very thin",
		"age": 48,
		"weight": 72,
		"height": 176
	},
	{ 
		"name": "LOUISE WILLMAR",
		"item": "fur vest",
		"gender": "female",
		"accessory": "orange tote bag",
		"glasses": "white",
		"age": 43,
		"weight": 76,
		"height": 182
	},
	{ 
		"name": "JESUS SYMMES",
		"item": "red necktie",
		"gender": "female",
		"accessory": "glass bottle",
		"glasses": "thin metallic",
		"age": 62,
		"weight": 74,
		"height": 166
	},
	{ 
		"name": "JAUNITA GOODBURY",
		"item": "purple hat",
		"gender": "male",
		"accessory": "laptop bag",
		"glasses": "black",
		"age": 39,
		"weight": 87,
		"height": 189
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
function matchProperties(suspectObj){
	let count = 0;
	if(suspectObj.item == "orange socks"){
		count++;
	}
	if(suspectObj.gender == "male"){
		count++;
	}
	if(suspectObj.accessory == "metal briefcase"){
		count++;
	}
	if(suspectObj.glasses == "blue"){
		count++;
	}
	if(suspectObj.age > 28 && suspectObj.age < 58){
		count++;
	}
	if(suspectObj.weight > 64 && suspectObj.weight < 74){
		count++;
	}
	if(suspectObj.height > 151 && suspectObj.height < 210){
		count++;
	}
	return count;
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < lineupLog.length; i++){
    let matchingProperties = matchProperties(lineupLog[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + lineupLog[i].name, 60, 60 + i * 20);
  }
}
