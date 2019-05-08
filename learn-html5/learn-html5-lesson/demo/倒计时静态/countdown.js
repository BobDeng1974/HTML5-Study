const WINDOW_WIDTH = 1024;
const WINDOW_HEIGHT = 768;
const RADIUS = 8;
const MARGIN_TOP = 60;
const MARGIN_LEFT = 30;

const endTime = new Date(2018, 5, 1, 0, 0, 0);
let curShowTimeSeconds = 0;

window.onload = function () {
  let canvas = document.getElementById('canvas');
  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;
  let context = canvas.getContext("2d");
  curShowTimeSeconds = getCurrentShowTimeSeconds();
  render(context);
};

function getCurrentShowTimeSeconds() {
  let curTime = new Date();
  let ret = endTime.getTime() - curTime.getTime();
  ret = Math.round(ret / 1000);
  return ret >= 0 ? ret : 0;
}

function render(context) {
  context.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
  let hours = parseInt(curShowTimeSeconds / 3600 + "");
  let minutes = parseInt((curShowTimeSeconds - hours * 3600) / 60 + "");
  let seconds = curShowTimeSeconds % 60;

  renderDigit(MARGIN_LEFT, MARGIN_TOP, hours / 10, context);
  renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, hours % 10, context);
  renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, context);
  renderDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, minutes / 10, context);
  renderDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, minutes % 10, context);
  renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, context);
  renderDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, seconds / 10, context);
  renderDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, seconds % 10, context);
}

function renderDigit(x, y, num, context) {
  context.fillStyle = "rgb(0,102,153)";

  for (let i = 0; i < digit[num].length; i++)
    for (let j = 0; j < digit[num][i].length; j++)
      if (digit[num][i][j] === 1) {
        context.beginPath();
        context.arc(x + j * 2 * (RADIUS + 1) + (RADIUS + 1), y + i * 2 * (RADIUS + 1) + (RADIUS + 1), RADIUS, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
      }
}

