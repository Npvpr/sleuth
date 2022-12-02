/*

Officer: 8243477
CaseNum: 401-3-95247890-8243477

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When amanitaMushrooms dips below 0.29, sarin goes above 0.55, and also Spider_Venom goes above 0.56, decrement calciumGluconate by 0.01
	- If either ricin goes above 0.25, hemlock dips below 0.42, or perhaps mercury dips below 0.7, raise calciumGluconate by 0.05
	- If amanitaMushrooms dips below 0.34 or mercury dips below 0.49, or on the other hand, botulinium dips below 0.75 and ricin goes above 0.51, reduce glucagon by 0.03
	- If lead dips below 0.33, or on the other hand, hemlock dips below 0.74 and sarin dips below 0.7, raise glucagon by 0.03
	- When ricin goes above 0.7, or on the other hand, botulinium dips below 0.32 and amanitaMushrooms goes above 0.39, try decreasing antivenom by 0.02
	- If mercury goes above 0.6 or Spider_Venom goes above 0.44, whilst at the same time, lead goes above 0.71, increase antivenom by 0.02
	- When either hemlock goes above 0.72, ricin dips below 0.54, or perhaps lead goes above 0.54, decrease protamine by 0.03
	- If amanitaMushrooms dips below 0.59 and Spider_Venom dips below 0.27, whilst at the same time, botulinium dips below 0.68 or sarin dips below 0.35, try increasing protamine by 0.02
	- When hemlock goes above 0.71, ricin dips below 0.45, and also Spider_Venom dips below 0.6, reduce insulin by 0.01
	- If lead goes above 0.58, botulinium dips below 0.67, amanitaMushrooms dips below 0.66, and also mercury dips below 0.71, raise insulin by 0.04


Your conditional statements should consider the following poisons:

	- Spider_Venom
	- amanitaMushrooms
	- botulinium
	- sarin
	- mercury
	- lead
	- ricin
	- hemlock


Your conditional statements should modify the following antidotes:

	- calciumGluconate
	- glucagon
	- antivenom
	- protamine
	- insulin


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
var Spider_Venom;
var amanitaMushrooms;
var botulinium;
var sarin;
var mercury;
var lead;
var ricin;
var hemlock;


//Declare the antidote variables
var calciumGluconate;
var glucagon;
var antivenom;
var protamine;
var insulin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	Spider_Venom = 0.5;
	amanitaMushrooms = 0.5;
	botulinium = 0.5;
	sarin = 0.5;
	mercury = 0.5;
	lead = 0.5;
	ricin = 0.5;
	hemlock = 0.5;
	calciumGluconate = 0.5;
	glucagon = 0.5;
	antivenom = 0.5;
	protamine = 0.5;
	insulin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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
	// - When amanitaMushrooms dips below 0.29, sarin goes above 0.55, and also Spider_Venom goes above 0.56, decrement calciumGluconate by 0.01
	if(amanitaMushrooms < 0.29 && sarin > 0.55 && Spider_Venom > 0.56){
		calciumGluconate -= 0.01
	}
	// - If either ricin goes above 0.25, hemlock dips below 0.42, or perhaps mercury dips below 0.7, raise calciumGluconate by 0.05
	if(ricin > 0.25 || hemlock < 0.42 || mercury < 0.7){
		calciumGluconate += 0.05
	}
	// - If amanitaMushrooms dips below 0.34 or mercury dips below 0.49, or on the other hand, botulinium dips below 0.75 and ricin goes above 0.51, reduce glucagon by 0.03
	if((amanitaMushrooms < 0.34 || mercury < 0.49) || (botulinium < 0.75 && ricin > 0.51)){
		glucagon -= 0.03
	}
	// - If lead dips below 0.33, or on the other hand, hemlock dips below 0.74 and sarin dips below 0.7, raise glucagon by 0.03
	if(lead < 0.33 || (hemlock < 0.74 && sarin < 0.7)){
		glucagon += 0.03
	}
	// - When ricin goes above 0.7, or on the other hand, botulinium dips below 0.32 and amanitaMushrooms goes above 0.39, try decreasing antivenom by 0.02
	if(ricin > 0.7 || (botulinium < 0.32 && amanitaMushrooms > 0.39)){
		antivenom -= 0.02
	}
	// - If mercury goes above 0.6 or Spider_Venom goes above 0.44, whilst at the same time, lead goes above 0.71, increase antivenom by 0.02
	if((mercury > 0.6 || Spider_Venom > 0.44) && lead > 0.71){
		antivenom += 0.02
	}
	// - When either hemlock goes above 0.72, ricin dips below 0.54, or perhaps lead goes above 0.54, decrease protamine by 0.03
	if(hemlock > 0.72 || ricin < 0.54 || lead > 0.54){
		protamine -= 0.03
	}
	// - If amanitaMushrooms dips below 0.59 and Spider_Venom dips below 0.27, whilst at the same time, botulinium dips below 0.68 or sarin dips below 0.35, try increasing protamine by 0.02
	if((amanitaMushrooms < 0.59 && Spider_Venom < 0.27) && (botulinium < 0.68 || sarin < 0.35)){
		protamine += 0.02
	}
	// - When hemlock goes above 0.71, ricin dips below 0.45, and also Spider_Venom dips below 0.6, reduce insulin by 0.01
	if((hemlock > 0.71 && ricin < 0.45 && Spider_Venom < 0.6)){
		insulin -= 0.01
	}
	// - If lead goes above 0.58, botulinium dips below 0.67, amanitaMushrooms dips below 0.66, and also mercury dips below 0.71, raise insulin by 0.04
	if((lead > 0.58 && botulinium < 0.67 && amanitaMushrooms < 0.66 && mercury < 0.71)){
		insulin += 0.04
	}


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	Spider_Venom = nextValue(graphs[0],Spider_Venom);
	amanitaMushrooms = nextValue(graphs[1],amanitaMushrooms);
	botulinium = nextValue(graphs[2],botulinium);
	sarin = nextValue(graphs[3],sarin);
	mercury = nextValue(graphs[4],mercury);
	lead = nextValue(graphs[5],lead);
	ricin = nextValue(graphs[6],ricin);
	hemlock = nextValue(graphs[7],hemlock);


	calciumGluconate = constrain(calciumGluconate, 0, 1);
	glucagon = constrain(glucagon, 0, 1);
	antivenom = constrain(antivenom, 0, 1);
	protamine = constrain(protamine, 0, 1);
	insulin = constrain(insulin, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('Spider_Venom: ' + nf(Spider_Venom,1,2), 20,20);
	fill(colors[1]);
	text('amanitaMushrooms: ' + nf(amanitaMushrooms,1,2), 20,40);
	fill(colors[2]);
	text('botulinium: ' + nf(botulinium,1,2), 20,60);
	fill(colors[3]);
	text('sarin: ' + nf(sarin,1,2), 20,80);
	fill(colors[4]);
	text('mercury: ' + nf(mercury,1,2), 20,100);
	fill(colors[5]);
	text('lead: ' + nf(lead,1,2), 20,120);
	fill(colors[6]);
	text('ricin: ' + nf(ricin,1,2), 20,140);
	fill(colors[7]);
	text('hemlock: ' + nf(hemlock,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(calciumGluconate,50,'calciumGluconate');
	drawBar(glucagon,200,'glucagon');
	drawBar(antivenom,350,'antivenom');
	drawBar(protamine,500,'protamine');
	drawBar(insulin,650,'insulin');


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
