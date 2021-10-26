// Your code goes here

const header = document.querySelector('.main-navigation');
const containerHome = document.querySelector('.container');
const btn = document.querySelector('.btn');
const footer = document.querySelector('.footer');
const pg = document.querySelector('h2');
const img = document.querySelector('.img-content');

header.addEventListener("mouseover", function(event) {
    event.target.style.color = 'purple';
});

footer.addEventListener("mousedown", evt => {
    evt.target.style.color = 'red';
});

btn.addEventListener('dblclick', function (e) {
    btn.classList.toggle('large');
  });

  function shiftKey(e) {
    if (e.key === 'Shift') {
        pg.style.color = 'green';
    }
}
document.addEventListener('keydown', shiftKey);

img.addEventListener("mousemove", eve => {
img.style.border = '5px solid red'
});