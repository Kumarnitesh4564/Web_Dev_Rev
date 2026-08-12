const cells = document.querySelectorAll(".cell");

const resetBtn = document.querySelector("#reset-btn");

const newGameBtn = document.querySelector("#new-btn");

const msg = document.querySelector("#msg");

const msgContainer = document.querySelector(".msg-container");


const winningPatt = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let turnO = true;

let count = 0;

cells.forEach((cell) => {
    
    cell.addEventListener("click", () => {
        if(turnO) {
            cell.innerText = "O";
            cell.classList.add("player-O");
            turnO = false;
        }
        else {
            cell.innerText = "X";
            cell.classList.add("player-X")
            turnO = true;
        }
        cell.disabled = true;
        count++;
        
        let isWinner = checkWinner();

        if(count === 9 && !isWinner) {
            gameDraw();
        }
    })
})

const checkWinner = () => {
    for (const patt of winningPatt) {
        let pos1 =  cells[patt[0]].innerText;
        let pos2 =  cells[patt[1]].innerText;
        let pos3 =  cells[patt[2]].innerText;
          
       if(pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            msg.innerText = `Congratulation! Winner is Player ${pos1}`;
            msgContainer.classList.remove("hide");
            return true;
       }
    }
    return false;
}

const gameDraw = () => {
    msg.innerText = `Game is Draw !`;
    msgContainer.classList.remove("hide");
}

const newGame = () => {
    turnO = true;
    count = 0;
    msgContainer.classList.add("hide");

    cells.forEach((cell) => {
        cell.disabled = false;
        cell.innerText = "";
    });
}

resetBtn.addEventListener("click", newGame);

newGameBtn.addEventListener("click", newGame);