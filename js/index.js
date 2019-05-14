// Your code goes here
const eventListener = (element, event, cb) => {
  element.addEventListener(event, cb);
}
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(e => eventListener(e, 'mouseover', () => {
  e.classList.add('red');
}))

navLink.forEach(e => eventListener(e, 'mouseout', () => {
  e.classList.remove('red');
}))

