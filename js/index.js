// Your code goes here
const title = document.querySelector('title');
const navigation = document.querySelector('.nav');
const intro  = document.querySelector('.intro');
const content = document.querySelector('.textcontent');
const destination = document.querySelector('.contentdestination');
const firstContainer = document.querySelector('.home')

//event type 1
navigation.addEventListener("mouseover", function(event){
    event.target.style.color = "green";
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);

// event type 2
function escape (event){
    if (event.key === 'Escape'){
        title.classList.add('off');
    }
}
document.addEventListener('keydown', escape);