#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green.bold(`
                                                          
                      USD               JPY                                  $
             GBP           --------->              AUD                    $     $
                  INR           <---------                              $         $          
                                         CNY                         $   CN     $   
                                                                  $          $
                                                                    $     $
                                                                       $
                                                                    
                                                                                  
`));
console.log(chalk.yellow.bold("\nWelcome to Currency Converter App!\n"));
const exchangeRates = {
    USD: 1,
    EUR: 0.93,
    GBP: 0.80,
    CHF: 0.91,
    CNY: 7.25,
    JPY: 158.32,
    AUD: 1.53,
    SAR: 3.75,
    INR: 83.40,
    PKR: 278.58,
};
async function convertCurrency() {
    let { action } = await inquirer.prompt({
        name: "action",
        type: "list",
        message: "What do you want to do?",
        choices: ["Currency Convertion", "Check Currency Exchange Rate", "Exit"],
    });
    if (action === "Currency Convertion") {
        let user_prompt = await inquirer.prompt([
            {
                name: "from",
                type: "list",
                message: "Select the currency you want to convert from: ",
                choices: ['USD', 'EUR', 'GBP', 'CHF', 'CNY', 'JPY', 'AUD', 'SAR', 'INR', 'PKR'],
            },
            {
                name: "to",
                type: "list",
                message: "Select the currency you want to convert to: ",
                choices: ['USD', 'EUR', 'GBP', 'CHF', 'CNY', 'JPY', 'AUD', 'SAR', 'INR', 'PKR'],
            },
            {
                name: "amount",
                type: "number",
                message: "How much do you want to convert: ",
            },
        ]);
        let from = exchangeRates[user_prompt.from];
        let to = exchangeRates[user_prompt.to];
        let amount = user_prompt.amount;
        let baseAmount = amount / from;
        let convertedAmount = baseAmount * to;
        console.log(user_prompt);
        console.log(chalk.green.bold(`Converted Amount = ${convertedAmount.toFixed(2)}`));
        convertCurrency();
    }
    else if (action === "Check Currency Exchange Rate") {
        console.log(exchangeRates);
        convertCurrency();
    }
    else if (action === "Exit") {
        console.log(chalk.blue.bold("Thanks for using Currency Converter App!"));
        process.exit();
    }
}
//call the function
convertCurrency();
