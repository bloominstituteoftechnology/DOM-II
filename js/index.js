const funBus = document.querySelector('h1');
const nav = document.querySelector('a:nth-of-type(1)');
const text = document.querySelector('.text-content');
const img = document.querySelector('img');
const pick = document.querySelector('h2');
const aboutUs = document.querySelector('a:nth-of-type(2)');
const entirePage = document.querySelector('body');


funBus.addEventListener('mouseenter', (e) => {funBus.style.color ="blue"});

text.addEventListener('mouseover', (e) => {text.style.color = "orange"});

img.addEventListener('click', (e) => {alert("Don't steal me!!")});

pick.addEventListener('click', (e) => {pick.style.color = "pink"});

window.addEventListener('scroll', (e) => {nav.style.color = "purple"})

entirePage.addEventListener("keydown", (e) => {entirePage.style.color = "red"});

aboutUs.onclick = function(){
    alert('Dont get any funny ideas')
};

function ready(){
    alert('ARE YOU READY?????');
};

document.addEventListener('DOMContentLoaded', ready);

document.addEventListener('copy', function(event){
    console.log("wooooowwww")
});

document.addEventListener('wheel', function(event){
    console.log('wheeeeee!')
});