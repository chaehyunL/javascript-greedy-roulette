export default class OutputView {
    constructor() {
        this.result = document.querySelector("#result-content");
        this.currentMoney = document.querySelector("#current-money");
        this.currentRound = document.querySelector("#current-round");
    }

    printWhileSpining() {
        this.result.innerHTML = "룰렛 돌리는 중...";
    }

    printGameResult(targetColor, playerColor, betMoney, currentMoney, currentRound) {
        this.result.innerHTML =
            `룰렛 결과: ${targetColor}<br>`;
        if (playerColor === targetColor) {
            this.result.innerHTML = `베팅 성공! + ${betMoney}원`
        }
        else {
            this.result.innerHTML = `베팅 실패! -${betMoney}원`
        }
        this.currentMoney.innerHTML = `${currentMoney}`;
        this.currentRound.innerHTML = `${currentRound}`;
    }

    printGameOver(playerMoney, playerRound) {
        this.result.innerHTML =
            `게임 종료<br>
        최종 자금: ${playerMoney}원<br>
        플레이한 라운드: ${playerRound}`;

        this.currentMoney.innerHTML = `현재 자금: 10000원`;
        this.currentRound.innerHTML = `라운드: 0`;

    }

}
