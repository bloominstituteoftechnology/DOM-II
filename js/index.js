// Your code goes here

//nav
const page = document.querySelector('.home')
const navLogo = document.querySelector('.logo-heading');
const navLinkBar = document.querySelector('.nav');
const nav = document.querySelector('.main-navigation');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(element => element.addEventListener('click',(event) =>{
    event.preventDefault();
    event.target.style.color = 'green';
}));

navLogo.addEventListener('click', (event) => {
   if( event.target.style.color != 'green'){
       event.target.style.color = 'green';
   }
   else { event.target.style.color = 'black';
   }
})
console.log(navLogo);

navLinkBar.addEventListener('mouseenter', event =>{
    event.currentTarget.style.backgroundColor = 'blue';
})

navLinkBar.addEventListener('mouseleave', event =>{
    event.currentTarget.style.backgroundColor = 'white';
})

window.addEventListener('scroll', (event) =>{
    nav.style.opacity = '0.5';
    nav.style.borderBottom = 'none';
    
})
 
//buttons

const btns = document.querySelectorAll('.btn');
 
// cave man way

//  btns.forEach(element => element.addEventListener('mouseenter',(event) =>{
//      event.target.innerText = 'Rub Me!!'
//  }));
//  btns.forEach(element => element.addEventListener('mouseleave',(event) =>{
//     event.target.innerText = 'Sign Me Up!'
// }));
// btns.forEach(element => element.addEventListener('click',(event) =>{
//     event.target.innerText = 'I Said Rub Not Poke!'
// }));

//cleaned up

const buttonChanger = function (x,y) {
     btns.forEach(element => element.addEventListener(x,(event) =>{
    event.target.innerText = y
}))}

buttonChanger('mouseenter', 'Rub Me!!');
buttonChanger('mouseleave', 'Sign Me Up!');
buttonChanger('click', 'I Said Rub Not Poke!');

//pics

const pics = document.querySelectorAll('img');

pics.forEach(element => element.addEventListener('click',(event) =>{
     event.target.alt = 'You Killed Me!!';
     event.target.src = '';
     console.log('working');
}))



//stopPropagation()
const p = document.querySelectorAll('p')

page.addEventListener('click', event =>{
    console.log('You cant stop Me!');
})

p.forEach(element => element.addEventListener('click',(event) =>{
    event.stopPropagation();
    console.log('You stopped Me!!');
}))