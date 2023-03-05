// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project Title?",
    name: "title",
  },
  {
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of your project.",
    name: "description",
  },
  {
    type: "input",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "usage",
  },
  {
    type: "input",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
    name: "credits",
  },
  {
    type: "list",
    message: "Choose a license:  ",
    name: "license",
    choices: [
      "Apache License 2.0",
      "GNU General Public License",
      "MIT License",
      "BSD 2-Clause 'Simplified' License",
      "BSD 3-Clause 'New' or 'Revised' License",
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, response) {
  fs.writeFile(
    fileName,
    `# ${response.title}

        ## Description
        ${response.description}
        
        ## Installation
        ${response.installation}
        
        ## Usage
        ${response.usage}
        
        ## Credits
        ${response.credits}
        
        ## License
        ${response.license}`,
    (error) => {
      error ? console.log(error) : console.log("file was written");
    }
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(writeToFile("README.md", response));
}

// Function call to initialize app
init();
