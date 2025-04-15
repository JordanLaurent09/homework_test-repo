function EvenOddSort( array = [] ) {
    if (array.length === 0) {
        return undefined;
    }
    let evenNumbers = [];
    let oddNumbers = [];

    evenNumbers = array.filter((element) => {
        return element % 2 === 0;   
    });

    oddNumbers = array.filter((element) => {
        return element % 2 !== 0;
    })

    return { evenNumbers: evenNumbers, oddNumbers: oddNumbers }
}

console.log(EvenOddSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));