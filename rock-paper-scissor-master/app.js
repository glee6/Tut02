const game = () => {
  let pScore = 0;
  let cScore = 0;

  
  const gameContainer = document.querySelector("section.game");
  const playBtn = gameContainer.querySelector(".intro button");
  const resetBtn = gameContainer.querySelector("button.resetGame");
  const introScreen = gameContainer.querySelector(".intro");
  const match = gameContainer.querySelector(".match");

  const options = gameContainer.querySelectorAll(".options button");
  const playerHand = gameContainer.querySelector(".player-hand");
  const computerHand = gameContainer.querySelector(".computer-hand");
  const hands = gameContainer.querySelectorAll(".hands img");

  const playerScore = document.querySelector(".player-score p");
  const computerScore = document.querySelector(".computer-score p");

  //Start the Game
  const startGame = () => {
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
    resetBtn.addEventListener("click", () => {
      playerScore.innerText = '0';
      computerScore.innerText = '0';
      pScore = cScore = 0;
      console.log("rest");
    });
  };
  //Play Match
  const playMatch = () => {
    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();
