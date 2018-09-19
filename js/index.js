// Your code goes here
//
const backGround = document.querySelector('.home');
const funInSun = document.querySelectorAll('.destination');
const buttonText = document.querySelector('.btn');
const popUp = document.querySelector('.popup-ad');
const welcomeText = document.querySelector('.container .intro p');
const boatImage = document.querySelector('.content-destination img');
const headerLinks = document.querySelectorAll('.nav a');
const bodyColor = document.querySelector('.home');
const funBus = document.querySelector('.intro h2');
function hideThing(e) {
  if(e.currentTarget.style.visibility === 'hidden') {
    e.currentTarget.style.visibility = 'visible';
  } else {
    e.currentTarget.style.visibility = 'hidden';
  }
}

headerLinks.forEach((item) => {
  item.addEventListener('click', (e) => {
    popUp.style.visibility = 'visible';
  })
});

funBus.addEventListener('click', (e) => {
  if( e.target.parentNode.style.background === 'gray') {
    e.target.parentNode.style.background = 'blue';
  } else {
    e.target.parentNode.style.background = 'gray';
  }
});

const pTags = document.querySelectorAll('p');
pTags.forEach((item) => {
  item.addEventListener('mouseover', hideThing);
  item.addEventListener('mouseleave', hideThing);
});
// console.log(headerLinks);
// 1
boatImage.addEventListener('drag', (event) => {
  boatImage.style.borderRadius = '1000px';
});
// 2
boatImage.addEventListener('dragend', (event) => {
  boatImage.style.borderRadius = '50px';
});
// 3
welcomeText.addEventListener('dblclick', (event) => {
  welcomeText.style.background = 'yellow';
});
// 4
popUp.addEventListener('click', (event) => {
  console.log('here is the pop up ad');
  popUp.classList.add('display-none');
});
// 5
funInSun[0].addEventListener('mouseover', (event) => { 
  backGround.style.background = 'yellow';
  document.querySelector('.intro h2').style.color = 'black';
});
//6
funInSun[1].addEventListener('mouseover', (event) => { 
  // console.log('we are over the div') 
  backGround.style.background = 'purple';
  document.querySelector('.intro h2').style.color = 'orange';
  console.log(event.currentTarget);
});
// 7
funInSun[2].addEventListener('mouseover', (event) => { 
  // console.log('we are over the div') 
  backGround.style.background = 'teal';
  document.querySelector('.intro h2').style.color = 'white';

});
// 8 
 headerLinks.forEach((item) => {
   item.addEventListener('mouseover', (event) => {
     item.style.color = 'blue'
   })
 });
// 9

document.addEventListener('keydown', (event) => {
  let text = document.querySelector('.container h1')
    if(text.style.color === 'yellow') {
      text.style.color = 'black';
    } else {text.style.color = 'yellow';}
});

document.addEventListener('keydown', (event) => {
  let text = document.querySelector('p')
    if(text.style.color === 'black') {
      text.style.color = 'yellow';
    } else {text.style.color = 'black';}
});



