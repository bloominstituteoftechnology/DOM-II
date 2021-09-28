// Your code goes here
//updated pull

//footer listener
const footerText = document.querySelector('footer p');

footerText.addEventListener('mouseover', function(event){
    event.target.style.color = 'green';
})

footerText.addEventListener('mouseout', function(event){
    event.target.style.color = '#212529';
})

//header listener

const funBus = document.querySelector('.logo-heading');

funBus.addEventListener('mouseover', function(event){
    event.target.style.fontSize = "6rem";
})
funBus.addEventListener('mouseout', function(event){
    event.target.style.fontSize = "4rem";
})

//header nav listener


//nav home text
const home = document.querySelector('#home');

home.addEventListener('mouseover', function(event){
    event.target.style.fontWeight = "bold"
})
home.addEventListener('mouseout', function(event){
    event.target.style.fontWeight = "normal"
})


//nav about text
const about = document.querySelector('#aboutus');

about.addEventListener('mouseover', function(event){
    event.target.style.fontWeight = "bold"
})
about.addEventListener('mouseout', function(event){
    event.target.style.fontWeight = "normal"
})

//nav blog text
const blog = document.querySelector('#blog');

blog.addEventListener('mouseover', function(event){
    event.target.style.fontWeight = "bold"
})
blog.addEventListener('mouseout', function(event){
    event.target.style.fontWeight = "normal"
})

//nav contact text 
const contact = document.querySelector('#contactus');

contact.addEventListener('mouseover', function(event){
    event.target.style.fontWeight = "bold"
})
contact.addEventListener('mouseout', function(event){
    event.target.style.fontWeight = "normal"

})

//prevent default for all links
Array.from(document.links).array.forEach(element => {
    link.addEventListener('click',function(event){
        event.preventDefault();
    })
});


