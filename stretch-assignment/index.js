let redBox = document.querySelector('.block--red');
let blueBox = document.querySelector('.block--blue');
let greenBox = document.querySelector('.block--green');
let pinkBox = document.querySelector('.block--pink');
let grayBox = document.querySelector('.block--gray');

TweenMax.from(redBox, 0.5, {
  opacity: 0,
  y: 500,
});

TweenMax.from(blueBox, 0.5, {
  opacity: 0,
  y: 500,
});

TweenMax.from(greenBox, 0.5, {
  opacity: 0,
  y: 400,
});

TweenMax.from(pinkBox, 0.5, {
  opacity: 0,
  y: 300,
});

TweenMax.from(grayBox, 0.5, {
  opacity: 0,
  y: 200,
});

var tl = new TimelineLite();
tl
  .to(redBox, 1, { x: 1000, delay: 1 })
  //add blueGreenSpin label 1 second after end of timeline
  .to(blueBox, 0.5, { x: 1000, rotation: 360 })
  //insert tween 0.5 seconds after blueGreenSpin label
  .to(greenBox, 0.5, { x: 1000, rotation: 360 })
  .to(pinkBox, 0.5, { x: 1000, rotation: 360 })
  .to(grayBox, 0.5, { x: 1000, rotation: 360 });

redBox.addEventListener('mouseover', () => {
  TweenMax.to(redBox, 6, { x: 0, rotation: 360, scale: 0.6 });
});

blueBox.addEventListener('mouseover', () => {
  TweenMax.to(blueBox, 6, { x: 0, rotation: 360, scale: 0.7 });
});

greenBox.addEventListener('mouseover', () => {
  TweenMax.to(greenBox, 6, { x: 0, rotation: 360, scale: 0.8 });
});

pinkBox.addEventListener('mouseover', () => {
  TweenMax.to(pinkBox, 6, { x: 0, rotation: 360, scale: 0.9 });
});

grayBox.addEventListener('mouseover', () => {
  TweenMax.to(grayBox, 6, { x: 0, rotation: 360, scale: 1 });
});

redBox.addEventListener('click', () => {
  TweenMax.to(redBox, 6, { x: 1000, rotation: 360, scale: 1 });
});

blueBox.addEventListener('click', () => {
  TweenMax.to(blueBox, 6, { x: 1000, rotation: 360, scale: 0.9 });
});

greenBox.addEventListener('click', () => {
  TweenMax.to(greenBox, 6, { x: 1000, rotation: 360, scale: 0.8 });
});

pinkBox.addEventListener('click', () => {
  TweenMax.to(pinkBox, 6, { x: 1000, rotation: 360, scale: 0.7 });
});

grayBox.addEventListener('click', () => {
  TweenMax.to(grayBox, 6, { x: 1000, rotation: 360, scale: 0.6 });
});
greenBox.addEventListener('click', () => {
  greenBox.innerHTML = "Tmw I'll smoke that GREEN";
});

redBox.addEventListener('click', () => {
  redBox.innerHTML = 'Whats up cuzz Im a blood';
});

pinkBox.addEventListener('click', () => {
  pinkBox.innerHTML = 'This is The Pinky toe take down';
});

blueBox.addEventListener('click', () => {
  blueBox.innerHTML = "Today I'm BLUE";
});
