const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");

//Using promises instead of callback
const writeFileAsync = util.promisify(fs.writeFile);


//Node.js prompts
function promptUser() {
    return inquirer.prompt([


        {

            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },

        {
            type: "input",
            name: "description",
            message: "Provide project description"
        },


        {
            type: "input",
            name: "install",
            message: "Enter installation instructions"


        },

        {
            type: "input",
            name: "usage",
            message: "Enter usage instructions"
        },

        {
            type: "list",
            name: "license",
            message: "Enter licenses used",
            choices: ["MIT", "EPL-2.0", "Apache 2"]
        },


        {
            type: "input",
            name: "contributing",
            message: "Enter contributing parties"
        },

        {
            type: "input",
            name: "tests",
            message: "Enter relevant tests"
        },



        {
            type: "input",
            name: "git",
            message: "Enter Github username"
        },

        {
            type: "input",
            name: "email",
            message: "Enter your email address"
        },


    ])
}


//Uses shields.io to generate license 

function generateLicense(license) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-red.svg)
        `
}


//Uses template literals to dynamically inject our used values into README format

function generateReadMe(answers) {

    return `${generateLicense(answers.license)}


# ${answers.title}


## Description 

${answers.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions) 
    
## Installation
${answers.install}


## Usage 
${answers.usage}

    
## License
Licensed by ${answers.license}
    
## Contributing
${answers.contributing}

## Tests
${answers.tests}
    
## Questions
https://github.com/${answers.git}
Email me here: ${answers.email}
    `
}

//Writes file, displays "Successful" if functioning correctly, throws error if not
promptUser()
    .then(function (answers) {
        const readMe = generateReadMe(answers);

        return writeFileAsync("Readme.md", readMe);
    })

    .then(function () {

        console.log("Successful !");

    })

    .catch(function (err) {

        console.log(err)

    });