// Your code goes here


//mouseover-done
let logoText = document.querySelector('h1');
logoText.addEventListener('mouseover', function(event) {
    this.style.fontSize = '200';
    this.style.fontFamily = 'Roboto';
    this.style.color = 'pink';
    this.innerText = 'Mindy was Here!'
});

//keydown-done
let bodyKey = document.querySelector('body')
bodyKey.addEventListener('keydown', function(event) {
    this.classList.toggle('changeColor')
});

//wheel
let imageIntro = document.querySelector(".intro img");
imageIntro.addEventListener('wheel' , (event) => {
    imageIntro.style.display = "none";
});

//drag/drop-done
const imgAdventure = document.querySelector(".content-section img")
imgAdventure.addEventListener('dragstart', (event) => {
    imgAdventure.style.opacity = 0.3;
}, false);

//load
window.addEventListener('load', () => {
    let textChange = document.querySelector('.home .intro p')
    textChange.style.background = 'lightgray';
});

//focus/blur-done
let welcomP = document.querySelector('.home .intro p')
//welcomP.style.filter = "blur(2px)";
welcomP.addEventListener("mouseover", (event) => {
    event.target.style.filter = "blur(4px)";
  })


//resize-done
let intro = document.querySelector(".home .intro");
window.addEventListener("resize", event => {
  intro.style.paddingBottom = "150px";
});

//scroll-done
let contentText = document.querySelector('.home .content-section h2');
window.addEventListener('scroll', event => {
    contentText.style.transform = 'rotate(20deg)';
    let body = document.querySelector('body')
    body.style.color = 'pink';
})

//click
let btn = document.querySelector('.content-pick');
btn.addEventListener('click', function(event){
    btn.style.fontFamily = 'georgia';
    
 })
let newBtn = document.querySelector('.btn');
 newBtn.addEventListener('click', function(event){
    event.stopPropagation();
    newBtn.innerText = "not today satan";
    newBtn.style.width = '100%';
    newBtn.style.background = 'gold';
})

//dblclick
let dblBtn = document.querySelector('.home .content-pick .btn');
dblBtn.addEventListener('dblclick', () => {
    let btnNew = document.querySelector('.btn');
    btnNew.style.color = 'turquoise';
    btnNew.style.background = 'pink';
})

//stopping refresh
let navRefresh = document.querySelectorAll('.nav a');
navRefresh.forEach((link, i) => {
    navRefresh[i].addEventListener('click', () => {
        event.preventDefault();
    })
})
