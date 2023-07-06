class Calculator {
    constructor(previousOperandTxtEl, currentOperandTxtEl) {
        this.previousOperandTxtEl = previousOperandTxtEl
        this.currentOperandTxtEl = currentOperandTxtEl
        this.clear()
    }

    clear() {
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString();
      
        if (this.currentOperand !== "") {
          this.currentOperand = this.currentOperand.slice(0, -1);
        }
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    clickOperation(operation) {
        if(this.currentOperand === "") return
        if(this.previousOperand !== "") {
            this.compute()
        }

        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ""
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)

        if(isNaN(prev) || isNaN(current)) return

        switch (this.operation) {
            case "+" :
                computation = prev + current
                break
            case "-" :
                computation = prev - current
                break
            case "x" :
                computation = prev * current
                break
            case "÷" :
                computation = prev / current
                break
            default :     
                return
        }

        this.currentOperand = computation.toString()
        this.operation = undefined
        this.previousOperand = ""
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split(".")[0])
        const decimalDigits = stringNumber.split(".")[1]
        let integerDisplay

        if (isNaN(integerDigits)) {
            integerDisplay = ""
        } else {
            integerDisplay = integerDigits.toLocaleString("en", {maximumFractionDigits : 0})
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    update() {
        this.currentOperandTxtEl.innerText = this.getDisplayNumber(this.currentOperand)

        if(this.operation != null) {
            this.previousOperandTxtEl.innerText = `${this.previousOperand} ${this.operation}`
        }
    }
}

const numberBtns = document.querySelectorAll("[dataNumber]")
const operationBtns = document.querySelectorAll("[dataOperation]")
const equalsBtn = document.querySelector("[dataEquals]")
const deleteBtn = document.querySelector("[dataDelete]")
const clearBtn = document.querySelector("[dataClear]")
const previousOperandTxtEl = document.querySelector("[dataPreviousOperand]")
const currentOperandTxtEl = document.querySelector("[dataCurrentOperand]")

const calculator = new Calculator(previousOperandTxtEl, currentOperandTxtEl)

numberBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        calculator.appendNumber(btn.innerText)
        calculator.update()
    })
})

operationBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        calculator.clickOperation(btn.innerText)
        calculator.update()
    })
})

equalsBtn.addEventListener("click", () => {
    calculator.compute()
    calculator.update()
})

clearBtn.addEventListener("click", () => {
    calculator.clear()
    calculator.update()
})

deleteBtn.addEventListener("click", () => {
    calculator.delete()
    calculator.update()
})