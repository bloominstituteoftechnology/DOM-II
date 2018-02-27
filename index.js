document.querySelector(".blocks").addEventListener("click", (event) => {
  document.querySelector(".blocks").removeChild(event.target);
  document.querySelector(".blocks").prepend(event.target); });