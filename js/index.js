

const funBus = document.querySelector('h1');

funBus.addEventListener('mouseover', (event) => {
    event.target.style.color = 'skyBlue'
    })

funBus.addEventListener('mouseleave', (event) => {
    event.target.style.color ='purple'
})

const changeImage = document.querySelector('img');
changeImage.addEventListener('mouseenter', () => {
    changeImage.src = "https://cdn.pixabay.com/photo/2013/07/13/11/36/volkswagen-158463_960_720.png";
})

const links = document.querySelectorAll('a');
    console.log (links);

links[0].addEventListener('click', (event) => {
    event.target.style.color = 'green'
});

links[1].addEventListener('click', (event) => {
    event.target.style.color = 'green'
} )

links[2].addEventListener('click', (event) => {
    event.target.style.color = 'green'
} )

links[3].addEventListener('click', (event) => {
    event.target.style.color = 'green'
} )

const funBusImg = document.querySelector('img');
console.log (funBusImg);

funBusImg.addEventListener('mouseenter', () => {
    funBusImg.style.transform = "scale(1.2)";
    funBusImg.style.transition = "all 0.3s"
})

funBusImg.addEventListener('mouseleave', () => {
    funBusImg.style.transform = "scale(1)"
})

const header2 = document.getElementsByTagName('h2');
console.log (header2)

header2[0].addEventListener('mouseover', (event) => {
   header2[0].style.fontSize = "6rem"
   header2[0].style.fontWeight = '500'
   header2[0].style.color = 'blue'
})

header2[1].addEventListener('mousemove', (event) => {
    header2[1].style.fontWeight = '1000'
    header2[1].style.fontSize = '4rem'
    header2[1].style.color = 'red'
})

header2[2].addEventListener('mousemove', (event) => {
    header2[2].style.fontWeight = '1000'
    header2[2].style.fontSize = '4rem'
    header2[2].style.color = 'red'
})

header2[3].addEventListener('mousemove', (event) => {
    header2[3].style.fontWeight = '1000'
    header2[3].style.fontSize = '4rem'
    header2[3].style.color = 'red'
})

const header4 = document.querySelectorAll('h4');
console.log(header4);

header4[0].addEventListener('mouseover', (event) => {
    header4[0].style.fontWeight = '1000'
    header4[0].style.fontSize = '4rem'
    header4[0].style.color = 'hotPink'
})

header4[1].addEventListener('mouseover', (event) => {
    header4[1].style.fontWeight = '1000'
    header4[1].style.fontSize = '4rem'
    header4[1].style.color = 'hotPink'
})

header4[2].addEventListener('mouseover', (event) => {
    header4[2].style.fontWeight = '1000'
    header4[2].style.fontSize = '4rem'
    header4[2].style.color = 'hotPink'
})

const buttons = document.getElementsByClassName('btn')
console.log (buttons)

buttons[0].addEventListener('dblclick',(event) => {
    buttons[0].style.backgroundColor = "gray";
})

buttons[1].addEventListener('dblclick',(event) => {
    buttons[1].style.backgroundColor = "gray";
})

buttons[2].addEventListener('dblclick',(event) => {
    buttons[2].style.backgroundColor = "gray";
})

const text = document.querySelectorAll('p');
console.log (text);

document.addEventListener('scroll',(event) => {
   text[0].style.color ="purple";
   text[1].style.color ="purple";
   text[2].style.color ="purple";
   text[3].style.color ="purple";
   text[4].style.color ="purple";
   text[5].style.color ="purple";
   text[6].style.color ="purple";
   text[7].style.color ="purple";
   text[8].style.color ="purple";
   text[9].style.color ="purple";
})