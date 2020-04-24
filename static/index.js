$(document).ready(function(){
    let canvas = $('#bigCanvas');
    let ctx = canvas.get(0).getContext("2d");

    let pixelSize = 2;
    let dimension = 25;
    let repeatX = 20;
    let repeatY = 20;
    let selectionBox = null;
    
    let width = dimension * repeatX * pixelSize;
    let height = dimension * repeatY * pixelSize;

    ctx.strokeStyle="rgba(0,0,0,0.2)";

    // Draw grid
    for(let i = 0; i < dimension * repeatX * pixelSize; i+= dimension*pixelSize) {
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i,height);
        ctx.stroke();
    }

    for(let j = 0; j < dimension * repeatY * pixelSize; j+= dimension * pixelSize) {
        ctx.beginPath();
        ctx.moveTo(0,j);
        ctx.lineTo(width,j);
        ctx.stroke();
    }

    // Canvas response
    canvas.click(function(e) {
        selectBox(e);
    });

    canvas.mousemove(function(e) {
        let pixel = [Math.floor(e.offsetX / (pixelSize * dimension)), Math.floor(e.offsetY / (pixelSize * dimension))];
        console.log(pixel);
        if(!selectionBox) {
            selectionBox = $("<div id=selectionBox></div>");
            selectionBox.css({width: dimension*pixelSize, height:dimension * pixelSize});
            $("#bigCanvasWrapper").prepend(selectionBox);
        }
        selectionBox.css({left: pixel[0] * pixelSize * dimension+1,
            top: pixel[1] * pixelSize * dimension+1});
    });

    let isSelected = 0;

    function selectBox(e) {
        if(isSelected) return;
        isSelected = 1;

        let pixel = [Math.floor(e.offsetX / (pixelSize * dimension)), 
        Math.floor(e.offsetY / (pixelSize * dimension))];
    }
});