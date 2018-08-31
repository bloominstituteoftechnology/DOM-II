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
// navBar.style = 'z-index: 0;'

const parentDiv = document.querySelector('.home');
const box = document.createElement('section');
parentDiv.prepend(box);
box.classList.add('popup');
box.style = 'position: fixed; height: 325px; width: 60%; margin: 200px 15%; border-radius: 8px; border: 2px solid navy; z-index: 2; display: flex; justify-content: flex-end; align-item: center;';
box.style.background = 'white';
box.style.display = 'none'

const xBox = document.createElement('div');
xBox.style = 'border: 1px solid black; height: 20px; width: 20px; border-radius: 3px; align-text: center; align-self: flex-start; margin-top: 10px; margin-right: 10px;'
box.prepend(xBox);
xBox.addEventListener('mouseover', function(){
        xBox.style.background = 'white';
})
xBox.addEventListener('mouseleave',function(){
    xBox.style.background = '';
})

const xText = document.createElement('p');
xText.innerHTML = 'X';
xText.style = 'height: 20px; width: 20px; align-self: center; text-align: center; font-size: 1.2rem;'
xBox.prepend(xText);

const babyBox = document.createElement('div');
box.prepend(babyBox);
babyBox.style = 'height: 250px; width: 85%; align-self: center; border-radius: 7px; margin-right: 2%; background-color: white; border: 2px solid navy; display: flex; flex-direction: column; justify-content: space-evenly;'

const formHeader = document.createElement('h3');
formHeader.innerHTML = 'Join our update list!';
formHeader.style = 'font-size: 3.4rem; margin: 0 auto; padding-bottom: 5px;';
babyBox.appendChild(formHeader);

const nameBox = document.createElement('div');
nameBox.style = 'height: 30px; width: 56%; display: flex; justify-content: space-evenly; margin-left: 20%; align-items: flex-end;';
babyBox.appendChild(nameBox);

const emailBox = document.createElement('div');
emailBox.style = 'height: 30px; width: 56%; display: flex; justify-content: space-evenly; margin-left: 20%; align-items: flex-end;';
babyBox.appendChild(emailBox);




window.addEventListener('load', function(){
    this.setTimeout(function(){
        box.style.display = 'flex'
        box.animate({
            background: ['lightblue', 'lightskyblue', 'cornflowerblue', 'lightskyblue', 'lightblue',],
        }, {
            duration:4000,
            iterations: Infinity,}
        );
        }, 1000)
})


//**Create Form**

var form = document.createElement('FORM');
form.setAttribute('id', 'signup')
form.setAttribute('action', '/signup-page');
form.setAttribute('method', 'post');
babyBox.appendChild(form);


var labelName = document.createElement('LABEL');
labelName.setAttribute('for', 'name');
labelName.innerHTML = 'Name:';
nameBox.appendChild(labelName);

var formName = document.createElement('INPUT');
formName.setAttribute('type', 'text');
formName.setAttribute('placeholder', 'Your Name')
nameBox.appendChild(formName);


var emailName = document.createElement('LABEL');
emailName.setAttribute('for', 'name');
emailName.innerHTML = 'Email:';
emailBox.appendChild(emailName);

var formEmail = document.createElement('INPUT');
formEmail.setAttribute('type', 'email');
formEmail.setAttribute('placeholder', 'you@gmail.com');
emailBox.appendChild(formEmail);


var submitButton = document.createElement('BUTTON');
submitButton.setAttribute('type', 'submit');
submitButton.innerHTML = 'Sign-up for updates!';
babyBox.appendChild(submitButton);


//**Style the form**
formName.style = 'height: 25px; width: 60%;';
labelName.style = 'margin-bottom: 7px; font-size: 1.4rem;'
formEmail.style = 'height: 25px; width: 60%;';
emailName.style = 'margin-bottom: 7px; font-size: 1.4rem;'
submitButton.style = 'height: 40px; width: 40%; margin: 0 auto; border-radius: 4px; font-size: 1.6rem;';

submitButton.addEventListener('mouseover', function(){
    submitButton.style.background = 'lightskyblue';
})
submitButton.addEventListener('mouseleave',function(){
    submitButton.style.background = '';
})


//**Event to close pop up when X is clicked**
xBox.addEventListener('click',function(){
    box.style.display = 'none';
})

//**Event to close pop up when button is clicked**
submitButton.addEventListener('click',function(){
    box.style.display = 'none';
})

