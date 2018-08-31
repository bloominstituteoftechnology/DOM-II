// Your code goes here


//**Rainbow Fun Bus Animation on mouse over 1/10 **
const funBusRainbow = document.querySelector('h1');

window.addEventListener('load', function(){

    funBusRainbow.animate({
        color: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'blue', 'green', 'yellow', 'orange', 'red',],
    }, {
        duration: 6000,
        iterations: Infinity,}
    )
    }
);
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




//**Font grows when page is re-sized 3/10**
const welcome = document.querySelectorAll('.intro p')[0];
window.addEventListener('resize', function(){
    welcome.style = 'font-size: 5.0rem';
})


// **Text gets larger when double clicked 4/10**
const sillyStatement = document.querySelectorAll('.nav a');
for (let i=0; i<sillyStatement.length; i++){
    this.addEventListener('dblclick', function(){
        sillyStatement[i].innerHTML = 'OOPS!'
    })
}



//**Turns headers rainbow when the page is scrolled  down 5/10**
const welcomeText = document.querySelectorAll('h2');
const rainbowScrollHeaders = [];
for (let i=0; i<4; i++) {
    rainbowScrollHeaders.push(document.querySelectorAll('h2')[i]);
    rainbowScrollHeaders.push(document.querySelectorAll('h4')[i]);
}
console.log(rainbowScrollHeaders);

for (let i=0; i<rainbowScrollHeaders.length; i++){
    window.addEventListener('scroll', function(){
        rainbowScrollHeaders[i].animate({
            color: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'blue', 'green', 'yellow', 'orange', 'red',],
        }, {
            duration:6000,
            iterations: Infinity,}
        )
    })
}


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

const navBar = document.querySelector('.main-navigation');

const parentDiv = document.querySelector('.home');
const box = document.createElement('section');
parentDiv.prepend(box);
box.classList.add('popup');
box.style = 'position: fixed; height: 325px; width: 60%; margin: 200px auto; border-radius: 8px; border: 2px solid navy; z-index: 2; display: flex; justify-content: flex-end; align-item: center; left: 0; right: 0;';
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
babyBox.style = 'height: 250px; width: 85%; align-self: center; border-radius: 7px; margin: 0 auto; background-color: white; border: 2px solid navy; display: flex; flex-direction: column; justify-content: space-evenly;'

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

//**Select Text Event**
formName.addEventListener('select', function(){
    formName.style.background = 'hotpink';
})

formEmail.addEventListener('select', function(){
    formEmail.style.background = 'hotpink';
})



//**Create Tooltip**
// const toolTip = document.createElement('div');
// nameBox.appendChild(toolTip);

const tooltipSpan = document.createElement('span');
tooltipSpan.innerHTML = 'Keep going!';
nameBox.appendChild(tooltipSpan);

// toolTip.style = 'position: relative; display: inline-block;'
tooltipSpan.style = 'visibility: hidden; width: 120px; background-color: #555; color: #fff; text-align: center; padding: 5px 0; border-radius: 6px; position: absolute; z-index: 3; bottom: 125%; left: 50%; margin-left: -60px; opacity: 0; transition: opacity 0.3s;'

//**Keypress Event**
formName.addEventListener('keypress', function(){
    tooltipSpan.style = 'visibility: visible; opacity: 1; position: absolute; left: 72%; border-width: 1px; border-style: solid; background-color: lightpink; align-self: center; color: blue; font-size: 1.3rem; height: 20px; width: 17%; padding-left: 2%; padding-top: 2px; border-radius: 4px;'
})

const tooltipSpan2 = document.createElement('span');
tooltipSpan2.innerHTML = 'Almost there!';
emailBox.appendChild(tooltipSpan2);

tooltipSpan2.style = 'visibility: hidden; width: 120px; background-color: #555; color: #fff; text-align: center; padding: 5px 0; border-radius: 6px; position: absolute; z-index: 3; bottom: 125%; left: 50%; margin-left: -60px; opacity: 0; transition: opacity 0.3s;'

formEmail.addEventListener('keypress', function(){
    tooltipSpan2.style = 'visibility: visible; opacity: 1; position: absolute; left: 72%; border-width: 1px; border-style: solid; background-color: lightpink; align-self: center; color: blue; font-size: 1.3rem; height: 20px; width: 17%; padding-left: 1%; padding-top: 3px; border-radius: 4px;'
})


//need to add media queries to fix width issues for the tooltips and pop up box.