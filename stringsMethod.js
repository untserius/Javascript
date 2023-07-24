// slice()

// example 1
let text = "Hello! My Name is Sudhir."
let myName = text.slice(17, 24);

console.log(myName);

// example 2
let text1 = "Hello! My Name is Sudhir."
let myName1 = text1.slice(17);

console.log(myName1);

// example 3
let text2 = "Hello! My Name is Sudhir."
let myName2 = text2.slice(-8);

console.log(myName2);

// example 4
let text3 = "Hello! My Name is Sudhir."
let myName3 = text3.slice(-8, -1);

console.log(myName3);

// substring()

let whatIDo = "I am a web developer";
let whatIAm = whatIDo.substring(7, 20);

console.log(whatIAm);

// replace()

let test = "I am a backend developer";
let newTest = test.replace("backend", "frontend");

console.log(newTest);

//replace(/g)

function realAns() {
    let text = document.getElementById("lie").innerHTML;
    document.getElementById("lie").innerHTML = text.replace(/backend/g, "frontend");
}

//ReplaceAll() - ES2021 feature

let demo = "I have three dogs. Dogs are the most funniest pet among others."
demo = demo.replaceAll("dogs", "cats");
demo = demo.replaceAll("Dogs", "Cats");

console.log(demo);

//toUpperCase() & toLowerCase()

let sample = "qwertyui";
let abc = sample.toUpperCase();

console.log(abc);

let sample2 = "ASDFGHJK";
let abc2 = sample2.toLowerCase();

console.log(abc2);






