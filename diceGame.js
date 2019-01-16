let sides = [3, 6, 7, 8, 4, 12]; 
let results = [];
let rolls = 0; 
let opponentHealthValues = [20, 25, 30, 35, 40];  
let healthValue = makeOpponentHealth();

function tellOpponentHealth(){
	console.log("Opponent's health is " + healthValue);
}

function makeOpponentHealth() {
let health = [Math.floor(Math.random() * opponentHealthValues.length)];
let hitPoints = opponentHealthValues[health];
	return hitPoints;
	}

//not called
function countRolls() {
	rolls = rolls + 1; 
}

function rollDie(sides){
	let result = Math.floor((Math.random() * sides) + 1);
	return result;
}

function getResults(){
	for (let i = 0; i < sides.length; i++) {
		let rollResult = rollDie(sides[i]);
		results.push(rollResult);
		console.log(results);
	}
	return;
}


function turnOne(){
		if (results[0] === 1){
		console.log("You sent out Eevee, the Evolution Pokemon!");
		}
		else if (results[0] === 2){
		console.log("You sent out Pikachu, the Electric Mouse Pokemon!");
		}
		else if (results[0] === 3){
		console.log("You sent out Charmander, the Fire Lizard Pokemon!");
	}
	
		}

function turnTwo() {
	if (results[1] <= 2){
		console.log("Your opponent sent out Caterpie, a bug type Pokemon!");
	}
	else if (results[1] === 3 || results[1] === 4){
		console.log("Your opponent sent out Pidgey, a flying type Pokemon!");
	}
	else if (results[1] >= 5){
		console.log("Your opponent sent out Nidoran, a poison type Pokemon!");
	}
	
}

	
function turnThree(){
	switch (results[2]){
		case 1: 
			console.log("This battle takes place on a Grassland terrain");
			break;
		case 2: 
			console.log("This battle takes place in Viridian Forest");
			break;
		case 3: 
			console.log("This battle takes place on a Mountainside");
			break;
		case 4: 
			console.log("This battle takes place in Mt. Moon!");
			break;
		case 5: 
			console.log("This battle takes place on the SS Anne cruise ship!");
			break;
		case 6: 
			console.log("This battle takes place at the Fighting Dojo in Saffron City!");
			break;
		case 7: 
			console.log("This battle takes place in Prof. Oak's lab!");
			break;
	}
}

function turnFour(){
	switch (results[3]){
		case 1: 
			console.log("You are fighting for the Boulder Badge from Pewter City");
			break;
		case 2: 
			console.log("You are fighting for the Cascade Badge from Cerulean City");
			break;
		case 3: 
			console.log("You are fighting for the Thunder Badge from Vermillion City");
			break;
		case 4: 
			console.log("You are fighting for the Rainbow Badge from Celedon City");
			break;
		case 5: 
			console.log("You are fighting for the Soul Badge from Fuschia City");
			break;
		case 6: 
			console.log("You are fighting for the Marsh Badge from Saffron City");
			break;
		case 7: 
			console.log("Your are fighting for the Volcano Badge from Cinnabar Island");
			break;
		case 8: 
			console.log("Your are fighting for the Earth Badge from Viridian City");
			break;
	}
	
}
//During turnFive, have each outcome subtract value from healthValue until healthValue = 0, then move on to last turn
//re-roll turn five until healthValue = 0
/*function turnFive(){
	switch (results[4]){
		case 1 && healthValue > 0: console.log("You used Tackle"); healthValue - 2;
		break;
		case 2 && healthValue > 0: console.log("You used Headbutt!"); healthValue - 6;
		break;
		case 3 && healthValue > 0: console.log("You used Dig!"); healthValue - 5;
		break;
		case 4 && healthValue > 0: console.log("You used Take Down!"); healthValue - 10;
		break;
	}	
}  */
//potential turnFive with healthValue variable. When healthValue === 0, begin turnSix
/* 
While healthValue > 0, and
if the first result of this roll = 1: Used tackle, subtract from healthValue, create new value for this index
*/
function turnFive(){
	//let newAttack = chooseNewAttack();
	//let tackle = usedTackle();
	//let headbutt = usedHeadbutt();
	//let dig = usedDig();
	//let takeDown = usedTakeDown();
	while (healthValue > 0){
		if (results[4] === 1) {
			console.log("You used Tackle! Opponent lost 2 health");
			healthValue = healthValue - 2;	
			chooseNewAttack();
		}

		if (results[4] === 2) {
			console.log("You used Headbutt! Opponent lost 6 health");
			healthValue = healthValue - 6;
			chooseNewAttack();
		}
		if (results[4] === 3) {
			console.log("You used Dig! Opponent lost 5 health");
			healthValue = healthValue - 5;
			chooseNewAttack();
		}
		if (results[4] === 4) {
			console.log("You used Take Down! Opponent lost 10 health");
			healthValue = healthValue - 10;
			chooseNewAttack();
		}
	}
}




function chooseNewAttack(){
	let attack = rollDie(sides[4])
	if (attack === 1){
		console.log("You used Tackle! Opponent lost 2 health");
	healthValue = healthValue - 2;
}
	else if(attack === 2){
		console.log("You used Headbutt! Opponent lost 6 health");
	healthValue = healthValue - 6;
	}
	else if (attack === 3){
		console.log("You used Dig! Opponent lost 5 health");
	healthValue = healthValue - 5;
	}
	else if (attack === 4) {
		console.log("You used Take Down! Opponent lost 10 health");
	healthValue = healthValue - 10;
	}
	
	console.log("Your next attack roll was " + attack);
	return attack;
}


function usedTackle() {
	console.log("You used Tackle! Opponent lost 2 health");
	healthValue = healthValue - 2;
	
}


function usedHeadbutt() {
	console.log("You used Headbutt! Opponent lost 6 health");
	healthValue = healthValue - 6;
	return healthValue;
}


function usedDig() {
	console.log("You used Dig! Opponent lost 5 health");
	healthValue = healthValue - 5;
	return healthValue;
}


function usedTakeDown() {
	console.log("You used Take Down! Opponent lost 10 health");
	newHealthValue = healthValue - 10;
	return healthValue;
}

//might need different outcomes for sixth turn if using damage counter
function turnSix(){
	if (results[5] <= 8){
		console.log("You defeated your opponent!");
	}
	else {
		console.log("Team Rocket appeared! They stole your Pokemon. You lose.");
	}
}


//Make possible new turnSix with rolls 1-8 having player win, 9-12 having Team Rocket show up


function playGame(){
	getResults();
	turnOne();
	turnTwo();
	tellOpponentHealth();
	turnThree();
	turnFour();
	turnFive();
	turnSix(); 
}

playGame();