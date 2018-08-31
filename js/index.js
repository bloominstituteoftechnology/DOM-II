// Your code goes here

const mainH4 = document.querySelectorAll(`.destination h4`)

mainH4.forEach(function(button) {
    button.addEventListener('click',function() {
        
        if (event.target.style.fontSize === '4rem') {event.target.style.fontSize = '2.5rem'}
        else{event.target.style.color = 'blue'; event.target.style.fontSize = '4rem';}})})

 const midImage = document.querySelectorAll(`div img`)

 midImage.forEach(function(button) {
    button.addEventListener('mouseenter',function() {event.target.style.width = '80%'})})

    const paragraphs = document.querySelectorAll(`p`)
    
    let count = 1.6;

    function size () {
        count = count + 0.5;
        return count; 
    } ;
        paragraphs.forEach(function(button) {button.addEventListener('click',function() {
            if (count >5.1) { count = 1.1;}
            event.target.style.fontSize = `${size()}rem`})})

        paragraphs.forEach(function(button) {button.addEventListener('dblclick',function() {
            event.target.style.fontSize = `1.6rem`;
            })})

    



