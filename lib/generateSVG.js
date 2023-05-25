// Connect node module to work with files
const fs = require('fs');
// // Connect node module to work with questions
const inquirer = require('inquirer');

// Connect shape modules
const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

// Function that builds SVG model
function buildSVG(data) {
    const shapes = {
        circle: Circle,
        square: Square,
        triangle: Triangle,
      };
      const shape = data.shape;
      const text = {
          textColor: data.textColor,
          text: data.text
      }

    // Creating  shape objects - TODO one with attributes
    const shapeObg = new shapes[shape.toLowerCase()]({ textColor: text.textColor, text: text.text, color: data.shapeColor });
    shapeColor = shapeObg.setShapeColor(data.shapeColor);

    const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
        ${shapeObg.render()}
        </svg>
        `;
    return svgContent;
}

// Function initiates questions and when all questions are answered calls renderSVG function
function run() {
    // An array of questions for user input
    const questions = [
        {
            type: 'input',
            name: 'file',
            message: 'Enter SVG file name.',
            default: 'logo'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape type',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: `Enter shape color.`,
            default: 'blue'
        },        
        {
            type: 'input',
            name: 'text',
            message: `Enter SVG text.`,
            default: 'SVG'
        },
        {
            type: 'input',
            name: 'textColor',
            message: `Enter SVG text color.`,
            default: 'red'
        }
    ];
        inquirer.prompt(questions).then(renderSVG);
    }

/**
 * This function writes SVG file . Please note that examples folder must exist!
 * @param {*} shape - shape generated based on the user choices
 */
function renderSVG(data) {
    console.log('data' +  JSON.stringify(data));
    const fileName = data.file;
    const shapeData = buildSVG(data);
    //prompt file name
    fs.writeFile(`examples/${fileName}.svg`, shapeData, (err) => {
        err ? console.error(err) : console.log('\x1b[33m%s\x1b[0m', `Generated ${fileName}.svg.`);
        process.exit();
    });
}
module.exports = {
    renderSVG,
    run,
    buildSVG
};