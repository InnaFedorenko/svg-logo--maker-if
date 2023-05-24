// Connect node module to work with files
const fs = require('fs');
// Connect node module to work with files
const promptData = require('./promptData');

// Function that builds SVG model
function buildSVG(shape) {
    console.log('build shape')
    promptData.promptTextColor();
    promptData.promptShape();
    promptData.promptShapeColor();
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
     <circle cx="150" cy="100" r="80" fill="green" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>
    `
}



/**
 * This function writes SVG file . Please note that examples folder must exist!
 * @param {*} shape - shape generated based on the user choices
 */
function renderSVG(fileName) {
    const shapeData = buildSVG('shape')
    buildSVG(shapeData);
    promptData.promptFileName ();
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