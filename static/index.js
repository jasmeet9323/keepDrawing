$(document).ready(function () {
  let canvas = $("#bigCanvas");
  let ctx = canvas.get(0).getContext("2d");

  let pixelSize = 2;
  let dimension = 25;
  let repeatX = 20;
  let repeatY = 20;
  let selectionBox = null;

  let width = dimension * repeatX * pixelSize;
  let height = dimension * repeatY * pixelSize;

  let isSelected = 0; // is a small canvas selected

  ctx.strokeStyle = "rgba(0,0,0,0.2)";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCtJgzHMgjviyCX-ZgL4CK5O2FgUMpYZIo",
    authDomain: "canvas-7ef2e.firebaseapp.com",
    databaseURL: "https://canvas-7ef2e.firebaseio.com",
    projectId: "canvas-7ef2e",
    storageBucket: "canvas-7ef2e.appspot.com",
    messagingSenderId: "818277002959",
    appId: "1:818277002959:web:a54810d84d122f238951ba",
    measurementId: "G-QJN5Y250VZ",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();

  db.collection("canvasApp").onSnapshot(function (grid) {
    for (let change of grid.docChanges()) {
      if (!change.doc) continue;
      let key = change.doc.id;
      let data = change.doc.data().data;
      if (key == "grid") continue;
      let coord = key.split(",");
      let json = data;
      let pixelData = JSON.parse(json);
      clearGrid(coord);

      for (let subkey in pixelData) {
        let subcoord = subkey.split(",");
        let color = pixelData[subkey];
        if (color == "#2") color = "#222244";

        fillPixel(coord, subcoord, color);
      }
    }
  });

  // Draw grid
  for (
    let i = 0;
    i < dimension * repeatX * pixelSize;
    i += dimension * pixelSize
  ) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
    ctx.stroke();
  }

  for (
    let j = 0;
    j < dimension * repeatY * pixelSize;
    j += dimension * pixelSize
  ) {
    ctx.beginPath();
    ctx.moveTo(0, j);
    ctx.lineTo(width, j);
    ctx.stroke();
  }

  // Canvas response
  canvas.click(function (e) {
    selectBox(e);
  });

  canvas.mousemove(function (e) {
    let pixel = [
      Math.floor(e.offsetX / (pixelSize * dimension)),
      Math.floor(e.offsetY / (pixelSize * dimension)),
    ];
    //console.log(pixel);
    if (!selectionBox) {
      selectionBox = $("<div id=selectionBox></div>");
      selectionBox.css({
        width: dimension * pixelSize,
        height: dimension * pixelSize,
      });
      $("#bigCanvasWrapper").prepend(selectionBox);
    }
    selectionBox.css({
      left: pixel[0] * pixelSize * dimension + 1,
      top: pixel[1] * pixelSize * dimension + 1,
    });
  });

  // Go to drawing small canvas
  function selectBox(e) {
    if (isSelected) return;
    isSelected = 1;

    let pixel = [
      Math.floor(e.offsetX / (pixelSize * dimension)),
      Math.floor(e.offsetY / (pixelSize * dimension)),
    ];
    window.location = "draw.php?x=" + pixel[0] + "&y=" + pixel[1];
  }

  // Clear a pixel when clicked on
  function clearGrid(coord) {
    let coordX = parseInt(coord[0]);
    let coordY = parseInt(coord[1]);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(
      coordX * dimension * pixelSize,
      coordY * dimension * pixelSize,
      pixelSize * dimension,
      pixelSize * dimension
    );
    ctx.fillStyle = "#cccccc";
    ctx.strokeRect(
      coordX * dimension * pixelSize,
      coordY * dimension * pixelSize,
      pixelSize * dimension,
      pixelSize * dimension
    );
  }

  // Fill pixel with the drawing
  function fillPixel(coord, subcoord, color) {
    let coordX = parseInt(coord[0]);
    let coordY = parseInt(coord[1]);
    let subCoordX = parseInt(subcoord[0]);
    let subCoordY = parseInt(subcoord[1]);
    if (
      coordX < 0 ||
      coordY < 0 ||
      coordX >= repeatX ||
      coordY >= repeatY ||
      subCoordX < 0 ||
      subCoordY < 0 ||
      subCoordX >= dimension ||
      subCoordY >= dimension
    ) {
      return;
    }

    ctx.fillStyle = color;
    let x = (coordX * dimension + subCoordX) * pixelSize;
    let y = (coordY * dimension + subCoordY) * pixelSize;
    ctx.fillRect(x, y, pixelSize, pixelSize);
  }
});
