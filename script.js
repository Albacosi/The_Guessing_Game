let enterNumber;
let currentStreak = 1;
let lowestStreak = localStorage.getItem('lowestStreak') || Infinity;

function chooseNumber() {
    enterNumber = parseInt(prompt("Please enter the maximum value x for the guessing game:"));
    startGame();
}

function startGame() {
    const randomNumber = Math.floor(Math.random() * enterNumber) + 1;
    let userGuesses = 0;

    while (userGuesses !== randomNumber) {
        userGuesses = parseInt(prompt("Guess a number between 1 and " + enterNumber));
        if (userGuesses === randomNumber) {
            alert("Congratulations! You guessed the correct number: " + randomNumber + " ," + " in "  + currentStreak + " attempts");
        } else {
            alert(`Wrong guess! Try again.`);
            currentStreak++;
        }
    }

    if (currentStreak < lowestStreak) {
        lowestStreak = currentStreak;
        localStorage.setItem('lowestStreak', lowestStreak);
        alert(`New high score! Lowest streak: ${lowestStreak}`);
        
    }
    localStorage.setItem('currentStreak', currentStreak);
    
    currentStreak = 1; 
}

