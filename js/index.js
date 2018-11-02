// Your code goes here

//Mouseover

const logoHeading = document.querySelector('.logo-heading')
logoHeading.addEventListener('mouseover', function (event) {
 event.target.style.background = "green"
})

//Keydown

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    alert(`The key: ${keyName}`);
  }); 

 //click
 const funInTheSunSingIn = document.querySelector('.destination .btn')
 funInTheSunSingIn.addEventListener('click', (event) => {
     console.log('The person sing up for the "Fun In The Sun" vocation ')
 })
 //wheel

 const introPWheel = document.querySelector('p');

 introPWheel.addEventListener('wheel', function() {
    introPWheel.style.color='green'

});

//drag/drop

const dragged = document.querySelector('.img-content')
dragged.addEventListener('drag', dragStart);
dragged.addEventListener('drop', dragDrop);
function dragStart() {
    console.log(`The image is dragged`)
}
function dragDrop() {
    console.log(`The image is dropped`)//couldn't figure out the drop
}

//load
window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");
});

//focus

const form = document.getElementById("form");
form.addEventListener("focus", function( event ) {
  event.target.style.background = "pink";    
}, true);
form.addEventListener("blur", function( event ) {
  event.target.style.background = "";    
}, true);

//resize

window.addEventListener('resize', function (event) {

})

 
// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`