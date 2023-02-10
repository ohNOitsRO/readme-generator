// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'Let\'s start with your project name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a title for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'How about a short description for your project?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter a short description so users know what your project is all about!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the instructions for installation?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please list instructions for installation to make sure your users have all the necessary software!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instructions for usage:',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide instructions on how to use your software!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What can users do to help contribute to your project??',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide details on how others can contribute to your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to effectively use your software:',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please provide examples so that users can correctly use your software!');
                return false;
            }
        }
    },

    {
        type: 'confirm',
        name: 'confirmLicenses',
        message: 'Would you like to include a license?',
        default: false
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What license would you like to include?',
        choices: ['MIT', 'GPL', 'CC--0'],
        when: ({confirmLicenses}) => {
            if (confirmLicenses) {
                return true;
            } else {
                return false;
            }
        }
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

const writeToFile = data => {
    return new Promise((resolve, reject) => {
        // make a readme file and add to dist folder
        fs.writeFile('./dist/README.md', data, err => {
            // if there's an error, reject the Promise and send the error to .catch() method
            if (err) {
                reject (err);
                // return out of the function here to make sure the Promise doesn't continut to execute the resolve() function
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the .then() method
            resolve({
                ok: true,
                message: console.log('Success! Your README has been created!')
            });
        })
    })
}








// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
