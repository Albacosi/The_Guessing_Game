let enterNumber;
    let currentStreak = 0;
    let highestStreak = 0;

    function chooseNumber() {
        enterNumber = parseInt(prompt("Plese enter the maximum value x for the guessing game:"));
        startGame();
    }

    function startGame() {
        const randomNumber = Math.floor(Math.random() * enterNumber) + 1;
        let userGuesses = parseInt(prompt(`Guess a number between 1 and ${enterNumber}:`));

       // if (userGuesses === randomNumber) {
       // alert(`You guessed the correct number! \n Current Streak: ${currentStreak} \n Highest Streak: ${highestStreak}`);
       //   } else {
        // currentStreak = 0;
           //  alert(`Sorry, the number was ${randomNumber}. Your streak has been reset.\nHighest Streak: ${highestStreak}`);
       //  }
       // 
    }