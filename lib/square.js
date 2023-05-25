// Connect Shape module with the parent constructor
const Shape = require('./shape');

// Square class, extends Shape
class Square extends Shape {
    constructor(attributes) {
      super('rect', attributes);
    }
  
    render() {
      const { x, y, size, textColor, text} = this.attributes;
      const color = this.setShapeColor('green');
      return `<rect x="100" y="100" width="500" height="500" fill="${color}"/>
      <text x="250" y="250" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
      `;
    }
  }

  // Export Square module
  module.exports = Square;