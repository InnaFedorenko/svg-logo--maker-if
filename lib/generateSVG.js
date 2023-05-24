// Connect node module to work with files
const fs = require('fs');
// Connect node module to work with files
const promptData = require('./promptData');

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




    // promptData.promptTextColor();
    // promptData.promptShape();
    // promptData.promptShapeColor();
    return svgContent;

    // `
    // <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    //  <circle cx="150" cy="100" r="80" fill="green" />
    // <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    // </svg>
    // `
}



/**
 * This function writes SVG file . Please note that examples folder must exist!
 * @param {*} shape - shape generated based on the user choices
 */
function renderSVG(fileName) {
    const shapeData = buildSVG('shape')
    buildSVG(shapeData);
    promptData.promptFileName();
    console.log('render shape')
    //prompt file name
    fs.writeFile(`examples/${fileName}.svg`, shapeData, (err) => {
        err ? console.error(err) : console.log('\x1b[33m%s\x1b[0m', "Generated logo.svg.");
        process.exit();
    });
}
module.exports = {
    renderSVG,
    buildSVG
};