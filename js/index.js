// Your code goes here

const myBtn = document.querySelector('.btn');
const contentPick = document.querySelector('.content-pick');
const myHeader = document.querySelectorAll('.home h2');
const myNav = document.querySelector('body');
const readerProgress = document.querySelector('.progress');



contentPick.addEventListener('click', () => {
    contentPick.classList.toggle('change-background');
});


// myBtn.addEventListener('click', () => {
    // Step 3: Do something!
//     console.log("still works");
//   });

myHeader.forEach(item => item.addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.parentNode.style.backgroundColor = 'darkblue';
    event.target.parentNode.style.color ='orange';
    
    
    event.target.style.color = 'red';

    setTimeout(() => {
        event.target.style.color = '';
    }, 733);
    }, false));

myNav.addEventListener('keydown', (e) => {
    if (event.key == 'g'){
        document.body.style.background = 'darkblue';
    }
});
myNav.addEventListener('keydown', (e) => {
    if (e.key =='a'){
        document.body.style.background = 'white';
    }
});

window.addEventListener("scroll", () => {
    let max = document.body.scrollHeight - innerHeight;
    readerProgress.style.width = `${(pageYOffset / max) * 100}%`;
  });

  
