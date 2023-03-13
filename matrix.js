
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
var str = "1子b00不事0a1 c01通001d1 11功易0e10 1101 0匠f皆0g11 01功h易0i0 1j01 1k0子不l通m1 01x0 10輪z輿 101p事11o10 0uw梓n得1q11";
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
