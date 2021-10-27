// Your code goes here
//This below is terrible avert your eyes.
const links = document.querySelector('.first');

links.addEventListener('mouseover', event => {
    links.style.color = 'green'
})

links.addEventListener('mouseout', event => {
    links.style.color = 'blue';
})

const linksTwo = document.querySelector('.second');

linksTwo.addEventListener('mouseover', event => {
    linksTwo.style.color = 'green'
})

linksTwo.addEventListener('mouseout', event => {
    linksTwo.style.color = 'blue';
})

const linksThree = document.querySelector('.third');

linksThree.addEventListener('mouseover', event => {
    linksThree.style.color = 'green'
})

linksThree.addEventListener('mouseout', event => {
    linksThree.style.color = 'blue';
})
const linksFour = document.querySelector('.fourth');

linksFour.addEventListener('mouseover', event => {
    linksFour.style.color = 'green'
})

linksFour.addEventListener('mouseout', event => {
    linksFour.style.color = 'blue';
})

const move = document.querySelector('.intro h2');

function escKey(evt) {
    if (evt.key === 'f') {
        move.textContent = 'F in the chat';
    }
}

document.addEventListener('keydown', escKey);

function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;


    scale = Math.min(Math.max(.125, scale), 4);


    bus.style.transform = `scale(${scale})`;
  }

  let scale = 1;
  const bus = document.querySelector('.intro img');
  bus.onwheel = zoom;

  window.addEventListener('load', (evt) => {
    console.log('page is fully loaded');
  });

  const heightOutput = document.querySelector('#height');
  const widthOutput = document.querySelector('#width');
  
  function reportWindowSize() {
    console.log(window.innerHeight)
    console.log(window.innerWidth)
  }
  
  window.onresize = reportWindowSize;

  window.addEventListener('scroll', evt => {
    console.log('Just keep swimming. Just keep swimming.')
});

const dbTest = document.querySelector('content-destination img');

dbTest.addEventListener('dblclick', evt => {
    dbTest.style.transform = 'rotate(90deg)';
});