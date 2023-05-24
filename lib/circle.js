// Connect Shape module with the parent constructor
const Shape = require('./shape');

// Circle class, extends Shape
class Circle extends Shape {
    constructor(attributes) {
      super('circle', attributes);
    }
  
    render() {
      const { cx, cy, r } = this.attributes;
      return `<circle cx="${cx}" cy="${cy}" r="${r}" />`;
    }
  }

  // Export Circle module
  module.exports = Circle;