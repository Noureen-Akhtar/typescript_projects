#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Generate random number
let randomNumber = Math.floor(Math.random()*100 + 1);

// Number of trials
let numberOfTrials = 0;

//  Color Animation
const successAnimation = chalk.green.bold;
const errorAnimation = chalk.red.bold;
const infoAnimation = chalk.blue.bold;

console.log(infoAnimation("\n Welcome to the Number Guessing Game!"));
console.log(infoAnimation("I have chosen a number between 1 and 100. Try to guess it !\n"));
console.log(chalk.yellow.bold(`

                     ?        3
             /_/'.  ?            67
            ( O.O )           5
             > ^ <         13      7
            '___/               ?
                
`));

// function to start the game
async function startGame() {

// prompt user for guess
    let {guess} = 
         await inquirer.prompt(
            [

                {      
                     name :"guess",
                     type : "input",
                     message :"Enter your guess: ",
                     validate : (input) =>{
                        if(isNaN(input) || input < 1 || input > 100) {

                            return "Invalid input.Please enter a valid number between 1 and 100";
                        }
                        return true;
                    }
                     
                },  
            ]
    );

    //All User inputs converted to a number
    guess = parseInt(guess); 

    //increment number of trials by 1
    numberOfTrials++;

    if (guess === randomNumber){

    console.log(successAnimation(`Congratulations! You guessed the correct number in ${numberOfTrials} Trials!`));
    console.log(successAnimation(`
                    
                    ________  
                   *        *
                   *   Win  *
                    *      *
                     *    *
                    ___||___
                    |______|
`));
    process.exit();

    }
    else if(guess < randomNumber){

    console.log(errorAnimation("You guessed Too Low! Guess Again"));

    startGame();
     
    }
    else if (guess > randomNumber)
    {

    console.log(errorAnimation("You guessed Too High! Guess Again"));

    startGame();

    }
     else{
        process.exit();
    }
}   

// function to start the game   
startGame();