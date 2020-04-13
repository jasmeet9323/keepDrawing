$(document).ready(function () {
    var canvas = $("#myCanvas");
    var ctx = canvas.get(0).getContext("2d");

    ctx.strokeStyle="rgba(0,0,0,0.2)";

    var canvasWidth = canvas.width();
    var canvasHeight = canvas.height();

    // dimension of the drawing
    var dimension = 25;
    var pixelSize = canvasWidth / dimension;
    var i;
    for(i = 0; i <= canvasWidth; i+=pixelSize) {
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i,canvasHeight);
        ctx.stroke();
    }
    for(i=0; i <= canvasHeight; i+=pixelSize) {
        ctx.beginPath();
        ctx.moveTo(0,i);
        ctx.lineTo(canvasWidth,i);
        ctx.stroke();
    }

    canvas.on('mousemove touchmove touchstart mousedown', mouseFill);
    function mouseFill(e) {
        let xOffset = e.offsetX;
        let yOffset = e.offsetY;
        if(e.which!=1) return;
        pixel = [Math.floor(xOffset / pixelSize), Math.floor(yOffset / pixelSize)];
        fillPixel(pixel);        
    }

    function fillPixel(pixel) {
        ctx.fillStyle = '#000000';
        ctx.fillRect(pixel[0]*(pixelSize), pixel[1]*pixelSize, pixelSize-1, pixelSize-1);
    }    
});