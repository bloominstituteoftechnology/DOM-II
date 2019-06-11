// Your code goes here

const busPic = document.querySelector('.intro img');

busPic.addEventListener('click', (event) => {
  event.stopPropagation();
  busPic.setAttribute(
    'src',
    'https://thehorse.com/wp-content/uploads/2017/01/iStock-510488648.jpg'
  );
});

busPic.addEventListener('dblclick', (event) => {
  event.stopPropagation();
  busPic.setAttribute('src', 'https://www.bedbugs.org/images/bedbug.jpg');
});

const warning = document.querySelector('.inverse-content h2');

warning.addEventListener('mouseover', (event) => {
  warning.textContent = 'Murder Abounds!';
});

const dontReplicate = document.querySelector('.content-destination img');
const copyPunish = document.querySelector('.content-destination h2');

copyPunish.addEventListener('copy', (event) => {
  dontReplicate.setAttribute(
    'src',
    'http://quotesonly.net/wp-content/uploads/2015/08/197.jpg'
  );
});

const plzNoDrag = document.querySelector('.intro img');
const dragAlarm = document.querySelector('.intro h2');

plzNoDrag.addEventListener('dragstart', (event) => {
  dragAlarm.textContent = 'OMG PLEASE STOP! STOP! JUST STOP! PUT ME DOWN!!!';
});

window.addEventListener('keydown', (event) => {
  alert('KNOCK IT OFF WITH THAT INFERNAL TAPPING!!!!');
});

const makeMurder = document.querySelector('.intro');
const noFun = document.querySelector('header h1');

makeMurder.addEventListener('click', (event) => {
  noFun.textContent = 'On Fire Bus!';
});
