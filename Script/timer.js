var countDownDate = new Date("Feb 25, 2022 10:00:00").getTime();

var myfunc = setInterval(function() {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (new Date().getTime() > countDownDate)
  {
    days = 0;
    hours = "00";
    minutes = "00";
    seconds = "00";
  }

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  var isRed = true;

  if (hours < 1 && days == 0) {
    document.getElementById("days").classList.add("red");
    document.getElementById("hours").classList.add("red");
    document.getElementById("minutes").classList.add("red");
    document.getElementById("seconds").classList.add("red");
  }
}, 1000)
