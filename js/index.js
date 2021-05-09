// Your code goes here
const allImg = document.querySelectorAll('img');
const bottom = document.querySelector('footer');
const body = document.querySelector('body');
const firstSec = document.querySelector('.intro');
const firstSecImg = document.querySelector('.intro > img');
const firstSecHead = document.querySelector('.intro > h2');
const firstSecPara = document.querySelector('.intro > p');
const navLinks = document.querySelector('.nav');
const navContainer = document.querySelector('.nav-container');

//using a forEach on all links in the document after converting them into an array using array.from()
const allLinks = document.links
const allLinksArray = Array.from(allLinks)
allLinksArray.forEach(link => {
    link.addEventListener('mouseover', e => {
        link.style.color = "aqua";
    })

    link.addEventListener('mouseout', e => {
        link.style.color = "black";
    }) 

    link.addEventListener('focus', e => {
        link.style.backgroundColor = "#FFEBCD";
    })

    link.addEventListener('focusout', e => {
        link.style.backgroundColor = "white";
    })
})

     
for(let i=0; i < allImg.length; i += 1){
allImg[i].addEventListener('click', e => {
    allImg[i].style.borderRadius = "50%";
});
}

body.addEventListener('keydown', e => {
    if(event.key === "ArrowDown"){
        body.style.background = "linear-gradient(to bottom, #fff 30%, #FFEBCD)";
    }
});

body.addEventListener('wheel', e => {
    body.style.background = "linear-gradient(to bottom, #fff 30%, #FFEBCD)";
    firstSec.style.display = "flex";
    firstSec.style.flexDirection ="column";
    firstSec.style.alignItems ="center";
    firstSecImg.style.width = "60%";
    firstSecImg.style.borderRadius = "50%";
    firstSec.style.paddingTop = "15%";
    firstSec.style.height = "20%";
});


const navBorder = document.querySelector('.main-navigation');
document.addEventListener('scroll', e => {
    navBorder.style.borderBottom = "2px solid #C0C0C0";
})

firstSecImg.addEventListener('dblclick', e => {
    firstSecImg.style.border = "2px solid #c0c0c0";
});

const inputField = document.createElement('input');
document.querySelector('.nav-container').appendChild(inputField)
inputField.style.width = "10%";

const inputBtn = document.createElement('button');
document.querySelector('.nav-container').appendChild(inputBtn)
inputBtn.innerHTML = "SEARCH";
inputBtn.style.backgroundColor = "#17A2B8";
inputBtn.style.border = "none";
inputBtn.style.color= "white";
inputBtn.style.padding = "12px 20px";
inputBtn.style.textAlign= "center";
inputBtn.style.fontSize = "10px";
