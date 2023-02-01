/*
Officer: 8243477
CaseNum: 601-2-61784956-8243477

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing SlateBlue stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, OliveDrab stroke rectangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 56 pixels of any of the crimes then the details should be pushed to possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn. Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- <
- .push()
- beginShape(), endShape(), vertex()

- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var absconderSightings_Coord_X = [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555];
var absconderSightings_Coord_Y = [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474];


//Recent crime records.

var murderLogbook_PositionX = [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456];
var murderLogbook_PositionY = [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770];
var murderLogbook_VictimDetails = ['LESLEY MONKSFORD', 'NICOLE ASHELY', 'JESSIA PORTOS', 'KITTY THAXTER', 'BRAD SILVEIRA', 'TAMICA MAUBERT', 'SUMMER CASIMERE', 'JAUNITA JOYER', 'TU DAVISWOOD', 'LAKESHA SYMMES', 'LOUISE ZETLAND', 'NELSON TINTLE', 'MAJORIE JENI', 'LARRAINE PEGORD'];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
	createCanvas(countyMap.width, countyMap.height);
	noFill();
	noStroke();
	image(countyMap, 0,0);

	//add your code below here
	stroke(106,90,205);
	beginShape();
	for(let i = 0; i < absconderSightings_Coord_X.length; i++){
		vertex(absconderSightings_Coord_X[i], absconderSightings_Coord_Y[i]);
		for(let j = 0; j < murderLogbook_PositionX.length; j++){
			if(dist(absconderSightings_Coord_X[i], absconderSightings_Coord_Y[i], murderLogbook_PositionX[j], murderLogbook_PositionY[j]) < 56){
				possibleMatches.push(
					{ suspect_x: absconderSightings_Coord_X[i], suspect_y: absconderSightings_Coord_Y[i], crime_x: murderLogbook_PositionX[j], crime_y: murderLogbook_PositionY[j], victimName: murderLogbook_VictimDetails[j] }
				)
			}
		}
	}
	endShape();

	stroke(107,142,35);
	for(let j = 0; j < murderLogbook_PositionX.length; j++){
		rect(murderLogbook_PositionX[j]-5, murderLogbook_PositionY[j]-5, 10, 10)
	}


	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime_x, possibleMatches[i].crime_y, possibleMatches[i].suspect_x, possibleMatches[i].suspect_y);

		noStroke();
		fill(127);
		text(possibleMatches[i].victimName, possibleMatches[i].crime_x + 15, possibleMatches[i].crime_y + 15);
	}
}

//We are not using the draw function this time
