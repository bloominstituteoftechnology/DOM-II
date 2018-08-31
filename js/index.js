// Your code goes here


//**Rainbow Fun Bus Animation on mouse over 1/10 **
const funBusRainbow = document.querySelector('h1');

funBusRainbow.addEventListener('mouseover', function(){

    this.animate({
        color: ['red', 'orange', 'yellow', 'green', 'blue', 'purple',],
    }, {
        duration:2000,
        iterations: Infinity,}
    )
    }
);
// funBusRainbow.addEventListener('click', function(){
//     this.style.color = '';
// })
//can we toggle on/off animations? Could get it to toggle on but not off


//** Nav items change colors on click 2/10**
const navs = document.querySelectorAll('.nav a');
const testarray = [];
for (let i=0; i<navs.length; i++) {
    testarray.push(document.querySelectorAll('.nav a')[i]);
}
const classListArray = [];
for (let i=0; i<navs.length; i++) {
    classListArray.push(testarray[i].classList);
}

const colorArray = ['red', 'orange', 'green', 'blue',];

for (let i=0; i<testarray.length; i++) {
    testarray[i].onclick = function(event){
        var result = classListArray[i].toggle('go');
        if(result){
            testarray[i].style.color = colorArray[i];
        } else {
            testarray[i].style.color = '';
        }
    }
}
//can I make it click through the rainbow with other else if?




//**Turns red when page is re-sized 3/10**
const welcome = document.querySelectorAll('.intro p')[0];
window.addEventListener('resize', function(){
    welcome.style = 'color: red';
})


// **Text gets larger when double clicked 4/10**
const welcome2 = document.querySelectorAll('.text-content p')[1];
welcome2.addEventListener('dblclick', function(){
    welcome2.style = 'font-size: 2.0rem';
})

//**Turns blue when the page is scrolled  down 5/10**
const text = document.querySelectorAll('.content-section p')[0];
window.addEventListener('scroll', function(){
    text.style = 'color: blue';
})


//** All three bottom divs turn aqua on mouseover */
const bottomDivs = document.querySelectorAll('.destination');
bottomDivs.forEach(function(element){
    element.addEventListener('mouseover', function(){
        element.style.color = 'aqua';
    })
})

//**Nav background animates colors upon Load**

// const navColors = document.querySelector('.main-navigation');
// window.addEventListener('load', function(){
//     navColors.animate({
//         backgroundColor: ['thistle', 'plum', 'violet', 'orchid', 'mediumorchid', 'thistle',],
//     }, {
//         duration:2000,
//         iterations: Infinity,}
//     )
// })



// **Create a pop up form**

//prepend to .home after .intro class, before .content-section claass (4 children, 
// this adds a fifth) --> .insertBefore(NAME, parent.second-child) to put before 2nd child
// pop up form so would like it to have z-index: 1

const navBar = document.querySelector('.main-navigation');
navBar.style = 'z-index: -5;'

const parentDiv = document.querySelector('.home');
const box = document.createElement('section');
parentDiv.prepend(box);
box.classList.add('popup');
box.style = 'position: fixed; height: 300px; width: 60%; margin: 200px 15%; border: 2px solid dodgerblue; z-index: 2; display: flex; justify-content: center; align-item: center;';
box.style.background = 'white';
// box.style.display = 'none'

const babyBox = document.createElement('div');
box.prepend(babyBox);
babyBox.style = 'height: 175px; width: 75%; border: 2px solid yellow; align-self: center;'

