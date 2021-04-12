// Your code goes here

// * `wheel`
// * `focus`
// * `resize`
// * `scroll`
// * `select`

//header 2
const header = document.querySelector('header.main-navigation');

header.addEventListener('mouseover', e => {
  header.style.backgroundColor = 'black'
});
header.addEventListener('mouseleave', e => {
  header.style.backgroundColor = '';
});

//header img 2
const headerImg = document.querySelector('header img');

headerImg.addEventListener('click', e => {
  headerImg.style.height = '500px';
});

headerImg.addEventListener('dblclick', e => {
  headerImg.style.height = '';
});

//body 2
const body = document.querySelector('body');

body.addEventListener('keydown', e => {
  e.key == 'f' ? body.style.backgroundColor = 'black' : console.log('didnt work');
});

body.addEventListener('keyup', e => {
  e.key == 'f' ? body.style.backgroundColor = '' : console.log('didnt work');
});

//images 1
headerImg.addEventListener('load', e => {
  headerImg.style.transition = 'all 3s ease-in-out';
  headerImg.style.transform = 'rotate(7200deg)';
});

//paragraphs 1
const para = document.querySelectorAll('p');
console.log(para)

para.forEach(e => {
  e.addEventListener('scroll', event => {
    event.style.color = 'pink';
    console.log('resized');
  });
});
