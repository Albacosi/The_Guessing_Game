let enterNumber;
    let currentStreak = 0;
    let highestStreak = 0;

    function startGame() {
        enterNumber = parseInt(prompt("Enter the maximum value (X) for the guessing game:"));
        playGame();
    }

    function playGame() {