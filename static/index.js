$(document).ready(function(){
    let canvas = $('#bigCanvas');
    let ctx = canvas.get(0).getContext("2d");

    let pixelSize = 2;
    let dimension = 25;
    let repeatX = 20;
    let repeatY = 20;
    
    let width = dimension * repeatX * pixelSize;
    let height = dimension * repeatY * pixelSize;

    for(let i = 0; i < dimension * repeatX * pixelSize; i+= dimension) {
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i,height);
        ctx.stroke();
    }

    for(let j = 0; j < dimension * repeatY * pixelSize; j+= dimension) {
        ctx.beginPath();
        ctx.moveTo(0,j);
        ctx.lineTo(width,j);
        ctx.stroke();
    }

});