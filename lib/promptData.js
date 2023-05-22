// Connect node module to work with questions
const inquirer = require('inquirer');

function promptTextColor (){
    console.log('prompt text color')
}
function promptShape (){
    console.log('prompt list of shapes to choose')
}
function promptShapeColor (){
    console.log('prompt shape color')
}

// Export module
module.exports = {
    promptTextColor,
    promptShape, 
    promptShapeColor
  };