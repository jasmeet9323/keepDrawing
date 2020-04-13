$(document).ready(function () {
    var canvas = $("#myCanvas");
    var ctx = canvas.get(0).getContext("2d");

    ctx.strokeStyle="rgba(0,0,0,0.2)";

    var width = canvas.width();
    var height = canvas.height();

    // dimension of the drawing
    var dimension = 25;
    var i;
    for(i = 0; i <= width; i+=width/dimension) {
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i,height);
        ctx.stroke();
    }
    for(i=0; i <= height; i+=height/dimension) {
        ctx.beginPath();
        ctx.moveTo(0,i);
        ctx.lineTo(width,i);
        ctx.stroke();
    }

});