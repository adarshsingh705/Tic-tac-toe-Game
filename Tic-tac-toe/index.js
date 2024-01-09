let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let truno = true; // player trun x, and o

// all winning pattern
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [6, 7, 8],
  [2, 4, 6],
  [3, 4, 5],
];

// use for disabled click event on every box
const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// use for enable click event on every box
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// use for reset current game 
const resetGame = () => {
  truno = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

// use for fill 0 and x in box and check winner also 
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    if (truno) {
      box.innerHTML = "o";
      truno = false;
    } else {
      box.innerHTML = "x";
      truno = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

// use for display winner and show new game button when one winner is found
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

// use for check winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log([pattern[0]], [pattern[1]], [pattern[2]]);
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val == pos3val) {
        console.log("winner", pos1val);
        showWinner(pos1val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
