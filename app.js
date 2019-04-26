// // Three ways to create variables
// // -- var, let & const

// // var
// var learning = 'javascript';

// console.log(learning);

// var days99 = 99;

// console.log(days99);

// // let & const
// console.log('------- let & const --------');
// // let
// let learner = 'noob';

// console.log(learner);

// let shoppingCart = ['Product1', 'Product2', 'Product3'];

// console.log(shoppingCart);

// // Const Variables - must be initialised with a value
// const name = 'James';
// console.log(name);

// // Strings
// let name2;

// // Quotes
// name2 = 'John Pope';

// // Strings

// let subject = "Javascript";

// console.log(`Mordern ${subject}`);
// console.log(typeof subject);

// // --- Numbers to Strings

// // --Boolean to String
// let output;

// output = String(true);

// // --Date to String
// output = new Date();
// output = String(output);

// // --Arrary into string

// output = [1,2,3,4];
// output = String(output);

// // --to String for objects
// output = true.toString();
// output = [1,2,3].toString();
// output = {name: 'Juan'}.toString();


// console.log(output);
// console.log(typeof output);

// //-- Template Literals or Template Strings
// const product1 = 'Pizza',
//       price1 = 30,
//       product2 = 'Hamburger',
//       price2 = 40;

// // --Old Method
// let html;

// html = '<ul>' +
//         '<li>Item: ' + product1 + '</li>' +
//         '<li>Price: ' + price1 + '</li>' +
//         '<li>Item: ' + product2 + '</li>' +
//         '<li>Price: ' + price2 + '</li>' +
//         '<li>Total: ' + (price1 + price2) + '</li>' +
//         '</ul>';

// // --new Method (Template Strings or Template literals)
// html = `
//         <ul>
//             <li>Item: ${product1} </li>
//             <li>Price: ${price1} </li>
//             <li>Item: ${product2} </li>
//             <li>Price: ${price2} </li>
//             <li>Total: ${price1 + price2} </li>
//         </ul>

//     `;


// let app = document.querySelector('#app');
// app.innerHTML = html;

// //--Creating an array

// const numbers = [10,20,30,40,50];

// console.log(numbers);
// console.log(numbers[2]);

// -- Array of months
// const months = new Array('January', 'February', 'March',
//  'April', 'May', 'June');

// --Check length of Array
// console.log(months.length)
// console.log(Array.isArray(months));

// Change values of arrays

// months[1] = 'New Month';
// console.log(months.indexOf('January'));
// //--Add more items into the array(end of the array)
// months.push('July')

// // -- Add more items into the array (beginning of array)
// months.unshift('Month 0');

// // Add an element in the middle
// months.splice(3, null, 'a New Month');
// console.log(months);

// //-- Remove  element from the end
// months.pop();
// console.log(months);

// //-- Remove element from beginning
// months.shift();
// console.log(months);

// // -- Remove from the middle of array
// months.splice(3, 1);
// console.log(months);

// //-- reverse
// months.reverse();
// console.log(months);

// //-- Concatenate 2 arrays
// const array1 = [1,2,3],
//       array2 = [9,8,7];

// console.log(array1.concat(array2));

// // -- order an array (sort)
// let fruits = ['Banana', 'Apple', 'Strawberry', 'Orange',
//               'Watermelon'];

// console.log(fruits.sort().reverse());

// //--- sort numbers only sorts the first number
// const arrayNumbers = [3,1,100,4,7,7,3,1,25,14,67];
// arrayNumbers.sort();



// // -- Order from lower to greater numbers
// const arrayNumbers = [3,1,100,4,7,7,3,1,25,14,67];

// arrayNumbers.sort(function(number1,number2) {
//     return number1 - number2;
// });

// console.log(arrayNumbers);

// // -- Order from greater to lower numbers
// const arrayNumbers = [3,1,100,4,7,7,3,1,25,14,67];

// arrayNumbers.sort(function(number1,number2) {
//     return number2 - number1;
// });

// console.log(arrayNumbers);

//  console.log(months);
//  console.log(months[5]);

// // -- Mixed values
// const mixedArray = ['Hello', 10, true, 'Yes', null];

// console.log(mixedArray);

// // -- Objects
// const person = {
//     firstname: 'Tshepo',
//     lastname: 'Motau',
//     job: 'Web Developer',
//     email: 'email@email.com',
//     age: 44,
//     favoriteMusic: ['House', 'Hip-Hop', 'Pop'],
//     living: {
//         city: 'Johannesburg',
//         country: 'South Africa'
//     },
//     bornYear: function () {
//         return new Date().getFullYear() - this.age;
//     },
//     getJob: function() {
//         return this.job;
//     }
// }

// console.log(person.firstname);
// console.log(person.age);
// console.log(person.favoriteMusic);
// console.log(person.living);
// console.log(person.bornYear());
// console.log(person.getJob());

// // --Array of objects

// let cars = [
//     {model: 'Mustang', engine: 6.0},
//     {model: 'Camaro', engine: 6.1},
//     {model: 'Challenger', engine: 6.1}
// ]

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i].model);
// }

//  console.log(cars);

// // -- Const in Arrays & Objects

// const newArray = [1,2,3];

// newArray[0] = 'New element in the array';

// console.log(newArray);

// const car = {
//     name: 'Mustang',
//     engine: 6.4
// }

// car.name = 'Challenger';

// console.log(car);

// ///-- Functions

// // function declation

// function helloVisitor (firstName = 'Visitor', lastName = '') {
//     console.log(`Hello ${firstName} ${lastName} & Welcome to our website`);
// }

// // call function

// helloVisitor('tshepo');

// function addition(number1, number2) {
//     return number1 + number2
// }

// let result;

// result = addition(1,2);
// result = addition(11,2);
// result = addition(5,7);

// console.log(result);


// // -- Function expression

// const sum = function(number1 = 0, number2 = 0) {
//     return number1 + number2;
// }

// console.log(sum(3,3));
// console.log(sum(80,3));
// console.log(sum(78,3));
// console.log(sum());

// // -- Functions that are invoked immediately (IIFEs)
// // Immediately-invoked function expression

// (function(){
//     console.log('Yes!! This is an IIFE')
// })();

// // passing parameters IIFEs
// (function(technology){
//     console.log('Learning '+ technology);
// })('Javascript');

// // Property methods
// const musicPlayer = {
//     play: function(id) {
//         console.log(`Playing song with ID: ${id}`);
//     },
//     pause: function() {
//         console.log('Pause...');
//     }
// }

// musicPlayer.play(30);
// musicPlayer.pause();

// // Methods can be outside the object
// musicPlayer.remove = function(id) {
//     console.log(`Removed from playlist, ID: ${id}`);
// }

// musicPlayer.remove(20);

// alert();
// prompt();
// confirm();

// The odin project challenges.
//

// // add the capitalized letter to the rest of the string.
// function capitalize(word = '') {
//     let result = word.toLowerCase();
//     let firstLetter = result.charAt(0).toUpperCase();
//     return firstLetter + result.slice(1);
// }

// console.log(capitalize('this Is iNteresting'));

// // get the last string using substr

// function lastLetter(letter = '') {
//     return letter.substr(-1);
// }

// console.log(lastLetter('wonderful'));

// --- Dates
