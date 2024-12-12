let result;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

// #1 Rewrite the code using the conditional operator
let result = (a + b < 4) ? 'Below' : 'Over';

//----------------------------------------------------------------------------------

if (x > 10) {
  message = 'Greater';
} else if (x === 10) {
  message = 'Equal';
} else {
  message = 'Smaller';
}

// #2 Rewrite the code using the conditional operator

let message = ( x > 10) ? 'Greater': (x === 10)? 'Equal' : 'Smaller';

//----------------------------------------------------------------------------------

let result;
if (age >= 18) {
  result = 'Adult';
} else if (age >= 13) {
  result = 'Teenager';
} else {
  result = 'Child';
}

// #3 Rewrite the code using the conditional operator

let result = (age >= 18) ? "Adult" : (age >= 13) ? "Teenager" : "Child";

