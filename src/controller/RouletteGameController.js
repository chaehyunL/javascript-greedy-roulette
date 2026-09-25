import Player from "../model/Player.js";
import Roulette from "../model/Roulette.js";
import OutputView from "../view/OutputView.js";
import InputValidation from "../model/InputValidation.js";

const inputValidation = new InputValidation();

export default class RouletteGameController {
    constructor() {
        this.player = new Player();
        this.roulette = new Roulette();
        this.outputView = new OutputView();
    }

    play(playerColor, betMoney) {
        if (!inputValidation.isValidBetMoney(betMoney, this.player.money).isValid) {
            return;
        }
        this.outputView.disableBetStopButtons();
        this.outputView.printWhileSpining();
        setTimeout(() => {
            const targetColor = this.roulette.spin(playerColor, betMoney);
            this.player.bet(betMoney);

            if (playerColor === targetColor) {
                this.player.win(playerColor, betMoney);
            }
            else {
                this.player.lose(betMoney);
            }

            this.outputView.printGameResult(targetColor, playerColor, betMoney, this.player.money, this.player.round);

            if (this.player.money <= 0) {
                setTimeout(() => {
                    this.endGame();
                }, 2000);
                return;
            }

            this.outputView.enableBetStopButtons();
            return;

        }, 2000)

    }

    endGame() {
        if (this.player.money <= 0) {
            this.player.money = 0;
        }
        this.outputView.printGameOver(this.player.money, this.player.round);
        this.player.reset();
        return;
    }
}
