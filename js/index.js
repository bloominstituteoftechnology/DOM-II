// Your code goes here
Array.from(document.links).forEach((link) =>{
    link.addEventListener('click', (event) =>{
        event.preventDefault();
        console.log("Helllo")
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
    headerLogo.style.fontSize = 'Grem'
})


//4
document.body.style.background = 'blue'

//5
// const navLink = document.querySelectorAll('.nav-link');
// Array.from(navLink).forEach(link =>{
//     link.addEventListener('mouserover',(event) => {
//         event.target.style.color = 'purple'
//     })
// })

let test = document.querySelector('nav');
test.addEventListener('mouseover', function(event){
    event.target.style.color = 'orange';
    setTimeout(function(){
        event.target.style.color = 'teal';
    }, 500)
},false)

//6
document.addEventListener('pointermove', (event)=>{   //<-- Will keep a total number of times
    console.log('Pointer moved');
})
//document.onpointermove = (event) =>{    //<-- Will make a new line saying Pointer moved each time it moves.
//    console.log('Pointer moved')
//}

//7
// const h4 = document.querySelectorAll('h4');
// Array.from(h4).forEach(element =>{
//     element.addEventListener('mouseover', (event) =>{
//         event.target.style.border = 'thin solid black';
//     });
// });

//8
const contentSection = document.querySelector('.content-section');
contentSection.addEventListener('focus', (event) => {
    contentSection.style.display = 'none';
    console.log(event);
});

//9
const img = document.querySelector('.img-fluid')
document.addEventListener('select', (event) =>{
    img.style.width = '300px';
    console.log(event);
});

//10
const destination = document.querySelectorAll('p')
window.addEventListener('load', (event) =>{
    destination.style.color = 'red';
    console.log(event);
});