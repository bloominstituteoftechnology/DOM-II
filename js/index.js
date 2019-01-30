// Your code goes here
//Variables
const ssnInfo = document.querySelector(".social-security");
const submitButton = document.querySelector(".form-submit");
const signUpButton = document.querySelectorAll(".btn");
const signUpPressure = document.querySelectorAll("h4");
const comeBackHere = document.querySelector(".destination");
const mouseTrack = document.querySelector(".home");
const titleChange = document.querySelector("h1");
const headerChange = document.querySelector(".main-navigation");
const headerChangeAgain = document.querySelector(".main-navigation");
const textChange = document.querySelector(".home");
const navTags = document.querySelectorAll("a");

//Keylogger
ssnInfo.addEventListener('keydown', e =>{
    console.log(`${e.code}`);
});

//Warning (Click Sumbit)
submitButton.addEventListener('click', e =>{
    window.alert("Stop silly!");
    e.preventDefault();
});
 
//Pop-Ups
signUpButton.forEach ( signUp => {
signUp.addEventListener('dblclick', e =>{
    window.alert("Meet Hot Singles In Your Area");
    });
});


//Pressuring user to sign up
signUpPressure.forEach ( pressure => {
pressure.addEventListener('mouseover', e =>{
    window.alert("You should sign up for this trip! Double click the sign up button!");
    e.stopPropagation();
    });
});


//Begging User to stay on the site
comeBackHere.addEventListener('mouseout', e =>{
    window.alert("Baby come back! You can blame it all on me!");
    e.stopPropagation();
});

//Tells console if mouse is moving
mouseTrack.addEventListener('mousemove', e =>{
    console.log(`The mouse is a movin'`);
});

//Changes Fun Bus title to maroon
titleChange.addEventListener('mouseup', e =>{
    e.target.style.color = "maroon";
});

//Changes Header color once mouse enters it
headerChange.addEventListener('mouseenter', e =>{
    e.target.style.backgroundColor = "orange";
});

//Changes Header color to teal once mouse exits the header
headerChangeAgain.addEventListener('mouseleave', e =>{
    e.target.style.backgroundColor = "teal";
});

//Changes text color to purple once clicked anywhere with non-primary mouse button
textChange.addEventListener('auxclick', e =>{
    e.target.style.color = "purple";
});

//Stops Nav tags from working
navTags.forEach( tags => {
    tags.addEventListener('click', e => {
        e.preventDefault();
    })
})