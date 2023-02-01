/*

Officer: 8243477
CaseNum: 701-3-89485861-8243477

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from lesley goodbury.
All they need is for you to do the detective work.

This time you must implement two functions:

- A testProperties function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A traverseSuspects function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - function traverseSuspects(){}
 - if()

Witness statement:

It all started when I was exiting the store.
That's when I noticed them. They were wearing a red parka. 
They were carrying a glass bottle. 
They seemed to be between the age of 34 and 58 years old. 
It was very dark and I could barely see, I'm not quite sure.
They were fairly tall, I think between a height of 160 and 192 cm. 
I distinctly remember that they were wearing a pink scarf, I remember thinking that was quite unusual. 
I'll never forget their green eyes. Their expression seemed angry. 
I'm not quite sure. They brobably weigh between 65 and 87 kg. 
They had long white hair. That's all I know officer. 

*/

var usualSuspects = [
	{ 
		"name": "JENIFFER WARMAN",
		"eyes": "pale",
		"item": "dotted necktie",
		"accessory": "black duffle bag",
		"hair": "thick black",
		"weight": 75,
		"age": 19,
		"height": 170
	},
	{ 
		"name": "LAVERNE NIEMELA",
		"eyes": "black",
		"item": "fur vest",
		"accessory": "brown paper bag",
		"hair": "white",
		"weight": 71,
		"age": 46,
		"height": 186
	},
	{ 
		"name": "DEEDEE JENI",
		"eyes": "black",
		"item": "red necktie",
		"accessory": "big black envelope",
		"hair": "red",
		"weight": 73,
		"age": 42,
		"height": 193
	},
	{ 
		"name": "GAYLA JACQUELIN",
		"eyes": "green",
		"item": "pink scarf",
		"accessory": "glass bottle",
		"hair": "long white",
		"weight": 68,
		"age": 57,
		"height": 163
	},
	{ 
		"name": "KITTY FORSLIN",
		"eyes": "blue",
		"item": "net weave shirt",
		"accessory": "red backpack",
		"hair": "ginger",
		"weight": 78,
		"age": 38,
		"height": 168
	},
	{ 
		"name": "RANDEE BROADVIEW",
		"eyes": "grey",
		"item": "pair of leather trousers",
		"accessory": "plastic box",
		"hair": "no",
		"weight": 72,
		"age": 37,
		"height": 157
	},
	{ 
		"name": "NICOLE PHINNEY",
		"eyes": "grey",
		"item": "purple hat",
		"accessory": "laptop bag",
		"hair": "shaved",
		"weight": 78,
		"age": 53,
		"height": 162
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

// Declare both your functions here
function testProperties(suspectObj){
	let count = 0;
	if(suspectObj.accessory == "glass bottle"){
		count++;
	}
	if(suspectObj.age > 34 && suspectObj.age < 58){
		count++;
	}
	if(suspectObj.height > 160 && suspectObj.height < 192){
		count++;
	}
	if(suspectObj.item == "pink scarf"){
		count++;
	}
	if(suspectObj.eyes == "green"){
		count++;
	}
	if(suspectObj.weight > 65 && suspectObj.weight < 87){
		count++;
	}
	if(suspectObj.hair == "long white"){
		count++;
	}
	return count;
}

function traverseSuspects(){
	let Hguilt = 0;
	let Cguilt, theif;
	for(let i = 0; i < usualSuspects.length; i++){
		Cguilt = testProperties(usualSuspects[i]);
		if(Cguilt > Hguilt){
			theif = usualSuspects[i];
			Hguilt = Cguilt;
		}
	}
	return theif;
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(traverseSuspects().name + " is guilty!", 60, 80);
}
