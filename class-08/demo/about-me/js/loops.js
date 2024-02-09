// The genesis of "Off By 1 Errors"
let age = 50;
console.log(age);
console.log(age + 1);
console.log(age);
console.log(age++); // changes value AFTER the code runs
console.log(age);
console.log(++age); // changes value BEFORE the code runs

console.log( ++age, age, age++, age);

// Order of Operations
console.log( age++ );

let numbers = 10;

for( let i=1; i <= 10; i++ ) {
  console.log(i);
}

// == Kinda Equal To (value)
// === Totally Equal To (strict - type + value)
// > Greater Than
// < Less Than
// >= Greater than or equal to (gte)
// <= Less Than or equal to (lte)

console.log('------ WHILE LOOP -------');

let number = 7;
while( number > 0 ) {
  console.log(number);
  number--;
}
