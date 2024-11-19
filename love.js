document.getElementById("fun").innerHTML = "javaScript is fun 	&#128517;";

var firstName = "ramjan";
var lastName = "Ali";
var age = 30;

var total = firstName + lastName + age;
console.log(age);

console.log(total);

var a = 10;
var b = parseInt(25.5);
var c = parseFloat(15.7);

console.log(a + b);
console.log(a + c);

//----------------------------------------------
var p = 0.1;
var q = 0.2;
var total = p + q;

console.log((p + q).toFixed(4));
console.log(total.toFixed(5));

console.log(10 / 3);

console.log(10 % 3);
//-----------------------------------------------
var x = 20;
var y = 10;
console.log(x + y);

console.log(40 + "2");
console.log(40 - "20");
console.log(10 * "2");
console.log(10 / "3");
console.log(10 % "3");

//-----------------------------------------------

var hight = 5.8;
if (hight > 5.2) {
  console.log("i do not love her");
} else {
  console.log("I love her");
}

var hight = 5.8;
if (hight < 5.2) {
  console.log("i do not love her");
} else {
  console.log("I love her");
}

// complex condition

var salary = 25000;
var hasCar = false;
var isBcs = true;

if ((salary > 20000 && hasCar == true) || isBcs == true) {
  console.log("You are the best person");
}

//-----------------------------------

const age1 = 64;
const price = 500;

if (age1 <= 12) {
  console.log("eat for free");
}
 else if (age1 >= 60) {
  const discound = (price * 50) / 100;
  const payAmaunt = price - discound;
  console.log(payAmaunt);
}


//----------------------------------
/**
 * Tarnar-  three Parts
 * 
 */

const old = 20;
if(old >= 18){
  console.log('You can vote');
}
else{
  console.log('You can Not vote');
}

// short hands
const prices = 50;
prices >=45 ? console.log('I con not buy') : console.log('I buy it');



/**
 * 
 */

let money = 500;
const isLeader = false;
if(isLeader === true){
  money = 0;
}
else{
  money = money + 100
}
// console.log(money);

money = isLeader === false ? 0 : money + 100; // man assa na nex time solve

//----------------


const ispassed = false;
if(!ispassed){
  console.log('You are a bad student');
}
else{
  console.log('You are a good student');
}


/**
 * array-----------------------------------------------------------
 */

let numbers = [12, 16, 20, 45, 48, 75]
console.log(numbers);
console.log(numbers.length);

const third = numbers[3];
console.log(third);

numbers[4] = 50;
console.log(numbers);

// push-added last element in array|| pop- remove last element in array
// unshift-added first element in array|| shift- remove frist element in array





