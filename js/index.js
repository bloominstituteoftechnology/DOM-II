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
    window.alert("Free Air! Click Here!");
    e.preventDefault();
});

// const ssnInfo = document.querySelector(".social-security");


// const ssnInfo = document.querySelector(".social-security");


// const ssnInfo = document.querySelector(".social-security");


// const ssnInfo = document.querySelector(".social-security");


// const ssnInfo = document.querySelector(".social-security");


// const ssnInfo = document.querySelector(".social-security");


// const ssnInfo = document.querySelector(".social-security");