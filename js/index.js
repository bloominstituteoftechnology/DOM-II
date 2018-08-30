// Your code goes here
//const advenImgs = ['adven.jpg', 'adven1.png', 'adven2.png'];
//const destImgs = ['dest.jpg', 'dest1.png', 'dest2.png'];

// Cycle Through Different Images
const destImgs = {
    images: ['img/dest.jpg', 'img/dest1.png', 'img/dest2.png'],
    index: 0
}

const advenImgs = {
    images: ['img/adven.jpg', 'img/adven1.png', 'img/adven2.png'],
    index: 0
}

function cycleImg(element, imgObj){
    element.src = imgObj.images[imgObj.index];
    imgObj.index++;
    if(imgObj.index >= imgObj.images.length){
        imgObj.index = 0;
    }
}

let destInterval;
let advenInterval;

function destSlideShowHover(event){
    cycleImg(destImg, destImgs);
    destInterval = setInterval(cycleImg, 1000, destImg, destImgs);
}

function destSlideShowHoverCancel(event){
    clearInterval(destInterval);
}

function advenSlideShowHover(event){
    cycleImg(advenImg, advenImgs);
    advenInterval = setInterval(cycleImg, 1000, advenImg, advenImgs);
}

function advenSlideShowHoverCancel(event){
    clearInterval(advenInterval);
}

const destImg = document.getElementsByClassName('img-content')[0].children[0];
const advenImg = document.getElementsByClassName('img-content')[1].children[0];

destImg.addEventListener('mouseenter', destSlideShowHover);
advenImg.addEventListener('mouseenter', advenSlideShowHover);

destImg.addEventListener('mouseleave', destSlideShowHoverCancel);
advenImg.addEventListener('mouseleave', advenSlideShowHoverCancel);

// Change nav bar color
const navBar = document.querySelector('.main-navigation');

function pageScrollHandler(event){
    const mixPer = window.scrollY / window.innerHeight;
    let red = 255; 
    let green = Number.parseInt(255 - (255 - 235) * mixPer); 
    green = green < 235 ? 235 : green; 
    let blue = Number.parseInt(255 - (255 - 205) * mixPer); 
    blue = blue <205 ? 205 : blue; 
    navBar.style.background = `rgb(${red}, ${green}, ${blue})`
}

window.addEventListener('scroll', pageScrollHandler);

//