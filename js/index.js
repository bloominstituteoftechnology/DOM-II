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
