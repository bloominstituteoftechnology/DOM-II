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

hoverBtns.forEach(btn => {
  btn.addEventListener('dblclick', () => {
    btn.href = '#destination';
  });
});

// 4. keyup
const filterInput = document.querySelector('#filterInput');
const container = document.querySelector('.container');
const logoHeading = document.querySelector('.logo-heading');

// if filterInput.value = text on page background color yellow
filterInput.addEventListener('keyup', () => {
  // change logo text
  logoHeading.innerText = filterInput.value;
});

// 5. blur

// remove text from filter off focus
filterInput.addEventListener('blur', () => {
  filterInput.value = '';
});

// 6. resize
window.addEventListener('resize', () => {
  document.body.classList.add('dark');
});
