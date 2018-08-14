const headerLogo = document.querySelector('.logo-heading');

headerLogo.addEventListener('click', () => { 
    console.log('Click occured!');
    headerLogo.classList.toggle('type');
});

// const navSection = document.querySelectorAll('.nav-link');

// navSection.addEventListener('keydown', () => {
//     console.log("KeyzzzDown");
//     navSection.classList.toggle('action');
// });

window.addEventListener('keydown', () => {
    document.querySelector('.nav-link').style = 'color: #ff69b4 '; 
  });  

const imgAction = document.querySelector('.intro img');

imgAction.addEventListener('mouseover', () => {
    console.log('Mousing');
    imgAction.classList.toggle('grayscale');
});

// const h2Fun = document.querySelector('.intro h2 ');
//     for(let i = 0; i < h2Fun.length; i++) {
//         h2Fun[i].addEventListener('scroll', (event) => {
//             console.log('Scroll Them Doggies');
//             event.target.style.fontSize = '4rem';
//     });
// }

window.addEventListener('scroll', () => {
    document.querySelector('.main-navigation').style = 
    'background-image: linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%);'
  });

  window.addEventListener('scroll', () => {
    document.querySelector('.footer').style = 
    'background-image: linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 90%);'
  });  