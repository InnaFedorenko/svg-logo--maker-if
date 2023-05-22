// Connect node module to work with questions
const inquirer = require('inquirer');
// Connect node module to work with files
const fs = require('fs');
// Connect module to work with date
const moment = require('moment');
// Connect my module to generate readme data 
const generateContent = require('./lib/generateSVG');

// Function to initialize app
function init() {
    console.log(`Welcome to the SVG generator!\nPlease follow the instructions:`);
    // console.log(renerateMarkdown.renderLicenseBadge('MIT'))
    //askQuestions(questions);
}

// Function call to initialize app
init();
