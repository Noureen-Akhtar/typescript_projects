#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.green('Lets start Maths fun!'));

console.log(chalk.cyan(`
                     _____________________
                    |  _________________  |
                    | |              0. | |
                    | |_________________| |
                    |  ___ ___ ___   ___  |
                    | | 7 | 8 | 9 | | + | |
                    | |___|___|___| |___| |
                    | | 4 | 5 | 6 | | - | |
                    | |___|___|___| |___| |
                    | | 1 | 2 | 3 | | x | |
                    | |___|___|___| |___| |
                    | | . | 0 | = | | / | |
                    | |___|___|___| |___| |
                    |_____________________|
        
    `));

    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "No1",
            message: chalk.blue("Enter the 1st Number ="),
        },
        {
            type: "number",
            name: "No2",
            message: chalk.blue("Enter the 2nd Number ="),
        },
        {
            type: "list",
            name: "Operator",
            message: chalk.green("Kindly select only one operator to perform operation: (using Arrow Key)"),
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
    ]);
    

if (answers.Operator === 'Addition')
 {
    console.log(chalk.yellow(`Your Result is: ${answers.No1 + answers.No2}`));
}
else if (answers.Operator === "Subtraction") {
    console.log(chalk.yellow(`Your Result is: ${answers.No1 - answers.No2}`));
}
else if (answers.Operator === "Multiplication") {
    console.log(chalk.yellow(`Your Result is: ${answers.No1 * answers.No2}`));
}
else if (answers.Operator === "Division") {
    console.log(chalk.yellow(`Your Result is: ${answers.No1 / answers.No2}`));
} 
else{
    console.log(chalk.red("Kindly enter the valid number!"));
}  

console.log(chalk.cyan("Thank you for using the calculator."));