// Your code goes here

const FunBus = document.querySelector('h1');
FunBus.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red'
    })

document.addEventListener('keydown', function (eventObj) {
    if (eventObj.key === 'q') {
        document.body.style.backgroundColor = 'pink'
    }})

document.addEventListener('wheel', (event) => {
    if(event.deltaY>0)
     document.body.style.backgroundColor = 'yellow';
     if(event.deltaY<0)
     document.body.style.backgroundColor = 'green';
    })

document.addEventListener("drag", () => {
    document.body.style.backgroundColor = 'white';
    });   

    window.addEventListener('load', () => {
        console.log('page is fully loaded');
      });   
      
      
     var top = document.querySelector('a');
     top.addEventListener('focus', (event) => {
        event.target.style.color = 'red';
})


top.addEventListener('blur', (event) => {
   event.target.style.color = 'black';
})


        window.addEventListener("resize", () => {
        console.log('page is resized');
      });

      document.addEventListener('scroll', () => {
        console.log('page is scrolled');
        }); 

        
        //const input = document.querySelector("p")
          //input.addEventListener('select', (event)=>{
           // var selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
           // console.log(`You selected: ${selection}`);
         // });
        

          //document.addEventListener("select", () => {
          //  var selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
          //  console.log(`You selected: ${selection}`);
         // });



let Dbl = document.querySelector('h1');
Dbl.addEventListener('dblclick', (event) => {
    event.target.style.fontSize = '80px'
    })

    
   document.querySelector('nav').addEventListener('click', function (event) {
    event.preventDefault()
    })

