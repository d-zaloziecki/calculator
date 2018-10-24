import { observable, action } from "mobx";

class CalcStore {
    value = 0;
    currentOperand = '0';
    @observable display = "";
    operator = null;

    
}

export default CalcStore;