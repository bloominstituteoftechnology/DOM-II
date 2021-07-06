// Your code goes here
// I believe that in order to change something I need to select it first so I will start by selecting 10 items which may or may not be the ones I end up creating listeners for
const bigSur = document.querySelector('.main-navigation')
const lilSur = document.querySelector('.nav')
const signMeUpButtons = document.querySelectorAll('.btn')
const pickYour = document.querySelector('.content-destination')
const destination = document.querySelectorAll('.destination')

//next going to create an event listener like we did in the guided project
signMeUpButtons.onclick = function(event){
    console.log('one of the buttons was clicked')
}
signMeUpButtons.addEventListener('click', function (event){
    
})