function makeCanvas() {
  var canvas1 = document.getElementById("canvas1");
  var ctx1 = canvas1.getContext("2d");

  ctx1.font = "32px Arial";
  ctx1.fillStyle = "DeepSkyBlue";
  ctx1.strokeStyle = "black";

  ctx1.fillText("I Love HTML5", 100, 150);
  ctx1.strokeText("I Love HTML5", 100, 150);
}
