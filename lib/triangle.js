// Connect Shape module with the parent constructor
const Shape = require('./shape');

// Triangle class, extends Shape
class Triangle extends Shape {
    constructor(attributes) {
      super('polygon', attributes);
    }
  
    render() {
      const { points } = this.attributes;
      const color = this.setShapeColor('red');
      return `<polygon points="${points}" fill="${color}"/>`;
    }
  }

// Export Triangle module
module.exports = Triangle;

  