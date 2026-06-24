// alert("Welcome")


// Single-line Comment 
/*
    Multiple line comment
*/ 

/* 
    Statement - an instruction. End a statement with something called the statement break ;
    Program - is a set of instructions

    Console 
*/ 
const hello = "hi"

console.log(hello)
console.log(4 + 4);

/*
    Variables and Values
    Variable - is like a labelled container that stores data
    Declaring a variable - var, let, and const
*/ 

// var firstName = "Ayodeji";

// console.log(firstName);

// var lastName = "Aronimo"

// console.log(firstName + " " + lastName);
// console.log(firstName.toUpperCase());

// var firstName = "Paul"

// console.log(firstName);

let firstName = "Ayodeji";
console.log(firstName);

firstName = "Paul";
console.log(firstName);

const pi = 22/7

console.log(pi);

// pi = 45/8;

/*
    Declaration - creating a variable
    Initialization - assigning a value to a variable
    Reassignment - updating the value of a variable
*/ 

let lastName; // declaration
const ethnicity = "Yoruba";
lastName = "Aronimo" // initialization
console.log(lastName);

lastName = "Musk" // reassignment

/*
    Rules to creating variables 
        1. Don't redeclare a variable
        2. Use names that are not single characters and are related to the content they carry
        3. If you want to have multiple words as a variable name, don't use spacing or hyphen. Use camelCase, PascalCase, and snake_case.
        4. Don't use keywords to create a variable.
        5. Don't start variable name with any number or symbols except $ and _
*/ 

const myFavouriteColour = "blue"; // camelCase
const userDateOfBirth = "2024/05/12";

const MyMathsTeacher = "Mr. Tope" // PascalCase

const state_of_origin = "Ekiti State";

 
/*
    Datatypes
        1. Primitive Datatype
            a. number
            b. string
            c. boolean
            d. undefined
            e. null
            f. symbol
            g. BigInt
        2. Complex or Non-primitive  or Reference-type Datatype
            a. array
            b. object
            c. function
            d. Date
            e. Map
            f. RegEx
*/ 

let firstNumber = 23; // number
console.log(typeof firstNumber);
let secondNumber = -4;
let thirdNumber = 1.5;

let firstString = "Janet" // string
let secondString = '25';
console.log(typeof secondString);


let isMarried = true; // boolean
console.log(typeof isMarried);

let car; // undefined
let anything = undefined
console.log(typeof car);
console.log(typeof anything);

let userName = null; // null
console.log(typeof userName);

const names = ["Badmus", "Adebayo", "Oluwanifemi", "Oluyemi"]; // an array of strings
console.log(names);
const numbers = [1, 255, 89, 90]; // an array of numbers
console.log(numbers);


// const firstPerson = ["Adebayo", true, 39, "Data Analyst"]
const firstPerson = {
    name: "Adebayo",
    isMarried: true,
    age: 39,
    profession: "Data Analyst"
} // object


// function
function greeting (user) {
    console.log("Good morning", user);
    
}

greeting("Oluwanifemi");
greeting("Ayomiposi")
greeting(1)

const today = new Date();

console.log(today);
const currentYear = today.getFullYear();
console.log(currentYear);


const firstArray = [] // literal method
const secondArray = new Array(2, 3, 4); // constructor method
console.log(secondArray);


/*
    Datatypes and methods
        1. number
            a. toFixed()
            b. isNaN()
            c. parseInt()
            d. parseFloat()
            e. Math.random()
            f. Math.floor()
            g. Math.round()
        2. string 
            a. length
            b. square bracket notation
            c. indexOf()
            d. includes()
            e. trim()
            f. replace() and replaceAll()
*/ 

const rate = 1370.28

function converter (naira) {
    let realNum = parseFloat(naira); // parseFloat method

    if (typeof realNum !== "number"){
        return "This is not a number";
    }

    let dollar;

    dollar = realNum / rate;


    return dollar.toFixed(2); // toFixed method
}

console.log(converter(2900));
console.log(converter(5000000));
console.log(converter("Ayo"));
console.log(converter(true));
console.log(converter("7800"));
console.log(converter("45890.28"));




