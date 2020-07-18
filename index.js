const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

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
            name: "usage",
            message: "What will this project be used for?"
        },
        {
            type: "input",
            name: "licence",
            message: "Enter licenses used"
        },
        {
            type: "input",
            name: "contributing",
            message: "Enter contributing parties"
        },

        {
            type: "input",
            name: "username",
            message: "Enter Github username"
        },
        {
            type: "input",
            name: "repo",
            message: "Enter repository link?"
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
            type: "input",
            name: "usage",
            message: "Enter Github username"
        },

        {
            type: "input",
            name: "FAQ",
            message: "Enter FAQ"
        }
    ]);
}

function generateHTML(answers) {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4"> Title: ${  answers.title}</h1>
        <p class="lead">Description: ${  answers.description}.</p>
        <p class="lead">Installation Instructions: ${answers.install}.</p>
        <p class="lead">Suggest Usage: ${answers.usage}.</p>
        <p class="lead">License: ${  answers.license}.</p>
        <p class="lead">Project Contributors: ${  answers.contributors}.</p>
        <p class="lead">FAQ: ${  answers.FAQ}.</p>
        <p class="lead">Github Repository: ${answers.repo}.</p>
        <p class="lead">Deployed Page: ${  answers.deployed}.</p>
    
       
      </div>
    </div>
    </body>
    // </html>`;

}

promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });
