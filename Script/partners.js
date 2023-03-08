function nextPage() {
  var p1 = document.getElementById("page_1");
  var p2 = document.getElementById("page_2");
  var p3 = document.getElementById("page_3");
  var p4 = document.getElementById("page_4");

  index = 1;

  setInterval(
    function() {
      if (index > 4) { //To be changed
        index = 1;
      }

      switch (index) {
        case 1:
          p1.classList.remove("hidden_page");
          p2.classList.add("hidden_page");
          p3.classList.add("hidden_page");
          p4.classList.add("hidden_page");
          break;

        case 2:
          p1.classList.add("hidden_page");
          p2.classList.remove("hidden_page");
          p3.classList.add("hidden_page");
          p4.classList.add("hidden_page");
          break;

        case 3:
          p1.classList.add("hidden_page");
          p2.classList.add("hidden_page");
          p3.classList.remove("hidden_page");
          p4.classList.add("hidden_page");
          break;

        case 4:
          p1.classList.add("hidden_page");
          p2.classList.add("hidden_page");
          p3.classList.add("hidden_page");
          p4.classList.remove("hidden_page");
          break;

        default:
          p1.classList.remove("hidden_page");
          p2.classList.add("hidden_page");
          p3.classList.add("hidden_page");
          p4.classList.add("hidden_page");
          break;
      }

      index++;
    }, 3000);
}
