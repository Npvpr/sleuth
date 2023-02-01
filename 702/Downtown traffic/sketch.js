/*

Officer: 8243477
CaseNum: 702-1-41511130-8243477

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of DetectiveCar and the cars in
vehiclesList to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function DriveCar()
{
	/*
	This function should do the following: 
	 - increment DetectiveCar's DistanceDriven property by its GasVal property 
	 - add a random amount between -0.1 and 0.1 to DetectiveCar's EngineVibrateVal property
	 - use the constrain function to constrain DetectiveCar's EngineVibrateVal property to values between 0.01 and 0.86
	 - call the DriveEngine function passing DetectiveCar as an argument
	*/
	DetectiveCar.DistanceDriven += DetectiveCar.GasVal;
	DetectiveCar.EngineVibrateVal += random(-0.1, 0.1);
	DetectiveCar.EngineVibrateVal = constrain(DetectiveCar.EngineVibrateVal, 0.01, 0.86);
	DriveEngine(DetectiveCar);
}


function SwapLanes(targetCar)
{
	/*
	This function should do the following: 
	 - move targetCar from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lanePositionA and lanePositionB to effect the change.
	 - finally you should return targetCar at the end of the function.
	 hint: You will need to modify the XCoordinate property of targetCar.
	*/
	if(targetCar.XCoordinate == lanePositionA){
		targetCar.XCoordinate = lanePositionB;
	}else{
		targetCar.XCoordinate = lanePositionA;
	}
	return targetCar;
}


