// Your code goes here
const headPic = document.querySelector('.intro img');
const pic = document.querySelectorAll('img');
const btn = document.querySelectorAll('.btn');
const bottomPic = document.querySelector('.content-destination img'); 
const body = document.querySelector('body');
const home = document.querySelector('nav');

headPic.addEventListener('click', (event) => {
    event.target.style.display = 'none';
})

pic[1].addEventListener('mouseover', (event) => {
    btn[2].style.border = '2px solid red'
})

pic[2].addEventListener('dblclick', (event) => {
    event.target.style.border = '5px dashed purple'
})

bottomPic.addEventListener('dblclick', (event) => {
    btn[1].style.width = '90px';
    btn[0].style.width = '30px';
    btn[2].style.width = '270px';
})

btn[0].addEventListener('click', (event) => {
    console.log('Button 1');
})
btn[1].addEventListener('click', (event) => {
    console.log('Button 2');
})

btn[2].addEventListener('click', (event) => {
    console.log('Button 3');
})

home.addEventListener('mouseover', (event) =>{
    body.style.display = 'none';
    
})

