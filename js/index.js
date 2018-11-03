// Your code goes here


// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

//  Nest two similar events somewhere in the site and prevent the event propagation properly
//  Stop the navigation from items from refreshing the page by using preventDefault()


//-----------------------MouseOver
const navA = document.querySelectorAll('.nav-link');

for (let i = 0; i < navA.length; i++) {
      navA[i].addEventListener('mouseover', function () {
        navA[i].style.fontSize = '20px';
      });
    };

    for (let i = 0; i < navA.length; i++) {
        navA[i].addEventListener('mouseleave', function () {
          navA[i].style.fontSize = '16px';
        });
      };

//-----------------------keydown

//-----------------------wheel

//-----------------------drag / drop

//-----------------------load

//-----------------------focus

//-----------------------resize

//-----------------------scroll

//-----------------------select

//-----------------------dblclick