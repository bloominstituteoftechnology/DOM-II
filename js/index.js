// Your code goes here
const scaleUp = document.querySelectorAll('.intro');
scaleUp.forEach(item => {
  item.addEventListener('mouseenter', event => {
    item.style.transform = 'scale(1.1)';
    item.style.transition = ' transform 0.5s';
  })
})

const scaleDown = document.querySelectorAll('.intro');
scaleDown.forEach(item => {
  item.addEventListener('mouseleave', event => {
    item.style.transform = 'scale(1)';
    item.style.transition = 'transform 0.5s';
  })
})

const imgScale = document.querySelector(".content-destination");
imgScale.addEventListener("mouseover", e => {
  imgScale.style.transform = 'scale(1.1)';
  imgScale.style.transition = ' transform 0.5s';
});

const bodyColor = document.querySelector('body');
    bodyColor.addEventListener('click', e => {
    bodyColor.style.backgroundColor = "yellow";
});

const navClick = document.querySelector('nav');
    navClick.addEventListener('dblclick', e => {
    navClick.style.backgroundColor = 'yellow';
});

const aColor = document.querySelectorAll('a');
    aColor.forEach(item =>{
        item.addEventListener('click', e => {
            item.style.color = "orange";
        })
}); 

const contentUp = document.querySelectorAll('.content-pick');
contentUp.forEach(item => {
  item.addEventListener('mouseenter', event => {
    item.style.transform = 'scale(1.1)';
    item.style.transition = ' transform 0.5s';
  })
});

const contentDown = document.querySelectorAll('.content-pick');
contentDown.forEach(item => {
  item.addEventListener('mouseleave', event => {
    item.style.transform = 'scale(1)';
    item.style.transition = 'transform 0.5s';
  })
});

const link = document.querySelector('.google-link');
link.addEventListener('click', e => {
  e.preventDefault();
});

const head1 = document.querySelector('h1');
   head1.addEventListener('contextmenu', e => {
   head1.style.backgroundColor ='yellow';
   head1.style.color = 'brown'
   event.stopPropagation();
})

const headr = document.querySelector('header');
   headr.addEventListener('contextmenu', e => {
   headr.style.backgroundColor ='red';
})