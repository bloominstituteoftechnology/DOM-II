// Your code goes here

//Used click to change the background on the buttons to red and then dblclick to change back to default color
const button = document.querySelectorAll('.btn');
button.forEach(function(element){
    element.addEventListener('click', function(e){
        // console.log('click works!')
        e.target.style.background = 'red';
    })
    button.forEach(function(element){
        element.addEventListener('dblclick', function(e){
        //    console.log('dblclick works!')
            e.target.style.background = '';
        })
    })
});

// Used Mouseover and Mouseleave (changes color of p tags to blue when mouse hovers over and back to black when mouse isnt hovering over.)
const input = document.querySelectorAll('p');
input.forEach(function(element){
    element.addEventListener('mouseover', function(e){
        // console.log('mouseover works!')
        e.target.style.color = 'blue';
    })
    input.forEach(function(element){
        element.addEventListener('mouseleave', function(e){
            // console.log('mouseleave works!')
            e.target.style.color = '';
        })
    })
});

//Used focus to add a blue background to the nav links when clicked and used blur to set back to default when another item is clicked
const nav = document.querySelectorAll('.nav-link');
nav.forEach(function(element){
    element.addEventListener('focus', function(e){
        //  console.log('focus works!')
        e.target.style.background = 'blue';



    })

    nav.forEach(function(element){
        element.addEventListener('blur', function(e){
            //  console.log('blur works!')
            e.target.style.background = '';
        })
    })
})