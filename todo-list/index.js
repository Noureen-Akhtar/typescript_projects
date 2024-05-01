#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
let display = chalk.yellow.bold;
let itemcolor = chalk.magenta;
let heading = chalk.green.bold;
//display logo
console.log(display(`
      
        _________
       /         |               
      |✓________ |
      |✓________ |
      |✓________ |
      |✓________ |
      |✓________ |

`));
console.log(display("\nWelcome to my Todo List App\n"));
const todoList = [];
//function to add todo list items
function addTodo() {
    //ask user to enter task and due date  
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'task',
            message: 'Enter the task:',
        },
        {
            type: 'input',
            name: 'dueDate',
            message: 'Enter due date and time (DD-MM-YYYY HH:mm):',
        },
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Do you want to add more task?',
            default: true,
        },
    ])
        .then((answers) => {
        const { task, dueDate, addMore } = answers;
        todoList.push({ task, dueDate });
        if (addMore) {
            addTodo();
        }
        else {
            displayTodoList();
        }
    });
}
function displayTodoList() {
    console.log(heading('\nTodo List:'));
    todoList.forEach((item, index) => {
        console.log(itemcolor(`${index + 1}. Task: ${item.task} - Due: ${item.dueDate}`));
    });
}
//call addTodo function
addTodo();
