/*

Officer: 8243477
CaseNum: 702-3-89917445-8243477

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a green car with a licence_plate of OQWOAZ.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of detective_carObject and the cars in
Traffic_Data to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function move_vehicle()
{
	/*
	This function should do the following: 
	 - increment detective_carObject's dist_driven property by its gas_amt property 
	 - add a random amount between -0.01 and 0.01 to detective_carObject's engineRumble_val property
	 - use the constrain function to constrain detective_carObject's engineRumble_val property to values between 0.09 and 1.19
	 - call the cycle_carEngine function passing detective_carObject as an argument
	*/
	detective_carObject.dist_driven += detective_carObject.gas_amt;
	detective_carObject.engineRumble_val += random(-0.01, 0.01);
	detective_carObject.engineRumble_val = constrain(detective_carObject.engineRumble_val, 0.09, 1.19);
	cycle_carEngine(detective_carObject);
}


function move_lanes(target_car)
{
	/*
	This function should do the following: 
	 - move target_car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LanePosition_A and LanePosition_B to effect the change.
	 - finally you should return target_car at the end of the function.
	 hint: You will need to modify the x_coord property of target_car.
	*/
	if(target_car.x_coord == LanePosition_A){
		target_car.x_coord = LanePosition_B;
	}else{
		target_car.x_coord = LanePosition_A;
	}
	return target_car;
}


function searchCar_isAhead( TargetCar_A, TargetCar_B )
{
	/*
	This function should do the following: 
	 - determine if TargetCar_A is in the same lane and less than 200px behind TargetCar_B.
	 - do this by comparing the two cars' dist_driven properties
	 - if these requirements are met then return the licence_plate property for TargetCar_B. Otherwise return false.
	*/
	if((TargetCar_A.x_coord == TargetCar_B.x_coord) && ((TargetCar_B.dist_driven - TargetCar_A.dist_driven) < 200) && ((TargetCar_B.dist_driven - TargetCar_A.dist_driven) >= 0)){
		return TargetCar_B.licence_plate;	
	}else{
		return false;
	}
}


function car_parallel()
{
	/*
	This function should do the following: 
	 - traverse Traffic_Data and determine if any of the cars are parallel with detective_carObject.
	 - if a car is found to be parallel to detective_carObject then return that car object.
	 - cars are considered parallel if the absolute difference between their dist_driven properties is less than 25 px and they have non-matching x_coord properties	*/
	for(let j = 0; j < Traffic_Data.length; j++){
		if(Traffic_Data[j].licence_plate != detective_carObject.licence_plate){
			if((detective_carObject.x_coord != Traffic_Data[j].x_coord) && (abs(Traffic_Data[j].dist_driven - detective_carObject.dist_driven) < 25)){
				return Traffic_Data[j];
			}
		}
	}

}


function spot_suspect()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to detective_carObject to see if they match the licence_plate property in the suspect description.
	 - it does this by calling car_parallel.
	 - if a positive result is returned then the licence_plate property of the found car is then checked against the suspect description.
	 - if a match is found then the object of the car in question is returned.
	 - otherwise return false.
	*/
	sideCar = car_parallel();
	if(sideCar && sideCar.licence_plate == "OQWOAZ"){
		return sideCar;
	}
	return false;
}


function tail_suspect()
{
	/*
	This function should do the following: 
	 - only operate if the pursuing_suspect property of detective_carObject is true.
	 - scale the gas_amt property of detective_carObject by a factor of 1.001.
	 - use the min function to make sure that detective_carObject's gas_amt property does not exceed 6.
	 - it should traverse Traffic_Data calling searchCar_isAhead for each car to detect any cars in front of detective_carObject.
	 - if a positive result is returned it should check to see if the licence_plate property of that car matches that of suspect.
	 - for a match, book_suspect should be called, otherwise call move_lanes.
	*/
	if(detective_carObject.pursuing_suspect){
		detective_carObject.gas_amt = detective_carObject.gas_amt * 1.001;
		detective_carObject.gas_amt = min(detective_carObject.gas_amt, 6)
		for(let i = 0; i < Traffic_Data.length; i++){
			let frontCarLicense = searchCar_isAhead(detective_carObject, Traffic_Data[i]);
			if(frontCarLicense){
				if(frontCarLicense == "OQWOAZ"){
					book_suspect(i);
				}else{
					move_lanes(detective_carObject);
				}
			}
		}
	}
}


