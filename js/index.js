// Your code goes here

// Nav elements
const body = document.querySelector('body');
const mainHeader = document.querySelector('.main-navigation');
const anchor = mainHeader.querySelectorAll('a');
const image = document.getElementsByTagName('img')[0];
const header = document.getElementsByTagName('header')[1];
let count = 0;

// 1.Load event
window.addEventListener('load', function(event){
       let target = event.target;
       // console.log('working1');
       target.addEventListener('dblclick', function(event){
              // console.log('working21');
              event.stopPropagation();
              let tgt = event.target;
              if(tgt.style.background=== ''){
              tgt.style.background = 'yellow';
          } else {
              tgt.style.background = '';
          }
    });
});
anchor.forEach(function(element){
     // 2.Mouseover event
     element.addEventListener('mouseover', function(event){
     	     let target = event.target;
     	     if(target.tagName === "A") {
     	     	target.style.color = 'tomato';
     	     }
     });
      // 3. Mouseout event
     element.addEventListener('mouseout', function(event){
     	     let target = event.target;
     	     if(target.tagName === 'A') {
     	     	 target.style.color = 'black';
     	     }
     });
     // 4. click event
     element.addEventListener('click', function(event){
             event.preventDefault();
              let target = event.target;
              if(target.style.color='tomato'){
                target.style.color = 'green';
              }
     });

});



//Button elements

const btn = document.querySelectorAll('.btn');

btn.forEach(function(button){
	 let input = document.createElement('input');
     
     //5.Dblclick event
     button.addEventListener('dblclick', function(event){
     	    let target = event.target;
     	    let parent = target.parentNode;
            let firstChildText = parent.children[0].innerHTML;
            // console.log(firstChildText);
            if(target.tagName === "DIV") {
            	input.type = 'text';
            	input.value = "Your name";
            	input.style.marginTop = '2px';
            	input.style.padding = ' 12px 22px';
            	input.style.background = 'aqua';
            	input.style.borderRadius = '10px';
            	input.style.color = 'red';
            	input.style.fontSize = '14px';
            	if(target.style.display === ''){
            		target.style.display = 'none';
            		parent.appendChild(input);
            	} else  {
                    target.style.display = '';
                }
            }
     });
     
         
     //6. focus event 
     input.addEventListener('focus', function(event){
              let target = event.target;
              // let parent = target.parentNode;
              // let firstChildText = parent.children[0].innerHTML;
              target.style.background = 'red';
              target.style.color = 'yellow';
              target.value = 'Enter your name';
     });
     //7. select event
     input.addEventListener('select', function(event){
              let target = event.target;
              let parent = target.parentNode;
              let firstChildText = parent.children[0].innerHTML;
              alert('You have chosen: ' + firstChildText);
     },false);
     // 8.Keydown event
     input.addEventListener('keydown', function(event){
            let target = event.target;
            let inputValue = input.value;
            if(event.which === 13) {
                alert("We got your name " + inputValue);
                input.value = '';
            }

     });
        
     // 9. Blur event
     input.addEventListener('blur', function(event){
          let target = event.target;
          target.style.background = 'aqua';
          if(input.style.display === '') {
               target.style.display = 'none';
               button.style.display = '';
          }

         });

});

image.addEventListener('contextmenu', function(e){
     if( e.target.style.height === ''){
         e.target.style.height = '100vh';
         // alert('Right click again');
     } else {
          e.target.style.height = '';
          alert('what do you want??')
     }
});


window.addEventListener('resize', function(){
        count++;
        alert('You have resized the screen: ' +count + " times." )  
});
