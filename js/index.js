// Your code goes here
const navigation = document.querySelectorAll('.nav')
navigation.forEach(navigation => {
navigation.addEventListener('mouseover', e => {
e.target.style.border = '3px solid green';
})
})

const funBusImg = document.querySelector('.intro')
funBusImg.addEventListener('dblclick', e => {
e.target.style.border = '3px solid hotpink';
})

const button = document.querySelectorAll('.btn')
button.forEach(button =>{
    button.addEventListener('click', e => {
        e.target.style.border = '3px solid red';
    })
})

const letsGo = document.querySelector('.text-content h2')
letsGo.addEventListener('resize', e => {
    e.target.style.transform = 'rotate(360deg)';
}) // not working

const logoHeading = document.querySelectorAll('.logo-heading')
logoHeading.addEventListener('drag', e => {
    logoHeading.style.transform = 'rotate(180deg)';
});
