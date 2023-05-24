```js
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
```



// Base Shape class
class Shape {
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  render() {
    throw new Error('Method not implemented');
  }
}
  module.exports = Shape;