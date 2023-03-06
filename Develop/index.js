// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  { type: "input", message: "What is your GitHub username?", name: "github" },
  { type: "input", message: "What is your email address?", name: "email" },
  {
    type: "input",
    message: "What is your project Title?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a short description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project? ",
    name: "installation",
  },
  {
    type: "input",
    message: "What does the user need to know about using the application?",
    name: "usage",
  },
  {
    type: "list",
    message: "Choose a license:  ",
    name: "license",
    choices: [
      "Apache 2.0",
      "GNU General Public License",
      "MIT",
      "BSD 2-Clause 'Simplified'",
      "BSD 3-Clause 'New' or 'Revised'",
      "Boost Software 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public 2.0",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    message:
      "List your collaborators, if any, including links to their GitHub profiles.",
    name: "contributing",
  },
  {
    type: "input",
    message: "Please enter test instructions:",
    name: "testing",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, response) {
  fs.writeFile(
    fileName,
    `# ${response.title}    
![GitHub License](https://img.shields.io/badge/License-${response.license.replace(
      / /g,
      "_"
    )}-blue)
        
## Description
${response.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#Questions)

## Installation
${response.installation}

## Usage
${response.usage}

## License
${response.license}

## Contributing
${response.contributing}

## Tests
${response.testing}

## Questions
My Github profile is https://github.com/${response.github}/.
Please reach out to ${response.email} with any additional questions.  
`,
    (error) => {
      error ? console.log(error) : console.log("file was written");
    }
  );
}

// TODO: Create a function to initialize app
function init(questions) {
  inquirer
    //prompt with questions array
    .prompt(questions)
    //use response in the writeToFile function to created the README properly formatted in markdown
    .then((response) => writeToFile("README.md", response));
}

// Function call to initialize app
init(questions);
