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

console.log(multiplyTwoNumbers(3, 7));