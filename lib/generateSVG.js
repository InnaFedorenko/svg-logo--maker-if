// Connect node module to work with files
const fs = require('fs');
// // Connect node module to work with questions
const inquirer = require('inquirer');

// // Connect node module to work with files
// const {
//     promptText,
//     promptShape,
//     promptShapeColor,
//     promptShapeAttributes,
//     promptFileName,
//     getQuestions
// } = require('./promptData');

// Connect shape modules
const Shape = require('./shape');
const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

// Function that builds SVG model
function buildSVG(shape) {
    console.log('build shape')
    // Creating  shape objects - TODO one with attributes
    const circle = new Circle({ cx: 50, cy: 50, r: 30 });
    const square = new Square({ x: 100, y: 100, size: 50 });
    const triangle = new Triangle({ points: '200,200 250,200 225,150' });
    //TODO - add shape.render text
    // ${shape.renderText()}
    // TODO - Add read SVG template from file
    const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
        ${circle.render()}
        ${square.render()}
        ${triangle.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
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
            message: 'Enter SVG file name.'
        },
        {
            type: 'input',
            name: 'text',
            message: `Enter SVG text.`,
        },
        {
            type: 'input',
            name: 'github',
            message: `Enter SVG text color.`,
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape type',
            choices: ['Circle', 'Square', 'Triangle'],
        }
    ];
        inquirer.prompt(questions).then(renderSVG);
    }

/**
 * This function writes SVG file . Please note that examples folder must exist!
 * @param {*} shape - shape generated based on the user choices
 */
function renderSVG(data) {
    const fileName = data.file;
    const shape = data.shape;
    console.log('render shape'+ fileName);
    const shapeData = buildSVG(shape);
    //prompt file name
    fs.writeFile(`examples/${fileName}.svg`, shapeData, (err) => {
        err ? console.error(err) : console.log('\x1b[33m%s\x1b[0m', `Generated ${fileName}.svg.`);
        // process.exit();
    });
}
module.exports = {
    renderSVG,
    run,
    buildSVG
};