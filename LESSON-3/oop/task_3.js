class Shape {
  constructor(options) {
    this.fillStyle = options.fillStyle;
    this.strokeStyle = options.strokeStyle;
    this.lineWidth = options.lineWidth;
    this.canvasId = options.canvasId;
    this.selector = document.getElementById(options.selector);
  }

  createCanvas(w, h) {
    const canvasCreate = document.createElement('canvas');
    canvasCreate.setAttribute('id', this.canvasId);
    canvasCreate.setAttribute('width', w);
    canvasCreate.setAttribute('height', h);
    this.selector.appendChild(canvasCreate);
    this.selector = document.getElementById(this.canvasId);
  }

  draw() {
    this.selector.getContext('2d').fill();
    this.selector.getContext('2d').stroke();
  }
}

class Square extends Shape {

  draw(w, h) {
    super.createCanvas(w, h);
    this.selector.getContext('2d').strokeStyle = this.strokeStyle;
    this.selector.getContext('2d').lineWidth = this.lineWidth;
    if (w < h) {
      this.selector.getContext('2d').strokeRect(w / 4, w / 4, w / 2, w / 2);
    } else {
      this.selector.getContext('2d').strokeRect(h / 4, h / 4, h / 2, h / 2);
    }
  }
}

class Circle extends Shape {
  draw(w, h) {
    super.createCanvas(w, h);
    this.selector.getContext('2d').beginPath();
    this.selector.getContext('2d').fillStyle = this.fillStyle;
    this.selector.getContext('2d').strokeStyle = this.strokeStyle;
    this.selector.getContext('2d').lineWidth = this.lineWidth;
    if (w < h) {
      this.selector.getContext('2d').arc(w / 2, w / 2, w / 4, 0, Math.PI * 2, true);
    } else {
      this.selector.getContext('2d').arc(h / 2, h / 2, h / 4, 0, Math.PI * 2, true);
    }

    super.draw(w, h);
  }
}

class Triange extends Shape {
  draw(w, h) {
    super.createCanvas(w, h);
    this.selector.getContext('2d').beginPath();
    this.selector.getContext('2d').moveTo(w / 2, h / 4);
    this.selector.getContext('2d').lineTo(w / 4, h * 3 / 4);
    this.selector.getContext('2d').lineTo(w * 3 / 4, h * 3 / 4);
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

square.draw(500, 300);
circle.draw(400, 300);
triange.draw(200, 300);