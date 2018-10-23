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
        event.preventDefault();
    })
}

navLink.forEach((item) => item.addEventListener('focus', (event) => {
    event.target.style.color = 'blue';
    event.target.style.textDecoration = 'underline';
}))

navLink.forEach((item) => item.addEventListener('blur', (event) => {
    event.target.style.color = 'black';
    event.target.style.textDecoration = 'none';
}));

const logo = document.querySelector('.logo-heading');
logo.addEventListener('dblclick', (event) => {
    event.target.style.display = 'none';
    event.target.nextElementSibling.style.width = '100%';
})
var once = function(event) {
    event.target.textContent = "don't touch me";
    event.target.fontSize = '1.8rem';
    event.target.margin = '0 auto';
    event.stopPropagation();
    window.removeEventListener('click', once, false);
}
const footer = document.querySelector('.footer');
const footyP = footer.querySelector('p');
footyP.addEventListener('mouseover', once, false);

const header = document.querySelector('header');
const introHead = document.querySelector('.intro');
header.addEventListener('click', (event) => {
    if (header !== event.target) return;
    event.target.style.opacity = '.7';
    event.target.style.border = '1px solid black';
    event.target.style.position = 'relative';
    introHead.style.padding = '0px';
}, false)

window.addEventListener("resize", () => {
    alert("Don't make me small :(")  
})

const words = document.querySelectorAll('.text-content');
console.log(words);
const content = document.querySelectorAll('.img-content');
for (let i = 0; i < words.length; i++) {
    content[i].addEventListener('mouseover', (event) => {
        event.target.style.display = 'none';
    }, false)
    words[i].addEventListener('click', (event) => {
        event.target.style.margin = '0 auto';
        event.target.style.display = 'none';
    }, true)
}

document.addEventListener('keydown', (event) => {
    // const keyName = event.key;
    document.querySelector('.content-section').style.display = 'none';
    document.querySelector('.inverse-content').style.display = 'none';
    // alert('keydown event\n\n' + 'key: ' + keyName);
  });

  const button = document.querySelectorAll('.btn');
  console.log(button);
  button.forEach((item) => item.addEventListener('mouseleave', () => {
      alert("Don't miss out on our awesome 20% off sale on all vacation packages!");
  }))


