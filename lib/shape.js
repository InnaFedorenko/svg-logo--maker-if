// Base Shape class
class Shape {
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }
  setShapeColor (shapeColor){
    return this.color = shapeColor;
  }
  render() {
    throw new Error('Method has to be implemented for child classes');
  }
}
  module.exports = Shape;