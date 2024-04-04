#! /usr/bin/env node
import inquirer from "inquirer";

let todos = [];
let condition = true;

while(condition){
    let addTask = await inquirer.prompt(
        [
            {
                name:'todo',
                type:'input',
                message:"What you want to add in your Todos?"
            },
    
            {
                name:'addMore',
                type:'confrim',
                message:"Are you sure to add more?",
                default:'false'
            }
        ]
    );
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
