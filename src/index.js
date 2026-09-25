import Player from "./model/Player.js";
import RouletteGameController from "./controller/RouletteGameController.js";
import OutputView from "./view/OutputView.js";
import InputValidation from "./model/InputValidation.js";

const rouletteGameController = new RouletteGameController();
const outputView = new OutputView();
const inputValidation = new InputValidation();
const playerColorInput = document.querySelector("#color-select");
const betMoneyInput = document.querySelector("#bet-amount");

const betButton = document.querySelector("#bet-button");
const stopButton = document.querySelector("#stop-button");
const restartButton = document.querySelector("#restart-button");

restartButton.style.display = "none";

betButton.addEventListener("click", (event) => {
    event.preventDefault();

    const playerColor = playerColorInput.value;
    const betMoney = Number(betMoneyInput.value);
    if (!inputValidation.isValidColor(playerColor).isValid) {
        return;
    }
    if (!inputValidation.isValidbetMoney(betMoney).isValid) {
        return;
    }

    outputView.printWhileSpining();
    betButton.disabled = true;
    stopButton.disabled = true;
    setTimeout(() => {
        rouletteGameController.play(playerColor,betMoney);
    }, 2000)

    betButton.disabled = false;
    stopButton.disabled = false;
});

stopButton.addEventListener("click", (event) => {
    event.preventDefault();

    rouletteGameController.endGame();

    playerColorInput.style.display = "none";
    betMoneyInput.style.display = "none";
    betButton.style.display = "none";
    stopButton.style.display = "none";
    restartButton.style.display = "";
});

restartButton.addEventListener("click", (event) => {
    event.preventDefault();
    playerColorInput.style.display = "";
    betMoneyInput.style.display = "";

    betButton.style.display = "";
    stopButton.style.display = "";
    restartButton.style.display = "none";
});

