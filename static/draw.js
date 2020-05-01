$(document).ready(function () {
  var canvas = $("#myCanvas");
  var ctx = canvas.get(0).getContext("2d");

  ctx.strokeStyle = "rgba(0,0,0,0.2)";

  var canvasWidth = canvas.width();
  var canvasHeight = canvas.height();
  let selectedColor = "#222244";
  let enabled = true;
  let filled = {};

  // Dimension of the drawing
  var dimension = 25;
  var pixelSize = canvasWidth / dimension;
  var i;

  // Draw grid lines
  for (i = 0; i <= canvasWidth; i += pixelSize) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvasHeight);
    ctx.stroke();
  }
  for (i = 0; i <= canvasHeight; i += pixelSize) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvasWidth, i);
    ctx.stroke();
  }

  // Capture mouse or touch and draw with selected color
  canvas.on("mousemove touchmove touchstart mousedown", mouseFill);
  function mouseFill(e) {
    e.preventDefault(); // Disables scrolling for touch events.

    var touchstart = e.type === "touchstart" || e.type === "touchmove";
    e = touchstart ? e.originalEvent : e;
    var rect = $("#myCanvas");
    var offsetX = touchstart
      ? e.targetTouches[0].pageX - rect.offset().left
      : e.offsetX;
    var offsetY = touchstart
      ? e.targetTouches[0].pageY - rect.offset().top
      : e.offsetY;

    if (!enabled) return;
    if (e.which != 1 && !touchstart) return;

    pixel = [Math.floor(offsetX / pixelSize), Math.floor(offsetY / pixelSize)];
    fillPixel(pixel);
  }

  // Fill the pixel while drawing
  function fillPixel(pixel) {
    key = pixel[0] + "," + pixel[1];
    filled[key] = selectedColor;
    ctx.fillStyle = selectedColor;
    ctx.fillRect(
      pixel[0] * pixelSize,
      pixel[1] * pixelSize,
      pixelSize - 1,
      pixelSize - 1
    );
  }

  //
  const PICKR = Pickr.create({
    el: "#pickr",
    theme: "classic", // or 'monolith', or 'nano'

    swatches: [
      "rgba(244, 67, 54, 1)",
      "rgba(233, 30, 99, 0.95)",
      "rgba(156, 39, 176, 0.9)",
      "rgba(103, 58, 183, 0.85)",
      "rgba(63, 81, 181, 0.8)",
      "rgba(33, 150, 243, 0.75)",
      "rgba(3, 169, 244, 0.7)",
      "rgba(0, 188, 212, 0.7)",
      "rgba(0, 150, 136, 0.75)",
      "rgba(76, 175, 80, 0.8)",
      "rgba(139, 195, 74, 0.85)",
      "rgba(205, 220, 57, 0.9)",
      "rgba(255, 235, 59, 0.95)",
      "rgba(255, 193, 7, 1)",
    ],

    components: {
      // Main components
      preview: true,
      //opacity: true,
      //hue: true,

      // Input / output Options
      interaction: {
        hex: true,
        rgba: true,
        hsla: true,
        hsva: true,
        cmyk: true,
        input: true,
        clear: true,
        save: true,
      },
    },
  });

  PICKR.on("init", function () {
    PICKR.setColor(selectedColor);
  });
  PICKR.on("show", function () {
    enabled = false;
  });
  PICKR.on("hide", function () {
    setTimeout(function () {
      enabled = true;
    }, 300);
  });
  PICKR.on("change", function () {
    selectedColor = PICKR.getColor().toHEXA().toString();
  });

  window.save = function (x, y) {
    var data = {};
    data["x"] = x;
    data["y"] = y;
    data["data"] = filled;
    $("#saveButton").attr("disabled", "true");

    $.post("draw.php?submit=1", data, function (rsp) {
      $("body").append(rsp);
      $("#saveButton").attr("disabled", false);
    });
  };
  window.PICKR = PICKR;
});
