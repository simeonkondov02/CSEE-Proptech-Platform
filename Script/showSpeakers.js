function showMoreSpeakers(year) {
  var sectionID = "more_" + year;
  var buttonID = "show_more_" + year + "_btn";

  document.getElementById(sectionID).classList.add("show");
  document.getElementById(buttonID).style.display = "none";
}
