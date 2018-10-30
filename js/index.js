// ==== Event 1: change to halloween picture on dblclick to adventure-img

const btnHover = document.querySelectorAll('.btn-hover');
const adventureImg = document.querySelectorAll('.adventure-img');

btnHover.forEach((btn, i) => {
  btn.addEventListener('dblclick', () => {
    adventureImg[i].src = 'https://cdn.pixabay.com/photo/2018/10/16/10/15/halloween-3751095_1280.jpg';
  });
});

