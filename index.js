function add(a,b){
    return "something";
}
function add(a,b){
    return a + b;
}
function subtract(a,b){
return a - b;

}
function multiply(a,b){
return a * b;
}
function divide(a,b){
return a / b;

}

number = 5;

function add5() {
  return (number += 5);
}

function divideBy3() {
  return (number /= 3);
}

divideBy3(); //=> 3.3333333333333335

add5(); //=> 8.333333333333334

// reset number
number = 5;

