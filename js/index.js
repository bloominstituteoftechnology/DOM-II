// Your code goes here

// Nav elements
const mainHeader = document.querySelector('.main-navigation');
const anchor = mainHeader.querySelectorAll('a');

anchor.forEach(function(element){
     element.addEventListener('mouseover', function(event){
     	     let target = event.target;
     	     if(target.tagName === "A") {
     	     	target.style.color = 'tomato';
     	     }
     });

     element.addEventListener('mouseout', function(event){
     	     let target = event.target;
     	     if(target.tagName === 'A') {
     	     	 target.style.color = 'black';
     	     }
     })
});


//Button elements

const btn = document.querySelectorAll('.btn');

btn.forEach(function(button){
	 let input = document.createElement('input');
     button.addEventListener('dblclick', function(event){
     	    let target = event.target;
     	    let parent = target.parentNode;
            if(target.tagName === "DIV") {
            	console.log('working');
            	
            	input.type = 'text';
            	input.value = 'Enter your name';
            	input.style.marginTop = '2px';
            	input.style.padding = ' 12px 22px';
            	input.style.background = 'aqua';
            	input.style.borderRadius = '10px';
            	input.style.color = 'red';
            	input.style.fontSize = '14px';
            	if(target.style.display === ''){
            		target.style.display = 'none';
            		parent.appendChild(input);
            	}
            }
     });

     input.addEventListener('focus', function(event){
              let target = event.target;
              if(target.style.background === 'aqua' && target.style.color === 'red'){
              	 target.style.background = 'red';
                 target.style.color = 'yellow';
              } else {
                target.style.background === 'aqua';
                target.style.color === 'red'
              }
        });
});
