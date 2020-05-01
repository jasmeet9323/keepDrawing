<?php

// initialize variables
$x = intval($_REQUEST['x']);
$y = intval($_REQUEST['y']);
$_REQUEST['submit'] = isset($_REQUEST['submit']) ? $_REQUEST['submit'] : '';

// save the data using python script and command line
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

    <!-- Back Button -->
    <div>
        <button type="button" value="go back" onclick="location.href='index.php'" style="margin-bottom: 1em;">
            Back
        </button>
    </div>

    <!-- Color Picker-->
    <div style="display: flex; margin-bottom: 1em;">
        <div id="pickr"></div>
        <div style="padding-left: 1em;">
            <button type="button" value="choose color" onclick="PICKR.show()">Choose Color</button>
        </div>
        <div id="reset" style="padding-left: 3em">
            <button type="button" value="reset">Reset</button>
        </div>
    </div>  

    <!-- Small canvas -->
    <div id="canvas" style="margin-bottom: 1em">
    <canvas id="myCanvas" width="500" height="500" style="border: 1px #000 solid">
        Your browser does not support the HTML5 canvas tag.
    </canvas>
    </div>

    <!-- Save Button -->
    <div>
        <input id=saveButton type=submit value=Save onclick="save($x, $y)">
    </div>
    <div id=spinner></div>
    
    </body>
</html>

EOF;
