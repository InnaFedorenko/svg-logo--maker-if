const Circle = require("../lib/circle");

describe('Testing Circle class', () => {
    let shape;
    beforeEach(() => { shape = new Circle();});
    it('should create the instance of the Circle object', () => {
      expect(shape).toBeInstanceOf(Circle);
    });
    it('test Circle class properties attributes', () => {
        shape.attributes = 'attributes';
        expect(shape.attributes).toBe('attributes');
      });
      it('test setShapeColor method', () => {
        const color ='blue';
        expect(shape.setShapeColor(color)).toBe(shape.color);
      });
      it('test render method', () => {

        const shape = new Circle({ textColor: 'red', text: 'test', color: 'blue' });
        shapeColor = shape.setShapeColor('blue' );
        const renderSVG =`<circle cx="200" cy="200" r="80" fill="blue"/><text x="200" y="200" font-size="40" text-anchor="middle" fill="red">test</text>
        `;
        expect(shape.render().trim()).toEqual(renderSVG.trim());
      });
  });