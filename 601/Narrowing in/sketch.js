/*
Officer: 8243477
CaseNum: 601-3-58219410-8243477

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, DarkGoldenrod stroke rectangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Navy stroke ellipses at each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings. If she was within less than 62 pixels of any of the crimes within no more than 1 days of their occurrence then the details should be pushed to the list of possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- if()
- <
- &&
- .push()
- dist()
- abs()
- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- ellipse()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var fry_record_Pt_X = [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68];
var fry_record_Pt_Y = [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461];
var fry_record_date = [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24];


//Recent crime records.

var crimescene_record_location_x = [438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817];
var crimescene_record_location_y = [420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474];
var crimescene_record_recordedDay = [11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18];
var crimescene_record_killed_details = ['BRAD SILVEIRA', 'MAJORIE JENI', 'LIANNE COURTWOOD', 'DRUSILLA WARMAN', 'LAKESHA SYMMES', 'DEEDEE PHINNEY', 'SUMMER CASIMERE', 'ERMELINDA OORIN', 'BRIDGET BROADVIEW', 'PIERRE DORCEY', 'JESSIA PORTOS', 'KITTY THAXTER', 'TAMICA MAUBERT', 'LAVERNE JACQUELIN', 'JESUS FORSLIN'];


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
	stroke(184,134,11);
	for(let i = 0; i < fry_record_Pt_X.length; i++){
		rect(fry_record_Pt_X[i]-5, fry_record_Pt_Y[i]-5, 10, 10)
		for(let j = 0; j < crimescene_record_location_x.length; j++){
			if((dist(fry_record_Pt_X[i], fry_record_Pt_Y[i], crimescene_record_location_x[j], crimescene_record_location_y[j]) < 62) && (abs(fry_record_date[i] - crimescene_record_recordedDay[j])<=1)){
				possibleMatches.push(
					{ suspect_x: fry_record_Pt_X[i], suspect_y: fry_record_Pt_Y[i], crime_x: crimescene_record_location_x[j], crime_y: crimescene_record_location_y[j], victimName: crimescene_record_killed_details[j] }
				)
			}
		}
	}

	stroke(0,0,128);
	for(let j = 0; j < crimescene_record_location_x.length; j++){
		ellipse(crimescene_record_location_x[j], crimescene_record_location_y[j], 10, 10)
	}

	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		// line(possibleMatches[i].crime_x, possibleMatches[i].crime_y, possibleMatches[i].suspect_x, possibleMatches[i].suspect_y);

		noStroke();
		fill(127);
		text(possibleMatches[i].victimName, possibleMatches[i].crime_x + 15, possibleMatches[i].crime_y + 15);
	}
	console.log(possibleMatches)
}

//We are not using the draw function this time
