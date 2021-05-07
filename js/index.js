// Your code goes here
const image = document.querySelectorAll('img');
const bottom = document.querySelector('footer');
const main1 = document.querySelector('body');
const firstSec = document.querySelector('.intro');
const firstSecImg = document.querySelector('.intro > img');
const firstSecHead = document.querySelector('.intro > h2');
const firstSecPara = document.querySelector('.intro > p');

//using a forEach on all links in the document after converting them into an array using array.from()
const allLinks = document.links
const allLinksArray = Array.from(allLinks)
allLinksArray.forEach(link => {
    link.addEventListener('mouseover', e => {
        link.style.color = "aqua";
    })
})

allLinksArray.forEach(link => {
    link.addEventListener('mouseout', e => {
        link.style.color = "black";
    })
})

for(let i=0; i < image.length; i += 1){
image[i].addEventListener('click', e => {
    image[i].style.borderRadius = "50%";
});
}

main1.addEventListener('keydown', e => {
    if(event.key === "ArrowDown"){
        main1.style.background = "linear-gradient(to bottom, #fff 30%, #FFEBCD)";
    }
});

main1.addEventListener('wheel', e => {
    main1.style.background = "linear-gradient(to bottom, #fff 30%, #FFEBCD)";
    firstSec.style.display = "flex";
    firstSec.style.flexDirection ="column";
    firstSec.style.alignItems ="center";
    firstSecImg.style.width = "60%";
    firstSecImg.style.borderRadius = "50%";
    firstSec.style.paddingTop = "15%";
    firstSec.style.height = "20%";
});

//const navBorder = document.querySelector('.main-navigation');
const navBorder = document.querySelector('.main-navigation');
document.addEventListener('scroll', e => {
    navBorder.style.borderBottom = "2px solid #C0C0C0";
})







