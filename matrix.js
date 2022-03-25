
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var fontSize = 12;
var columns = Math.floor(W / fontSize);
var drops = [];
for (var i = 0; i < columns; i++) {
    drops.push(0);
}
var str = "10001 010011 11010 1101 0011 0100 101 101 010 10 1011110 0111";
function draw() {
    context.fillStyle = "rgba(10, 25, 47, 0.1)";
    context.fillRect(0, 0, W, H);
    context.fontSize = "700 " + fontSize + "px";
    context.fillStyle = "#00ff0088";
    for (var i = 0; i < columns; i++) {
        var index = Math.floor(Math.random() * str.length);
        var x = i * fontSize;
        var y = drops[i] * fontSize;
        context.fillText(str[index], x, y);
        if (y >= canvas.height && Math.random() > .97) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
draw();
setInterval(draw, 50);