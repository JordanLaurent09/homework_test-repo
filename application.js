function multiplyTwoNumbers( numberOne, numberTwo ) {
    return numberOne * numberTwo;
}

function addTwoNumbers( numberOne, numberTwo ) {
    return numberOne + numberTwo;
}

function divideTwoNumbers( numberOne, numberTwo ) {
    if (numberTwo === 0) throw new Error('Divide by zero');
    return numberOne / numberTwo;
}

function substractTwoNumbers( numberOne, numberTwo ) {
    return numberOne - numberTwo;
}

function calcHippotenusaValue( catetOne, catetTwo ) {
    const hipponenusa = Math.sqrt(Math.pow(catetOne, 2) + Math.pow(catetTwo, 2));
    return hipponenusa;
}

// Дополнительные мат. функции
function getSquareRoot( initialNumber ) {
    const result = Math.sqrt(initialNumber);
    return result;
}

function getPower( initialNumber, powerValue ) {
    if (powerValue < 0) throw new Error('Пока рано использовать отрицательную степень');
    const result = Math.pow(initialNumber, powerValue);
    return result;
}

console.log(multiplyTwoNumbers(3, 7));