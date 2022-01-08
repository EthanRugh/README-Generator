// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const writeFile = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your projects name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project (Required)',
            validate: desInput => {
                if (desInput) {
                    return true;
                } else {
                    console.log('Please enter a brief description of your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter instructions for installing application'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Explain how to use your application'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which licenses (if any) did you use?',
            choices:
            ['MIT',
            'APACHE',
            'No License'],
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Who contributed to this project?'
        },
        {
            type: 'list',
            name: 'test',
            message: 'Which tests did you use?',
            choices: 
            ['Jest',
            'Mocha',
            'Jasmine',
            'AVA']
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter your email'
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
promptUser();
