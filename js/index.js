// Your code goes here

const funBusLogo = document.querySelector('.logo-heading');
const navLinks = document.querySelectorAll('nav a');
var links = []
for(i=0;i<navLinks.length;i++){
    links.push(navLinks[i]);
}

funBusLogo.addEventListener('mouseover', function(){funBusLogo.style.color= 'hotpink'});
links[0].addEventListener('wheel', function(){links[0].style.color= 'aqua'});
links[1].addEventListener('keydown', function(){links[1].style.color= "red"});
links[2].addEventListener('drag', function(){links[2].style.color= "purple"});
window.addEventListener('load', function(event){links[3].style.color= "green"});

const busIMG = document.querySelector('img');

window.addEventListener('resize', function(){busIMG.style.display= 'none'});
window.addEventListener('scroll', function(){busIMG.style.display= 'initial'});

const firstPara = document.querySelector('.rounded');

firstPara.addEventListener('dblclick', function(event){firstPara.style.width= "250px"});
firstPara.addEventListener('dblclick', function(event){firstPara.style.height= "200px"});
firstPara.addEventListener('select', function(){fisrtPara.style.display= 'none'});
