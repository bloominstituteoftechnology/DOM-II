// Your code goes here
const keyPopup = document.querySelector('.keystroke');
const keyPopupText = document.querySelector('.keystroke h1');

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
  function keyDownCallback(eventObject) {
    const { key } = eventObject;
    keyPopup.classList.remove('hidden');
    keyPopupText.textContent += key || "_";

    setTimeout(function () {
      keyPopup.classList.add('hidden');
      keyPopupText.textContent = "";
    }, 300);
  }

  document.addEventListener('keydown', keyDownCallback);
})();

(function wheelEvent() {
  function wheelCallback(eventObject) {
    const { deltaY } = eventObject;
    keyPopup.classList.remove('hidden');
    keyPopupText.textContent = deltaY < 0 ? '⬆️': '⬇️';
    keyPopupText.style.fontSize = '100px';

    setTimeout(function () {
      keyPopup.classList.add('hidden');
      keyPopupText.textContent = '';
      keyPopupText.removeAttribute('style');
    }, 500);
  }

  document.addEventListener('wheel', wheelCallback);
})();

(function dragDropEvent() {
  const siteImages = document.querySelectorAll('img');

  function dragCallback(eventObject) {
    const { target } = eventObject;
    target.style.boxShadow = '0 0 50px dodgerblue';
  }
  function dropCallback(eventObject) {
    const { target } = eventObject;

    target.removeAttribute('style');
  }

  for (let i = 0; i < siteImages.length; i++) {
    siteImages[i].addEventListener('drag', dragCallback);
    siteImages[i].addEventListener('dragend', dropCallback);
  }
})();
