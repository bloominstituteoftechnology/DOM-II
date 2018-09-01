// Your code goes here

// Nav elements
const mainHeader = document.querySelector('.main-navigation');
const anchor = mainHeader.querySelectorAll('a');

anchor.forEach(function(element){
     // 1.Mouseover event
     element.addEventListener('mouseover', function(event){
     	     let target = event.target;
     	     if(target.tagName === "A") {
     	     	target.style.color = 'tomato';
     	     }
     });
      // 2. Mouse out event
     element.addEventListener('mouseout', function(event){
     	     let target = event.target;
     	     if(target.tagName === 'A') {
     	     	 target.style.color = 'black';
     	     }
     });

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
     
     //3.Dblclick event
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
     
         
     //4. focus event 
     input.addEventListener('focus', function(event){
              let target = event.target;
              // let parent = target.parentNode;
              // let firstChildText = parent.children[0].innerHTML;
              target.style.background = 'red';
              target.style.color = 'yellow';
              target.value = 'Enter your name';
     });

     input.addEventListener('select', function(event){
              let target = event.target;
              let parent = target.parentNode;
              let firstChildText = parent.children[0].innerHTML;
              alert('You have chosen: ' + firstChildText);
     },false);
     // 5.Keydown event
     input.addEventListener('keydown', function(event){
            let target = event.target;
            let inputValue = input.value;
            if(event.which === 13) {
                alert("We got your name " + inputValue);
                input.value = '';
            }

     });
        
     // 6. Blur event
     input.addEventListener('blur', function(event){
          let target = event.target;
          target.style.background = 'aqua';
          if(input.style.display === '') {
               target.style.display = 'none';
               button.style.display = '';
          }

         });

});
