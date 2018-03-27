const blockContainer = document.getElementsByClassName('blocks')[0];

window.onload = function() {
  blockContainer.addEventListener('click', (event) => {
    if (event.target.parentNode.className === "blocks") {
      console.log(event.target.offsetLeft);
      event.target.offsetLeft += 100;
      console.log(event.target.offsetLeft);
      event.target.parentNode.insertBefore(event.target, event.target.parentNode.childNodes[0]);
    }
  });
}
