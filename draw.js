$(document).ready(function () {
    var canvas = $("#myCanvas");
    var ctx = canvas.get(0).getContext("2d");

    ctx.strokeStyle="#ff0000";

    var width = canvas.width();
    var height = canvas.height();

    var i;
    for(i = 0; i < width; i+=10) {
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i,100);
        ctx.stroke();
    }    

});