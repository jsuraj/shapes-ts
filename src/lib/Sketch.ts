import { Shape } from './Shape';
import { Vector } from './Vector';

export class Sketch {
  private svg: SVGSVGElement;
  private container: HTMLElement;

  constructor(container: HTMLElement, public width = 500, public height = 500) {
    this.container = container;
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.setAttribute('width', '100%');
    this.svg.setAttribute('height', '100%');
    this.svg.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`);

    this.container.innerHTML = '';
    this.container.appendChild(this.svg);
  }

  background(color: string) {
    this.svg.style.background = color;
  }

  point(position: Vector, color: string = 'black'): Shape {
    const point = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle'
    );
    point.setAttribute('cx', position.x.toString());
    point.setAttribute('cy', position.y.toString());
    point.setAttribute('r', '2');
    point.setAttribute('fill', color);

    const shape = new Shape(point, position);
    this.svg.appendChild(point);
    return shape;
  }

  circle(center: Vector, radius: number, color: string = 'black'): Shape {
    const circle = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle'
    );
    circle.setAttribute('cx', center.x.toString());
    circle.setAttribute('cy', center.y.toString());
    circle.setAttribute('r', radius.toString());
    circle.setAttribute('fill', color);

    const shape = new Shape(circle, center);
    this.svg.appendChild(circle);
    return shape;
  }

  line(
    start: Vector,
    end: Vector,
    color: string = 'black',
    strokeWidth: number = 2
  ): Shape {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', start.x.toString());
    line.setAttribute('y1', start.y.toString());
    line.setAttribute('x2', end.x.toString());
    line.setAttribute('y2', end.y.toString());
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', strokeWidth.toString());

    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2;

    const shape = new Shape(line, new Vector(midX, midY));
    this.svg.appendChild(line);
    return shape;
  }

  clear() {
    this.svg.innerHTML = '';
  }
}
