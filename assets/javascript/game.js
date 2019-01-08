var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = []; 
var computerChoice;

theGame();

function theGame() {
	
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var randomLetter = alphabet[Math.floor(Math.random() * 26)];
	var computerChoice = randomLetter;

	console.log(computerChoice);
		
	checkIfCorrect();

	function checkIfCorrect() {

		document.onkeyup = function(event) {
			var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

			if (event.keyCode < 65 || event.keyCode > 90) {
				alert("Invalid Entry");

			} else if (yourGuess.indexOf(userChoice) >=0) {
				alert("You already guessed that!");

			} else if (userChoice === computerChoice) {
				console.log("You win.");
				
				document.getElementById("image-here").setAttribute("src", "assets/images/light-bulb.gif");
				
				setTimeout(function(){alert("You win!");}, 3000);
				wins = wins + 1;
				document.getElementById("your-wins").innerHTML = wins;

				setTimeout(function(){document.getElementById("image-here").setAttribute("src", "assets/images/black-box.png");}, 3000);

				resetGame();

			} else {
				guessesLeft = guessesLeft - 1;
				
				document.getElementById("guesses-left").innerHTML = guessesLeft; 
				yourGuess.push(userChoice); 

				console.log("Your guesses so far: " + yourGuess);

				document.getElementById("your-guesses").innerHTML = yourGuess;

				console.log("Guesses Left: " + guessesLeft);

				noGuessesLeft();
			}
		}
	}

	function resetGame() {
		guessesLeft = 9;
		yourGuess = []; 
		document.getElementById("guesses-left").innerHTML = guessesLeft;
		document.getElementById("your-guesses").innerHTML = yourGuess;   
		theGame(); 

	}

	function noGuessesLeft() {
		if (guessesLeft === 0) {
			console.log("Sorry, you lost..");
			alert("Sorry, you lost..");
			losses = losses + 1
			document.getElementById("your-losses").innerHTML = losses;

			resetGame();

		} else {
			console.log("Incorrect. Try again"); 
			checkIfCorrect();
		}

	}

}