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

//prevent nav links refreshing
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


// mouseover - 1
titleText.addEventListener('mouseover', (event) => {
    event.target.style.color = 'orange';
  });

//keydown - 2
document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        alert(`You just pressed the letter ${keyName}!`);
  });

// drag - 3
buttons[0].addEventListener('dragstart', (event) => {
    event.target.style.opacity = '.5';
});
buttons[1].addEventListener('dragstart', (event) => {
    event.target.style.opacity = '.5';
});
buttons[2].addEventListener('dragstart', (event) => {
    event.target.style.opacity = '.5';
});

// load - 4
window.addEventListener('load', () => {
    console.log('Fun Bus page is done loading!');
  });

// focus - 5
logIn.addEventListener('focus', (event) => {
    event.target.style.background = 'gray';
    event.target.style.color = 'white';
  }, true);

//blur - 6
logIn.addEventListener('blur', (event) => {
      event.target.style.background = "";
  }, true);


// copy - 7
document.addEventListener('copy', (event) => {
    event.clipboardData.setData('text/plain', 'You copied some text from the Fun Bus website!');
    event.preventDefault();
  });


// scroll - 8
window.addEventListener('scroll', () => {
          console.log('scrolled!');
  });


//click - 9
headingSection.addEventListener('click', (event) => {
    event.target.style = 'background-color: magenta';
});

myHeading.addEventListener('click', (event) => {
    event.target.style.color = "yellow";
    event.stopPropagation();
})

// dblclick - 10
introImg.addEventListener('dblclick', (event) => {
    event.currentTarget.classList.toggle('hide');
  });
