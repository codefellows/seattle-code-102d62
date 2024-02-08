/*
  Function Name: numberOfDogs
  Parameters: none
  Output:sentence about the dogs to the document
  Return: None
*/

function numberOfDogs() {
  // Declare a variable called "dogs"
  // Assign it the value of whatever "prompt" does
  // Prompt will pop a window and ask a question
  let dogs = prompt("How many dogs do you have?");
  dogs = Number(dogs);
  let sentence = "Wow! You have " + dogs + " dogs";
  document.write(sentence);
}

/*
  Function name: doYouLikeCats
  Parameters: None
  Output: None
  Return: string about cats
*/

function doYouLikeCats() {
  let userLikesCats = confirm("Would you like a cat?");
  if( userLikesCats ) {
    return "Why do you like cats?";
  } else {
    return "Smart!";
  }
}