console.log(isNaN(45));
console.log(isNaN("Adebisi"));
console.log(isNaN("78"));

let stringNum = "45.54"
console.log(typeof stringNum);

let intNum = parseInt(stringNum); // parseInt
console.log(typeof intNum);
console.log(intNum);

let randomNumber = (Math.random() * 10); // Math.random()
let flooredNumber = Math.floor(randomNumber); // Math.floor()
let roundedNumber = Math.round(randomNumber); // Math.round()

console.log("Random Number:", randomNumber);
console.log("Floored Number:", flooredNumber);
console.log("Rounded Number:", roundedNumber);

let otp = Math.floor(100000 + Math.random() * 900000); // Generating otp with always six digits
console.log("One Time Password:", otp);


let thirdString = " God is good  ";

console.log(thirdString.length); // length
console.log(thirdString[2]); // square bracket notation
console.log(thirdString.indexOf(".")); // indexOf()
console.log(thirdString.includes("d")); // includes 

let trimmedString = thirdString.trim(); // trim()
console.log(trimmedString.length);

let replacedWord = trimmedString.replaceAll("o", "0");
console.log(replacedWord);


/*
    Mini-Project for the first week of JS - 13/05/2026
        1. Write a function that only accepts a string, and capitalize every single word in the string and then returns the capitalized string.
        2. 
*/


// String Capitalizer
function stringCapitalizer (sentence){
    if (typeof sentence !== "string") {
        return "Invalid input!"
    }

    const words = sentence.split(" ");
    console.log(words);
    const capitlized = words.map(word => word[0].toUpperCase() + word.substring(1).toLowerCase());
    console.log(capitlized);

    return capitlized.join(" ")
    
    
    // words.map(word => word[0])
}
 

console.log(stringCapitalizer("tunde is a boy"));
console.log(stringCapitalizer("whAT iS wroNg WItH niFemI?"));


// Email Formatter
function emailFormatter (fullName, department) {
    if (typeof fullName !== "string" || typeof department !== "string") {
        return "Invalid input!"
    }

    let trimmedFullName = fullName.trim().toLowerCase().replaceAll(" ", ".");
    let trimmedDepartment = department.trim().toLowerCase();

    return trimmedFullName + "@" + trimmedDepartment + ".company.com"; 
    
}
console.log(emailFormatter("Oluwanifemi Oluyemi", "Software Development"));
console.log(emailFormatter("Ayomiposi Kehinde", "graphic Design"));


// Week 2
/*
    Operators
        1. Arithmetic Operators
            a. Addition Operator +
            b. Subtraction Operator -
            c. Multiplication Operator *
            d. Division Operator /
            e. Exponential Operator **
            f. Modulus Operator %
            g. Increment ++
            h. Decrement --

        2. Assignment Operators
            a. Normal Assignment =
            b. Add and assign Operator +=
            c. Subtract and assign Operator -=
            d. Multiply and assign Operator *=
            e. Divide and assign Operator /=
            f. Modulo and assign Operator %=
            g. Power and assign Operator **=

        3. Comparison Operators
            a. Equality Operator ==
            b. Strictly Equality Operator ===
            c. Not Equality Operator !=
            d. Strictly Not Equality Operator !==
            e. Greater than Operator >
            f. Less than Operator <
            g. Greater than or Equal to Operator >=
            h. Less than or Equal to Operator <=

        4. Logical Operators
            a. OR Operator ||
            b. AND Operator &&
            c. NOT Operator !

        5. Ternary or Conditional Operator ? :
        6. String Operations 
*/ 

let fourthNumber = 5;
let fifthNumber = 21;

console.log(fourthNumber + fifthNumber);

console.log("2" + 2);

console.log(2 ** 4);

console.log(7 % 2);

console.log(++fourthNumber);
console.log(--fifthNumber);

let sixthNumber = 14;
sixthNumber += 5;

console.log(sixthNumber);

let middleName = "Simi";
middleName += "lolowa";
console.log(middleName);

console.log(sixthNumber == 19);
console.log("2" == 2);

console.log("2" === 2);

console.log("13" != 13);
console.log("13" !== 13);


// Truthy and falsy statements
console.log(8 < 5 || "2" === 2); // OR Operator

