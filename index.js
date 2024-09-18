//1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

function calculateDifference(a, b) {
    return a - b;
}
const result=calculateDifference(10,4);
console.log(result);


//2.Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.


function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(9));
console.log(isOdd(10));


//3)Write a function named findMin that takes an array of numbers and returns the smallest number in the array.

function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin([10,15,5,20,25]));


//4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([10,15,5,20,25,30,40]));


//5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}
console.log(sortArrayDescending([5,7,10,8,6,9,11]));

