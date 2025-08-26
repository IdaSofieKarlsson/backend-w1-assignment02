//Task 1 – Simple Function
function sayHello() {
    console.log('Hello from Node.js!');
}
sayHello();

//Task 2 – Parameters
function welcomeUser(name) {
    console.log(`Welcome, ${name}!`);
}
welcomeUser('Michiel');
welcomeUser('Gustav');

//Task 3 – Multiple Parameters
function subtract(a, b) {
    console.log(a - b);
}
subtract(10, 3);

//Task 4 – Return Value
function square(number) {
    return number * number;
}
let numberSquare = square(48);
console.log(numberSquare);

//Task 5 – Profile Function is at the bottom as it needs to be after the Task 9 – Bonus Challenge. 

//Task 6 – Default Parameters
function greetWithTime(name, timeOfDay = "morning") {
    return `Good ${timeOfDay}, ${name}!`;
}
console.log(greetWithTime('Ida'));
console.log(greetWithTime('Ida-Sofie', 'night'));

//Task 7 – Calculator Function
function calculator(a, b, operator) {
    if (operator === 'add') {
        return a + b;
    } else if (operator === 'subtract') {
        return a - b;
    } else if (operator === 'multiply') {
        return a * b;
    } else if (operator === 'divide') {
        return a / b;
    }
}
console.log(calculator(1, 2, 'add'));
console.log(calculator(12, 7, 'subtract'));
console.log(calculator(39, 3, 'multiply'));
console.log(calculator(39, 3, 'divide'));

//Task 8 – Arrow Function Version
const squareAsArrow = number => number * number;

let numberSquareArrow = squareAsArrow(25);
console.log(numberSquareArrow);

//Task 9 – Bonus Challenge
function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
//Task 5 – Profile Function, contains extra text in return statement due to bonus challange added. 
function profile(name, age, likesCoding) {
    return `"Hi, I’m ${name}, I am ${age} years old, and it is ${likesCoding} that I like coding. It is ${isAdult(age)} that I am an adult."`;
}
console.log(profile('Ida-Sofie', 48, true));
console.log(profile('Gemma', 18, false));
console.log(profile('Joline', 15, true));
