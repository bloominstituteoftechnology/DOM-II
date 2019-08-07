// mouseover
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', (e) => {
    logo.textContent = "Lets Go!";
})

// keydown
window.addEventListener('keydown', (e) => {
    console.log(`This is my keypress: ${e.code}`);
  });

// wheel
const mainNav = document.querySelector('.main-navigation');
console.log(mainNav);
mainNav.addEventListener('wheel', (e) => {
    mainNav.style.backgroundColor = "green";
})

// dbclick

const pictures = document.querySelectorAll('img');

for(i = 0; i < pictures.length; i ++){
    pictures[i].addEventListener('dblclick', (e) => {
        e.target.style.filter = "invert(100%)";
    });
};

//  Form Popup on Sign Me Up Button

const btns = document.querySelectorAll('.btn');
btns.forEach((btn)=>{
    btn.addEventListener('click', () => {
        prompt("Enter Your Email");
    })
});



// drag
const busimg = document.querySelector("img");
busimg.addEventListener("drag", e => {
    document.body.style.backgroundColor = "pink";
});

// load

busimg.addEventListener("load", e => {
    document.body.style.backgroundColor = "black";
})

//focus

//resize

const images = document.querySelectorAll('img');
window.addEventListener('resize', ()=>{
    images.forEach((img)=>{
        img.classList.add("rotate-center")
    })
});

// scroll

const home = document.querySelector('.home');
window.addEventListener('scroll', () => {
    home.style.background = '#E62739'
});

// mousemove

let ptag = document.querySelector("p");
ptag.addEventListener("mousemove", e => {
    document.body.style.backgroundColor = "green";
})


