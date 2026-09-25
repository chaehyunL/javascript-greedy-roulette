export default class InputValidation{
    isValidColor(playerColorInput){
        if(playerColorInput===""){
            alert("색상을 골라주세요.");
            return{
                isValid:false
            };
        }
        return{
            isValid:true
        };
    }

    isValidbetMoney(betMoneyInput){
        if(Number.isFinite(betMoneyInput)){
            return{isValid:true};
        }
        alert("숫자를 입력해주세요.")
        return{isValid:false};
    }
}
