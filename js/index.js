// Your code goes here

//change color of logo, font size and give it a background.
let logo = document.querySelector('.logo-heading');

  logo.addEventListener('mousemove', (event)=>{
       logo.style.backgroundColor ='blanchedalmond';
       logo.style.fontSize='60px';
       logo.style.color ='limegreen';
     });

// underline nav items and color limegreen
let navItems = document.querySelectorAll('nav a');
navItems.forEach(item =>{
    item.addEventListener('mouseenter', (event)=>{
        console.log("mouse enter occured", navItems);
        item.style.color= 'limegreen';
        item.style.textDecoration='underline';
      });
    });
