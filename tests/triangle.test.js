const Triangle = require("../lib/triangle");


describe('Testing Triangle class', () => {
    let shape;
    beforeEach(() => { shape = new Triangle();});
    it('should create the instance of the Triangle object', () => {
      expect(shape).toBeInstanceOf(Triangle);
    });
    it('test Triangle class properties attributes', () => {
        shape.attributes = 'attributes';
        expect(shape.attributes).toBe('attributes');
      });
      it('test setShapeColor method', () => {
        const color ='blue';
        expect(shape.setShapeColor(color)).toBe(shape.color);
      });
      it('test render method', () => {
        const shape = new Triangle({ textColor: '#FF00FF', text: 'test', color: '#D7DF01' });
        shapeColor = shape.setShapeColor('blue' );
        const renderSVG =`<polygon points="200,400 400,400 300,200" fill="#D7DF01"/><text x="300" y="350" font-size="30" text-anchor="middle" fill="#FF00FF">test</text>`;
        expect(shape.render().trim()).toEqual(renderSVG.trim());
      });
  });