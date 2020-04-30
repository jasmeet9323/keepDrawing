<?php

$x = intval($_REQUEST['x']);
$y = intval($_REQUEST['y']);

if ($_REQUEST['submit']) {
    $data = $_POST['data'];
    $data = json_encode($data);

    $key = "$x,$y";
    $filename = "temp/" . $key;
    file_put_contents($filename, $data);
    $result = trim(shell_exec("python save.py '$x' '$y' '$filename' 2>&1"));
    if ($result != 1) {
        die("Error saving. $result<HR>");
    }
    print "<script>window.location='index.php';</script>";
    return;
}

$time = time();

print <<< EOF
<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="static/pickr/dist/themes/classic.min.css">
</head>

<body>
    <!-- script for import -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="static/draw.js"></script>
    <script src="static/pickr/dist/pickr.min.js"></script>
    <div id="pickr"></div>

    <!-- small canvas -->
    <canvas id="myCanvas" width="500" height="500" style="border: 1px #000 solid">
        Your browser does not support the HTML5 canvas tag.
    </canvas>
    <input id=saveButton type=submit value=Save onclick="save($x, $y)">
    <div id=spinner></div>
    </body>

</html>

EOF;
