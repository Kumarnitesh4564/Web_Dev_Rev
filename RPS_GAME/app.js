let userScore = 0;
let botScore = 0;

const user_score = document.querySelector(".your-score");
const bot_score = document.querySelector(".bot-score");

const celebration = document.querySelector("#celebration");


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const genBotChoice = () => {
    const options = ["rock", "paper", "scissors"];

    let idx = Math.floor(Math.random() * 3);

    return options[idx];
}

const showWinner = (choice1, choice2) => {
    if(choice1 === choice2) {
        msg.textContent = "Draw! : Same Choices 🤝"
    }

    else if((choice1 === "rock" && choice2 === "paper") ||
              (choice1 === "paper" && choice2 === "scissors") ||
              (choice1 === "scissors" && choice2 === "rock")) 
        {
            botScore++;
            msg.textContent = "Opps! You Lost 😢";
            msg.classList.add("loss");
            msg.classList.remove("win");
        }

    else {
        userScore++;

        msg.textContent = "Congratulations! You Won 🎉";
        msg.classList.add("win");
        msg.classList.remove("loss");
        
        
        celebration.style.display = "flex";

        setTimeout(() => {
            celebration.style.display = "none";
        }, 1500);
    }

    user_score.textContent = userScore;
    bot_score.textContent = botScore;
}


choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        // console.log(userChoice);
        
        const botChoice = genBotChoice();
        return showWinner(userChoice, botChoice);
    })
});
