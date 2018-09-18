// Your code goes here
let navLinks = document.querySelectorAll('.main-navigation .nav-container nav .nav-link');
let logo = document.querySelector('.main-navigation .nav-container .logo-heading');
let navBar = logo.parentNode;
function randomColor(){
    let hexdec = "ABCDEF0123456789";
    let color = "#";
  
    while(color.length < 7){
        color += hexdec[Math.floor((Math.random()*16)+1)];
    }
    return color;
  }

navLinks.forEach(x => x.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
}));

navBar.addEventListener('click', e => {
    logo.style.color = randomColor();
    setTimeout(()=>{
        logo.style.color = 'black';
        logo.style.transition = 'all 1s';
    }, 1)
})

let busIMG = document.querySelector('.home .intro img');
busIMG.style.transform = 'translateX(-1000px)';
window.addEventListener('load', e =>{
    busIMG.style.transition = 'all 1s';
    busIMG.style.transform = 'translateX(0)';

})

window.addEventListener('wheel', e =>{
    busIMG.style.transform = 'translateX(1000px)';
    setTimeout(()=>{
        busIMG.style.transform = 'translateX(-2000px)';
        busIMG.style.transition = 'all 0s';
    }, 1200)
})


let allP = document.querySelectorAll('.home p');
allP.forEach(x => x.style.filter = 'blur(2px)');
allP.forEach(x => x.addEventListener('mouseover', e =>{
    e.target.style.filter = 'blur(0)';
    e.target.addEventListener('mouseout', e =>{
        e.target.style.filter = 'blur(2px)';
        e.target.style.transition = 'all 1s';
    })
}))

let allh = document.querySelectorAll('.home h2, .home h4');
let textObj = {}
for (let i = 0; i < allh.length; i++){
    textObj[i] = allh[i].innerText;
    allh[i].innerText = `Press ${i}`;
}

window.addEventListener('keydown', e =>{
    let keyPressed = e.key;
    if (Object.keys(textObj).includes(keyPressed)){
        allh[keyPressed].innerText = textObj[keyPressed];
    }
    else{
        busIMG.style.transform = 'translateX(0)';
        busIMG.style.transition = 'all 1s';
        contentIMG.forEach(x =>{
            x.style.transform = 'rotate(-359deg)';
            x.style.transition = 'all .25s';
        })
    }
})
let footer = document.querySelector('footer')

window.addEventListener('resize', e => {
    footer.style.paddingTop = '100px'
})

let allBtn = document.querySelectorAll('.home  .btn')

allBtn.forEach(x => x.addEventListener('dblclick', e => {
    
    e.target.parentNode.style.backgroundColor = randomColor()
    e.target.parentNode.style.color = randomColor()
    e.target.parentNode.style.transition = 'all .25s'
    
}))

let contentIMG = document.querySelectorAll('.home .img-content');

window.addEventListener('scroll', e => {
    contentIMG.forEach(x =>{
        x.style.transform = 'rotate(359deg)';
        x.style.transition = 'all .25s';
    })
})

window.addEventListener('mouseup', e => {
    footer.style.backgroundColor = randomColor();
    TweenMax.to(contentIMG[1], 2, {y:"-1200px"})
  
})