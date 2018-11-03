// Your code goes here

//MOUSEOVER
//Change "Fun Bus" text on mouseover 
    //select logo-heading where "Fun Bus" is located
    const logoHeading = document.querySelector('.logo-heading');
    //make function to change the text
    function workBus (event){
        return event.target.textContent = 'Work Bus';
    }
    //add an event listener
    logoHeading.addEventListener('mouseover', workBus);

//KEYDOWN
//Change Nav link colors when first letter keys are pressed
    //select nav links
    const navLinks = document.querySelectorAll('.nav-link');
    //make a function to change the background and text colors
    function navColorSwitch (event){
        event.target.style.color = '@mainbg';
        // change to set attribute - event.target.style.background-color = '@font-color';
    }
    //add an eventListener
    navLinks.addEventListener('keydown', navColorSwitch);

//WHEEL
//Change heading colors to random on wheel use
    //select h2's
    //make a function to set the color to random
    //add an event listener to detect wheel use

//DRAG/DROP
//LOAD
//FOCUS
//RESIZE
//SCROLL
//SELECT
//DBLCLICK


