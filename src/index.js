import './less/index.less'

const navBar= document.querySelector('.nav-container');
const hover = document.querySelectorAll('.nav-link');
const busPic= document.querySelector('.intro img')
const btns= document.querySelectorAll('.btn');
const footerFocus= document.querySelector('.footer p');
const headerBlossom= document.querySelectorAll('h2')
const blogLink= document.querySelectorAll('.nav-link');


// navBar.addEventListener('click', function(event) {
    // console.log(event.target)
    // console.log(event)
    // event.target.style.color= 'white';
    // event.target.style.backgroundColor= 'orangered';
// })
navBar.addEventListener('mouseover', function (item) {
    item.target.style.background='orangered';
})
navBar.addEventListener('mouseleave', function(item) {
    item.target.style.background= '';
})

// console.log(hover)
hover.forEach((item) => {
    item.addEventListener('mouseover', function() {
        item.style.color='white'
    })
})
// colorClick.addEventListener('click', function (event) {
//     event.style.color='white';
// })

btns.forEach((item) => {
    item.addEventListener('click', function(event) {
        if(item.innerText=== 'Sign Me Up!') {
            item.innerText= 'PACK YOUR BAGS!';
        }else {
            item.innerText='Sign Me Up!'
        }
            console.log(event.target.innerText)

    })
})
headerBlossom.forEach((item) => {
    item.addEventListener('mouseover', function(event) {
        event.target.style.color= 'green';
        event.target.style.fontSize= '5rem';
        })
})
headerBlossom.forEach((item) => {
    item.addEventListener('mouseleave', function(event) {
        event.target.style.color= '';
        event.target.style.fontSize= '';
    })
})
window.onload= function(event) {
    alert ('Welcome to your World. Be where YOU want to be.')
}

blogLink[2].addEventListener('click', function (event){
    event.preventDefault();
    alert('You are about to be directed to a third party site!')
})
function creation(event) {
    if (event.key==='i') {
        footerFocus.style.color='red';
    }
}
document.addEventListener('keydown', creation);

document.addEventListener('dblclick', function(event){
    event.target.style.background = 'black';
    event.target.style.color= 'white';
})

// console.log(busPic)
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -.01;
    scale=Math.min(Math.max(.125, scale), 4);
    busPic.style.transform= `scale (${scale})`;
}
let scale =1;
busPic.onwheel = zoom;

// console.log(footerFocus)
// footerFocus.addEventListener('focusin', (event) => {
//     event.target.style.background ='pink';
footerFocus.addEventListener('focusin', (event) => {
    event.target.style.background = 'pink';
  });
  
footerFocus.addEventListener('focusout', (event) => {
    event.target.style.background = '';
  });
  

// const h2Zoom= document.querySelector('.textContent.h2')
// console.log(h2Zoom)
// h2Zoom.onwheel = zoom;
// const navLinks= document.querySelectorAll('.nav-link');
// // console.log(navLinks);
// navLinks.forEach((item) => {
//     navLinks.addEventListener('mouseover', function(event) {
//     event.target.style.color= 'black';
//     setTimeout(function() {
//         event.target.style.color= ''
//     }, 500)
// }, false)}
// // navLinks.addEventListener('mouseover', function(event) {
// //     event.target.style.color= 'white';
// //     setTimeout(function() {
// //         event.target.style.color= ''
// //     }, 500)
// //     })



// // function darken() {
// //     navBar.addEventListener('mouseover', (event) => {
// //     navBar.style.backgroundColor= black;
// //     navBar.style.color= white;
// //     })
// //','