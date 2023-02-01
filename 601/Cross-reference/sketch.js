/*
Officer: 8243477
CaseNum: 601-1-61236561-8243477

Case 601 - Cross Reference - stage 2

Fry is still on the loose. We think she’s resorted to stealing to get by.
Hopefully we can track her down by cross-referencing sightings and recent thefts in the area.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing DarkGoldenrod stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, DarkRed fill triangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- beginShape(), endShape(), vertex()

- triangle() NB. Draw each triangle with the point roughly at its center.

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var caseyFrySightings = {
	CoordinateX: [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555],
	CoordinateY: [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474],
};

//Recent crime records.

var robberyLogbook = [ 
  { Loc_X : 403, Loc_Y : 401},
  { Loc_X : 402, Loc_Y : 360},
  { Loc_X : 427, Loc_Y : 403},
  { Loc_X : 646, Loc_Y : 284},
  { Loc_X : 639, Loc_Y : 264},
  { Loc_X : 830, Loc_Y : 434},
  { Loc_X : 809, Loc_Y : 443},
  { Loc_X : 844, Loc_Y : 496},
  { Loc_X : 802, Loc_Y : 350},
  { Loc_X : 683, Loc_Y : 413},
  { Loc_X : 552, Loc_Y : 464},
  { Loc_X : 629, Loc_Y : 498},
  { Loc_X : 712, Loc_Y : 562},
  { Loc_X : 783, Loc_Y : 603},
  { Loc_X : 415, Loc_Y : 225},
  { Loc_X : 561, Loc_Y : 282},
  { Loc_X : 562, Loc_Y : 392},
  { Loc_X : 751, Loc_Y : 283},
  { Loc_X : 680, Loc_Y : 359},
  { Loc_X : 626, Loc_Y : 436},
  { Loc_X : 701, Loc_Y : 455},
  { Loc_X : 838, Loc_Y : 565},
  { Loc_X : 322, Loc_Y : 508},
  { Loc_X : 468, Loc_Y : 556},
  { Loc_X : 625, Loc_Y : 737} 
];


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
  beginShape();
  for(let i = 0; i < caseyFrySightings.CoordinateX.length; i++){
    vertex(caseyFrySightings.CoordinateX[i], caseyFrySightings.CoordinateY[i]);
  }
  endShape();

  noStroke();
  fill(139,0,0);
  for(let j = 0; j < robberyLogbook.length; j++){
		triangle(robberyLogbook[j].Loc_X, robberyLogbook[j].Loc_Y-5, robberyLogbook[j].Loc_X-5, robberyLogbook[j].Loc_Y+5,robberyLogbook[j].Loc_X+5, robberyLogbook[j].Loc_Y+5);
  }

}

//We are not using the draw function this time
