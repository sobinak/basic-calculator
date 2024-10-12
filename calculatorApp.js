const calculator = document.querySelector(".calculator");
const calculatorKeys = calculator.querySelector(".calculator-keys");


function isNumber(character) {
    if (!isNaN(parseInt(character))) {
        return true;
    }
    else {
        return false;
    }
}

// TODO
//+ the parameter, expression, is a string consisting of numbers and operators with no whitespace
function calculate(expression) {
    return "Result";
}

calculatorKeys.addEventListener("click", (e) => {
    let key = e.target;
    let calculatorDisplay = calculator.querySelector(".calculator-display");

    if (key.id === "multiply" || key.id === "divide" || key.id === "add" || key.id === "subtract") {
        console.log("Operator key " + key.textContent + " pressed!");
        // User can only input an operator when display is not empty and there is a number at the end
        if (calculatorDisplay.textContent !== "" &&
            isNumber(calculatorDisplay.textContent[calculatorDisplay.textContent.length - 1])) {
            calculatorDisplay.textContent += key.textContent;
        }

        //! FIX: make sure user can input operators. "+-+" is valid input right now
    }
    else if (key.id === "equal") {
        console.log("= was pressed!");
        calculatorDisplay.textContent = calculate();
    }
    else if (key.id === "clear") {
        console.log("C was pressed!");
        calculatorDisplay.textContent = "";
    }
    else { //! FIX: area around buttons can be pressed and will produce console output
        console.log("Number " + key.textContent + " pressed!");
        calculatorDisplay.textContent += key.textContent;
    }
});
