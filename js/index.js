
//==== Event 1: change to halloween picture on dblclick to adventure-img

let btnHover = document.querySelectorAll('.btn-hover');
let adventure = document.querySelectorAll('.adventure-img');

btnHover.forEach((btn, i) => {
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
btnText.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    btn.innerText = 'Hi Ash!';
  });
});

//====Event 4: Change nav height to 200px====

const mainNav = document.querySelector('.main-navigation');

filterInput.addEventListener('select', () => {
  console.log('selected');
  mainNav.style.height = '200px';
});

//====Event 5: Add scroll====

window.addEventListener('scroll', () => {
    document.querySelector('.intro h2').style.fontSize = '4rem';
    setTimeout(() => {
      document.querySelector('.intro h2').style.fontSize = '2.5rem';
    }, 1000);
  });

//====Event 6: Site fade-in on load====

window.addEventListener('load', () => {
    document.querySelector('body').classList.add('show');
  });