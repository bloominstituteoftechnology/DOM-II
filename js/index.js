// Your code goes here

//event 1 MOUSEENTER
const funBusImg = document.querySelector (".intro img")

funBusImg.addEventListener('mouseenter', () =>{
    funBusImg.style.transform ="scale(1.1)"
    funBusImg.style.transfrom ="all 0.8s"
})

const adventureImg = document.querySelector (".img-content img")

adventureImg.addEventListener('mouseenter', () =>{
    adventureImg.src = "https://i.imgur.com/TaB2iyb.jpg?1";
})


//event 2 MOUSELEAVE
funBusImg.addEventListener('mouseleave', () =>{
    funBusImg.style.transform ="scale(1.0)"
    funBusImg.style.transfrom ="all 0.5s"
})

adventureImg.addEventListener('mouseleave', () =>{
    adventureImg.src = "img/adventure.jpg";
})

//event 3 CLICK
 const contentH2 = document.querySelectorAll('h2');
    contentH2.forEach(element => {
    element.addEventListener('click', () => {
        element.style.color = '#4B5320';
    })
});

const contentH4 = document.querySelectorAll('h4');
contentH4.forEach(element => {
element.addEventListener('click', () => {
    element.style.color = '#4B5320';
})
});
//event 4 DBLCLICK
const contentP = document.querySelectorAll('p')

contentP.forEach(element => {
    element.addEventListener('dblclick', () => {
        element.style.color = '#fd7066';
    })
});

//event 5 KEYDOWN
const body = document.querySelector('body')

body.addEventListener('keydown', () => {
    event.target.style.backgroundColor = '#FEFEBF';
})
//event 6 KEYUP
body.addEventListener('keyup', () => {
    event.target.style.backgroundColor = 'white';
})

//event 7 MOUSE
const moveImg = document.querySelectorAll('img')

moveImg.forEach(element => {
    element.addEventListener('mousemove', () => {
        element.style.transform = 'scale(1.1)';
    })
});

//event 8 LOAD
window.addEventListener("load", event => {
        window.alert(
          "FUN FUN FUN FUN FUN"
        );
      });

//event 9 DRAG
const logo = document.querySelector('.logo-heading')

logo.addEventListener('drag', () => {
    logo.style.color = '#fd7066';
    alert('logo draggy draggy')
    event.stopPropagation();
})

//event 10 DRAGEND
const links = document.querySelectorAll('a')
links.forEach(links => {
    links.addEventListener('dragend', () => {
        alert('Ouchhhhhh be careful!')
    } )
})


