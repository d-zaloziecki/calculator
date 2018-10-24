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
        if(this.operator === null && operator != "Clr"){
            this.operator = this.operants[operator]
            this.value = (parseInt(this.currentOperand) || this.value);
            this.currentOperand = ""
            this.display = this.value + this.operator.op
        }else if(operator === "Clr"){
            this.display = "";
            this.currentOperand = "";
            this.operator = null;
            this.value = 0;
        }else {
            this.value = this.operator.calcFunc(this.value, parseInt(this.currentOperand));
            this.currentOperand = ""
            if (operator === "="){
                this.operator = null
                this.display = this.value     
            }else{
                this.operator = this.operants[operator]
                this.display = this.value + this.operator.op
            }
        }
    }

}

export default CalcStore;