console.log("the sum of 1 and 2 equals");
let number1 = 10;
let number2 = 20;
console.log(sum(number1, number2));
console.log(difference(number1, number2));
console.log(multiplication(number1, number2));
console.log(division(number1, number2));

// + button
function plusbuttonaction() {
  //select the inputelement with id number1
  let num1 = document.querySelector("#number1");
  //select the inputelement with id number2
  let num2 = document.querySelector("#number2");
  //select the p element with id result
  let result = document.querySelector("#result");

  //change the text value of the result element in the DOM
  result.innerText = sum(num1.value, num2.value);
}

function add1() {
  result.innerHTML = 1;
  console.log("add1");
}

// - button
function minusbuttonaction() {
  let num1 = document.querySelector("#number1");
  let num2 = document.querySelector("#number2");
  let result = document.querySelector("#result");
  result.innerText = difference(num1.value, num2.value);
}

// multiplication button
function multiplicationbuttonaction() {
  let num1 = document.querySelector("#number1");
  let num2 = document.querySelector("#number2");
  let result = document.querySelector("#result");
  result.innerText = multiplication(num1.value, num2.value);
}

// / button
function divisionbuttonaction() {
  let num1 = document.querySelector("#number1");
  let num2 = document.querySelector("#number2");
  let result = document.querySelector("#result");
  result.innerText = division(num1.value, num2.value);
}
//this function returns the sum of 2 numbers
function sum(number1, number2) {
  number1 = parseInt(number1);
  number2 = parseInt(number2);
  return number1 + number2;
}

//this function returns the difference of 2 numbers
function difference(number1, number2) {
  number1 = parseInt(number1);
  number2 = parseInt(number2);
  return number1 - number2;
}

//this function returns the multiplication of 2 numbers
function multiplication(number1, number2) {
  number1 = parseInt(number1);
  number2 = parseInt(number2);
  return number1 * number2;
}

//this function returns the division of 2 numbers
function division(number1, number2) {
  number1 = parseInt(number1);
  number2 = parseInt(number2);
  return number1 / number2;
}
