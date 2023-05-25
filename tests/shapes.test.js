const Shape = require("../lib/shape");

describe('Testing Shape class', () => {
    let shape;
    beforeEach(() => { shape = new Shape();});
    it('should create the instance of the Shape object', () => {
      expect(shape).toBeInstanceOf(Shape);
    });
    it('test Shape class properties type and attributes', () => {
        shape.type='type';
        shape.attributes = 'attributes';
        expect(shape.type).toBe('type');
        expect(shape.attributes).toBe('attributes');
      });
      it('test setShapeColor method', () => {
        const color ='blue';
        expect(shape.setShapeColor(color)).toBe(shape.color);
      });
      it('test render method', () => {
        expect(() => shape.render()).toThrowError('Method has to be implemented for child classes');
      });
  });

