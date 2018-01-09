var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
 
var sketch = document.getElementById('sketch');
var sketch_style = getComputedStyle(sketch);

var mouse = {x: 0, y: 0};
 
canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';

ctx.strokeStyle = "black";

function changeColor(colour){
	ctx.strokeStyle = colour;
}

function changeSize(size){
	ctx.lineWidth = size;
}

 
canvas.addEventListener('mousedown', function(e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
 
    canvas.addEventListener('mousemove', onPaint, false);
}, false);
 
canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);
 
var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};

function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

$("#save").click(function() {
		var canvas_tmp = document.getElementById("canvas");	// Ca merde en pernant le selecteur jQuery
		window.location = canvas_tmp.toDataURL("image/png");
});

 