console.log(9 <= 10 && 8 > 5); // AND Operator

console.log(!(9 < 5));


let num = 23;

let randomNum = Math.floor(1 + Math.random() * 100); // generate random number from 1 - 100

console.log(randomNum);


// Ternary Operator
randomNum === num ? console.log("Hurray!!! You got it right!") : console.log("You missed the number, try again.");



let learner = "Ayomiposi Kehinde";
let profession = "Web Developer";
let address = "No 24, Ori-apata, Adebayo Street";
let religion = "Christianity";

let introduction = "My name is " + learner + ", " + "I am a " + profession + "."
console.log(introduction);

// Template Literals
introduction = `My name is ${learner}, I am a ${profession}. I stay at ${address}. I practice ${religion}.`;
console.log(introduction);


// if...else statement
let age = 2;

// if (age < 18) {
//     console.log("You are denied entry!");
// } else {
//     console.log("Welcome, you are allowed to enter!");
// }

if (age >= 18 && age < 20) {
    console.log("You are 18 or older");
    
} else if (age >= 20) {
    console.log("You are 20 or older");
    
} else {
    console.log("I no sabi you!");
    
}

let password = "";
let passwordLength = password.length;

if (passwordLength < 10 && password.includes("@")){
    console.log("Your password cannot be less than 10 characters");   
} else{
    console.log("Your password is accepted");
    
}

// switch statement
let day = new Date().toDateString().split(" ")[0];

switch (day) {
    case "Sun":
        console.log("Today is Sunday, give your life to Christ!");
        break;

    case "Mon":
        console.log("Today is Monday, go to work!");
        break;

    case "Tue":
        console.log("Today is Tuesday, sleep!");
        break;

    case "Wed":
        console.log("Today is Wednesday, attend class!");
        break;

    case "Thur":
        console.log("Today is Thursday, fight!");
        break;

    case "Fri":
        console.log("Today is Friday, smile!");
        break;

    case "Sat":
        console.log("Today is Saturday, give up!");
        break;

    default:
        console.log("The day is not valid!");
        break;
}

/*
    Array and Array methods
        1. Square bracket notation []
        2. length
        3. indexOf()
        4. includes()
        5. slice()
        6. pop()
        7. push()
        8. shift()
        9. unshift()
        10. join()
*/ 
const fruits = ["Apple", "Banana", "Cashew", "Dates", "Eggplant", "Fig", "Guava", "Honeydew", "Icaco", "Jackfruit", "Kiwi", "Lemon"];
const animals = new Array("Antelope", "Baboon", "Cat", "Dog", "Elephant", "Fish", "Goat", "Hen", "Iguana", "Jaguar", "Kite");
console.log(fruits, animals);

console.log(fruits[0]); // dot notation
console.log(fruits.length); // length
console.log("The last item in the fruits array is", fruits[fruits.length - 1]); // using length - 1 to get always the last value
console.log(fruits.indexOf("Jackfruit")); // indexOf
// includes
console.log(fruits.includes("Eggplant"));
console.log(fruits.includes("Cucumber"));
console.log(fruits.slice(1, 4)); // slice

fruits.pop(); // pop
console.log(fruits);
fruits.push("Lime"); // push
console.log(fruits);
fruits.shift(); // shift
console.log(fruits);
fruits.unshift("Avocado") // unshift
console.log(fruits);

const joinedFruits = fruits.join(", ");
console.log(joinedFruits);


const wordsThatStayWithX = ["Xylophone", "Xylem", "Xavier", "X-ray", "Xender", ]

/*
    Destructuring an array is the method of unpacking values in an array and initializing them in new variables
*/ 

const [firstWord, secondWord, ...remainingWords] = wordsThatStayWithX;
console.log(firstWord);
console.log(secondWord);
console.log(remainingWords);
const firstSetOfCountries = ["Algeria", "Bulgaria", "China", "Denmark", "England", "Finland"];
const secondSetOfCountries = ["Gambia", "Hungary", "Iceland", "Japan", "Kenya"];
const countries = firstSetOfCountries.concat(secondSetOfCountries);
console.log(countries);

