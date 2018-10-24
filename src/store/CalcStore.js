import { observable, action } from "mobx";

class CalcStore {
    value = 0;
    currentOperand = "";
    operator = null;
    @observable display = "";

    operants = {
        "+": {op:"+", calcFunc: function(a, b){return a + b}},
        "-": {op:"-", calcFunc: function(a, b){return a - b}},
        "/": {op:"/", calcFunc: function(a, b){return a / b}},
        "*": {op:"*", calcFunc: function(a, b){return a * b}}
    } 

    @action pressANumber = (number) => {
        this.currentOperand += number
        this.display += number
    }

    @action pressAnOperant = (operator) => {
        if(this.operants[operator] && this.operator != null){
            this.value = this.operator.calcFunc(this.value, parseInt(this.currentOperand));
            this.operator = this.operants[operator]
            this.display = this.value + this.operator.op
        }else if(this.operator === null && operator != "Clr"){
            this.operator = this.operants[operator]
            this.value = (parseInt(this.currentOperand) || this.value);
            this.display = this.value + this.operator.op
        }else{
            if (operator === "="){
                this.value = this.operator.calcFunc(this.value, parseInt(this.currentOperand));
                this.display = this.value     
            }else if(operator === "Clr"){
                this.display = "";
                this.value = 0;
            }
            this.operator = null;
        }
        this.currentOperand = "";
    }

}

export default CalcStore;