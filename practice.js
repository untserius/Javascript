// 1. add7()
function add7(a) {
    return a + 7;
}

console.log(add7(9));

// product

multiply = (a, b) => a*b;

console.log(multiply(2, 3));

// string correction

function capitalize(c) {
    return c.charAt(0).toUpperCase() + c.slice(1).toLowerCase();
}


console.log(capitalize("hello"));


// last letter

function lastLetter(text) {
   return text.charAt(text.length - 1);
}

console.log(lastLetter("hello"));