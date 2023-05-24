// Connect Shape module with the parent constructor
const Shape = require('./shape');

// Square class, extends Shape
class Square extends Shape {
    constructor(attributes) {
      super('rect', attributes);
    }
  
    render() {
      const { x, y, size } = this.attributes;
      return `<rect x="${x}" y="${y}" width="${size}" height="${size}" />`;
    }
  }

  // Export Square module
  module.exports = Square;