function book_suspect(targetCar)
{
	/*
	This function should do the following: 
	 - set the detained property of the car at the index of targetCar to true.
	 - set the arresting_suspect property of detective_carObject to true.
	 - set the gas_amt properties of both vehicles to zero.
	*/
	Traffic_Data[targetCar].detained = true;
	detective_carObject.arresting_suspect = true;
	detective_carObject.gas_amt = 0;
	Traffic_Data[targetCar].gas_amt = 0;
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var detective_carObject;

var roadWidth;
var roadLeftEdge;
var LanePosition_A;
var LanePosition_B;
var carImages = {};
var suspect;

var Traffic_Data = [
{ x_coord: 500, y_coord: 0, dist_driven: -200, vehicle_category: 'blueCar', licence_plate: '2QO2C9', gas_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_driven: 200, vehicle_category: 'blueCar', licence_plate: 'QIU6VA', gas_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_driven: 600, vehicle_category: 'redCar', licence_plate: 'NWW36U', gas_amt: 2, exhaust: [  ]} , { x_coord: 300, y_coord: 0, dist_driven: 1000, vehicle_category: 'redCar', licence_plate: '5O60SY', gas_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_driven: 1400, vehicle_category: 'greenCar', licence_plate: '8SXAAP', gas_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_driven: 1800, vehicle_category: 'greenCar', licence_plate: 'NUFSW1', gas_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_driven: 2200, vehicle_category: 'redCar', licence_plate: 'D1UN88', gas_amt: 2, exhaust: [  ]} , { x_coord: 300, y_coord: 0, dist_driven: 2600, vehicle_category: 'blueCar', licence_plate: 'Z0XJDV', gas_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_driven: 3000, vehicle_category: 'greenCar', licence_plate: 'TRPKSF', gas_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_driven: 3400, vehicle_category: 'redCar', licence_plate: 'Y4292H', gas_amt: 2, exhaust: [  ]} , { x_coord: 300, y_coord: 0, dist_driven: 3800, vehicle_category: 'greenCar', licence_plate: 'OQWOAZ', gas_amt: 2, exhaust: [  ]} , { x_coord: 300, y_coord: 0, dist_driven: 4200, vehicle_category: 'greenCar', licence_plate: 'MHXTP9', gas_amt: 2, exhaust: [  ]} , { x_coord: 300, y_coord: 0, dist_driven: 4600, vehicle_category: 'whiteCar', licence_plate: '40ADQ7', gas_amt: 2, exhaust: [  ]} , { x_coord: 300, y_coord: 0, dist_driven: 5000, vehicle_category: 'whiteCar', licence_plate: 'CXDSPM', gas_amt: 2, exhaust: [  ]} , { x_coord: 300, y_coord: 0, dist_driven: 5400, vehicle_category: 'blueCar', licence_plate: '5UF9S3', gas_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_driven: 5800, vehicle_category: 'whiteCar', licence_plate: 'TWS59K', gas_amt: 2, exhaust: [  ]} , { x_coord: 300, y_coord: 0, dist_driven: 6200, vehicle_category: 'greenCar', licence_plate: 'WZO360', gas_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_driven: 6600, vehicle_category: 'blueCar', licence_plate: 'XRPMUC', gas_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_driven: 7000, vehicle_category: 'greenCar', licence_plate: 'AMMUGF', gas_amt: 2, exhaust: [  ]} , { x_coord: 300, y_coord: 0, dist_driven: 7400, vehicle_category: 'whiteCar', licence_plate: 'Y5D4BX', gas_amt: 2, exhaust: [  ]} 
];



function preload()
{

	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];

	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	LanePosition_A = 300;
	LanePosition_B = 500;

	detective_carObject = 
	{
		x_coord: roadLeftEdge + roadWidth/4,
		y_coord: 550,
		dist_driven: 0,
		gas_amt: 3,
		engineRumble_val: 0,
		vehicle_category: 'detective',
		licence_plate: '5L3UTH',
		arresting_suspect: false,
		pursuing_suspect: false,
		exhaust: []
	}


}



