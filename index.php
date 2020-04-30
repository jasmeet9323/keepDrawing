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

    <script>
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyCtJgzHMgjviyCX-ZgL4CK5O2FgUMpYZIo",
            authDomain: "canvas-7ef2e.firebaseapp.com",
            databaseURL: "https://canvas-7ef2e.firebaseio.com",
            projectId: "canvas-7ef2e",
            storageBucket: "canvas-7ef2e.appspot.com",
            messagingSenderId: "818277002959",
            appId: "1:818277002959:web:a54810d84d122f238951ba",
            measurementId: "G-QJN5Y250VZ"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    </script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="static/index.js"></script>
    <div id="bigCanvasWrapper">
        <canvas id="bigCanvas" width="800" height="800" style="border: 1px #000 solid"></canvas>
    </div>
</body>

</html>