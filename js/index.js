// Your code goes here
const navLink = document.querySelectorAll('.nav-link');
for (let i=0; i<navLink.length; i++) {
    navLink[i].addEventListener('mouseover', (event) => {
        event.target.style.fontSize = '2.4rem';
        event.stopPropagation();
    });
    navLink[i].addEventListener('mouseleave',(event) => {
        event.target.style.fontSize = '1.6rem';
        event.stopPropagation();
    })
    navLink[i].addEventListener('click', () => {
        alert("don't touch me bro");
    })
}

const logo = document.querySelector('.logo-heading');
logo.addEventListener('dblclick', (event) => {
    event.target.style.display = 'none';
    event.target.nextElementSibling.style.width = '100%';
})

const footer = document.querySelector('.footer');
footer.addEventListener('mouseover', (event) => {
    event.target.textContent = "don't touch me";
    event.target.fontSize = '1.8rem';
    event.target.margin = '0 auto';
})

const header = document.querySelector('header');

header.addEventListener('click', (event) => {
    if (header !== event.target) return;
    event.target.style.opacity = '.9';
    event.target.style.border = '1px solid black';
    event.target.style.position = 'relative';
    // event.stopPropagation();
}, false)

window.addEventListener("resize", () => {
    alert("Don't make me small :(")  
})
const words = document.querySelectorAll('.text-content');
console.log(words);
const content = document.querySelectorAll('.img-content');
console.log(content);
for (let i = 0; i < words.length; i++) {
    content[i].addEventListener('mouseover', (event) => {
        // event.target.style.flexDirection = 'column';
        event.target.style.flexwrap = 'nowrap';
        event.target.style.width = '100%';
        event.target.style.margin = '0 auto';
        event.stopPropagation();
    }, true)
    words[i].addEventListener('click', (event) => {
        // event.target.style.width = '100%';
        event.target.style.margin = '0 auto';
    }, true)
}
