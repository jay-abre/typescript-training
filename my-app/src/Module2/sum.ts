function sumEvenNumbers(numbers: number[]): number {
    //tip: you can use .reduce or .filter
    return numbers.reduce((acc, curr) => (curr % 2 === 0) ? acc + curr : acc, 0);
 
 }
 
 console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12


  