// Nested or multi-dimensional array
const nestedArray = [5, 16, 91, 20, [54, 6, [7, 33, 55, 80, [46, 78]]]];
console.log(nestedArray[2]);
console.log(nestedArray[4][2][4][1]);

/*
    Object and Object methods
        1. dot and square bracket notation 
        2. delete
        3. Object.entries()
        4. Object.keys()
        5. Object.values()
        6. Object.assign()
        7. Object.seal()
        8. Object.freeze()

*/ 

const firstClass = {
    class: "JavaScript Class",
    students: ["Oluwanifemi", "Ayomiposi"],
    noOfStudents: function (){
        return this.students.length;
    },
    tutor: "Ayodeji",
    duration: 2,
    time: "10:00 - 11:30",
    greeting: function () {
        this.students.forEach(student => console.log(
            `Hi, ${student}`
        ));
    },
};

console.log(firstClass.class);
firstClass.greeting();

console.log(firstClass["tutor"]);
console.log(firstClass["duration"]);

firstClass.duration = 1.5;

firstClass.students.push("Kelvin")
console.log(firstClass.students.length);
firstClass.venue = "Software Development Office";
console.log(firstClass);

delete firstClass.noOfStudents;
console.log(firstClass);

console.log(Object.values(firstClass));

Object.assign(firstClass, {noOfTimes: 3, time: "10:30 - 12:00"})
console.log(firstClass);


Object.seal(firstClass);
firstClass.someone = "Adedapo";
Object.freeze(firstClass);


// iteration = each time the block of is being executed
for (let i = 0; i <= 7; i++){
    console.log("Hello World", i);
}

/*
    Types of Loop
        1. for loop
            a. for...of loop
            b. for...in loop
        2. while loop
        3. do...while loop
*/ 

// for loop
for (let i = 20; i >= 1; i--){
    console.log(i);
}

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0){
        console.log(`${i} is a multiple of 7`);       
    }  
}

for (let i = 0; i < fruits.length; i++) {
    console.log(`${fruits[i].charAt(0)} is for ${fruits[i]}`);
}

// while loop
let count = 0;

// while ( count <= 20){
//     console.log(count);
//     count++    
// };

// do...while loop
// do {
//     console.log(`count is ${count}`);
//     count++
    
// } while (count > 4);

for (animal of animals){
    console.log(animal);
    
}

for (index in animals){
    console.log(index);
    
}

// Find out at least five array iteration method and how to use them 

// continue and break
for (animal of animals) {
    if (animal[0] === "I") {
        // continue;
        break;
    } else {
        console.log(animal);
    }  
}

/*
    Array Iteration Methods
        1. forEach()
        2. map()
        3. filter()
        4. find()
        5. some()
        6. reduce()
        7. every()
*/ 

const movies = ["Titanic", "Hoppers", "Mutiny", "Maze Runner", "World War Z"];

// forEach
movies.forEach((movie, index) => {
    console.log(`0${index + 1}. ${movie}.`);
});

const numArray = [25, 13, 4, 6, 98, 71, 23, 5, 40];

// map
const squaredArray = numArray.map((num) => {
    let square = num ** 2;
    return square;
})
console.log(squaredArray);

// filter
const evenNumbers = numArray.filter((num) => {
    return num % 2 === 0
});
console.log(evenNumbers);

// find
const foundNumber = numArray.find((num) => {
    return num % 2 === 0
});

console.log(foundNumber);

// some()
const isAvailable = movies.some((movie) => {
    return movie.includes("h")
});

console.log(isAvailable);

// reduce()
const output = numArray.reduce((acc, num) => acc + num, 0);
console.log(output);

// every()
const everyResponse1 = movies.every((movie) => {
    return movie.length > 1;
});
console.log(everyResponse1);

const everyResponse2 = movies.every((movie) => {
    return movie.includes("M");
})
console.log(everyResponse2);


const studentsData = [
    {name: "John Doe", gender: "Male", math: 70, eng: 65, bio: 40},
    {name: "Adetokunbo Grace", gender: "Female", math: 89, eng: 51, bio: 90},
    {name: "Oluwaseun Adebayo", gender: "Female", math: 57, eng: 61, bio: 80},
    {name: "Bamidele Badmus", gender: "Male", math: 72, eng: 85, bio: 45},
    {name: "Babara Feminikan", gender: "Male", math: 90, eng: 45, bio: 63},
];

