// Your code goes here

// *Click Event*
// Question for TL how do you loop this so that you can click on and off
const navColor = document.querySelector(".main-navigation");
navColor.addEventListener("click", event => {
    console.log(event);
    navColor.style.background = "yellow";
    navColor.style.transition = "background 0.5s";

    navColor.addEventListener("click", event => {
        navColor.style.background = "none";
        navColor.style.transition = "background 0.5s";
    });
});

// *Mouseover Event*
const busPic = document.querySelector(".intro");
busPic.addEventListener("mouseover", event => {
    console.log(event);
    busPic.style.transform = "scale(1.1)";
    busPic.style.transform = "transform 0.5s";
    // *Mouseleave Event*
    busPic.addEventListener("mouseleave", event => {
        busPic.style.transform = "scale(1.0)";
        busPic.style.transform = "transform 0.5s";
    });
});

// **Double Click Event**

const makeLrgImg = document.querySelectorAll(".img-content");
makeLrgImg.forEach(image => {
    image.addEventListener("dblclick", event => {
        image.style.transform = "scale(1.3)";
        image.style.transform = "transform 0.5s";

        image.addEventListener("dblclick", event => {
            image.style.transform = "scale(1.0)";
            image.style.transform = "transform 0.5s";
        });
    });
});

// **Resize Event**

window.addEventListener('resize', (event) => {
    const body = document.querySelector('body')
    body.style.background = 'yellow';
    body.style.transition = 'background 0.5s';
})


// **Focus & Blur Event**
const focus = document.querySelector('.destination')
focus.addEventListener('focus', (event) => {
    console.log(event);
    event.target.style.background = 'pink';
});
focus.addEventListener('blur', (event) => {
    event.target.style.background = '';
});

// **Cut Event**
const cut = document.querySelector('div.destination');
cut.addEventListener('cut', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    selection.deleteFromDocument();
    event.preventDefault()
});

