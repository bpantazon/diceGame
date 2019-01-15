let sides = [3, 6, 4, 7, 8, 12]; 
let results = [];
let rolls = 0; 

function countRolls(roll) {
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
		
	}
	return;
}

function turnOne(){
		if (results[0] === 1){
		alert("You received Eevee, the Evolution Pokemon!");
		}
		else if (results[0] === 2){
		alert("You received Pikachu, the Electric Mouse Pokemon!");
		}
		else if (results[0] === 3){
		alert("You received Charmander, the Fire Lizard Pokemon!");
	}
	return;
		}

function turnTwo() {
	if (results[1] <= 2){
		alert("Your opponent sent out Caterpie, a bug type Pokemon!");
	}
	else if (results[1] === 3 || results[1] === 4){
		alert("Your opponent sent out Pidgey, a flying type Pokemon!");
	}
	else if (results[1] >= 5){
		alert("Your opponent sent out Nidoran, a poison type Pokemon!");
	}
	return;
}

	
function turnFive(){
	switch (results[2]){
		case 1: alert("You used Headbutt!");
		break;
		case 2: alert("You used Tackle!");
		break;
		case 3: alert("You used Dig!");
		break;
		case 4: alert("You used Take Down!");
		break;
	}
	return;
}

function turnThree(){
	switch (results[3]){
		case 1: alert("This battle takes place on a Grassland terrain");
		break;
		case 2: alert("This battle takes place in Viridian Forest");
		break;
		case 3: alert("This battle takes place on a Mountainside terrain");
		break;
		case 4: alert("This battle takes place in Mt. Moon!");
		break;
		case 5: alert("This battle takes place on the SS Anne cruise ship!");
		break;
		case 6: alert("This battle takes place on the piers of Vermillion City");
		break;
		case 7: alert("This battle takes place on an all-water terrain");
		break;
	}
	return;
}

function turnFour(){
	switch (results[4]){
		case 1: alert("You are fighting for the Boulder Badge from Pewter City");
		break;
		case 2: alert("Your are fighting for the Cascade Badge from Cerulean City");
		break;
		case 3: alert("Your are fighting for the Thunder Badge from Vermillion City");
		break;
		case 4: alert("Your are fighting for the Rainbow Badge from Celedon City");
		break;
		case 5: alert("Your are fighting for the Soul Badge from Fuschia City");
		break;
		case 6: alert("Your are fighting for the Marsh Badge from Saffron City");
		break;
		case 7: alert("Your are fighting for the Volcano Badge from Cinnabar Island");
		break;
		case 8: alert("Your are fighting for the Earth Badge from Viridian City");
		break;
	}
	return;
}

function turnSix(){
	if (results[5] <= 4){
		alert("You defeated your opponent!");
	}
	else if (5 <= results[5] && results[5] <= 8) {
		alert("Your attack missed! Opponent knocked you out. You lose.");
	}
	else if (9 <= results[5]) {
		alert("Team Rocket appeared! They stole your Pokemon. You lose.");
	}
	return;
}
getResults();
turnOne();
turnTwo();
turnThree();
turnFour();
turnFive();
turnSix();


