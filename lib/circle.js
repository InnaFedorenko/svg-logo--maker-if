// Connect Shape module with the parent constructor
const Shape = require('./shape');

// Circle class, extends Shape
class Circle extends Shape {
    constructor(attributes) {
      super('circle', attributes);
    }
  
    render() {
      const {textColor, text, color} = this.attributes;
      return `<circle cx="200" cy="200" r="80" fill="${color}"/>
      <text x="200" y="200" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
      `;
    }
  }

  // Export Circle module
  module.exports = Circle;