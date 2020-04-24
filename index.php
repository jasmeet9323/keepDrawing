<!DOCTYPE html>
<html>
<style>
    body {
        background-color: #f0f0f0;
        margin: 20px;
        font-family: Arial, Helvetica, sans-serif;
    }
    #bigCanvas {
        background-color: #fff;
        cursor: pointer;
    }

    #bigCanvasWrapper {
        position: relative;
    }

    #selectionBox {
        border: 1px rgba(0, 50, 100, 0.5);
        position: absolute;
        pointer-events: none;
        background-color: gray;
    }

</style>
<body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="static/index.js"></script>
    <div id="bigCanvasWrapper">
        <canvas id="bigCanvas" width="800" height="800" style="border: 1px #000 solid"></canvas>    
    </div>
</body>

</html>