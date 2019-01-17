let sides = [5, 6, 7, 8, 4, 12]; 
let results = [];
let rolls = 0; 
let opponentHealthValues = [20, 25, 30, 35, 40];  
let opponentHealthValue = makeOpponentHealth();

function makePlayerHealth(){
	let health = [Math.floor(Math.random() * opponentHealthValues.length)];
	let hitPoints = opponentHealthValues[health];
		return hitPoints;
}

function tellOpponentHealth(){
	console.log("Opponent's health is " + opponentHealthValue);
}

function makeOpponentHealth() {
let health = [Math.floor(Math.random() * opponentHealthValues.length)];
let hitPoints = opponentHealthValues[health];
	return hitPoints;
	}

function rollDie(sides){
	let result = Math.floor((Math.random() * sides) + 1);
	return result;
}

function getResults(){
	for (let i = 0; i < sides.length; i++) {
		let rollResult = rollDie(sides[i]);
		results.push(rollResult);
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
	else if (results[0] === 4){
		console.log("You sent out Squirtle, the Tiny Turtle Pokemon!");
	}
	else if (results[0] === 5){
		console.log("You sent out Bulbasaur, the Seed Pokemon!");
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
			console.log("You are fighting to earn the Boulder Badge from Pewter City");
			break;
		case 2: 
			console.log("You are fighting to earn the Cascade Badge from Cerulean City");
			break;
		case 3: 
			console.log("You are fighting to earn the Thunder Badge from Vermillion City");
			break;
		case 4: 
			console.log("You are fighting to earn the Rainbow Badge from Celedon City");
			break;
		case 5: 
			console.log("You are fighting to earn the Soul Badge from Fuschia City");
			break;
		case 6: 
			console.log("You are fighting to earn the Marsh Badge from Saffron City");
			break;
		case 7: 
			console.log("Your are fighting to earn the Volcano Badge from Cinnabar Island");
			break;
		case 8: 
			console.log("Your are fighting to earn the Earth Badge from Viridian City");
			break;
	}
	
}

function turnFive(){
	
	while (opponentHealthValue > 0){
		if (results[4] === 1) {
			console.log("You used Tackle! Opponent lost 2 health");
			opponentHealthValue = opponentHealthValue - 2;	
			console.log("Opponent health fell to " + opponentHealthValue);
			chooseNewAttack();
		}
		if (results[4] === 2) {
			console.log("You used Headbutt! Opponent lost 6 health");
			opponentHealthValue = opponentHealthValue - 6;
			console.log("Opponent health fell to " + opponentHealthValue);
			chooseNewAttack();
		}
		if (results[4] === 3) {
			console.log("You used Swift! Opponent lost 5 health");
			opponentHealthValue = opponentHealthValue - 5;
			console.log("Opponent health fell to " + opponentHealthValue);
			chooseNewAttack();
		}
		if (results[4] === 4) {
			console.log("You used Take Down! Opponent lost 10 health");
			opponentHealthValue = opponentHealthValue - 10;
			console.log("Opponent health fell to " + opponentHealthValue);
			chooseNewAttack();
		}
	}
}

function chooseNewAttack(){
	let attack = rollDie(sides[4])
	while (opponentHealthValue > 0){
	if (attack === 1){
		console.log("You used Tackle! Opponent lost 2 health");
		opponentHealthValue = opponentHealthValue - 2;
		console.log("Opponent health fell to " + opponentHealthValue);
}
	else if(attack === 2){
		console.log("You used Headbutt! Opponent lost 6 health");
		opponentHealthValue = opponentHealthValue - 6;
		console.log("Opponent health fell to " + opponentHealthValue);
	}
	else if (attack === 3){
		console.log("You used Swift! Opponent lost 5 health");
		opponentHealthValue = opponentHealthValue - 5;
		console.log("Opponent health fell to " + opponentHealthValue);
	}
	else if (attack === 4) {
		console.log("You used Take Down! Opponent lost 10 health");
		opponentHealthValue = opponentHealthValue - 10;
		console.log("Opponent health fell to " + opponentHealthValue);
	}
	return attack;
}
}

function turnSix(){
	if (results[5] <= 8){
		console.log("You defeated your opponent!");
	}
	else {
		console.log("Team Rocket appeared! They stole your Pokemon. Everyone loses.");
	}
}

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