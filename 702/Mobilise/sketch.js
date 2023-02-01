/*

Officer: 8243477
CaseNum: 702-0-30830744-8243477

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of sleuthPI_vehicleObject to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function driveVehicle()
{
	/*
	This function should do the following: 
	 - increment sleuthPI_vehicleObject's miles_amt property by its accel_val property 
	 - add a random amount between -0.09 and 0.09 to sleuthPI_vehicleObject's engineRumble_value property
	 - use the constrain function to constrain sleuthPI_vehicleObject's engineRumble_value property to values between 0.06 and 1.06
	 - call the turnMotor function passing sleuthPI_vehicleObject as an argument
	*/
	sleuthPI_vehicleObject.miles_amt += sleuthPI_vehicleObject.accel_val;
	sleuthPI_vehicleObject.engineRumble_value += random(-0.09, 0.09);
	sleuthPI_vehicleObject.engineRumble_value = constrain(sleuthPI_vehicleObject.engineRumble_value, 0.06, 1.06);
	// if(sleuthPI_vehicleObject.engineRumble_value < 0.06 || sleuthPI_vehicleObject.engineRumble_value > 1.06){
	// 	console.log(sleuthPI_vehicleObject.engineRumble_value);
	// }
	turnMotor(sleuthPI_vehicleObject);
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthPI_vehicleObject;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	sleuthPI_vehicleObject = 
	{
		coord_x: roadLeftEdge + roadWidth/4,
		coord_y: 300,
		miles_amt: 0,
		accel_val: 3,
		engineRumble_value: 0,
		car_type: 'detective',
		number_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	driveVehicle();


	drawRoad();
	drawCars();
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
		// roadLeftEdge + roadWidth/2 , i * 100 + (sleuthPI_vehicleObject.miles_amt%100),
		// roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuthPI_vehicleObject.miles_amt%100)
		// );
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(sleuthPI_vehicleObject);
	image
	(
		carImages["detective"],
		sleuthPI_vehicleObject.coord_x - carImages["detective"].width/2 + random(-sleuthPI_vehicleObject.engineRumble_value, sleuthPI_vehicleObject.engineRumble_value),
		sleuthPI_vehicleObject.coord_y + random(-sleuthPI_vehicleObject.engineRumble_value, sleuthPI_vehicleObject.engineRumble_value)
	);

}

function turnMotor(car)
{

	car.exhaust.push({size: 2, x: car.coord_x, y: car.coord_y + carImages[car.car_type].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.accel_val/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
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
