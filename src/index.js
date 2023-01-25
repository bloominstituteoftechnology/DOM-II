import './less/index.less'

// Your code goes here!


// (1)click event
//make the text content change when clicked
function hurt(event){
    event.target.textContent = 'Ouch! That really hurt!';
}
document.querySelector('p').addEventListener('click',hurt);

//(2)keydown event
//change the background color of buttons when you hit '4';
document.addEventListener('keydown',(event)=>{
    if(event.key === '4') {
       alert('what is 2+2?');
    }
})

//(3) double click event
//make the page ask where everything went

document.addEventListener('dblclick',()=> alert('where is everyone going?'));


//(4)  mouseover event
//change text color when hovering over it

document.addEventListener('mouseover',(event)=>{
    event.target.style.color = 'pink';
})

//(5) mouseout event
//change the color back to black when not hovering

document.addEventListener('mouseout',(event)=>{
    event.target.style.color = 'black';
})
//(6) scroll event
//try to make the user stop scrolling
document.addEventListener('scroll',()=>{
    alert('Hey!! nothing to see there stop scrolling!!! Im warning you!!!');
})

//(7)copy event
//tell user what they have copied 
document.addEventListener('copy',(event)=>{
    alert(`user has copied ${event.target.textContent} to the clipboard`);
})

//(8)keyup event
//change nav background color
document.addEventListener('keyup',(event)=>{
    if(event.key === 'a'){
        document.querySelector('nav').style.backgroundColor = 'purple';
    }
})

//(9)mousedown event
//change color immediately when clicked to green
document.addEventListener('mousedown',(event)=>{
    event.target.style.color = 'green';
})

//(10)cut event
//tell user they cant edit this data
document.addEventListener('cut',(event)=>{
    alert(`You cannot edit this text`);
})
//prevent default
//dont let user type the letter 'z'
document.addEventListener('keydown',(event)=>{
    if( event.key === 'z'){
        event.preventDefault;
        alert('hey! that letter is forbidden!')
    }
})