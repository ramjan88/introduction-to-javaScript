
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

// incrimental loop

for(let p = 1; p <= 10; p = p + 1){
  console.log(p);
}



let sum1 = 0;
for(let q = 1; q <= 10; q = q + 1){
  sum1 = sum1 + q;
  console.log(q);
}

console.log( 'sum of the number', sum1);


// decrimantal loop

for(let n = 10; n >= 0; n--){
  console.log(n);
}


let r = 50;
while(r >=20){
  console.log(r);
  r--;
}



let m =0;
while(m <20){
  m++;
  if( m % 5 ===0)
    break;
  
  console.log(m);
}




