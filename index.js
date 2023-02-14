// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

function userInput(){
    return inquirer.prompt([
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
        name: 'filename',
        message: 'What do you wanna call the readme file?',
        validate: filenameInput => {
            if (filenameInput) {
                return true;
            } else {
                console.log('Please enter a title for your readme file!');
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
        type: 'input',
        name: 'email',
        message: 'Please provide your email:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide a valid email so users can reach out to you!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Provide provide your gitHub user link:',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please provide a valid gitHub URL so users can keep up with your latest projects!');
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
        name: 'license',
        message: 'What license would you like to include?',
        choices: ["Apache license 2.0", "Boost Software License 1.0", "BSD 2-clause license", "BSD 3-clause license", "Creative Commons Zero v1.0 Universal","Eclipse Public License 2.0","GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU General Public License v3.0",  "GNU Lesser General Public License v2.1","MIT", "Mozilla Public License 2.0", "The Unlicense"],
        when: ({confirmLicenses}) => {
            if (confirmLicenses) {
                return true;
            } else {
                return false;
            }
        }
    },
]);
};



// TODO: Create a function to write README file

function writeToFile(filename, data) {
    fs.appendFile(`${filename}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${filename}.md has been generated.`))
}


// TODO: Create a function to initialize app

async function init() {
    let answers = await userInput();
    writeToFile((answers.filename),(generateMarkdown(answers)));
}

// Function call to initialize app

init();
