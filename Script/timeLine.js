function showTab(n, y) {
  var cake1 = document.getElementById("cake_1");
  var cake2 = document.getElementById("cake_2");
  var cake3 = document.getElementById("cake_3");

  var btn1 = document.getElementById("btn_1");
  var btn2 = document.getElementById("btn_2");
  var btn3 = document.getElementById("btn_3");

  switch (n) {
    case 1:
      cake1.style.display = "inline";
      cake2.style.display = "none";
      cake3.style.display = "none";

      btn1.classList.add("white");
      btn2.classList.remove("white");
      btn3.classList.remove("white");

      switch (y) {
        case 2021:
          document.getElementById("timeline_img_2021").style.height = "202.4vh";
          break;
        case 2022:
          document.getElementById("timeline_img_2022").style.height = "129.1vh";
          break;
      }

      break;

    case 2:
      cake1.style.display = "none";
      cake2.style.display = "inline";
      cake3.style.display = "none";

      btn1.classList.remove("white");
      btn2.classList.add("white");
      btn3.classList.remove("white");

      switch (y) {
        case 2021:
          document.getElementById("timeline_img_2021").style.height = "169.4vh";
          break;
        case 2022:
          document.getElementById("timeline_img_2022").style.height = "82.4vh";
          break;
      }

      break;

    case 3:
      cake1.style.display = "none";
      cake2.style.display = "none";
      cake3.style.display = "inline";

      btn1.classList.remove("white");
      btn2.classList.remove("white");
      btn3.classList.add("white");

      document.getElementById("timeline_img_2022").style.height = "45.4vh";
      document.getElementById("timeline_img_2021").style.height = "45.4vh";

      break;

    default:
      cake1.style.display = "inline";
      cake2.style.display = "none";
      cake3.style.display = "none";

      btn1.classList.add("white");
      btn2.classList.remove("white");
      btn3.classList.remove("white");

      break;
  }

  var slices = document.getElementsByClassName('slice');
  for (var i = 0; i < slices.length; i++) {
    /*slices[i].style.transition = ".7s";
    slices[i].style.height = "20px";
    slices[i].style.opacity = ".2";*/
  }

  var speakers = document.getElementsByClassName('speacker');
  for (var i = 0; i < speakers.length; i++) {
    /*speakers[i].style.transition = ".7s";
    speakers[i].style.height = "20px";
    speakers[i].style.opacity = ".2";*/
  }

  var mySlices = document.getElementsByClassName('my_slice');
  for (var i = 0; i < mySlices.length; i++) {
    mySlices[i].classList.add("my_slice");
  }
}
