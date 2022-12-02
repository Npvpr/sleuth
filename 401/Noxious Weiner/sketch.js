/*

Officer: 8243477
CaseNum: 401-0-41207171-8243477

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the population down with a potent poison. Word has it that he is smuggling his venomous filth via a streetside weiner stand. Hundreds of people have been affected, and the municipal water company tells me that their sewers are at full capacity. This is no laughing matter. I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:

	- When ricin goes above 0.34, try decreasing sodium_bicarbonate by 0.01
	- If cyanide dips below 0.68, increment sodium_bicarbonate by 0.02
	- If alcohol goes above 0.28, try decreasing protamine by 0.01
	- When ricin goes above 0.66, raise protamine by 0.02
	- When cyanide goes above 0.65, reduce calciumGluconate by 0.04
	- When alcohol dips below 0.47, increment calciumGluconate by 0.01


Your conditional statements should consider the following poisons:

	- ricin
	- cyanide
	- alcohol


Your conditional statements should modify the following antidotes:

	- sodium_bicarbonate
	- protamine
	- calciumGluconate


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	+=
	-=

*/

//Declare the poison variables
var ricin;
var cyanide;
var alcohol;


//Declare the antidote variables
var sodium_bicarbonate;
var protamine;
var calciumGluconate;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	ricin = 0.5;
	cyanide = 0.5;
	alcohol = 0.5;
	sodium_bicarbonate = 0.5;
	protamine = 0.5;
	calciumGluconate = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
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
	// When ricin goes above 0.34, try decreasing sodium_bicarbonate by 0.01
	if(ricin > 0.34){
		sodium_bicarbonate -= 0.01
	}
	// If cyanide dips below 0.68, increment sodium_bicarbonate by 0.02
	if(cyanide < 0.68){
		sodium_bicarbonate += 0.02
	}
	// - If alcohol goes above 0.28, try decreasing protamine by 0.01
	if(alcohol > 0.28){
		protamine -= 0.01;
	}
	// - When ricin goes above 0.66, raise protamine by 0.02
	if(ricin > 0.66){
		protamine += 0.02
	}
	// - When cyanide goes above 0.65, reduce calciumGluconate by 0.04
	if(cyanide > 0.65){
		calciumGluconate -= 0.04
	}
	// - When alcohol dips below 0.47, increment calciumGluconate by 0.01
	if(alcohol < 0.47){
		calciumGluconate += 0.01
	}


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	ricin = nextValue(graphs[0],ricin);
	cyanide = nextValue(graphs[1],cyanide);
	alcohol = nextValue(graphs[2],alcohol);


	sodium_bicarbonate = constrain(sodium_bicarbonate, 0, 1);
	protamine = constrain(protamine, 0, 1);
	calciumGluconate = constrain(calciumGluconate, 0, 1);


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
	text('ricin: ' + nf(ricin,1,2), 20,20);
	fill(colors[1]);
	text('cyanide: ' + nf(cyanide,1,2), 20,40);
	fill(colors[2]);
	text('alcohol: ' + nf(alcohol,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(sodium_bicarbonate,50,'sodium_bicarbonate');
	drawBar(protamine,200,'protamine');
	drawBar(calciumGluconate,350,'calciumGluconate');


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
