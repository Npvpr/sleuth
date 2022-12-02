/*

Officer: 8243477
CaseNum: 401-1-90700550-8243477

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- When warfarin goes above 0.56, decrement paracetamol by 0.02
	- If formaldehyde dips below 0.25 or ricin dips below 0.39, increase paracetamol by 0.02
	- If warfarin dips below 0.71, reduce glucagon by 0.04
	- When formaldehyde goes above 0.27 or snakeVenom dips below 0.7, increment glucagon by 0.01
	- When ricin goes above 0.5, decrement opioids by 0.04
	- If snakeVenom dips below 0.68, increment opioids by 0.03
	- If snakeVenom dips below 0.7 and warfarin dips below 0.5, decrement Calcium_Chloride by 0.02
	- When formaldehyde dips below 0.29, try increasing Calcium_Chloride by 0.04


Your conditional statements should consider the following poisons:

	- warfarin
	- ricin
	- formaldehyde
	- snakeVenom


Your conditional statements should modify the following antidotes:

	- paracetamol
	- glucagon
	- opioids
	- Calcium_Chloride


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var warfarin;
var ricin;
var formaldehyde;
var snakeVenom;


//Declare the antidote variables
var paracetamol;
var glucagon;
var opioids;
var Calcium_Chloride;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	warfarin = 0.5;
	ricin = 0.5;
	formaldehyde = 0.5;
	snakeVenom = 0.5;
	paracetamol = 0.5;
	glucagon = 0.5;
	opioids = 0.5;
	Calcium_Chloride = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
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

	// - When warfarin goes above 0.56, decrement paracetamol by 0.02
	if(warfarin > 0.56){
		paracetamol -= 0.02
	}
	// - If formaldehyde dips below 0.25 or ricin dips below 0.39, increase paracetamol by 0.02
	if(formaldehyde < 0.25 || ricin < 0.39){
		paracetamol += 0.02
	}
	// - If warfarin dips below 0.71, reduce glucagon by 0.04
	if(warfarin < 0.71){
		glucagon -= 0.04;
	}
	// - When formaldehyde goes above 0.27 or snakeVenom dips below 0.7, increment glucagon by 0.01
	if(formaldehyde > 0.27 || snakeVenom < 0.7){
		glucagon += 0.01
	}
	// - When ricin goes above 0.5, decrement opioids by 0.04
	if(ricin > 0.5){
		opioids -= 0.04;
	}
	// - If snakeVenom dips below 0.68, increment opioids by 0.03
	if(snakeVenom < 0.68){
		opioids += 0.03;
	}
	// - If snakeVenom dips below 0.7 and warfarin dips below 0.5, decrement Calcium_Chloride by 0.02
	if(snakeVenom < 0.7 && warfarin < 0.5){
		Calcium_Chloride -= 0.02;
	}
	// - When formaldehyde dips below 0.29, try increasing Calcium_Chloride by 0.04
	if(formaldehyde < 0.29){
		Calcium_Chloride += 0.04
	}


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	warfarin = nextValue(graphs[0],warfarin);
	ricin = nextValue(graphs[1],ricin);
	formaldehyde = nextValue(graphs[2],formaldehyde);
	snakeVenom = nextValue(graphs[3],snakeVenom);


	paracetamol = constrain(paracetamol, 0, 1);
	glucagon = constrain(glucagon, 0, 1);
	opioids = constrain(opioids, 0, 1);
	Calcium_Chloride = constrain(Calcium_Chloride, 0, 1);


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
	text('warfarin: ' + nf(warfarin,1,2), 20,20);
	fill(colors[1]);
	text('ricin: ' + nf(ricin,1,2), 20,40);
	fill(colors[2]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,60);
	fill(colors[3]);
	text('snakeVenom: ' + nf(snakeVenom,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(paracetamol,50,'paracetamol');
	drawBar(glucagon,200,'glucagon');
	drawBar(opioids,350,'opioids');
	drawBar(Calcium_Chloride,500,'Calcium_Chloride');


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
