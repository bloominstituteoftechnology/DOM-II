let siteHead = document.querySelector("h1");
let h2All = document.querySelectorAll("h2");

//mouseover ~ one
siteHead.addEventListener('mouseover', () => {
    siteHead.style.color = "hotPink";
});
//mouseout ~ two
siteHead.addEventListener('mouseout', () => {
    siteHead.style.color = "Black";
})

for (let i = 0; i < h2All.length; i++) {
    h2All[i].addEventListener('mouseover', () => {
        h2All[i].style.color = "hotPink";
    });
    h2All[i].addEventListener('mouseout', () => {
        h2All[i].style.color = "Black";
    })
}

//click and double-click ~ three and four
const navItems = document.querySelectorAll("nav a");
const colors = ['purple', 'green', 'blue', 'pink'];
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', () => {
        navItems[i].style.color = colors[i];
        navItems[i].style.fontWeight = 'bold';
        navItems[i].style.fontSize = '2rem'
        navItems[i].addEventListener('dblclick', () => {
            navItems[i].style.fontWeight = "bold";
            navItems[i].style.color = "black";
        });
    })
}

const contImages = document.querySelectorAll(".img-content");
console.log(contImages);

const body = document.querySelector('body');

const smuButtons = document.querySelectorAll(".btn");
for (i = 0; i < smuButtons.length; i++) {
    smuButtons[i].addEventListener('click', () => {
        body.classList.toggle('gradient');
    })
}


//mouseenter ~ five
const funBus = document.querySelector(".intro img");
funBus.addEventListener('mouseenter', () => {
        funBus.style.borderRadius = "50%"
    })
    //mouseleave ~ six
funBus.addEventListener('mouseleave', () => {
    funBus.style.borderRadius = "0"
})

//wheel ~ seven
const siteText = document.querySelectorAll("p");
for (let i = 0; i < siteText.length; i++) {
    siteText[i].addEventListener('wheel', () => {
        siteText[i].style.color = "lightblue"

    });

}


siteHead.classList.toggle('change');