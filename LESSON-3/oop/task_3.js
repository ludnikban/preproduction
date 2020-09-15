class Shape {
  constructor(options) {
    this.fillStyle = options.fillStyle;
    this.strokeStyle = options.strokeStyle;
    this.lineWidth = options.lineWidth;
    this.canvasId = options.canvasId;
    this.selector = document.getElementById(options.selector);
  }

  createCanvas(w) {
    if (document.getElementById(this.canvasId) !== null) {
      document.getElementById(this.canvasId).setAttribute('width', w);
      document.getElementById(this.canvasId).setAttribute('height', w);
    } else {
      const canvasCreate = document.createElement('canvas');
      canvasCreate.setAttribute('id', this.canvasId);
      canvasCreate.setAttribute('width', w);
      canvasCreate.setAttribute('height', w);
      this.selector.appendChild(canvasCreate);
      this.selector = document.getElementById(this.canvasId);
    }

  }

  draw() {
    this.selector.getContext('2d').fill();
    this.selector.getContext('2d').stroke();
  }
}

class Square extends Shape {


  draw(w) {
    super.createCanvas(w);
    this.selector.getContext('2d').strokeStyle = this.strokeStyle;
    this.selector.getContext('2d').lineWidth = this.lineWidth;
    this.selector.getContext('2d').strokeRect(w / 4, w / 4, w / 2, w / 2);
    this.selector.getContext('2d').strokeRect(w / 4, w / 4, w / 2, w / 2);

  }
}

class Circle extends Shape {

  draw(w) {
    super.createCanvas(w);

    this.selector.getContext('2d').beginPath();
    this.selector.getContext('2d').fillStyle = this.fillStyle;
    this.selector.getContext('2d').strokeStyle = this.strokeStyle;
    this.selector.getContext('2d').lineWidth = this.lineWidth;

    this.selector.getContext('2d').arc(w / 2, w / 2, w / 4, 0, Math.PI * 2, true);
    super.draw();

  }
}

class Triange extends Shape {

  draw(w) {
    super.createCanvas(w);
    this.selector.getContext('2d').beginPath();
    this.selector.getContext('2d').moveTo(w / 2, w / 4);
    this.selector.getContext('2d').lineTo(w / 4, w * 3 / 4);
    this.selector.getContext('2d').lineTo(w * 3 / 4, w * 3 / 4);

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


function CheckWidth(width) {
  if(width<100)
    return "100";
  else
    return  width;
}

function Complete() {
  square.draw(document.SizeCanvas.square.value);
  circle.draw(document.SizeCanvas.circle.value);
  triange.draw(document.SizeCanvas.triange.value);
}

