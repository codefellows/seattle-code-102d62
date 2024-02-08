/*
  1. Function Name: takeVacation
  2. Parameter: person
  3. Output: Console Messages (conditional)
  4. Return: none
*/

function takeVacation( person ) {
  if( person ) {
    // person is true
    console.log("Enjoy your trip with " + person);
  } else {
    // person is false
    console.log("Well, you will still have fun alone.");
  }
}

// Call or "Invoke" the function
takeVacation("Cathy"); // argument is "Cathy"
takeVacation(); // argument is null


/*
   Function Name: greeting();
   Parameter: name
   Output: none
   Return: a greeting with the person's name in it
*/

function greeting( name ) {
  // let output = "Nice to meet you " + name; // concatenation
  let output = `Nice to meet you ${name}`; // template literal
  return output;
}

// Invoke greeting with an argument
// assign it's return value to a variable
let officialGreeting = greeting("John");
console.log(officialGreeting);


/*
  Function Name: takeOutTheGarbage
  Parameters: None
  Output: None
  Return: boolean
*/
function takeOutTheGarbage() {
  let weDidIt = false; // assume job is not done, flag "false"
  let trashIsInBin = false;  // do the work?
  let lidClosed = true;
  let binAtCurb = true;     // do the work?

  // if( ! trashIsInBin ) { return false; }
  // if( ! lidClosed ) { return false; }
  // if( ! binAtCurb ) { return false; }
  // return true;

  if ( (trashIsInBin || lidClosed) && binAtCurb  ) { weDidIt = true; }
  return weDidIt;
}

let jobComplete = takeOutTheGarbage();
console.log(jobComplete);
