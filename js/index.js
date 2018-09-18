// Your code goes here

const myBtn = document.querySelector('.btn');
const contentPick = document.querySelector('.content-pick');
const myHeader = document.querySelectorAll('.home h2');
const myNav = document.querySelector('body');

console.log(myNav);

contentPick.addEventListener('click', () => {
    contentPick.classList.toggle('change-background');
});


// myBtn.addEventListener('click', () => {
    // Step 3: Do something!
//     console.log("still works");
//   });

myHeader.forEach(item => item.addEventListener('mouseover', (event) => {
    event.target.style.color = 'darkorange';

    setTimeout(() => {
        event.target.style.color = '';
    }, 733);
    }, false));

myNav.addEventListener('keydown', (e) => {
    if (event.key == 'g'){
        document.body.style.background = 'darkblue';
    }
});
myNav.addEventListener('keydown', e => {
    if (e.key =='a'){
        document.body.style.background = 'white';
    }
});

