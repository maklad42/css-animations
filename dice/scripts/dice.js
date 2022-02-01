const xSlide = document.getElementById('X');
const ySlide = document.getElementById('Y');
const zSlide = document.getElementById('Z');

const xVal = document.getElementById('xVal');
const yVal = document.getElementById('yVal');
const zVal = document.getElementById('zVal');

function rotateCnt() {
  const cnt = document.querySelector('.container');
  cnt.style.transform = `rotateX(${xVal.textContent}deg) rotateY(${yVal.textContent}deg) rotateZ(${zVal.textContent}deg)`;
}

xSlide.onmousemove = function () {
  xVal.textContent = this.value;
  rotateCnt();
};

ySlide.onmousemove = function () {
  yVal.textContent = this.value;
  rotateCnt();
};

zSlide.onmousemove = function () {
  zVal.textContent = this.value;
  rotateCnt();
};

function roll() {
  // generate value for x, y, and z
  // multiples of 90
  let x = 367 - Math.floor(Math.random() * 8 + 1) * 90;
  let y = -356 + Math.floor(Math.random() * 8 + 1) * 90;
  let z = 360 - Math.floor(Math.random() * 8 + 1) * 90;
  console.log(x, y, z);

  // apply these values to the css rotateX/Y/Z
  const cnt = document.querySelector('.container');
  cnt.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;

  // apply these values to the sliders
  xSlide.value = x;
  ySlide.value = y;
  zSlide.value = z;

  // apply these values to the text boxes
  xVal.textContent = x;
  yVal.textContent = y;
  zVal.textContent = z;
}
