function numberOfDogs() {
  let dogs = prompt("How many dogs do you have?");
  document.write(`Cool! You have ${dogs} just like me... (maybe)`)
}


function doYouLikeCats() {
  let cats = confirm("Do you like cats?");
  if( cats ) { return "Why?"; }
  else { return "Smart!"; }
}

function rateMe() {
  let rating = prompt("On a scale of 1-5 how much do you like me?")
  rating = Number(rating);
  for( let i = 0; i < rating; i++ ) {
    document.write("⭐️");
  }
}

// This version will run forever,  until you guess black
function favoriteColor() {

  let answer = '';

  while ( answer != "black" ) {
    answer = prompt("What is your favorite color?");
    if( answer != "black" ) {
      alert("Boo");
    }
    else {
      alert("Yah!");
    }
  }

  document.write("Black is awesome");
}

// this version will give you 5 tries
function favoriteColorMaxGuesses() {

  let numberOfGuesses = 0;

  while ( numberOfGuesses < 5 ) {
    let answer = prompt("What is your favorite color?");
    if( answer != "black" ) {
      alert("Boo");
      numberOfGuesses++;
    }
    else {
      alert("Yah!");
      break; // Force Stop the while loop
    }
  }

  document.write("Black is awesome");
}
