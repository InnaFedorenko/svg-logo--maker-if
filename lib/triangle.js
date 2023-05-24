// Connect Shape module with the parent constructor
const Shape = require('./shape');

// Triangle class, extends Shape
class Triangle extends Shape {
    constructor(attributes) {
      super('polygon', attributes);
    }
  
    render() {
      const { points } = this.attributes;
      return `<polygon points="${points}" />`;
    }
  }

// Export Triangle module
module.exports = Triangle;

  