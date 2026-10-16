
document.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");
  const gameState = new Array(9).fill(null);
  let currentPlayer = "X";

  squares.forEach(function (square, index) {
    square.classList.add("square");

    square.addEventListener("click", function () {
      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);
      gameState[index] = currentPlayer;

    if (currentPlayer === "X") {
    currentPlayer = "O";
        } else {
    currentPlayer = "X";
    }

    square.addEventListener("hover", function (){
        square.
    }

    });
  });
});

