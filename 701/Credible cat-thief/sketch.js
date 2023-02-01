/*

Officer: 8243477
CaseNum: 701-1-37232840-8243477

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testSuspect(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store.
That's when I noticed them.
They were wearing a white fur coat.
I'm not quite sure. I'm pretty sure they were above the age of 43.
I would say they were shorter than 173 cm. They had red hair.
The person I saw was female. It's so hard to remember right now.
I'll never forget their blue eyes. I hope I never have to go through that again. 

*/

var suspectsArray = [
	{ 
		"name": "JENIFFER CROME",
		"gender": "male",
		"coat": "red parka",
		"hair": "no",
		"age": 36,
		"height": 182
	},
	{ 
		"name": "NELSON MONKSFORD",
		"gender": "male",
		"coat": "black hoodie",
		"hair": "dark brown",
		"age": 45,
		"height": 190
	},
	{ 
		"name": "LOUISE OORIN",
		"gender": "male",
		"coat": "blue overcoat",
		"hair": "shaved",
		"age": 72,
		"height": 205
	},
	{ 
		"name": "RANDEE SYMMES",
		"gender": "male",
		"coat": "green army coat",
		"hair": "short black",
		"age": 62,
		"height": 185
	},
	{ 
		"name": "SUMMER DORCEY",
		"gender": "female",
		"coat": "white fur coat",
		"hair": "red",
		"age": 47,
		"height": 165
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
function testSuspect(suspectObj){
	if((suspectObj.coat == "white fur coat") && (suspectObj.age > 43) && (suspectObj.height < 173) && (suspectObj.hair == "red") && (suspectObj.gender == "female")){
		return true;
	}
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectsArray.length; i++){
    if(testSuspect(suspectsArray[i]) == true){
      fill(255,0,0);
      text(suspectsArray[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(suspectsArray[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
