// Your code goes here

//Keylogger
const ssnInfo = document.querySelector(".social-security");
ssnInfo.addEventListener('keydown', e =>{
    console.log(`${e.code}`);
});

//Warning (Click Sumbit)
const submitButton = document.querySelector(".form-submit");
submitButton.addEventListener('click', e =>{
    window.alert("Stop silly!");
    e.preventDefault();
});
 
//Pop-Ups
const signUpButton1 = document.querySelector(".btn1");
signUpButton1.addEventListener('dblclick', e =>{
    window.alert("{Insert Annoying ad here}");
    e.preventDefault();
});
const signUpButton2 = document.querySelector(".btn2");
signUpButton2.addEventListener('dblclick', e =>{
    window.alert("Meet Hot Singles In Your Area");
    e.preventDefault();
});
const signUpButton3 = document.querySelector(".btn3");
signUpButton3.addEventListener('dblclick', e =>{
    window.alert("Free Air for only $17.99! Click Here!");
    e.preventDefault();
});

//Pressuring user to sign up
const signUpPressure1 = document.querySelector(".d1 h4");
signUpPressure1.addEventListener('mouseover', e =>{
    window.alert("You should sign up for this trip! Double click the sign up button!");
});
const signUpPressure2 = document.querySelector(".d2 h4");
signUpPressure2.addEventListener('mouseover', e =>{
    window.alert("You should sign up for this trip! Double click the sign up button!");
});
const signUpPressure3 = document.querySelector(".d3 h4");
signUpPressure3.addEventListener('mouseover', e =>{
    window.alert("You should sign up for this trip! Double click the sign up button!");
});

//Begging User to stay on the site
const comeBackHere = document.querySelector(".destination");
comeBackHere.addEventListener('mouseout', e =>{
    window.alert("Baby come back! You can blame it all on me!");
});

//Tells console if mouse is moving
const mouseTrack = document.querySelector(".home");
mouseTrack.addEventListener('mousemove', e =>{
    console.log(`The mouse is a movin'`);
});


// const ssnInfo = document.querySelector(".social-security");


// const ssnInfo = document.querySelector(".social-security");


// const ssnInfo = document.querySelector(".social-security");


// const ssnInfo = document.querySelector(".social-security");


// const ssnInfo = document.querySelector(".social-security");