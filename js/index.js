// Your code goes here

(function mouseoverEvent() {
  const navLinks = document.querySelectorAll('a.nav-link');

  function mouseOverCallback(eventObject) {
    const { target } = eventObject;
    target.classList.toggle('hover');
  }

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('mouseover', mouseOverCallback);
  }
})();

(function keydownEvent() {
  const keyPopup = document.querySelector('.keystroke');
  const keyPopupText = document.querySelector('.keystroke h1');

  function keyDownCallback(eventObject) {
    const { key } = eventObject;
    keyPopup.classList.remove('hidden');
    keyPopupText.textContent = key || "_";

    setTimeout(function () {
      keyPopup.classList.add('hidden');
      keyPopupText.textContent = "";
    }, 300);
  }

  document.addEventListener('keydown', keyDownCallback);
})();
