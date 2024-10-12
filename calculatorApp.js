const calculator = document.querySelector(".calculator");
const calculatorKeys = calculator.querySelector(".calculator-keys");

// TODO
function calculate() {
    return "Result";
}

calculatorKeys.addEventListener("click", (e) => {
    let key = e.target;
    let calculatorDisplay = calculator.querySelector(".calculator-display");

    if (key.id === "multiply" || key.id === "divide" || key.id === "add" || key.id === "subtract") {
        console.log("Operator key " + key.textContent + " pressed!");
        calculatorDisplay.textContent += key.textContent; //! FIX: make sure user can input operators. "+-+" is valid input right now
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
