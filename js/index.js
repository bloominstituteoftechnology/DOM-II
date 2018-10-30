
//==== Event 1: change to halloween picture on dblclick to adventure-img

let btnHover = document.querySelectorAll('.btn-hover');
let adventure = document.querySelectorAll('.adventure-img');

img-content.forEach((btn, i) => {
  btn.addEventListener('dblclick', () => {
    adventure[i].src = 'hhttps://cdn.pixabay.com/photo/2018/10/16/10/15/halloween-3751095_1280.jpg';
  });
});

//====Event 2: make items in section vanish + mickey mouse hand====
let contentPick = document.querySelector('.content-pick');
contentPick.style.cursor = 'pointer';
contentPick.addEventListener('click', e => {
  e.target.classList.add('vanish');
});


//====Event 3: Change sign-up btns to read 'Hi Ash!'====
let btnText = document.querySelectorAll('.content-pick .btn');
btnText.forEach(button => {
  button.addEventListener('click', e => {
    e.stopPropagation();
    button.innerText = 'Hi Ash!';
  });
});