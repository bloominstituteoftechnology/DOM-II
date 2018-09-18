const rocket = document.querySelectorAll(".blocks .block");

rocket[0].addEventListener("click", event => {
  event.currentTarget.style.position = "absolute";
});
rocket[1].addEventListener("click", event => {
  event.currentTarget.style.position = "absolute";
});
rocket[2].addEventListener("click", event => {
  event.currentTarget.style.position = "absolute";
});
rocket[3].addEventListener("click", event => {
  event.currentTarget.style.position = "absolute";
});
rocket[4].addEventListener("click", event => {
  event.currentTarget.style.position = "absolute";
});

rocket[0].addEventListener("mousedown", event => {
  TweenMax.to(event.currentTarget, 2, { left: window.outerWidth });
});
rocket[0].addEventListener("mouseup", event => {
  TweenMax.to(event.currentTarget, 2, { left: window.outerWidth });
});
rocket[1].addEventListener("mousedown", event => {
  TweenMax.to(event.currentTarget, 2, { left: window.outerWidth });
});
rocket[2].addEventListener("mousedown", event => {
  TweenMax.to(event.currentTarget, 2, { left: window.outerWidth });
});
rocket[3].addEventListener("mousedown", event => {
  TweenMax.to(event.currentTarget, 2, { left: window.outerWidth });
});
rocket[4].addEventListener("mousedown", event => {
  TweenMax.to(event.currentTarget, 2, { left: window.outerWidth });
});
