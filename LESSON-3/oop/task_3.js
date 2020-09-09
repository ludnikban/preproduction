class Shape {
  constructor(options) {
    this.fillStyle = options.fillStyle;
    this.strokeStyle = options.strokeStyle;
    this.lineWidth = options.lineWidth;
    this.selector = document.getElementById(options.selector);

<<<<<<< Updated upstream
    const canvasCreate = document.createElement('canvas');
    canvasCreate.setAttribute('id', options.canvasId);
    canvasCreate.setAttribute('width', '400');
    canvasCreate.setAttribute('height', '400');
    this.selector.appendChild(canvasCreate);
    this.selector = document.getElementById(options.canvasId);
=======
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
>>>>>>> Stashed changes
  }
  draw() {
    this.selector.getContext('2d').fill();
    this.selector.getContext('2d').stroke();
  }
}

class Square extends Shape {
<<<<<<< Updated upstream
  draw() {
    this.selector.getContext('2d').strokeStyle = this.strokeStyle;
    this.selector.getContext('2d').lineWidth = this.lineWidth;
    this.selector.getContext('2d').strokeRect(100, 100, 200, 200);
=======

  draw(w) {
    super.createCanvas(w);
    this.selector.getContext('2d').strokeStyle = this.strokeStyle;
    this.selector.getContext('2d').lineWidth = this.lineWidth;
    this.selector.getContext('2d').strokeRect(w / 4, w / 4, w / 2, w / 2);
    this.selector.getContext('2d').strokeRect(w / 4, w / 4, w / 2, w / 2);
>>>>>>> Stashed changes
  }
}

class Circle extends Shape {
<<<<<<< Updated upstream
  draw() {
=======
  draw(w) {
    super.createCanvas(w);
>>>>>>> Stashed changes
    this.selector.getContext('2d').beginPath();
    this.selector.getContext('2d').fillStyle = this.fillStyle;
    this.selector.getContext('2d').strokeStyle = this.strokeStyle;
    this.selector.getContext('2d').lineWidth = this.lineWidth;
<<<<<<< Updated upstream
    this.selector.getContext('2d').arc(200, 200, 100, 0, Math.PI * 2, true);
=======
    this.selector.getContext('2d').arc(w / 2, w / 2, w / 4, 0, Math.PI * 2, true);
>>>>>>> Stashed changes
    super.draw();
  }
}

class Triange extends Shape {
<<<<<<< Updated upstream
  draw() {
    this.selector.getContext('2d').beginPath();
    this.selector.getContext('2d').moveTo(200, 100);
    this.selector.getContext('2d').lineTo(100, 300);
    this.selector.getContext('2d').lineTo(300, 300);
=======
  draw(w) {
    super.createCanvas(w);
    this.selector.getContext('2d').beginPath();
    this.selector.getContext('2d').moveTo(w / 2, w / 4);
    this.selector.getContext('2d').lineTo(w / 4, w * 3 / 4);
    this.selector.getContext('2d').lineTo(w * 3 / 4, w * 3 / 4);
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
square.draw();
circle.draw();
triange.draw();
=======
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
>>>>>>> Stashed changes
