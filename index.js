const blockContainer = document.getElementsByClassName('blocks')[0];

window.onload = function() {

  // rocket assignment
   // blockContainer.addEventListener('click', (event) => {
   //   if (event.target.parentNode.className === "blocks") {
   //     event.target.parentNode.insertBefore(event.target, event.target.parentNode.childNodes[0]);
   //   }
   // });
  let x;

  function moveRight(event) {
    x = setInterval(function() {
      if (event.target.style.marginLeft === undefined || event.target.style.marginLeft === null || parseInt(event.target.style.marginLeft) === 0 || event.target.style.marginLeft === "") {
        event.target.style.marginLeft = "0px";
      }
      event.target.style.marginLeft = parseInt(event.target.style.marginLeft) + 1 + "px";
    }, 10);
  }
  function reset(event) {
    x = setInterval(function() {
      event.target.style.marginLeft = parseInt(event.target.style.marginLeft) - 1 + "px";
      if (parseInt(event.target.style.marginLeft) === 0) {
        clearInterval(x);
      }
    }, 1);
  }
  blockContainer.addEventListener('mousedown', (event) => {
    clearInterval(x);
    if (event.target.parentNode.className === "blocks") {
      moveRight(event);
    }
  });
  blockContainer.addEventListener('mouseup', (event) => {
    if (event.target.parentNode.className === "blocks"){
      clearInterval(x);
      reset(event);
    }
  });
}
