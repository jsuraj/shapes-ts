import { Vector } from './Vector';

export class Shape {
  private element: SVGElement;
  private transform: { translate: Vector; scale: number; rotate: number };
  private center: Vector;

  constructor(element: SVGElement, center: Vector) {
    this.element = element;
    this.transform = { translate: new Vector(0, 0), scale: 1, rotate: 0 };
    this.center = center;
  }

  private updateTransform() {
    const { translate, scale, rotate } = this.transform;
    const { x, y } = this.center;
    this.element.setAttribute(
      'transform',
      `translate(${translate.x}, ${translate.y})
       translate(${x}, ${y})
       scale(${scale})
       translate(${-x}, ${-y})
       rotate(${rotate}, ${x}, ${y})
      `
    );
  }

  translate(position: Vector) {
    this.transform.translate = position;
    this.updateTransform();
  }

  scale(scale: number) {
    this.transform.scale = scale;
    this.updateTransform();
  }

  rotate(angle: number) {
    this.transform.rotate = angle;
    this.updateTransform();
  }

  getElement() {
    return this.element;
  }
}
