/*
	Create a 3-sided dice roll that determines pokemon type
	Possibly start with an empty array, then use push() method to add each roll to 
	the array as player moves along. Then make conditionals depending on the value of each array?
- Assign type to each number
	- 1 = fire
	- 2 = water
	- 3 = grass

Roll 12-sided die to find out if player can continue or game stops
	1-11 = continue to next turn
	12 = Team Rocket stole your pokemon, player restarts to first turn
	
Create 6-sided dice roll to determine opponent type
	- 1-2 = fire
	- 3-4 = water
	- 5-6 = grass

Create a 4-sided dice roll that determines move for the type you rolled
If you rolled fire:
	- 1Scratch "You used Scratch"
	- 2Growl "You used Growl"
	- 3Ember "You used Ember"
	- 4Flamethrower "You used Flamthrower"
IF you rolled water:
	- 1Scratch "Used Scratch"
	- 2Tail Whip "used tail whip"
	- 3Bubble "used bubble"
	- 4hydro pump "used hydro pump"
If you rolled grass:
	- 1Tackle 
	- 2Growl
	- 3Vine Whip
	- 4Solar Beam

5-sided die
Determine effectiveness/strength of move used against opponent
If your type is fire, and your opponent is fire 
	- 1 Used scratch = Normal damage
	- 2 used growl = no damage
	- 3 used ember = minimal damage
	- 4 used flamethrower = less than normal
	- 5 attack missed 
Else if your type is fire and opponent is water
	- 1 Used scratch = Normal damage
	- 2 growl = no damage
	- 3 ember = minimal damage
	- 4 flamethrower = little damage
	- 5 attack missed
Else if your type is fire and opponent is grass
	- 1 Used scratch = Normal damage
	- 2 growl = no damage
	- 3 ember = a lot of damage
	- 4 flamethrower = max damage
	- 5 attack missed
Else if your type is water and opponent is fire
	- 1 Used scratch = Normal damage
	- 2 tail whip = no damage
	- 3 bubble = minimal damage
	- 4 hydro pump = little damage
	- 5 attack missed
etc. for each type/advantages 
turn chance, who goes first 
attack types 
*/
/*
Choose a value of the sides array to determine the type of dice being used within the turn
What step are you on? And which dice is used in this turn?

Array holds types of dice in the game
Access value of index to determine which dice is being used
If rolls done = 0, 
Roll using value of index, randomizing by the value of index + 1
setInterval ()
*/
let sides = [3, 6, 4, 5, 7, 12]; 
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
		console.log(results);
	}
	return;
}

function turnOne(){
		if (results[0] === 1){
		console.log("You received Eevee, the Evolution Pokemon!");
		}
		else if (results[0] === 2){
		console.log("You received Rattata, the Mouse Pokemon!");
		}
		else if (results[0] === 3){
		console.log("You received Meowth, the Scratch Cat Pokemon!");
	}
		
	return;
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
	return;
}

	
function turnThree(){
	switch (results[2]){
		case 1: console.log("You used Headbutt!");
		case 2: console.log("You used Tackle!");
		case 3: console.log("You used Dig!");
		case 4: console.log("You used Take Down!");
	}
}



/*function rollDieFour(){
	sides = 4;
	dice4 = Math.floor((Math.random() * sides) + 1);
	return dice4
}
let rollDFour = rollDieFour();

switch(result[i]){
	case 1:
	console.log("attack!");
	case 2:
	console.log();


}
			
*/			
