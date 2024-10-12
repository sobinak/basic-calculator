const calculator = document.querySelector(".calculator");
const calculatorKeys = calculator.querySelector(".calculator-keys");

calculatorKeys.addEventListener("click", (e) => {
    //! FIX: area around buttons can be pressed and will produce console output
    let key = e.target;
    if (key.id === "multiply" || key.id === "divide" || key.id === "add" || key.id === "subtract") {
        console.log("Operator key " + key.textContent + " pressed!")
    }
    else if (key.id === "equal") {
        console.log("= was pressed!")
    }
    else if (key.id === "clear") {
        console.log("C was pressed!")
    }
    else {
        console.log("Number " + key.textContent + " pressed!")
    }
});
