/*
802 - The case of Monte Carlo
Stage 4 - Club criminal


Officer: 8243477
CaseNum: 802-3-67601890-8243477

The card sharks from Rossling Polling are not pleased with your stellar performance and suspect foul play. They are challenging you to find a single card in the deck in just one cut.
The card you are looking for is stored in the cutHere object. Cut the deck at this exact location and they will give up their secrets.

* Using a for loop search for the card represented by cutHere in the playingCards array.
* Do this in a function called cut_deck and call it from setup.
* We need to be quick to not be spotted. Make sure you use a for loop and the break statement when you find a match in the deck.
* Store the cut card and all the elements after from the playingCards array in the topOfDeck array. Do this using the JavaScript splice() function
* You’ll then need to reverse the elements in topOfDeck so that the card we cut the deck at is the last element and not the first. Unfortunatly, if we use the JavaScript inbuilt reverse() function we’ll be spotted. You’ll have to write this yourself kid. Do this in the cut_deck after you have filled topOfDeck.


*You also need to write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers but set the random value to start at 3 and end at 80.
Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
*Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().

*/

var playingCards = [{"cardSuit":"Spades","n":"A"},{"cardSuit":"Spades","n":"2"},{"cardSuit":"Spades","n":"3"},{"cardSuit":"Spades","n":"4"},{"cardSuit":"Spades","n":"5"},{"cardSuit":"Spades","n":"6"},{"cardSuit":"Spades","n":"7"},{"cardSuit":"Spades","n":"8"},{"cardSuit":"Spades","n":"9"},{"cardSuit":"Spades","n":"10"},{"cardSuit":"Spades","n":"J"},{"cardSuit":"Spades","n":"Q"},{"cardSuit":"Spades","n":"K"},{"cardSuit":"Clubs","n":"A"},{"cardSuit":"Clubs","n":"2"},{"cardSuit":"Clubs","n":"3"},{"cardSuit":"Clubs","n":"4"},{"cardSuit":"Clubs","n":"5"},{"cardSuit":"Clubs","n":"6"},{"cardSuit":"Clubs","n":"7"},{"cardSuit":"Clubs","n":"8"},{"cardSuit":"Clubs","n":"9"},{"cardSuit":"Clubs","n":"10"},{"cardSuit":"Clubs","n":"J"},{"cardSuit":"Clubs","n":"Q"},{"cardSuit":"Clubs","n":"K"},{"cardSuit":"Hearts","n":"A"},{"cardSuit":"Hearts","n":"2"},{"cardSuit":"Hearts","n":"3"},{"cardSuit":"Hearts","n":"4"},{"cardSuit":"Hearts","n":"5"},{"cardSuit":"Hearts","n":"6"},{"cardSuit":"Hearts","n":"7"},{"cardSuit":"Hearts","n":"8"},{"cardSuit":"Hearts","n":"9"},{"cardSuit":"Hearts","n":"10"},{"cardSuit":"Hearts","n":"J"},{"cardSuit":"Hearts","n":"Q"},{"cardSuit":"Hearts","n":"K"},{"cardSuit":"Diamonds","n":"A"},{"cardSuit":"Diamonds","n":"2"},{"cardSuit":"Diamonds","n":"3"},{"cardSuit":"Diamonds","n":"4"},{"cardSuit":"Diamonds","n":"5"},{"cardSuit":"Diamonds","n":"6"},{"cardSuit":"Diamonds","n":"7"},{"cardSuit":"Diamonds","n":"8"},{"cardSuit":"Diamonds","n":"9"},{"cardSuit":"Diamonds","n":"10"},{"cardSuit":"Diamonds","n":"J"},{"cardSuit":"Diamonds","n":"Q"},{"cardSuit":"Diamonds","n":"K"}];
var deck_img;
var table_img;
var drawCounter = 0;

var cutHere = {"s":"Clubs","value":"8"};
var topOfDeck = [];

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
	shuffleDeck(shuffleSeed());
	//call your cut_deck function here
	cut_deck();
}

//write your cut_deck function here
function cut_deck(){
	for(let i = 0; i < playingCards.length; i++){
		if(playingCards[i].cardSuit == cutHere.s && playingCards[i].n == cutHere.value){
			topOfDeck = playingCards.slice(i);
			break;
		}
	}
	let reDeck = topOfDeck.slice();
	for(let j = 0; j < reDeck.length; j++){
		topOfDeck[reDeck.length - (j+1)] = reDeck[j];
	}
}
//write your shuffleSeed() function here.
function shuffleSeed(){
	let rList = [];
	for(let i = 0; i < 52; i++){
		rList.push(round(random(3, 80)));
	}
	return rList;
}
/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < playingCards.length; j++)
	   {
		  var tempCard = playingCards.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          playingCards.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 5)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if(i < topOfDeck.length)
		{
			drawCard(topOfDeck[i], 880 + i * 18, 750);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.n == values[j] && card.cardSuit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
