let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let numbers_asc = [...numbers].sort(function (a, b) {
  return a - b;
});
let numbers_dsc = [...numbers].sort(function (a, b) {
  return b - a;
});

console.log(numbers_asc);
console.log(numbers_dsc);
