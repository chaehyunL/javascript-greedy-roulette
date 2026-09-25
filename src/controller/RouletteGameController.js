import Player from "../model/Player.js";
import Roulette from "../model/Roulette.js";
import OutputView from "../view/OutputView.js";

export default class RouletteGameController {
    constructor() {
        this.player = new Player();
        this.roulette = new Roulette();
        this.outputView = new OutputView();
    }

    play(playerColor, betMoney) {
        const targetColor = this.roulette.spin(playerColor, betMoney);
        this.player.bet(betMoney);

        if (playerColor === targetColor) {
            this.player.win(playerColor, betMoney);
        }
        else {
            this.player.lose(betMoney);
        }

        if (this.player.money <= 0) {
            this.endGame();
            return;
        }

        this.outputView.printGameResult(
            targetColor, playerColor, betMoney,
            this.player.money, this.player.round);

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
