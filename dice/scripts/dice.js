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
