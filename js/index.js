// Your code goes here
//mouseover
const logo = document.querySelector(".logo-heading");
logo.addEventListener('mouseover', (event) => {
    logo.style.fontSize= '5rem'; 
    event.stopPropagation();
});

//mouseout
logo.addEventListener('mouseout', (event) => {
    logo.style.fontSize= '4rem'; 
    event.stopPropagation();
});

//keydown
document.addEventListener('keydown', () => {
    alert('Would you like to Subscribe to an email list that you will never want or need?');
  });

//click
const introImg = document.querySelector(".intro img");
introImg.addEventListener('click', () => {
     introImg.style.height = '500px';
});

//wheel
introImg.addEventListener('wheel', () => {
    introImg.style.height = 'auto';
});

//dblclick
const introH2 = document.querySelector('.intro h2');
introH2.addEventListener('dblclick', () => {
    introH2.innerHTML = 'Golden Egg - here is your %20 coupon code #1goldenEggBounty';
});

//mouseenter
const destinationImg = document.querySelector('.content-destination img');
destinationImg.addEventListener('mouseenter', () => {
    destinationImg.classList.add('hide');
    event.stopPropagation();
});

//mouseleave
const destination = document.querySelector('.content-destination');
destinationImg.addEventListener('mouseleave', () => {
    const text = document.createElement('p');
    const node = document.createTextNode("Don't touch the boat, please.");
    text.appendChild(node);
    destination.appendChild(text);
});

//load
window.addEventListener('load', () => {
    console.log("All resources finished loading!");
  });

//resize
window.addEventListener('resize', () => {
    alert(`Don't mess with my perfect pixel.`);
});

//prevent navigation from refreshing page
const navTags = document.querySelectorAll('.nav-link');
for (i=0; i<navTags.length; i++) {
    navTags[i].addEventListener('click', (event) => {
        event.stopPropagation();
    });
};


