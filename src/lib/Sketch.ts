import { Vector } from './Vector';

export class Sketch {
  private svg: SVGSVGElement;
  private container: HTMLElement;

  constructor(container: HTMLElement, public width = 500, public height = 500) {
    this.container = container;
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.setAttribute('width', width.toString());
    this.svg.setAttribute('height', height.toString());

    this.container.innerHTML = '';
    this.container.appendChild(this.svg);
  }

  background(color: string) {
    this.svg.style.background = color;
  }

  point(position: Vector, color: string = 'black') {
    const circle = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle'
    );
    circle.setAttribute('cx', position.x.toString());
    circle.setAttribute('cy', position.y.toString());
    circle.setAttribute('r', '2');
    circle.setAttribute('fill', color);
    this.svg.appendChild(circle);
  }

  clear() {
    this.svg.innerHTML = '';
  }
}
