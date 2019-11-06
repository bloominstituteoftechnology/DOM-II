// Your code goes here
const travelImages = document.querySelectorAll('.img-content');
const lastTravelImage = document.querySelector('.content-destination img');
const firstTravelImage = document.querySelector('.intro img');

travelImages.forEach((image) => {
    image.addEventListener('mouseenter', (event) => {
      image.style.transform = 'scale(1.2)';
      image.style.transition = 'transform 0.5s';
    });
    
    image.addEventListener('mouseleave', (event) => {
      image.style.transform = 'scale(1.0)';
      image.style.transition = 'transform 0.5s';
    });
});


 lastTravelImage.addEventListener('mouseenter', (event) => {
        lastTravelImage.style.transform = 'scale(1.15)';
        lastTravelImage.style.transition = 'transform 0.5s';
    });
    
    lastTravelImage.addEventListener('mouseleave', (event) => {
        lastTravelImage.style.transform = 'scale(1.0)';
        lastTravelImage.style.transition = 'transform 0.5s';
    });
   

firstTravelImage.addEventListener('click', (event) => {
        firstTravelImage.src = 'https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
        firstTravelImage.alt = 'NEW yellow bus';
        firstTravelImage.style.height="500px";
    });
    const buttonLow = document.querySelectorAll('.destination .btn');

    buttonLow.forEach((button)=>{
       // console.log('the button was doubleclicked');
        button.addEventListener('dblclick',  (e) =>{
        console.log('the button was doubleclicked');
        button.style.color = 'gold';
        button.classList.toggle('large');//to make this work I added a "large" class in home-page.less.
        });
    });
     const navBar = document.querySelector('.nav-container');
     navBar.addEventListener('mousedown', (event)=>{
         navBar.style.backgroundColor ='#ADD8E6';
     })
     const navText =document.querySelectorAll('.nav .nav-link ')
        navText.forEach((text)=>{
            text.addEventListener('click', (event) =>{
            text.style.color ='#DAA520';
            text.style.fontSize = '1.9rem'
             });
    });
    
     const logoText = document.querySelector('.logo-heading')
        logoText.addEventListener('mouseover', (event)=>{
            logoText.style.color ='#DAA520';
         logoText.style.fontWeight= 'bold';
        });
    
     function zoom(event) {
          //  event.preventDefault();
          
            scale += event.deltaY * -0.01;
          
            // Restrict scale
            scale = Math.min(Math.max(.125, scale), 2);
          
            // Apply scale transform
            el.style.transform = `scale(${scale})`;
     }
    
          let scale = 1;
          const el = document.querySelector('.intro h2');
          el.onwheel = zoom; 
    
    
    //-------search box and button------>
    const headerNewEl = document.querySelector('.nav-container');
       
        const newDiv = document.createElement('div');
            newDiv.className='search-container';
            newDiv.style.float= 'right';
    
            const newForm = document.createElement('form');
            newForm.action='/action_page.php';
    
                const imputForm = document.createElement('input');
                    imputForm.type ='text';
                    imputForm.style.padding ='7px';
                    imputForm.style.paddingRight='60px'
                    imputForm.style.border ='1px solid #aaa';
                    imputForm.placeholder='Search destination...';
                    imputForm.name ='search';
                    imputForm.textContent='';
                    imputForm.style.fontSize ='1.5rem';
                newForm.appendChild(imputForm);  
    
                 const buttonForm = document. createElement('button')
                     buttonForm.type ='submit';
                     buttonForm.style.float ='right';
                     buttonForm.style.padding = '6px';
                     buttonForm.style.marginRight='16px';
                     buttonForm.style.background='#ddd';
                     buttonForm.fontSize='17px';
                     buttonForm.style.border='none';
                     buttonForm.style.cursor= 'pointer';
                     buttonForm.style.fontSize ='2rem';
                     const searchIcon = document.createElement('i');
                         searchIcon.className = 'fa fa-search';
                     buttonForm.appendChild(searchIcon);
                newForm.appendChild(buttonForm);
           newDiv.appendChild(newForm);
        headerNewEl.appendChild(newDiv);
    
    //-------search box and button------
    
    imputForm.addEventListener('focus', (event) => {
      event.target.style.background = 'LightCyan';    
    });
    
    imputForm.addEventListener('blur', (event) => {
      event.target.style.background = '';    
    });
    
    
    document.addEventListener('wheel', (event) => {
        event.target.style.color = "teal";
        event.target.style.backgroundColor= "white";
      }); 
    
      
     document.addEventListener('copy',cb);
    
     function cb(){
         alert("You can't copy this!!");
     } 
    
     const  drivePath = {
         curviness: 1.5,
         autoRotate: true,
         values:[
            {x:90, y:-20},
            {x:200, y:10},
            {x:300, y:-30},
            {x:460, y:20},
            {x:600, y:-10},
            {x:900, y:-10},
         ]
     }
     const tween = new TimelineLite();
     tween.add(
         TweenLite.to(".paper-car", 5, {
             bezier:drivePath,
             ease:Power1.easeInOut
         })
     );
