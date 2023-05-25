

// Connect node module to work with files
const fs = require('fs');
// Connect node module to work with questions
const inquirer = require('inquirer');

// function readQuestionsFile (){
//     readFile('./questions', (err, data) => {
//       if (err) throw err;
//       console.log('Data'+ data);
//     });
// }

function promptText() {
    return [{
        type: 'input',
        name: 'test',
        message: 'Enter text.'
    }], 
    [{
        type: 'input',
        name: 'textColor',
        message: 'Enter text color.'
    }];
};
function promptShape() {
    return [{
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Square', 'Triangle'],
    }]
};
function promptShapeAttributes(shape) {
    return [{
        type: 'input',
        name: 'shape attributes',
        message: 'Enter attributes:',
    }]
}

function promptShapeColor() {
    return [{
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color.'
    }];
};
function promptFileName() {
    // Ask the questions and generate the README
    return [{
        type: 'input',
        name: 'fileName',
        message: 'Enter SVG file name.'
    }];
};
function getQuestions() {
    const questions = [];
    const shape = 'Circle';
    questions.push(promptFileName());
    questions.push(promptText());
    questions.push(promptShape());
    // questions.push(promptShapeAttributes(shape));
    questions.push(promptShapeColor());
    console.log ('questions' + questions);
    return questions;
};
// Export module
module.exports = {
    promptText,
    promptShape,
    promptShapeColor,
    promptShapeAttributes,
    promptFileName,
    getQuestions
};