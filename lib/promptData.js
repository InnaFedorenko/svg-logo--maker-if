// Connect node module to work with questions
const inquirer = require('inquirer');

function promptTextColor() {
    console.log('prompt text color')
}
function promptShape() {
    console.log('prompt list of shapes to choose')
}
function promptShapeColor() {
    console.log('prompt shape color')
}
function promptFileName() {
    // Ask the questions and generate the README
    inquirer.prompt({
        type: 'input',
        name: 'title',
        message: 'Enter SVG file name.'
    }).then(console.log('prompt file name'));  
}
// Export module
module.exports = {
    promptTextColor,
    promptShape,
    promptShapeColor,
    promptFileName
};