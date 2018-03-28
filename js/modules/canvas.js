$(document).ready(function() {
    var canvas = $('#canvas')[0];
    var ctx = canvas.getContext('2d');

    $(document).keypress(function(key) {
        if(key.which == 13) {
          ctx.fillStyle = 'rgb(200, 0, 0)';
          ctx.fillRect(0, 0, 5, 5);
        }
    })
});
