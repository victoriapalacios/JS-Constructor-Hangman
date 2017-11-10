var word = require('./word.js');
var letter = require('./letter.js');
var inquirer = require("inquirer");
var lettersGuessed = [];
var guessesLeft = 10;

// Below is where we use the inquirer package to ask the user to guess a letter.5
inquirer
  .prompt([
    {
      type: "input",
      message: "Please guess a letter.",
      name: "guess"
    },
    // {
    //   type: "list",
    //   message: "Would you like to play again?",
    //   choices: ["Yes, play again!", "No, I am done playing"],
    //   name: "new"
    // }
  ])

  .then(function(inquirerResponse) {
    // if (inquirerResponse.confirm) {
      console.log("\nYou guessed " + inquirerResponse.guess + "! That is CORRECT! :)");
    // }
    // else {
      console.log("\nYou guessed " + inquirerResponse.guess + "! That is INCORRECT! :(");
      guessesLeft--
    // }

  lettersGuessed.push(inquirerResponse.guess);
  console.log("Letters you have guessed: " + lettersGuessed);
  console.log("Guesses Left: " + guessesLeft);

  });

