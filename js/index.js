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

    button.forEach(function(element){

    })
});