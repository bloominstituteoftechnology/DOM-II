let redBox = document.querySelector('.block--red');
let blueBox = document.querySelector('.block--blue');
let greenBox = document.querySelector('.block--green');
let pinkBox = document.querySelector('.block--pink');
let grayBox = document.querySelector('.block--gray');

redBox.addEventListener('mouseover', () => {
  alert('Hello Im red');
});

greenBox.addEventListener('click', () => {
  greenBox.innerHTML = 'Hello Im green';
});

blueBox.addEventListener('mousedown', () => {
  blueBox.appendChild(pinkBox);
});

pinkBox.addEventListener('dblclick', () => {
  pinkBox.remove();
});

grayBox.addEventListener('mouseup', () => {
  grayBox.prepend('WasUp Im gray Boxx');
});

blueBox.addEventListener('dblclick', () => {
  blueBox.style.marginLeft = 100 + 'px';
});

greenBox.addEventListener('dblclick', () => {
  greenBox.innerHTML = 'Whats up';
});

pinkBox.addEventListener('mouseover', () => {
  pinkBox.innerHTML = 'Pinky toe take down';
});

grayBox.addEventListener('mouseover', () => {
  grayBox.style.marginLeft = 250 + 'px';
});

pinkBox.addEventListener('mouseover', () => {
  pinkBox.style.marginLeft = 200 + 'px';
});

greenBox.addEventListener('mouseover', () => {
  greenBox.style.marginLeft = 150 + 'px';
});
