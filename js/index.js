// Your code goes here
const titleText = document.querySelector('.logo-heading');
const navBar = document.querySelector('.main-navigation .nav');
const logIn = document.querySelector('.main-navigation .login');
const buttons = document.querySelectorAll('.content-pick .btn');
const myHeading = document.querySelector('.intro p');
const headingSection = document.querySelector('.intro');
const introImg = document.querySelector('.intro img');
const homeLink = document.querySelector('#home-tag');
const aboutLink = document.querySelector('#about-tag');
const blogLink = document.querySelector('#blog-tag');
const contactLink = document.querySelector('#contact-tag');

homeLink.addEventListener('click', (event) => {
    event.preventDefault();
  });
  aboutLink.addEventListener('click', (event) => {
    event.preventDefault();
  });
  blogLink.addEventListener('click', (event) => {
    event.preventDefault();
  });
  contactLink.addEventListener('click', (event) => {
    event.preventDefault();
  });


titleText.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';
  });

  document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    alert(`You pressed ${keyName}!`);
});

buttons[0].addEventListener('dragstart', (event) => {
    event.target.style.opacity = '.5';
});
buttons[1].addEventListener('dragstart', (event) => {
    event.target.style.opacity = '.5';
});
buttons[2].addEventListener('dragstart', (event) => {
    event.target.style.opacity = '.5';
});

window.addEventListener('load', () => {
    console.log('Fun Bus Loading!');
  });

  logIn.addEventListener('focus', (event) => {
    event.target.style.background = 'gray';
    event.target.style.color = 'white';
  }, true);

  logIn.addEventListener('blur', (event) => {
    event.target.style.background = "";
}, true);

document.addEventListener('copy', (event) => {
    event.clipboardData.setData('text/plain', 'You copied from the Fun Bus website!');
    event.preventDefault();
});

window.addEventListener('scroll', () => {
    console.log('scrolling away!');
});

headingSection.addEventListener('click', (event) => {
    event.target.style = 'background-color: purple';
});

myHeading.addEventListener('click', (event) => {
    event.target.style.color = "yellow";
    event.stopPropagation();
})

introImg.addEventListener('dblclick', (event) => {
    event.currentTarget.classList.toggle('hide');
  });