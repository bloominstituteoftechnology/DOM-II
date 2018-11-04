// Your code goes here


// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

//  Nest two similar events somewhere in the site and prevent the event propagation properly
//  Stop the navigation from items from refreshing the page by using preventDefault()


// 1 and 2-----------------------MouseOver/mouseleave
const navA = document.querySelectorAll('.nav-link');

for (let i = 0; i < navA.length; i++) {
      navA[i].addEventListener('mouseover', function () {
        navA[i].style.fontSize = '20px';
        preventDefault();
      });
    };

    for (let i = 0; i < navA.length; i++) {
        navA[i].addEventListener('mouseleave', function () {
          navA[i].style.fontSize = '16px';
        });
      };

//3 and 4-----------------------keydown/keyup

const bgColor = document.querySelector('body');

bgColor.addEventListener('keydown', function () {
    bgColor.style.backgroundColor = "lightblue";
}); 

bgColor.addEventListener('keyup', function() {
    bgColor.style.backgroundColor = 'white';
})



//5-----------------------wheel

const changeHeadings = document.querySelectorAll('h2');

for (let i = 0; i < changeHeadings.length; i++) {
    changeHeadings[i].addEventListener('wheel', function () {
        changeHeadings[i].style.color = 'red';
      });
    };

//6-----------------------load

window.addEventListener('load', function () {
    alert('The page has loaded correctly')
});


//7-----------------------resize
    window.addEventListener('resize', function() {
        document.querySelector('.logo-heading').style.color = 'red';
    });

//8----------------------MouseOver

const imagesA = document.getElementsByTagName('img');
console.log(imagesA);

for(let i = 0; i < imagesA.length; i++) {
    imagesA[i].addEventListener('mouseover', function () {
        imagesA[i].style.opacity = '0.5'
    })
};

for(let i = 0; i < imagesA.length; i++) {
    imagesA[i].addEventListener('mouseleave', function () {
        imagesA[i].style.opacity = '1'
    })
};

//9 ------------------copy

const pText = document.querySelectorAll('p');

for(let i = 0; i < pText.length; i++) {
    pText[i].addEventListener('copy', function () {
        pText[i].textContent = 'HA CAN\'T COPY ME!!'
    })
};


//10---------------click

const clickMessage = document.querySelectorAll('.btn');

for(let i = 0; i < clickMessage.length; i++) {
    clickMessage[i].addEventListener('click', function () {
        alert('HEY! Don\'t click me!') 
    })
};
