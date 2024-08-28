// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is the usage information for your project?",
        name: "usage",
    },
    {
        type: "input",
        message: "Please list and contributors to your project.",
        name: "contribution",
    },
    {
        type: "input",
        message: "What are the test instructions for your project?",
        name: "test",
    },
    {
        type: "list",
        message: "What license would you like to use?",
        name: "license",
        choices: ["MIT", "Apache", "GPL", "BSD", "None"],
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log("Creating README.md");
            writeToFile("./output/README.md", generateMarkdown(response));
            
        });
}

// Function call to initialize app
init();
