/*
802 - The case of Monte Carlo
Stage 2 - King of Cards


Officer: 8243477
CaseNum: 802-1-44332776-8243477

You aren’t going to look like much of a Poker player unless you can do a good shuffle. We’ll need to be able to do this with one hand tied behind our back if we are going to pose as pros at the big game.

* Write a function called fill_shuffle_array.
* Declare an empty array in the function.
* Using a for loop fill the array with 52 random integers between 2 and 54.
* Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
* Return the array at the end of the function.
* Call fill_shuffle_array in setup.
* Call Shuffle deck using the return value from fill_shuffle_array as the argument.

*/

var card_deck = [{"cardSuit":"Spades","no":"A"},{"cardSuit":"Spades","no":"2"},{"cardSuit":"Spades","no":"3"},{"cardSuit":"Spades","no":"4"},{"cardSuit":"Spades","no":"5"},{"cardSuit":"Spades","no":"6"},{"cardSuit":"Spades","no":"7"},{"cardSuit":"Spades","no":"8"},{"cardSuit":"Spades","no":"9"},{"cardSuit":"Spades","no":"10"},{"cardSuit":"Spades","no":"J"},{"cardSuit":"Spades","no":"Q"},{"cardSuit":"Spades","no":"K"},{"cardSuit":"Clubs","no":"A"},{"cardSuit":"Clubs","no":"2"},{"cardSuit":"Clubs","no":"3"},{"cardSuit":"Clubs","no":"4"},{"cardSuit":"Clubs","no":"5"},{"cardSuit":"Clubs","no":"6"},{"cardSuit":"Clubs","no":"7"},{"cardSuit":"Clubs","no":"8"},{"cardSuit":"Clubs","no":"9"},{"cardSuit":"Clubs","no":"10"},{"cardSuit":"Clubs","no":"J"},{"cardSuit":"Clubs","no":"Q"},{"cardSuit":"Clubs","no":"K"},{"cardSuit":"Hearts","no":"A"},{"cardSuit":"Hearts","no":"2"},{"cardSuit":"Hearts","no":"3"},{"cardSuit":"Hearts","no":"4"},{"cardSuit":"Hearts","no":"5"},{"cardSuit":"Hearts","no":"6"},{"cardSuit":"Hearts","no":"7"},{"cardSuit":"Hearts","no":"8"},{"cardSuit":"Hearts","no":"9"},{"cardSuit":"Hearts","no":"10"},{"cardSuit":"Hearts","no":"J"},{"cardSuit":"Hearts","no":"Q"},{"cardSuit":"Hearts","no":"K"},{"cardSuit":"Diamonds","no":"A"},{"cardSuit":"Diamonds","no":"2"},{"cardSuit":"Diamonds","no":"3"},{"cardSuit":"Diamonds","no":"4"},{"cardSuit":"Diamonds","no":"5"},{"cardSuit":"Diamonds","no":"6"},{"cardSuit":"Diamonds","no":"7"},{"cardSuit":"Diamonds","no":"8"},{"cardSuit":"Diamonds","no":"9"},{"cardSuit":"Diamonds","no":"10"},{"cardSuit":"Diamonds","no":"J"},{"cardSuit":"Diamonds","no":"Q"},{"cardSuit":"Diamonds","no":"K"}];
var deck_img;
var table_img;
var drawCounter = 0;

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your fill_shuffle_array function here. Followed by a call to shuffleDeck with the return value of fill_shuffle_array as an argument.
	shuffleDeck(fill_shuffle_array());
}

//write your fill_shuffle_array function here
function fill_shuffle_array(){
	let rList = [];
	for(let i = 0; i < 52; i++){
		rList.push(round(random(2, 54)));
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
	   for (var j = 0; j < card_deck.length; j++)
	   {
		  var tempCard = card_deck.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          card_deck.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 52)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if (card_deck[i].marked)
		{
			drawCard(card_deck[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(card_deck[i], 400 + i * 18, 250);
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
			if (card.no == values[j] && card.cardSuit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
