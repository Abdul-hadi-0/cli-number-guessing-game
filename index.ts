#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log("\n\t\tWELCOME TO MY - CLI NUMBER GUESSING GAME\n");

const randomNumber = Math.floor(Math.random() * 5 );

const answer = await inquirer.prompt ([
    {
        name: "userGuessedNumber",
        type: "number",
        message: (chalk.greenBright("Guess a number between 0 and 5")),
    },
]);

if (answer.userGuessedNumber === randomNumber) {
    console.log(chalk.yellow("Congratulations! You guessed a correct number"));
    }
else {
    console.log(chalk.red("You guessed a wrong number"));
    
}