class Shape {
  constructor(options) {
    this.fillStyle = options.fillStyle;
    this.strokeStyle = options.strokeStyle;
    this.lineWidth = options.lineWidth;
    this.selector = document.getElementById(options.selector);

    const canvasCreate = document.createElement('canvas');
    canvasCreate.setAttribute('id', options.canvasId);
    canvasCreate.setAttribute('width', '400');
    canvasCreate.setAttribute('height', '400');
    this.selector.appendChild(canvasCreate);
    this.selector = document.getElementById(options.canvasId);
  }
  draw() {
    this.selector.getContext('2d').fill();
    this.selector.getContext('2d').stroke();
  }
}

class Square extends Shape {
  draw() {
    this.selector.getContext('2d').strokeStyle = this.strokeStyle;
    this.selector.getContext('2d').lineWidth = this.lineWidth;
    this.selector.getContext('2d').strokeRect(100, 100, 200, 200);
  }
}

class Circle extends Shape {
  draw() {
    this.selector.getContext('2d').beginPath();
    this.selector.getContext('2d').fillStyle = this.fillStyle;
    this.selector.getContext('2d').strokeStyle = this.strokeStyle;
    this.selector.getContext('2d').lineWidth = this.lineWidth;
    this.selector.getContext('2d').arc(200, 200, 100, 0, Math.PI * 2, true);
    super.draw();
  }
}

class Triange extends Shape {
  draw() {
    this.selector.getContext('2d').beginPath();
    this.selector.getContext('2d').moveTo(200, 100);
    this.selector.getContext('2d').lineTo(100, 300);
    this.selector.getContext('2d').lineTo(300, 300);
    this.selector.getContext('2d').closePath();
    this.selector.getContext('2d').fillStyle = this.fillStyle;
    this.selector.getContext('2d').strokeStyle = this.strokeStyle;
    this.selector.getContext('2d').lineWidth = this.lineWidth;
    super.draw();
  }
}

const square = new Square({
  selector: 'root',
  canvasId: 'square',
  fillStyle: 'orange',
  strokeStyle: 'orange',
  lineWidth: 4
})

const circle = new Circle({
  selector: 'root',
  canvasId: 'circle',
  fillStyle: 'yellow',
  strokeStyle: 'green',
  lineWidth: 6
})

const triange = new Triange({
  selector: 'root',
  canvasId: 'triage',
  fillStyle: '#ccddff',
  strokeStyle: 'blue',
  lineWidth: 5
})

square.draw();
circle.draw();
triange.draw();