studentsData.forEach((student, index) => {
    student.totalScore = student.math + student.eng + student.bio;
    console.log(`0${index + 1}. Name: ${student.name} | Gender: ${student.gender} | Total Score: ${student.totalScore}`);
});

const entireScore = studentsData.reduce((acc, student) => acc + student.totalScore, 0);

console.log("Class Average Score:", entireScore / studentsData.length);


/*
    Function and its types
        1. Function declaration
        2. Function expression
        3. Arrow function
        4. Higher-order function
        5. Anonymous function
        6. Callback function
        7. Immediately Invoked Function Expression (IIFE)
*/ 

function greet (name){
    let greeting = `Hello ${name}`;

    return greeting;
};

console.log(greet("Oluwanifemi"));
console.log(greet("Ayomiposi"));

console.log(add(6, 7));

// function declaration - hoisting
function add (a, b) {
    return a + b;
};

// function expression
const multiply = function (a, b) {
    return a * b;
}
console.log(multiply(5, 5));


// arrow function 
const subtract = (a, b) => a - b;

console.log(subtract(12, 3));

// higher-order function
function reverseWord (word, validator) {
    let isValidated = validator(word);

    if(!isValidated) {
        return `${word} is not a string!`
    }

    const wordArray = word.split("");
    const reversedWord = wordArray.reverse().join("");
    return reversedWord[0].toUpperCase() + reversedWord.slice(1).toLowerCase();

}

// callback function
function stringValidator(word) {
    if (typeof word !== "string") {
        return false
    } else {
        return true
    };
}

console.log(reverseWord("Oluwanifemi", stringValidator));
console.log(reverseWord(89, stringValidator));

// anonymous functions
// setTimeout(() => {
//     alert("It is already 5 seconds")
// }, 5000);

// IIFE
// (
//     () => alert("This was executed immediately!")
// )();

/* 
    Scopes
        1. Global scope
        2. Local scope
        3. Block scope
        4. Lexical scope
*/

let place = "Christore Building"; // global scope

console.log(place);

function showPlace (){
    console.log("Location:", place);
};

showPlace();

const DAY = "Joshua";

function displayDate () {
    const DAY = new Date(); // local scope
    return DAY;
    
}
console.log(displayDate());
console.log(DAY);



const sumUpTwoNumbers = () => {
    const firstNum = 12; // local scope
    const secondNum = 13; // local scope
    
    const addUp = () => {
        return firstNum + secondNum; // lexical scope
    }

    return addUp();
}

console.log(sumUpTwoNumbers());

/*
    Asynchronous JS
        1. Callback
        2. Promise
        3. Async/await
*/ 

// console.log("Task 1");
// setTimeout(()=>{
//     console.log("Task 2");
// }, 5000);
// console.log("Task 3");

// Asynchronous JS to fetch data from a fake REST API
const fetchData = async () => {
    // try catch block
    try {
        // getting response from the API
        const response =  await fetch("https://jsonplaceholder.typicode.com/todos");
        
        // extracting the data from the response
        const data = await response.json();
    
        // creating a new section element
        const sec = document.createElement("section");

        // giving the section a class name
        sec.setAttribute("class", "todos");

        // adding the section into the body
        document.body.appendChild(sec);

        // extracting the first 20 todo task from the data
        data.slice(0, 20).forEach(todo => {
            // reply 
            const reply = `${todo.id}. ${todo.title} | status: ${todo.completed === true ? "completed" : "not completed"}`;

            // creating a paragraph for each todo
            const paragraph = document.createElement("p");

            // populating each paragraph with a reply
            paragraph.textContent = reply;

            // adding each paragraph to the section
            sec.appendChild(paragraph)
        });
       
    } catch (error) {
        console.error("Fetch data error:", error);
        
    }
}

// fetchData();

// console.log("Ayodeji");

// setTimeout(() => {
//     console.log("My name is Oluwanifemi");
    
// }, 7000);

