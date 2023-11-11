const background = document.querySelector("#background");
const loadingText = document.querySelector("#loading-text h1");

let loadPercent = 0;
let interval = setInterval(load, 30);

function normalize(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

function load() {
  loadPercent++;

  if (loadPercent >= 100) {
    clearInterval(interval);
  }

  loadingText.innerText = `${loadPercent}%`;
  loadingText.style.opacity = normalize(loadPercent, 0, 100, 1, 0);
  background.style.filter = `blur(${normalize(loadPercent, 0, 100, 30, 0)}px)`;
}
