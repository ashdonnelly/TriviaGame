var timer = document.getElementById("timer");

var sticky = timer.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    timer.classList.add("sticky")
  } else {
    timer.classList.remove("sticky");
  }
}