const fetchWeather = async () => {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=7.621111&lon=5.221389&appid=0c0bc90ac98f0e6a2e29cd58a69f1cb8");

        console.log(response);

        const data = await response.json();

        console.log(data);
        
        
    } catch (error) {
        console.error("Fetch Weather:", error);
        
    }
}

// fetchWeather();


/*
    DOM and Dom Manipulation
        1. Accessing the DOM
            a. getElementById()
            b. getElementsByClassName()
            c. getElementsByTagName()
            d. querySelector()
            e. querySelectorAll()
        
        2. Manipulating Elements' Content
            a. InnerHTML 
            b. innerText
            c. textContent
            d. src

        3. Manipulating Element's Attribute
            a. getAttribute()
            b. setAttribute()
            c. removeAttribute()

        4. Manipulating Element's Styles
            a. style
            b. classList
        
        5. Working with elements
            a. creating elements
            b. adding elements
            c. removing elements



*/ 

const hiya = document.getElementById("hiya"); // getElementById

console.log(hiya);


const nife = document.getElementsByClassName("sect"); // getElementsByClassName

console.log(nife);

const bigParagraphs = document.querySelectorAll(".big-paragraph");
console.log(bigParagraphs);


hiya.textContent = "<b style=\"color: green;\">Yes, that is true.</b>"

console.log(hiya.getAttribute("id"));

hiya.setAttribute("class", "random-span");

const clickBtn = document.querySelector(".click");

setTimeout(() => {
    clickBtn.removeAttribute("disabled");
}, 2000);

// clickBtn.style.borderRadius = "5px";
// clickBtn.style.padding = "5px 10px";



clickBtn.classList.add("primary-btn");

const newParagraph = document.createElement("p");

console.log(newParagraph);

const newLink = document.createElement("a");
newLink.textContent = "Visit our Website"
const link = newLink.setAttribute("href", "https://www.kinplusgroup.com");
console.log(newLink);
newParagraph.innerHTML = "It's a beautiful day. &nbsp;"

document.body.appendChild(newParagraph);

newParagraph.appendChild(newLink);


// Event Listeners
const knife = document.querySelector("#knife");

knife.addEventListener("mouseover", ()=> {
    newLink.classList.toggle("hidden");
})

const cardDetails = [
    {src: "https://www.flaticon.com/free-icon/folder_10828574?term=folder&page=1&position=2&origin=search&related_id=10828574", title: "CSS Templates", content: "TemplateMo website is the best for you to explore and download free website templates."},
    
    {src: "https://www.flaticon.com/free-icon/folder_10828574?term=folder&page=1&position=2&origin=search&related_id=10828574", title: "HTML5 Web Pages", content: "Templates are based on Bootstrap 5 CSS framework. You can easily adapt or modify based on your needs."},
    
    {src: "https://www.flaticon.com/free-icon/battery_16740458?term=rechargable+battery&page=1&position=9&origin=search&related_id=16740458", title: "Responsive Design", content: "All of our CSS templates are 100% free to use for commercial or business websites."},

    {src: "https://unsplash.com/photos/sailboat-anchored-in-water-with-mountains-and-swimmers-at-sunset-U9rj5Ewz0z8", title: "Mobile and Tablet", content: "Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility."},
];


function createSection (){
    const sect = document.querySelector("#sect");
    
    const cardBlock = document.createElement("div");
    
    let content;
    
    cardDetails.forEach((card, index)=> {
        content = `
        <div>
        <img src=${card.src}>
        <h2>${card.title}</h2>
        <p>${card.content}</p>
        </div>
        `
        
        cardBlock.innerHTML += content;
        
        sect.appendChild(cardBlock);
    })
    
}

createSection()

const newPara = document.querySelector("#new");
console.log(newPara.style);



// calculate logic
const calBtn = document.querySelector("#calculate");

// Calculate button
calBtn.addEventListener("click", () => {
    const firstNumber = document.querySelector("#firstNumber");
    const secondNumber = document.querySelector("#secondNumber");
    const operator = document.querySelector("#operator").value;
    


    const firstValue = +firstNumber.value;
    const secondValue = secondNumber.value * 1;

    let result;

    if (operator === "add") {
        result = firstValue + secondValue;
    } else {
        
    }

    alert(result);
});




