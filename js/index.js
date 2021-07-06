// // Your code goes here

const mainNav = document.querySelector('.main-navigation');

const mouseImage = document.querySelector('.intro img');

const section2 = document.querySelector('.content-section')

const adventimg = document.querySelector('.img-content img');

const par1 = document.querySelector('.intro p');

const par2 = document.querySelector('.inverse-content p');

 const boatImg1 = document.querySelector('img-content, img, image-fulid rounded');

// const boatImg2 = 

// const signButton = 

// const section3 =




mouseImage.onclick = function(){
    mouseOver();
}

function mouseOver(){
    mouseImage.src = 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350';
}



section2.onclick = function(){
    newColor();
}

function newColor(){
    section2.style.color = 'red';
}

mainNav.onclick = function(){
    headerColor();
}

function headerColor(){
    mainNav.style.color = 'blue';
}

adventimg.onclick = function(){
    imgSize();
}

function imgSize(){
    adventimg.width = "200";
}


par1.onclick = function(){
    paragraph1();
}

function paragraph1(){
    par1.style.color = 'green';
}

par2.onclick = function(){
    paragraph2();
}

function paragraph2(){
    par2.style.color = 'purple';
}

boatImg1.onclick = function(){
    image2();
}

function image2(){
    boatImg1.width = '200';
}