function CheckVehicleIsAhead( target_carA, target_carB )
{
	/*
	This function should do the following: 
	 - determine if target_carA is in the same lane and less than 200px behind target_carB.
	 - do this by comparing the two cars' DistanceDriven properties
	 - if these requirements are met then return the LicencePlate property for target_carB. Otherwise return false.
	*/
	if((target_carA.XCoordinate == target_carB.XCoordinate) && ((target_carB.DistanceDriven - target_carA.DistanceDriven) < 200) && ((target_carB.DistanceDriven - target_carA.DistanceDriven) >= 0)){
		return target_carB.LicencePlate;	
	}else{
		return false;
	}
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var DetectiveCar;

var roadWidth;
var roadLeftEdge;
var lanePositionA;
var lanePositionB;
var carImages = {};

var vehiclesList = [
{ XCoordinate: 300, YCoordinate: 0, DistanceDriven: -200, CarModel: 'whiteCar', LicencePlate: 'W69KT4', GasVal: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, DistanceDriven: 200, CarModel: 'blueCar', LicencePlate: 'L6ZQWQ', GasVal: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, DistanceDriven: 600, CarModel: 'greenCar', LicencePlate: '0YZ3K7', GasVal: 2, exhaust: [  ]} , { XCoordinate: 300, YCoordinate: 0, DistanceDriven: 1000, CarModel: 'blueCar', LicencePlate: 'Q2AJGL', GasVal: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, DistanceDriven: 1400, CarModel: 'blueCar', LicencePlate: 'KH7V4B', GasVal: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, DistanceDriven: 1800, CarModel: 'whiteCar', LicencePlate: 'ESRRAX', GasVal: 2, exhaust: [  ]} , { XCoordinate: 300, YCoordinate: 0, DistanceDriven: 2200, CarModel: 'greenCar', LicencePlate: 'A7N0OC', GasVal: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, DistanceDriven: 2600, CarModel: 'blueCar', LicencePlate: 'CBBI9Y', GasVal: 2, exhaust: [  ]} , { XCoordinate: 300, YCoordinate: 0, DistanceDriven: 3000, CarModel: 'greenCar', LicencePlate: 'E2IILC', GasVal: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, DistanceDriven: 3400, CarModel: 'blueCar', LicencePlate: 'W72SJR', GasVal: 2, exhaust: [  ]} , { XCoordinate: 300, YCoordinate: 0, DistanceDriven: 3800, CarModel: 'whiteCar', LicencePlate: 'Z9POBT', GasVal: 2, exhaust: [  ]} , { XCoordinate: 300, YCoordinate: 0, DistanceDriven: 4200, CarModel: 'blueCar', LicencePlate: 'KN3RY9', GasVal: 2, exhaust: [  ]} , { XCoordinate: 300, YCoordinate: 0, DistanceDriven: 4600, CarModel: 'blueCar', LicencePlate: 'RG5OSN', GasVal: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, DistanceDriven: 5000, CarModel: 'whiteCar', LicencePlate: '1WD5ZS', GasVal: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, DistanceDriven: 5400, CarModel: 'redCar', LicencePlate: '6YMYAG', GasVal: 2, exhaust: [  ]} , { XCoordinate: 300, YCoordinate: 0, DistanceDriven: 5800, CarModel: 'blueCar', LicencePlate: 'EBPVUQ', GasVal: 2, exhaust: [  ]} , { XCoordinate: 300, YCoordinate: 0, DistanceDriven: 6200, CarModel: 'greenCar', LicencePlate: '09BCYB', GasVal: 2, exhaust: [  ]} , { XCoordinate: 300, YCoordinate: 0, DistanceDriven: 6600, CarModel: 'blueCar', LicencePlate: 'T8FB60', GasVal: 2, exhaust: [  ]} , { XCoordinate: 300, YCoordinate: 0, DistanceDriven: 7000, CarModel: 'redCar', LicencePlate: '9UT29X', GasVal: 2, exhaust: [  ]} , { XCoordinate: 300, YCoordinate: 0, DistanceDriven: 7400, CarModel: 'whiteCar', LicencePlate: '11PTRN', GasVal: 2, exhaust: [  ]} 
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

	roadWidth = 400;
	roadLeftEdge = 200;
	lanePositionA = 300;
	lanePositionB = 500;

	DetectiveCar = 
	{
		XCoordinate: roadLeftEdge + roadWidth/4,
		YCoordinate: 550,
		DistanceDriven: 0,
		GasVal: 3,
		EngineVibrateVal: 0,
		CarModel: 'detective',
		LicencePlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);
	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	DriveCar();
	for(var i = 0; i < vehiclesList.length; i++)
	{
var b2b = CheckVehicleIsAhead(DetectiveCar, vehiclesList[i]);
		if(b2b)SwapLanes(DetectiveCar);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < vehiclesList.length; i++)
	{
		vehiclesList[i].DistanceDriven += vehiclesList[i].GasVal;
		vehiclesList[i].YCoordinate = DetectiveCar.YCoordinate - vehiclesList[i].DistanceDriven + DetectiveCar.DistanceDriven;
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
		// line(
		// roadLeftEdge + roadWidth/2 , i * 100 + (DetectiveCar.DistanceDriven%100),
		// roadLeftEdge + roadWidth/2 , i * 100 + 70 + (DetectiveCar.DistanceDriven%100)
		// );
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(DetectiveCar);
	image
	(
		carImages["detective"],
		DetectiveCar.XCoordinate - carImages["detective"].width/2 + random(-DetectiveCar.EngineVibrateVal, DetectiveCar.EngineVibrateVal),
		DetectiveCar.YCoordinate + random(-DetectiveCar.EngineVibrateVal, DetectiveCar.EngineVibrateVal)
	);

	//draw all other cars

	for(var i = 0; i < vehiclesList.length; i ++)
	{
		if(vehiclesList[i].YCoordinate < height && vehiclesList[i].YCoordinate > -height/2)
		{
			image(
			carImages[vehiclesList[i].CarModel],
			vehiclesList[i].XCoordinate - carImages[vehiclesList[i].CarModel].width/2,
			vehiclesList[i].YCoordinate
			);
			DriveEngine(vehiclesList[i]);

			drawExhaust(vehiclesList[i]);
		}
	}

}

function DriveEngine(car)
{

	car.exhaust.push({size: 2, x: car.XCoordinate, y: car.YCoordinate + carImages[car.CarModel].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.GasVal/3);
		if(car.CarModel != "detective")car.exhaust[i].y += (DetectiveCar.GasVal - car.GasVal);
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
