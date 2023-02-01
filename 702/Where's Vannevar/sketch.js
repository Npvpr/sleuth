/*

Officer: 8243477
CaseNum: 702-2-55557572-8243477

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a red car with a numberPlate of YMBLYE. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of chaseCarObject and the cars in
carObjects_list to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function DriveVehicle()
{
	/*
	This function should do the following: 
	 - increment chaseCarObject's kmsAmount property by its speedValue property 
	 - add a random amount between -0.08 and 0.08 to chaseCarObject's rumbleVal property
	 - use the constrain function to constrain chaseCarObject's rumbleVal property to values between 0.05 and 1.21
	 - call the CycleCar_motor function passing chaseCarObject as an argument
	*/
	chaseCarObject.kmsAmount += chaseCarObject.speedValue;
	chaseCarObject.rumbleVal += random(-0.08, 0.08);
	chaseCarObject.rumbleVal = constrain(chaseCarObject.rumbleVal, 0.05, 1.21);
	CycleCar_motor(chaseCarObject);
}


function ChangeLanes(carObj)
{
	/*
	This function should do the following: 
	 - move carObj from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_Coord_a and Lane_Coord_b to effect the change.
	 - finally you should return carObj at the end of the function.
	 hint: You will need to modify the posX property of carObj.
	*/
	if(carObj.posX == Lane_Coord_a){
		carObj.posX = Lane_Coord_b;
	}else{
		carObj.posX = Lane_Coord_a;
	}
	return carObj;

}


function VehicleIsInfront( target_car )
{
	/*
	This function should do the following: 
	 - determine if target_car is in the same lane and less than 200px behind any of the cars in carObjects_list.
	 - do this by traversing carObjects_list and comparing each car's kmsAmount property to that of target_car.
	 - use the numberPlate property of each car to ignore cars that match target_car.
	 - if you find a car that matches these requirements then return the index representing the car's position in carObjects_list. Otherwise return false.
	*/
	for(let i = 0; i < carObjects_list.length; i++){
		if(carObjects_list[i].numberPlate != target_car.numberPlate){
			// console.log(carObjects_list[i].kmsAmount);
			if((target_car.posX == carObjects_list[i].posX) && ((carObjects_list[i].kmsAmount - target_car.kmsAmount) < 200) && ((carObjects_list[i].kmsAmount - target_car.kmsAmount) >= 0)){
				return i;
			}
		}
	}
	return false;
}


function CarIsAtSide( vehicle )
{
	/*
	This function should do the following: 
	 - traverse carObjects_list and determine if any of the cars are parallel with vehicle.
	 - if a car is found to be parallel to vehicle then return that car object.
	 - cars are considered parallel if the absolute difference between their kmsAmount properties is less than 25 px and they have non-matching posX properties	*/
	for(let j = 0; j < carObjects_list.length; j++){
		if(carObjects_list[j].numberPlate != vehicle.numberPlate){
			if((vehicle.posX != carObjects_list[j].posX) && (abs(carObjects_list[j].kmsAmount - vehicle.kmsAmount) < 25)){
				return carObjects_list[j];
			}
		}
	}

}


function FindAssailant()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to chaseCarObject to see if they match the numberPlate property in the assailant description.
	 - it does this by calling CarIsAtSide.
	 - if a positive result is returned then the numberPlate property of the found car is then checked against the assailant description.
	 - if a match is found then the car in question is assigned to the global variable assailant.
	*/
	sideCar = CarIsAtSide(chaseCarObject);
	if(sideCar && sideCar.numberPlate == "YMBLYE"){
		assailant = sideCar;
	}
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var chaseCarObject;

var roadWidth;
var roadLeftEdge;
var Lane_Coord_a;
var Lane_Coord_b;
var carImages = {};
var assailant;

