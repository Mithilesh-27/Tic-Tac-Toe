let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newgame-btn");
let winMessage = document.querySelector(".win-msg");

let turnX = true;

const winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (turnX) {
            box.innerHTML = "X";
            turnX = false;
        }
        else {
            box.innerHTML = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const showWinner = (winner) => {
    winMessage.innerHTML = `Player ${winner} wins!`;
    newGameBtn.classList.remove("hide");
    winMessage.classList.remove("hide");
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerHTML;
        let val2 = boxes[pattern[1]].innerHTML;
        let val3 = boxes[pattern[2]].innerHTML;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 == val2 && val2 == val3) {
                console.log(`Player ${val1} wins!`);
                showWinner(val1);
            };
        };
    };
};

const reset = () => {
    boxes.forEach((box) => {
        box.innerHTML = null;
        box.disabled = false;
        newGameBtn.classList.add("hide");
        winMessage.classList.add("hide");
    })
}

resetBtn.addEventListener("click", reset);
newGameBtn.addEventListener("click", reset);