#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.yellow.bold(`

                       ____________________________________________
                      |                                            |
                      |         Word And Character Counter         |
                      |                                            |
                      |____________________________________________|                                            |

`));
//prompt user to enter text/sentence
const wordCharCount = await inquirer.prompt([
    {
        name: 'text',
        type: 'input',
        message: 'Enter the Text to count the words and characters: ',
    }
]);
const text = wordCharCount.text;
//trim() removes whitespace from both ends of a string and split string into an array without spaces
const words = text.trim().split(" ").length;
//line spacing
console.log("\n");
//console word count
console.log(chalk.blue.bold(`Words: ${words}`));
//split string into an array without spaces and join (concatenate) elements of an array  into a single string
const charCount = text.split(" ").join("").length;
//console chararacter count
console.log(chalk.blue.bold(`Characters: ${charCount}`));
//consle ending lines
console.log(chalk.cyan.bold("Thank you for using Word Counter\n"));