var carObjects_list = [
{ posX: 500, posY: 0, kmsAmount: -200, vehicleClassification: 'redCar', numberPlate: 'DZTWOE', speedValue: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmount: 200, vehicleClassification: 'greenCar', numberPlate: '26TXUE', speedValue: 2, exhaust: [  ]} , { posX: 500, posY: 0, kmsAmount: 600, vehicleClassification: 'redCar', numberPlate: 'WDGYGB', speedValue: 2, exhaust: [  ]} , { posX: 500, posY: 0, kmsAmount: 1000, vehicleClassification: 'whiteCar', numberPlate: '64EV38', speedValue: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmount: 1400, vehicleClassification: 'blueCar', numberPlate: 'BXPG7O', speedValue: 2, exhaust: [  ]} , { posX: 500, posY: 0, kmsAmount: 1800, vehicleClassification: 'greenCar', numberPlate: 'NQG2NT', speedValue: 2, exhaust: [  ]} , { posX: 500, posY: 0, kmsAmount: 2200, vehicleClassification: 'redCar', numberPlate: 'M2USL3', speedValue: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmount: 2600, vehicleClassification: 'blueCar', numberPlate: 'RTSXAV', speedValue: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmount: 3000, vehicleClassification: 'whiteCar', numberPlate: 'JBFUYL', speedValue: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmount: 3400, vehicleClassification: 'redCar', numberPlate: 'YMBLYE', speedValue: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmount: 3800, vehicleClassification: 'greenCar', numberPlate: 'RIXCHT', speedValue: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmount: 4200, vehicleClassification: 'greenCar', numberPlate: 'R6RA34', speedValue: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmount: 4600, vehicleClassification: 'greenCar', numberPlate: 'LTEL4N', speedValue: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmount: 5000, vehicleClassification: 'redCar', numberPlate: 'JN24XZ', speedValue: 2, exhaust: [  ]} , { posX: 500, posY: 0, kmsAmount: 5400, vehicleClassification: 'greenCar', numberPlate: 'TB8ALP', speedValue: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmount: 5800, vehicleClassification: 'blueCar', numberPlate: 'OPDCX3', speedValue: 2, exhaust: [  ]} , { posX: 500, posY: 0, kmsAmount: 6200, vehicleClassification: 'whiteCar', numberPlate: '4QHIET', speedValue: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmount: 6600, vehicleClassification: 'blueCar', numberPlate: 'JXUV7N', speedValue: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmount: 7000, vehicleClassification: 'greenCar', numberPlate: 'RXZKPW', speedValue: 2, exhaust: [  ]} , { posX: 500, posY: 0, kmsAmount: 7400, vehicleClassification: 'blueCar', numberPlate: 'HKVY1V', speedValue: 2, exhaust: [  ]} 
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
	Lane_Coord_a = 300;
	Lane_Coord_b = 500;

	chaseCarObject = 
	{
		posX: roadLeftEdge + roadWidth/4,
		posY: 550,
		kmsAmount: 0,
		speedValue: 3,
		rumbleVal: 0,
		vehicleClassification: 'detective',
		numberPlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	if(assailant)
	{
		fill(255);

		text("assailant found !", width/2, height/2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	DriveVehicle();
	var b2b = VehicleIsInfront( chaseCarObject );
	if(b2b)ChangeLanes(chaseCarObject);
	FindAssailant();


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < carObjects_list.length; i++)
	{
		carObjects_list[i].kmsAmount += carObjects_list[i].speedValue;
		carObjects_list[i].posY = chaseCarObject.posY - carObjects_list[i].kmsAmount + chaseCarObject.kmsAmount;
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
		// roadLeftEdge + roadWidth/2 , i * 100 + (chaseCarObject.kmsAmount%100),
		// roadLeftEdge + roadWidth/2 , i * 100 + 70 + (chaseCarObject.kmsAmount%100)
		// );
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(chaseCarObject);
	image
	(
		carImages["detective"],
		chaseCarObject.posX - carImages["detective"].width/2 + random(-chaseCarObject.rumbleVal, chaseCarObject.rumbleVal),
		chaseCarObject.posY + random(-chaseCarObject.rumbleVal, chaseCarObject.rumbleVal)
	);

	//draw all other cars

	for(var i = 0; i < carObjects_list.length; i ++)
	{
		if(carObjects_list[i].posY < height && carObjects_list[i].posY > -height/2)
		{
			image(
			carImages[carObjects_list[i].vehicleClassification],
			carObjects_list[i].posX - carImages[carObjects_list[i].vehicleClassification].width/2,
			carObjects_list[i].posY
			);
			CycleCar_motor(carObjects_list[i]);

			drawExhaust(carObjects_list[i]);
		}
	}

}

function CycleCar_motor(car)
{

	car.exhaust.push({size: 2, x: car.posX, y: car.posY + carImages[car.vehicleClassification].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.speedValue/3);
		if(car.vehicleClassification != "detective")car.exhaust[i].y += (chaseCarObject.speedValue - car.speedValue);
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
