function openWindow(id) {
  var pop_up_window = document.getElementById(id);
  pop_up_window.classList.add("opened_window");
}

function closeWindow(id) {
  var pop_up_window = document.getElementById(id);
  pop_up_window.classList.remove("opened_window");
}
