var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

setInterval(function () {
  d = new Date();
  second = d.getSeconds() * 6;
  minute = d.getMinutes() * 6;
  hour = d.getHours() * 30 + Math.round(minute / 12);
  document.getElementById("sec-id").style.transform =
    "rotate(" + second + "deg)";
  document.getElementById("min-id").style.transform =
    "rotate(" + minute + "deg)";
  document.getElementById("hour-id").style.transform =
    "rotate(" + hour + "deg)";
}, 1000);