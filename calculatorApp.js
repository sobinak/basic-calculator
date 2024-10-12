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


//+ helper function for calculate function
//+ multiplication and division operations prioritized
//+ adds results to an array that will have all of its elements summed in the end in calculate function
function operationHelper(number, operator, arrayOfNumbers) {
    if (operator === "-") {
        arrayOfNumbers.push(-number);
    }
    else if (operator === "\u00D7") { // multiplication symbol
        let multiplierNum = arrayOfNumbers.pop(); // remove most recent number added to array to multiply
        arrayOfNumbers.push(number * multiplierNum);
    }
    else if (operator === "÷") {
        let dividendNum = arrayOfNumbers.pop(); // remove most recent number added to array to divide
        if (number === 0) {
            arrayOfNumbers.push("Error");
            return;
        }
        else {
            arrayOfNumbers.push(dividendNum / number); // outputs decimal answers
        }

    }
    else { // addition
        arrayOfNumbers.push(number);
    }

    console.log("arrayOfNumbers: " + arrayOfNumbers);
}


//+ the parameter, expression, is a string consisting of numbers and operators with no whitespace
//+ prioritizes multiplication and division operations, addition/subtraction will be done at the end
function calculate(expression) {
    const tokens = tokenize(expression);
    console.log("tokens: " + tokens);

    let result = 0;
    let currentNum = 0;
    let arrayOfNumsToSum = [];
    let operator = "+";

    for (const token of tokens) {
        if (isNumber(token)) {
            currentNum = Number(token);
        }
        else {
            operationHelper(currentNum, operator, arrayOfNumsToSum);
            operator = token; // update operator to current token after handling operations before this one
        }
    }

    operationHelper(currentNum, operator, arrayOfNumsToSum); // handle last operator to get last number into array

    if (arrayOfNumsToSum.includes("Error")) { // divide by 0 happened somewhere in equation
        return "Error";
    }

    for (const number of arrayOfNumsToSum) {
        result += number;
    }

    return result;
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
        console.log("Key " + key.textContent + " pressed!");
        calculatorDisplay.textContent += key.textContent;
    }
});
