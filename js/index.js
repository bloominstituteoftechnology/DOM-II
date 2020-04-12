// Your code goes here
const navigation = document.querySelectorAll('.nav')
navigation.forEach(navigation => {
navigation.addEventListener('mouseover', e => {
e.target.style.border = '3px solid green';
})
})

const funBusImg = document.querySelector('.intro')
funBusImg.addEventListener('dblclick', e => {
e.target.style.border = '3px solid yellow';
})

