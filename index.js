const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");


const appendFileAsync = util.promisify(fs.appendFile);

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
            type: "checkbox",
            message: "Enter licenses used",
            name: "licence",
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
            name: "faq",
            message: "Enter questions"
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

// function licenseBadge() {

//     if (answers.licence === "MIT") {


        

//         fs.appendFileSync("README.md", (![MIT]("https://img.shields.io/apm/l/ReadMe") + '\n\n'), function (err) {

//             if (err) {
//                 console.log(err);

//             } else {
//                 console.log("Success")
//             }
//         })



            
//     }
//     else if (answers.licence ==="EPL-2.0") {

//         return  "![EPL-2.0](//https://img.shields.io/eclipse-marketplace/l/notepad4e)";


//     }

//     else {
//         return  "![Apache 2](https://img.shields.io/hexpm/l/plug) "
//     }



        

// }

promptUser()
    .then(function (answers) {


          //Title
          fs.appendFileSync("README.md", ("# " + "**" + answers.title + "**" + '\n\n'), function (err) {

            if (err) {
                console.log(err);

            } else {
                console.log("Success")
            }
        })

            //this IF statement is an attempt for including badges. Not working yet
        if (answers.licence === "MIT") {


        

            fs.appendFileSync("README.md", ("https://img.shields.io/apm/l/ReadMe" + '\n\n'), function (err) {
    
                if (err) {
                    console.log(err);
    
                } else {
                    console.log("Success")
                }
            })
    
    
    
                
        }


        //Table of Contents
        fs.appendFileSync("README.md", ("## Table of contents" + '\n' + "- [Description](#Description)" + '\n' + "- [Installation](#Installation)" + '\n' + "- [Usage](#Usage)" + '\n' + "- [License](#License)" + '\n' + "- [Contributing](#Contributing)" + '\n' + "- [Tests](#Tests)" + '\n' + "- [Questions](#Questions)" + '\n\n'), function (err) {

            if (err) {
                console.log(err);

            } else {
                console.log("Success")
            }
        })

        //description
        fs.appendFileSync("README.md", ("## Description of project:  " + '\n' + answers.description + '\n\n'), function (err) {

            if (err) {
                console.log(err);

            } else {
                console.log("Success")
            }
        })



        //Install instructions
        fs.appendFileSync("README.md", ("## Installation:  " + '\n' + answers.install + '\n\n'), function (err) {

            if (err) {
                console.log(err);

            } else {
                console.log("Success")
            }
        })

        //Usage Instructions
        fs.appendFileSync("README.md", ("## Usage Instructions:  " + '\n' + answers.usage + '\n\n'), function (err) {

            if (err) {
                console.log(err);

            } else {
                console.log("Success")
            }
        })

        //License
        fs.appendFileSync("README.md", ("## License(s) used:  " + '\n\n' + answers.licence + '\n\n'), function (err) {

            console.log (answers.licence);
            if (err) {
                console.log(err);

            } else {
                console.log("Success")
            }
        })

        //Contributing Parties
        fs.appendFileSync("README.md", ("## Contributing:  " + '\n' + answers.contributing + '\n\n'), function (err) {

            if (err) {
                console.log(err);

            } else {
                console.log("Success")
            }
        })



        //Tests
        fs.appendFileSync("README.md", ("## Tests:  " + '\n' + answers.tests + '\n\n'), function (err) {

            if (err) {
                console.log(err);

            } else {
                console.log("Success")
            }
        })

        //Developed by
        fs.appendFileSync("README.md", ("## Application developed by:  " + '\n' + answers.git + '\n\n'), function (err) {

            if (err) {
                console.log(err);

            } else {
                console.log("Success")
            }
        })


        //FAQ
        fs.appendFileSync("README.md", ("## Questions:  " + '\n' + answers.faq + '\n' + "Github Profile:  " + "https://github.com/" + answers.git + '\n' + "Contact me at  " + answers.email + " with additional questions!"), function (err) {

            if (err) {
                console.log(err);

            } else {
                console.log("Success")
            }
        })




    })








// ["MIT", "EPL-2.0", "Apache 2"]
// src="https://img.shields.io/apm/l/ReadMe" ----MIT


//https://img.shields.io/hexpm/l/plug         ----Apache2

//https://img.shields.io/eclipse-marketplace/l/notepad4e ---EPL 2.0