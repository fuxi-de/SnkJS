var JS_SNAKE = {};

JS_SNAKE.game = (function () {
  var ctx;
  var xPosition = 0;
  var yPosition = 0;
  var frameLength = 500;

  function init() {
    $('body').append('<canvas id="jsSnk">');
    var canvas = $('#jsSnk');
    canvas.attr('width', 100);
    canvas.attr('height', 100);
    var canvas = canvas[0];
    ctx = canvas.getContext('2d');
    gameLoop();
  }

  function gameLoop() {
    xPosition += 2;
    yPosition += 4;
    ctx.clearRect(0, 0, 100, 100);
    ctx.fillStyle = '#fe57a1';
    ctx.fillRect(xPosition, yPosition, 30, 50);
    setTimeout(gameLoop, frameLength);
  }

  return {
    init: init
  };
})();


$(document).ready(function () {
  JS_SNAKE.game.init();
});
