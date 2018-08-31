// Your code goes here

const mainH4 = document.querySelectorAll(`.destination h4`)

mainH4.forEach(function(button) {
    button.addEventListener('click',function() {
        
        if (event.target.style.fontSize === '4rem') {event.target.style.fontSize = '2.5rem'}
        else{event.target.style.color = 'blue'; event.target.style.fontSize = '4rem';}})})

 const midImage = document.querySelectorAll(`div img`)

 midImage.forEach(function(button) {
    button.addEventListener('mouseover',function() {event.target.style.width = '80%'})
    button.addEventListener('mouseout',function() {event.target.style.width = '100%'})})

    const paragraph = document.querySelector(`.intro p`)
    
    let count = 1.6;

    function size () {
        count = count + 0.5;
        return count; 
    } ;
        paragraph.addEventListener('click',function() {
            event.target.style.fontSize = `${size()}rem`})
            