function draw()
{
	background(0);

	drawRoad();
	drawCars();

	if(suspect)
	{
		if(suspect.detained)
		{
			fill(255);

			text("suspect detained!", width/2, height/2);
		}

	}


	////////////////////// HANDLE DETECTIVE /////////////////////////

	if(!detective_carObject.pursuing_suspect&& !detective_carObject.arresting_suspect)
	{
		move_vehicle();
		for(var i = 0; i < Traffic_Data.length; i++)
		{
var b2b = searchCar_isAhead(detective_carObject, Traffic_Data[i]);
			if(b2b)move_lanes(detective_carObject);
		}
		var a = spot_suspect();
		if(a != false)suspect = a;
		if(suspect)detective_carObject.pursuing_suspect = true;
	}
	else if(!detective_carObject.arresting_suspect)
	{
		tail_suspect();
		move_vehicle();
	}


	////////////////////// HANDLE ASSAILANT /////////////////////////

	if(suspect)
	{
		if(!suspect.detained)
		{
			suspect.gas_amt = 5;
			for(var i = 0; i < Traffic_Data.length; i++)
			{
				var b2b = searchCar_isAhead(suspect, Traffic_Data[i]);
				if(b2b)
				{
					if(b2b.licence_plate != suspect.licence_plate)
					{
						move_lanes(suspect);
					}
				}
			}
		}
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < Traffic_Data.length; i++)
	{
		Traffic_Data[i].dist_driven += Traffic_Data[i].gas_amt;
		Traffic_Data[i].y_coord = detective_carObject.y_coord - Traffic_Data[i].dist_driven + detective_carObject.dist_driven;

		if(suspect)
		{
			if(suspect.detained)
			{
				if(Traffic_Data[i].x_coord==detective_carObject.x_coord)
				{
					if(Traffic_Data[i].dist_driven<detective_carObject.dist_driven)
					{
						if(Traffic_Data[i].dist_driven-detective_carObject.dist_driven < 200)
						{
							move_lanes(Traffic_Data[i]);
						}
					}
				}
			}
		}

	}

}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (detective_carObject.dist_driven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (detective_carObject.dist_driven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	drawExhaust(detective_carObject);
	image
	(
		carImages["detective"],
		detective_carObject.x_coord - carImages["detective"].width/2 + random(-detective_carObject.engineRumble_val, detective_carObject.engineRumble_val),
		detective_carObject.y_coord + random(-detective_carObject.engineRumble_val, detective_carObject.engineRumble_val)
	);

	//draw all other cars

	for(var i = 0; i < Traffic_Data.length; i ++)
	{
		if(Traffic_Data[i].y_coord < height && Traffic_Data[i].y_coord > -height/2)
		{
			image(
			carImages[Traffic_Data[i].vehicle_category],
			Traffic_Data[i].x_coord - carImages[Traffic_Data[i].vehicle_category].width/2,
			Traffic_Data[i].y_coord
			);
			cycle_carEngine(Traffic_Data[i]);

			drawExhaust(Traffic_Data[i]);
		}
	}

}

function cycle_carEngine(car)
{

	car.exhaust.push({size: 2, x: car.x_coord, y: car.y_coord + carImages[car.vehicle_category].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gas_amt/3);
		if(car.vehicle_category != "detective")car.exhaust[i].y += (detective_carObject.gas_amt - car.gas_amt);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
