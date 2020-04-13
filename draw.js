$(document).ready(function () {
    var canvas = $("#myCanvas");
    var ctx = canvas.get(0).getContext("2d");

    ctx.strokeStyle="#808080";

    var width = canvas.width();
    var height = canvas.height();

    var i;
    for(i = 0; i <= width; i+=width/10) {
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i,height);
        ctx.stroke();
    }
    for(i=0; i <= height; i+=height/10) {
        ctx.beginPath();
        ctx.moveTo(0,i);
        ctx.lineTo(width,i);
        ctx.stroke();
    }

});