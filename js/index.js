// Your code goes here
Array.from(document.links).forEach((link) =>{
    link.addEventListener('click', (event) =>{
        event.preventDefault();
    })
})

//1
const navBar = document.querySelector('nav')
let nav1 = navBar.querySelector('a:nth-of-type(1)');
nav1.style.color = 'pink';
let nav2 = navBar.querySelector('a:nth-of-type(2)');
nav2.style.color = 'purple';
let nav3 = navBar.querySelector('a:nth-of-type(3)');
nav3.style.color = 'yellow';
let nav4 = navBar.querySelector('a:nth-of-type(4)');
nav4.style.color = 'red';

//2
const headerLogo = document.querySelector(".logo-heading");
headerLogo.addEventListener('mouseover', () =>{
    headerLogo.textContent = "I swear this is fun";
    headerLogo.style.fontSize = '4rem'
})

//3
headerLogo.addEventListener('mouseover', ()=>{
    headerLogo.textContent = 'Super Fun Bus';
    headerLogo.style.fontSize = '6rem'
});

//4
document.body.style.background = 'blue'

//5
let test = document.querySelector('nav');
test.addEventListener('mouseover', function(event){
    event.target.style.color = 'orange';
    setTimeout(function(){
        event.target.style.color = 'teal';
    }, 500)
},false);

//6
document.addEventListener('pointermove', (event)=>{   //<-- Will keep a total number of times
    console.log('Pointer moved');
})

//7
const intro = document.querySelector('.intro');
intro.addEventListener('dblclick', function(event){
    intro.style.background = 'cornflowerblue';
})
intro.addEventListener('mouseleave', function(event){
    intro.style.background = 'darkslateblue';
})

//8
const contentSection = document.querySelector('.content-section');
contentSection.addEventListener('focus', (event) => {
    contentSection.style.display = 'none';
    console.log(event);
});

//9
const img = document.querySelector('.img-fluid')
img.addEventListener('auxclick', (event) =>{
    img.style.transform = 'rotate(70deg)';
    console.log(event);
});

//10
const destination = document.querySelector('p');
window.addEventListener('load', (event) =>{
    destination.style.color = 'red';
    console.log(event);
});