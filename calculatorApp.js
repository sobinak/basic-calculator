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


//+ the parameter, expression, is a string consisting of numbers and operators with no whitespace
//+ this function is used for the calculate function
function tokenize(expression) {
    let tokenArray = [];
    let num = 0;

    for (const character of expression) {
        console.log("Current character: " + character);
        if (isNumber(character)) {
            num = num * 10 + Number(character); // to construct numbers that are not single digits
        }
        else { // character is an operator, finished constructing number before operator
            tokenArray.push(num);
            tokenArray.push(character);
            num = 0;
        }
    }

    tokenArray.push(num); // add last constructed number to array
    return tokenArray;
}


// TODO
//+ the parameter, expression, is a string consisting of numbers and operators with no whitespace
function calculate(expression) {
    console.log("Expression: " + expression);
    const tokens = tokenize(expression);
    console.log("tokens: " + tokens);

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
    }
    else if (key.id === "equal") {
        console.log("= was pressed!");
        calculatorDisplay.textContent = calculate(calculatorDisplay.textContent);
    }
    else if (key.id === "clear") {
        console.log("C was pressed!");
        calculatorDisplay.textContent = "";
    }
    else { //! FIX: area around buttons can be pressed and will produce output
        console.log("Number " + key.textContent + " pressed!");
        calculatorDisplay.textContent += key.textContent;
    }
});
