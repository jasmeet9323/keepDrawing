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
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-analytics.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-firestore.js"></script>
    <!-- Bring in jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <!-- My script -->
    <script src="static/index.js"></script>

    <!-- Canvas -->
    <div id="bigCanvasWrapper">
        <canvas id="bigCanvas" width="800" height="800" style="border: 1px #000 solid"></canvas>
    </div>
</body>

</html>