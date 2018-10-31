
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

//====Event 4: Wheek over document changes text and background-colors====

document.addEventListener('wheel', (event) => {
  
    console.log('is this working?');
    event.target.style.color = "blue";
    event.target.style.background= "yellow";
  });

//====Event 5: Add scroll====

window.addEventListener('scroll', () => {
    document.querySelector('.intro h2').style.fontSize = '4rem';
    setTimeout(() => {
      document.querySelector('.intro h2').style.fontSize = '2.5rem';
    }, 1000);
  });

//====Event 6: Change text on selection====

document.addEventListener("select", function(event) {
    event.target.value = `I see you driving round town/with the girl I love/and I'm like HAIKU!`;
  })


 //====Event 7: Add no copying event listener====

 document.addEventListener('copy',nope);

function nope(){
    alert("Swiper no swiping!!");
}


  //====Event 8: toggle over 'let's have fun image' to display none====
  //needs to be a list of items for queryselectorall 
  //use for loop
  /* let funImage = document.querySelectorAll('.img-fluid')
  console.log(funImage);
  funImage.addEventListener('mouseover', function(event){
      funImg.classList.toggle('display-none')
  });
 */

//====Event 9: Add background color red to all sections====

let allSections = document.querySelectorAll('section');

allSections.forEach((redRum) => {
    return redRum.addEventListener('click', function(event) {
        event.stopPropagation();
        event.target.style.backgroundColor = 'red';
    });
   
});


//====Event 10: Change nav to green text and increase size on dbl click====

let header1 = document.querySelector('.main-navigation');


console.log(header1);
header1.addEventListener('dblclick', function(event) {
    event.stopPropagation();
    event.preventDefault();
    event.target.style.color = 'green';
    event.target.style.fontSize = '4.6rem';
    event.target.prompt();
});

