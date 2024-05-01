#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Define account balance
let myBalance = 50000;
console.log(chalk.cyan.bold(`
                                 _____________________________________
                                |                                     |
                                |     ___________________________     | 
                                |    |                           |    |
                                |    |     Insert Your Card      |    |   
                                | [■]|                           |[■] |
                                | [■]|           ____            |[■] |
                                | [■]|          |ATM |           |[■] |
                                | [■]|          |card|           |[■] |
                                |    |___________________________|    |
                                |                                     |
                                |_____________________________________|
                                            
                                           
`));
const myPin = 1234;
//Promp user for input of pin
const PinCodeAns = await inquirer.prompt([
    {
        name: "pincode",
        type: "number",
        message: "Enter Your 4 Digit Pin Code",
    },
]);
//Check if pin is corrected then prompt user to perform different operations
if (PinCodeAns.pincode === myPin) {
    //function to start atm machine
    while (true) {
        const operation = await inquirer.prompt([
            {
                name: "operation",
                type: "list",
                choices: ["Balance Inquiry", "Cash Withdrawal", "Fast Cash", "Fund Transfer", "Exit"],
                message: "What would you like to do?"
            }
        ]);
        if (operation.operation === "Balance Inquiry") {
            console.log(`Your current balance is ${myBalance}`);
        }
        if (operation.operation === "Cash Withdrawal") {
            const amount = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter Your Amount",
                }
            ]);
            if (amount.amount > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= amount.amount;
                console.log(`Your Remaining balance is ${myBalance}`);
            }
        }
        if (operation.operation === "Fast Cash") {
            const cashAmount = await inquirer.prompt([
                {
                    name: "amount",
                    type: "list",
                    message: "Enter Your Amount",
                    choices: ["500", "1000", "2000", "5000", "10000"],
                }
            ]);
            if (cashAmount.amount > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= cashAmount.amount;
                console.log(`Your Remaining balance is ${myBalance}`);
            }
        }
        if (operation.operation === "Fund Transfer") {
            const transferAmount = await inquirer.prompt([
                {
                    name: "operation",
                    type: "list",
                    message: "Select any one",
                    choices: ["Allied Bank", "City Bank", "Albarka Bank", "CBL Bank"],
                },
                {
                    name: "amount",
                    type: "number",
                    message: "Enter Your Amount",
                },
            ]);
            if (transferAmount.amount > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= transferAmount.amount;
                console.log("Your Amount is tranferred");
                console.log(`Your Remaining balance is ${myBalance}`);
            }
        }
        if (operation.operation === "Exit") {
            console.log("Thank you for using ATM");
            process.exit();
        }
    }
}
else {
    console.log("Invalid Pin. Try Again");
}
