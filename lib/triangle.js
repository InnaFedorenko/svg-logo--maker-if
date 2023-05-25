// Connect Shape module with the parent constructor
const Shape = require('./shape');

// Triangle class, extends Shape
class Triangle extends Shape {
    constructor(attributes) {
      super('polygon', attributes);
    }
  
    render() {
      const { points, textColor, text } = this.attributes;
      const color = this.setShapeColor('red');
      return `<polygon points="200,400 400,400 300,200" fill="${color}"/>
      <text x="300" y="350" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
  }

// Export Triangle module
module.exports = Triangle;

  