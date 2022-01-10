// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const generateMarkdown = require('./utils/generateMarkdown');

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
        },
        {
            type: 'input',
            name: 'github',
            message: 'enter your github username'
        }
    ])
};

function generateMarkdown(data) {
    return `# ${data.title}
  
    ## Description
    ${data.description}
  
    ## Table of Contents
  
    * [Installation](#installation)
    * [Usage](#usage)
    * [Licenses](#license)
    * [Contributions](#contributions)
  
    ## Installation
    ${data.install}
  
    ## Usage
    ${data.usage}
  
    ## Licenses
    ${data.license}
  
    ## Contributions
    ${data.contribute}
  
    ## Tests
    ${data.test}
  
    ## Questions
    Contact me at ${data.questions} for any questions.
    GitHub: ${data.github}`
  };

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created'
            });
        });
    });
  };
// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
promptUser()
    .then(generateMarkdown)
    .then(writeFile);
    