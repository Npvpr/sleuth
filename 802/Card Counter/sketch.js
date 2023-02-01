/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards


Officer: 8243477
CaseNum: 802-2-77480204-8243477

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in handToWin from the deck and store it in the hand array.

*Write a function called setWinningHand and call it from setup.
*We need to be quick so our ruse isn’t spotted. Make sure you use a nested for loop and the break statement in the inner loop when you find a match in the deck.
*When you find a card in the deck that matches one in handToWin add it to the handArray. Then break and search for the next card.

*You also need to write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers but set the random value to start at 3 and end at 93.
*Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
*Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var cards = [{"cardSuit":"Spades","n":"A"},{"cardSuit":"Spades","n":"2"},{"cardSuit":"Spades","n":"3"},{"cardSuit":"Spades","n":"4"},{"cardSuit":"Spades","n":"5"},{"cardSuit":"Spades","n":"6"},{"cardSuit":"Spades","n":"7"},{"cardSuit":"Spades","n":"8"},{"cardSuit":"Spades","n":"9"},{"cardSuit":"Spades","n":"10"},{"cardSuit":"Spades","n":"J"},{"cardSuit":"Spades","n":"Q"},{"cardSuit":"Spades","n":"K"},{"cardSuit":"Clubs","n":"A"},{"cardSuit":"Clubs","n":"2"},{"cardSuit":"Clubs","n":"3"},{"cardSuit":"Clubs","n":"4"},{"cardSuit":"Clubs","n":"5"},{"cardSuit":"Clubs","n":"6"},{"cardSuit":"Clubs","n":"7"},{"cardSuit":"Clubs","n":"8"},{"cardSuit":"Clubs","n":"9"},{"cardSuit":"Clubs","n":"10"},{"cardSuit":"Clubs","n":"J"},{"cardSuit":"Clubs","n":"Q"},{"cardSuit":"Clubs","n":"K"},{"cardSuit":"Hearts","n":"A"},{"cardSuit":"Hearts","n":"2"},{"cardSuit":"Hearts","n":"3"},{"cardSuit":"Hearts","n":"4"},{"cardSuit":"Hearts","n":"5"},{"cardSuit":"Hearts","n":"6"},{"cardSuit":"Hearts","n":"7"},{"cardSuit":"Hearts","n":"8"},{"cardSuit":"Hearts","n":"9"},{"cardSuit":"Hearts","n":"10"},{"cardSuit":"Hearts","n":"J"},{"cardSuit":"Hearts","n":"Q"},{"cardSuit":"Hearts","n":"K"},{"cardSuit":"Diamonds","n":"A"},{"cardSuit":"Diamonds","n":"2"},{"cardSuit":"Diamonds","n":"3"},{"cardSuit":"Diamonds","n":"4"},{"cardSuit":"Diamonds","n":"5"},{"cardSuit":"Diamonds","n":"6"},{"cardSuit":"Diamonds","n":"7"},{"cardSuit":"Diamonds","n":"8"},{"cardSuit":"Diamonds","n":"9"},{"cardSuit":"Diamonds","n":"10"},{"cardSuit":"Diamonds","n":"J"},{"cardSuit":"Diamonds","n":"Q"},{"cardSuit":"Diamonds","n":"K"}];
var deck_img;
var table_img;
var drawCounter = 0;

var handToWin = [{"suit":"Spades","value":"K"},{"suit":"Clubs","value":"K"},{"suit":"Clubs","value":"J"},{"suit":"Diamonds","value":"K"},{"suit":"Spades","value":"Q"}];
var hand =[];

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
	//call your setWinningHand function here
	setWinningHand();
}

//write your setWinningHand function here
function setWinningHand(){
	for(let i = 0; i < handToWin.length; i++){
		for(let j = 0; j < cards.length; j++){
			if ((handToWin[i].suit === cards[j].cardSuit) && (handToWin[i].value === cards[j].n)){
				hand.push(cards[j]);
				break;
			}
		}
	}
}
//write your shuffleSeed() function here.
function shuffleSeed(){
	rList = [];
	for(let i = 0; i < 52; i++){
		rList.push(round(random(3, 93)));
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
	   for (var j = 0; j < cards.length; j++)
	   {
		  var tempCard = cards.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          cards.splice(newLoc, 0, tempCard[0]);
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
		if( i < hand.length)
		{
			drawCard(hand[i], 880 + i * 18, 750);
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
