
const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(array) {
  let mul = 1;
  array.forEach(element => {
    mul *= element;
  });
  return mul;
};

const power = function(a,b) {
	let po = a;
  for (let index = 1; index < b; index++){
    po = po * a;   
  }
  return po;
};

const factorial = function(a) {
  let fac = 1;
  if (a === 0) {
    fac = 1;
  } else {
    for (let index = a; index > 0; index--) {
      fac *= index;
    };
  };
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
