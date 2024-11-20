
/**
 * while loop--------------------
 */



let num = 50;
while(num < 100){
  console.log(num);

  num = num + 1;
}



let num1 = 1;
let sum = 0;
while(num1 <= 10){
  console.log(num1);
  sum = sum + num1;
  console.log('sum', sum);
 num1++;
}



// even number solve----------

let num2 = 1;
while(num2 <= 20){
  console.log(num2);
  if(num2 % 2 ===0){
    console.log( 'even', num2);
  }
  num2++;
}


// odd number solve----------

let num3 = 1;
while(num3 <= 20){
  console.log(num3);
  if(num3 % 2 ===0){
    console.log( 'odd', num3);
  }
  num3 = num3 + 2;
}



/**
 * for loop ---------------
 */



for(let p = 1; p <= 10; p = p + 1){
  console.log(p);
}











