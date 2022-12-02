/*

Officer: 8243477
CaseNum: 401-2-37796868-8243477

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If novichok dips below 0.25 and polonium goes above 0.38, decrease ethanol by 0.04
	- If either arsenic dips below 0.5, strychnine goes above 0.67, or perhaps spiderVenom dips below 0.35, increment ethanol by 0.02
	- If arsenic dips below 0.31, whilst at the same time, polonium goes above 0.35 or novichok dips below 0.53, decrement methylene by 0.02
	- If alcohol dips below 0.42 or strychnine dips below 0.56, increment methylene by 0.01
	- If spiderVenom dips below 0.66 and polonium dips below 0.38, or on the other hand, novichok dips below 0.71, decrease chalk by 0.05
	- If arsenic goes above 0.27 and strychnine dips below 0.47, raise chalk by 0.02
	- When novichok dips below 0.53 and alcohol dips below 0.37, decrease antibodies by 0.05
	- If strychnine dips below 0.42 or spiderVenom dips below 0.7, raise antibodies by 0.05


Your conditional statements should consider the following poisons:

	- spiderVenom
	- strychnine
	- novichok
	- polonium
	- arsenic
	- alcohol


Your conditional statements should modify the following antidotes:

	- ethanol
	- methylene
	- chalk
	- antibodies


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var spiderVenom;
var strychnine;
var novichok;
var polonium;
var arsenic;
var alcohol;


//Declare the antidote variables
var ethanol;
var methylene;
var chalk;
var antibodies;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	spiderVenom = 0.5;
	strychnine = 0.5;
	novichok = 0.5;
	polonium = 0.5;
	arsenic = 0.5;
	alcohol = 0.5;
	ethanol = 0.5;
	methylene = 0.5;
	chalk = 0.5;
	antibodies = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
	// - If novichok dips below 0.25 and polonium goes above 0.38, decrease ethanol by 0.04
	if(novichok < 0.25 && polonium > 0.38){
		ethanol -= 0.04
	}
	// - If either arsenic dips below 0.5, strychnine goes above 0.67, or perhaps spiderVenom dips below 0.35, increment ethanol by 0.02
	if(arsenic < 0.5 || strychnine > 0.67 || spiderVenom < 0.35){
		ethanol += 0.02
	}
	// - If arsenic dips below 0.31, whilst at the same time, polonium goes above 0.35 or novichok dips below 0.53, decrement methylene by 0.02
	if(arsenic < 0.31 && (polonium > 0.35 || novichok < 0.53)){
		methylene -= 0.02
	}
	// - If alcohol dips below 0.42 or strychnine dips below 0.56, increment methylene by 0.01
	if(alcohol < 0.42 || strychnine < 0.56){
		methylene += 0.01
	}
	// - If spiderVenom dips below 0.66 and polonium dips below 0.38, or on the other hand, novichok dips below 0.71, decrease chalk by 0.05
	if((spiderVenom < 0.66 && polonium < 0.38) || novichok < 0.71){
		chalk -= 0.05
	}
	// - If arsenic goes above 0.27 and strychnine dips below 0.47, raise chalk by 0.02
	if(arsenic > 0.27 && strychnine < 0.47){
		chalk += 0.02
	}
	// - When novichok dips below 0.53 and alcohol dips below 0.37, decrease antibodies by 0.05
	if(novichok < 0.53 && alcohol < 0.37){
		antibodies -= 0.05
	}
	// - If strychnine dips below 0.42 or spiderVenom dips below 0.7, raise antibodies by 0.05
	if(strychnine < 0.42 || spiderVenom < 0.7){
		antibodies += 0.05
	}


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	spiderVenom = nextValue(graphs[0],spiderVenom);
	strychnine = nextValue(graphs[1],strychnine);
	novichok = nextValue(graphs[2],novichok);
	polonium = nextValue(graphs[3],polonium);
	arsenic = nextValue(graphs[4],arsenic);
	alcohol = nextValue(graphs[5],alcohol);


	ethanol = constrain(ethanol, 0, 1);
	methylene = constrain(methylene, 0, 1);
	chalk = constrain(chalk, 0, 1);
	antibodies = constrain(antibodies, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('spiderVenom: ' + nf(spiderVenom,1,2), 20,20);
	fill(colors[1]);
	text('strychnine: ' + nf(strychnine,1,2), 20,40);
	fill(colors[2]);
	text('novichok: ' + nf(novichok,1,2), 20,60);
	fill(colors[3]);
	text('polonium: ' + nf(polonium,1,2), 20,80);
	fill(colors[4]);
	text('arsenic: ' + nf(arsenic,1,2), 20,100);
	fill(colors[5]);
	text('alcohol: ' + nf(alcohol,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(ethanol,50,'ethanol');
	drawBar(methylene,200,'methylene');
	drawBar(chalk,350,'chalk');
	drawBar(antibodies,500,'antibodies');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
