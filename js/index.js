// Your code goes here

// 1. mouseover
const imgContent = Array.from(document.querySelectorAll('.img-content'));

imgContent.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.firstElementChild.style.display = 'flex';
  });
});

// 2. mouseout
imgContent.forEach(img => {
  img.addEventListener('mouseout', () => {
    img.firstElementChild.style.display = 'none';
  });
});

// 3. doubleclick
const hoverBtns = document.querySelectorAll('.btn-hover');
const adventureImg = document.querySelector('.adventure-img');

hoverBtns.forEach(btn => {
  btn.addEventListener('dblclick', () => {
    adventureImg.src = 'https://picsum.photos/384/288';
  });
});

// 4. keyup
const filterInput = document.querySelector('#filterInput');
const container = document.querySelector('.container');
const logoHeading = document.querySelector('.logo-heading');

filterInput.addEventListener('keyup', () => {
  // change logo text
  logoHeading.innerText = filterInput.value;
});

// 5. blur

// remove text from filter off focus
filterInput.addEventListener('blur', () => {
  filterInput.value = '';
  mainNav.style.height = '90px';
});

// 6. resize
window.addEventListener('resize', () => {
  document.body.classList.add('dark');
});

// 7. clicks

// 7.1
const contentPick = document.querySelector('.content-pick');
contentPick.style.cursor = 'pointer';
contentPick.addEventListener('click', e => {
  // vanish itens in section
  e.target.classList.add('vanish');
});

// 7.2

const contentPickBtn = document.querySelectorAll('.content-pick .btn');
contentPickBtn.forEach(button => {
  button.addEventListener('click', e => {
    e.stopPropagation();
    button.innerText = 'Signed Up!';
  });
});

// 8. scroll
window.addEventListener('scroll', () => {
  document.querySelector('.intro h2').style.fontSize = '4rem';
  setTimeout(() => {
    document.querySelector('.intro h2').style.fontSize = '2.5rem';
  }, 1000);
});

// 9. load
window.addEventListener('load', () => {
  // fade in site
  document.querySelector('body').classList.add('show');
});

// 10
const mainNav = document.querySelector('.main-navigation');

filterInput.addEventListener('select', () => {
  console.log('selected');
  mainNav.style.height = '300px';
});

// preventDefault() on nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link =>
  link.addEventListener('click', e => e.preventDefault())
);
