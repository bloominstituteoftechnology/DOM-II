// Event 1
const logo = document.querySelector('.logo-heading').addEventListener('mouseover', (event) => {
  event.target.style.color = 'dodgerblue';
});

// Event 2
const nav = document.querySelectorAll('.nav-link');
for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener('focus', () => {
    nav[i].classList.toggle('toggle');
    nav[i].preventDefault();
  });
}

// Event 3
window.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if (keyName === 'Enter') {
    document.querySelector('.nav').style.backgroundColor = 'red';
  }
});

// Event 4
document.querySelector('.intro img').addEventListener('mouseenter', () => {
  img.classList.toggle('imgToggle');
});

// Event 5
window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  if (scrolled === scrollable) {
    alert('You reached the bottom');
  }
});

// Event 6
window.addEventListener('load', () => {
  alert('Website has loaded');
});

// Event 7
document.querySelectorAll('.nav-link').forEach(nav => {
  nav.addEventListener('dblclick', (event) => {
    event.target.style.color = 'red';
  });
});

// Event 8
document.querySelectorAll('.btn').forEach(b => {
  b.addEventListener('click', (event) => {
    event.target.style.color = 'white';
  });
});

// Event 9
document.querySelectorAll('.btn').forEach(b => {
  b.addEventListener('mouseover', (event) => {
    event.target.style.color = 'black';
  });
});

// Event 10
document.querySelectorAll('.btn').forEach(b => {
  b.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'dodgerblue';
  });
});