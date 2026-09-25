export default class InputValidation {
    isValidInput(playerColorInput, betMoneyInput) {
        if (playerColorInput === "") {
            alert("색상을 골라주세요.");
            return {
                isValid: false
            };
        }
        if (!Number.isFinite(betMoneyInput)) {
            alert("숫자를 입력해주세요.")
            return {
                isValid: false
            };
        }
        return {
            isValid: true
        };
    }

    isValidBetMoney(betMoney, playerMoney) {
        if (betMoney > playerMoney) {
            alert("베팅 금액이 가진 금액보다 작아야합니다.")
            return { isValid: false };
        }
        return { isValid: true };
    }
}
