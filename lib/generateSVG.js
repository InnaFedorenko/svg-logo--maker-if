// Connect node module to work with files
const fs = require('fs');
// Connect node module to work with files
const promptData = require('./promptData');

// Function that builds SVG model
function buildSVG(shape) {
    console.log('build shape')
    promptData.promptTextColor();
    promptData.promptShape();
    promptData.promptTextColor();
    // return licenseBadge;
  }


  
// Function that renders SVG file
/**
 * This funtion generates SVG file . Please note that examples folder must exist!
 * @param {*} shape - shape generated based on the user choices
 */
function renderSVG(shape) {
    const shapeData = 'shape';
    buildSVG(shapeData);
    console.log('render shape')
    //prompt file name
    fs.writeFile("examples/testSVG.svg", shapeData, (err) => {
        err ? console.error(err) : console.log('\x1b[33m%s\x1b[0m',"Generated logo.svg.");
        process.exit();
      });
    // return licenseBadge;
  }
module.exports = {
    renderSVG,
    buildSVG
  };