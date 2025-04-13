function fizzBuzzGame( numberOfSteps ) {
    if (numberOfSteps <= 0) {
        numberOfSteps = 100;
    }

    let index = 1;

    while (index < numberOfSteps) {
        if (index % 3 === 0 && index % 5 !== 0) {
            console.log('Fizz')
        } else if (index % 3 !== 0 && index % 5 === 0) {
            console.log('Buzz');
        } else if (index % 3 === 0 && index % 5 === 0) {
            console.log('FizzBuzz');
        } else {
            console.log(index);
        }
        index++;
    }
}

fizzBuzzGame(100);