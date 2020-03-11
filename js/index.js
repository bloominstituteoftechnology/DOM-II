// Your code goes here


//1

homeLink.addEventListener(
    'mouseover', //string with name of event
    () => {
        homeLink.style.color = 'pink';
        // things we want to happen   
       
    }
)

//2 - also prevents event from bubbling to header event (See #4)
homeLink.addEventListener(
    'click', () => {
        homeLink.style.color = 'red';
        event.stopPropagation();
    }
)

const background = document.querySelector('html');

//3
document.addEventListener(
    'scroll', () => {
         background.style.background = 'pink';
         console.log("this is working")
    }
)

const header = document.querySelector('header');


//4
header.addEventListener(
    'click', () => {
        header.style.background = "teal";
    }
)


//5
introText.addEventListener(
    'mousemove', () => {
        introText.style.color = 'teal';
    })



//6

introText.addEventListener(
    'mouseleave', () => {
        introText.style.color = 'black';
    }
)


//7 prevents default behavior - i think. 
navBar = document.querySelector('nav')

navBar.addEventListener("click", function(event){
    event.preventDefault()
     });


//8 

destinationText = document.querySelectorAll('.destination')

destinationText.forEach(element => {
    element.addEventListener('click', () => {
        element.style.color = 'white';
   });
  });

  letsGo = document.querySelector('.destination');


//9

  mainText = document.querySelectorAll('.text-content')

  mainText.forEach(element => {
      element.addEventListener('dblclick', () => {
          element.style.color = 'teal';
     });
    });


//10 

document.addEventListener('keypress', () => {
    background.style.background = 'white';
})

  


























