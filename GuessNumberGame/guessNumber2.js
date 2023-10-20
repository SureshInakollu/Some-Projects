let gameResult = document.getElementById('gameResult');
let userInput = document.getElementById('userInput');
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);
function checkGuess() {
    let gussedNumber =parseInt(userInput.value);
    console.log(gussedNumber);

    if (gussedNumber > randomNumber) {
        gameResult.textContent = "Too high, try Again!!!!";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if (gussedNumber < randomNumber) {
        gameResult.textContent = "Too Low, try Again!!!";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if (gussedNumber === randomNumber) {
        gameResult.textContent ="Congratulations!! you got it....";
        gameResult.style.backgroundColor = "green"
    }
    else {
        gameResult.textContent = "Please Provide a Proper Input...";
        gameResult.style.backgroundColor = "red"
    }
}