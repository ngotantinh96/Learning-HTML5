function makeCanvas() {
  // draw canvas text
  var canvas1 = document.getElementById("canvas1");
  var ctx1 = canvas1.getContext("2d");

  ctx1.font = "32px Arial";
  ctx1.fillStyle = "DeepSkyBlue";
  ctx1.strokeStyle = "black";

  ctx1.fillText("I Love HTML5", 100, 150);
  ctx1.strokeText("I Love HTML5", 100, 150);

  //draw four squares
  var canvas2 = document.getElementById("canvas2");
  var ctx2 = canvas2.getContext("2d");

  ctx2.fillStyle = "red";
  ctx2.strokeStyle = "black";
  ctx2.lineWidth = 10;
  ctx2.fillRect(40, 5, 135, 135);
  ctx2.strokeRect(40, 5, 135, 135);

  ctx2.fillStyle = "gray";
  ctx2.fillRect(200, 0, 135, 135);

  ctx2.fillStyle = "red";
  ctx2.strokeStyle = "black";
  ctx2.lineWidth = 10;
  ctx2.fillRect(200, 150, 135, 135);
  ctx2.strokeRect(200, 150, 135, 135);

  ctx2.fillStyle = "gray";
  ctx2.fillRect(40, 155, 135, 135);

  // LINES
  var canvas3 = document.getElementById("canvas3");
  var ctx3 = canvas3.getContext("2d");

  ctx3.strokeStyle = "gray";
  ctx3.fillStyle = "#ff0000";
  ctx3.lineWidth = 5;

  ctx3.beginPath();
  ctx3.moveTo(100, 100);
  ctx3.lineTo(150, 200);
  ctx3.lineTo(200, 200);
  ctx3.lineTo(200, 290);
  ctx3.lineTo(290, 290);
  ctx3.lineTo(290, 100);
  ctx3.moveTo(100, 100);
  ctx3.stroke();
  ctx3.fill();
}
