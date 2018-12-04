// Your code goes here
const all = document.querySelector('body');

const h1 = document.querySelector('h1');
const wizvan = document.querySelector('.wizardvan');
let vanshow = false;
h1.addEventListener('mouseover', function(e){
    e.preventDefault();
    h1.classList.add('display-none');
    wizvan.classList.remove('display-none');
    vanshow = true;
})
all.addEventListener('keydown', function(e){
    let press = e.keyCode;
    if (press == 17){
        TweenMax.to(wizvan, 3, {
            x: 300,
            rotation: -30
        })
        TweenMax.to(wizvan, 1, {
            rotation: 0
        }).delay(2);
    }
})
all.addEventListener('keyup', function(e){
    let press = e.keyCode;
    if (press == 17){
        TweenMax.to(wizvan, 0, {
            x:0,
            rotation: 0
        });
    }
})

// const destBoxes = document.querySelectorAll('.destination');
let invert = false;
all.addEventListener('click', function(e){
    e.preventDefault();
    if(invert === false){
        e.target.style.color = 'white';
        e.target.style.backgroundColor = 'black';
        invert = true;
    }
    else {
            e.target.style.color = 'black';
            e.target.style.backgroundColor = 'white';
            invert = false;
    }
})
all.addEventListener('wheel', function(){
    if(vanshow === true){
        wizvan.classList.add('display-none');
        h1.classList.remove('display-none');
        vanshow = false;
    };
   
});
// const pic = document.querySelectorAll('.img-content img');
// console.log(pic);
// pic[i].addEventListener('mouseover', function(){
//         TweenMax.to(pic[i], 1, {
//             scale: 1.2
//         });
// });
const buttons = document.querySelectorAll('.btn');
buttons[0].addEventListener('mousedown', function(){
    buttons[0].style.color = 'red';
    buttons[0].style.backgroundColor = 'green';
})
buttons[1].addEventListener('mousedown', function(){
    buttons[1].style.color = 'orange';
    buttons[1].style.backgroundColor = 'blue';
})
buttons[2].addEventListener('mousedown', function(){
    buttons[2].style.color = 'yellow';
    buttons[2].style.backgroundColor = 'purple';
})
const footp = document.querySelector('footer p');
let hellbus = false;
footp.addEventListener('mouseover', function(){
    if(hellbus === false){
        footp.style.color = 'red';
        footp.textContent = 'Copyright Hell Bus 20666';
        hellbus = true;
    }
})
footp.addEventListener('mouseup', function(){
        if(hellbus === true){
            footp.textContent = 'Copyright Fun Bus 2018';
            hellbus = false;
        }
    }
)