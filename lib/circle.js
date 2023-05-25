// Connect Shape module with the parent constructor
const Shape = require('./shape');

// Circle class, extends Shape
class Circle extends Shape {
    constructor(attributes) {
      super('circle', attributes);
    }
  
    render() {
      const { cx, cy, r } = this.attributes;
      const color = this.setShapeColor('blue');
      return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}"/>`;
    }
  }

  // Export Circle module
  module.exports = Circle;