document.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");
  const status = document.getElementById("status");
  const gameState = new Array(9).fill(null);
  let currentPlayer = "X";

  const new = document.querySelectorAll("#btn button")
  
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkWinner() {
    winningLines.forEach(function (line) {
      if (
        gameState[line[0]] !== null &&
        gameState[line[0]] === gameState[line[1]] &&
        gameState[line[0]] === gameState[line[2]]
      ) {
        status.textContent =
          "Congratulations! " + gameState[line[0]] + " is the Winner!";
        status.classList.add("you-won");
      }
    });
  }

  squares.forEach(function (square, index) {
    square.classList.add("square");

    square.addEventListener("click", function () {
      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);
      gameState[index] = currentPlayer;

      checkWinner();

      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    });

    square.addEventListener("mouseenter", function () {
      square.classList.add("hover");
    });

    square.addEventListener("mouseleave", function () {
      square.classList.remove("hover");
    });

    new.addEventListener("click", function(){
    square.textContent == null;
  });
  });
});