const Square = require("../lib/square");


describe('Testing Square class', () => {
    let shape;
    beforeEach(() => { shape = new Square();});
    it('should create the instance of the Square object', () => {
      expect(shape).toBeInstanceOf(Square);
    });
    it('test Square class properties attributes', () => {
        shape.attributes = 'attributes';
        expect(shape.attributes).toBe('attributes');
      });
      it('test setShapeColor method', () => {
        const color ='blue';
        expect(shape.setShapeColor(color)).toBe(shape.color);
      });
      it('test render method', () => {

        const shape = new Square({ textColor: 'red', text: 'test', color: 'blue' });
        shapeColor = shape.setShapeColor('blue' );
        const renderSVG =`<rect x="100" y="100" width="500" height="500" fill="blue"/><text x="250" y="250" font-size="40" text-anchor="middle" fill="red">test</text>`;
        expect(shape.render().trim()).toEqual(renderSVG.trim());
      });
  });