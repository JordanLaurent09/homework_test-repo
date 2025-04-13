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

// Создание некторых геометрических функций
function perimeter( sideOne, sideTwo ) {
    return 2 * (sideOne + sideTwo);
}

function rectangleSquare( sideOne, sideTwo ) {
    return sideOne * sideTwo;
}

function circleSquare ( radius ) {
    return 2 * Math.PI * Math.pow(radius, 2);
}

console.log(multiplyTwoNumbers(3, 7));