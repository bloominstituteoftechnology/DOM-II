// Your code goes here

const parentContainer = document.querySelector('.home');
const allATags = document.querySelectorAll('a');
const logoHeading = document.querySelector('.logo-heading');
const intro = document.querySelector('.intro');
const headerImg = document.querySelector('.intro img');

//1
logoHeading.addEventListener('mouseenter', () => { 

  logoHeading.classList.toggle('gold');
});

logoHeading.addEventListener('mouseleave', () => { 

    logoHeading.classList.toggle('gold');
  });
  
//2

headerImg.addEventListener ('dblclick', () => {
    headerImg.style.transform = "scaleX(-1);"
});

//3

logoHeading.addEventListener('mouseenter', () => { 

    logoHeading.classList.toggle('gold');
  });
  
  logoHeading.addEventListener('mouseleave', () => { 
  
      logoHeading.classList.toggle('gold');
    });
    


//4


//5


//6


//7


//8


//9


//10


