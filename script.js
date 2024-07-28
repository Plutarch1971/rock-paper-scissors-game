
let youWin = 0;
let tie = 0;
let compWin = 0;
let chooseOption = ["R", "P", "S"];
let playerChoice;
let compChoice = "";

function play() {
    while(true){
    let playerChoice = window.prompt("Enter R, P, or S / click Cancel to exit");
    if(playerChoice===null){
        break;//exit the loop if the user clicks cancel
    }
    playerChoice = playerChoice.toUpperCase();

    if (!playerChoice) {
        window.alert("Please choose an option");
        continue;//continue to the next iteration of the loop
    }

    if (playerChoice !== "R" && playerChoice !== "P" && playerChoice !== "S") {
        window.alert("Choose a valid option (R, P, or S)");
        continue;
    }

    let index = Math.floor(Math.random() * chooseOption.length);
    compChoice = chooseOption[index];

    if (playerChoice === compChoice) {
        window.alert("It's a tie");
        tie++;
    } else if (
        (playerChoice === "R" && compChoice === "S") ||
        (playerChoice === "P" && compChoice === "R") ||
        (playerChoice === "S" && compChoice === "P")
    ) {
        window.alert("You win");
        youWin++;
    } else {
        window.alert("You lose");
        compWin++;
    }

    //console.log(`Player: ${playerChoice}, Computer: ${compChoice}`);
    //console.log(`You win: ${youWin}, Ties: ${tie}, Computer wins: ${compWin}`);
}
}
play();
window.alert(`Player: ${playerChoice}, Computer: ${compChoice}`);
window.alert(`You win: ${youWin}, Ties: ${tie}, Computer wins: ${compWin}`);

