// pseudocode

// User enters a number.
// loop through the numbers from 1 to the number the user entered.
// check if the number is divisible by 3 and 5.
// then with only 3.
// then with only 5.

let answer;
do {
    answer = prompt("Enter a number");

    if (isNaN(answer)) {
        alert("Please enter a number");
    }
} while (isNaN(answer));

for(let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}