// Your code goes here

//========= Nav Bar Elements and Events ===========//

const navItems = document.querySelectorAll('.nav-link');

for (i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('mouseover', function(e){
e.target.style.color = "#17A2B8";
e.target.style.fontWeight = "bold";

setTimeout(function(){
    e.target.style.color = "";
    e.target.style.fontWeight = "";
}, 1200);
}, false);
};

navItems[0].addEventListener('click', function(e){
e.preventDefault();
});


//=========  Content Section Elements and Events  =======//

const contentSection = document.querySelector('.content-section');

contentSection.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = "orange";
    setTimeout(function(){
        e.target.style.color = "";
    }, 1000);
}, false);

const contentSectionText = document.querySelector('.content-section .text-content');

contentSectionText.addEventListener('mouseover', function(e){
    e.stopPropagation();
    e.target.style.backgroundColor = "#FFEBCD";
    setTimeout(function(){
        e.target.style.color = "";
    }, 1000);
}, false);

//=======  Inverse Content Elements and Events  =========//

const inverseContent = document.querySelector('.inverse-content');

inverseContent.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = "#C0C0C0";
    setTimeout(function(){
        e.target.style.color = "";
    }, 1000);
}, false);

const inverseContentText = document.querySelector('.inverse-content .text-content');
inverseContentText.addEventListener('mouseover', function(e){
    e.stopPropagation();
    e.target.style.backgroundColor = "#17A2B8";
    setTimeout(function(){
        e.target.style.color = "";
    }, 1000);
}, false);

//======= Pick Destination Elements and Events  ========//

const destinationPickerH2 = document.querySelector('.content-destination h2');

destinationPickerH2.addEventListener('mouseover', function(e){
    e.target.style.fontWeight = "bold";

setTimeout(function(){
    e.target.style.fontWeight = "";
}, 1200);
}, false);

const destinationPickerH4 = document.querySelectorAll('.destination h4');

for (i = 0; i < destinationPickerH4.length; i++) {
    destinationPickerH4[i].addEventListener('mouseover', function(e){
    e.target.style.fontWeight = "bold";

setTimeout(function(){
    e.target.style.fontWeight = "";
}, 1200);
}, false);
};

const signMeUp = document.querySelectorAll('.btn');
for (i = 0; i < signMeUp.length; i++) {
    signMeUp[i].addEventListener('click', function(e){
        e.target.style.color = "orange";
    });
    signMeUp[i].addEventListener('dblclick', function(e){
        e.target.style.color = "black";
    });
};
