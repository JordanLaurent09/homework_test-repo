function findUniqueElementCommon(arr) {
    // Во-первых, входная переменная ВСЕГДА должна быть массивом
    if (typeof arr === 'object' && arr.length > 0) {
        let elementCount = {};
    
        for (let num of arr) {
            // Во-вторых, элемент массива должен быть числом
            if (typeof num === 'number') {
                if (elementCount[num]) {
                    elementCount[num]++;
                } else {
                    elementCount[num] = 1
                }
            }
        }
        for (let key in elementCount) {
            if (elementCount[key] === 1) {
                return Number(key);
            }
        }
    }
    return null;
}

function findUniqueElementMap(arr) {
    const countMap = new Map();

    // Проверяем, является ли входная переменная массивом
    if (typeof arr == 'object' && arr.length > 0) {
        arr.forEach(item => {
            countMap.set(item, (countMap.get(item) || 0 ) + 1);
        });

        return arr.filter(item => countMap.get(item) === 1);
    }
    return undefined;
}

function longestSubstringWithoutRepeating(s) {

    let leftPointer = 0;
    let maxLength = 0;

    const charIndexMap  =  {};

    // Оборачиваем в структуру try-catch для отслеживания отстутствия входной переменной
    try {
        for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
            const currentChar = s[rightPointer];

            if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= leftPointer) {
                leftPointer = charIndexMap[currentChar] + 1;
            }

            charIndexMap[currentChar] = rightPointer;
            maxLength = Math.max(maxLength, rightPointer - leftPointer + 1);
        }
    } catch (e) {
        console.log(e.message);
        console.log(e.stack);
    }

    return maxLength;
}

const arrayExample = [1, 2, 3, 4, 1, 2, 3];
const arrayForMapExample = ['a', 'b', 'a', 'c'];
const strExample = 'Prodigy';
console.log(longestSubstringWithoutRepeating([[], {}, () => {console.log('nice job!')}]));
console.log(findUniqueElementCommon(arrayExample));
console.log(findUniqueElementMap(arrayForMapExample));