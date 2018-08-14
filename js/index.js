// Your code goes here

const home = document.querySelector('.home');
const h2 = document.querySelector('h2');
const allATags = document.querySelectorAll('a');
const logoHeading = document.querySelector('.logo-heading');
const intro = document.querySelector('.intro');
const headerImg = document.querySelector('.intro img');
const busNav = document.querySelector('.bus-nav');

//1
logoHeading.addEventListener('mouseenter', () => { 

  logoHeading.classList.toggle('yellow');
});

logoHeading.addEventListener('mouseleave', () => { 

    logoHeading.classList.toggle('yellow');
  });
  
//2
const introH2 = document.querySelector('.intro h2');

const introText = document.querySelector('p');

headerImg.addEventListener ('dblclick', () => {
    headerImg.style.border = "10px dotted yellow";
    headerImg.addEventListener ('dblclick', () => {
        headerImg.style.border = "20px dotted yellow";
        headerImg.addEventListener ('dblclick', () => {
            headerImg.style.border = "40px dotted yellow";
            headerImg.addEventListener ('dblclick', () => {
                headerImg.style.border = "80px dotted yellow";
                headerImg.addEventListener ('dblclick', () => {
                    headerImg.style.border = "160px dotted yellow";
                    introH2.innerHTML = "Oh my god!";
                    headerImg.addEventListener ('dblclick', () => {
                        headerImg.style.border = "none";
                        introH2.innerHTML = "Can you actually chill out?";
                        introH2.style.cursor = "pointer";
                        introH2.addEventListener('mouseover', () => {
                            introH2.innerHTML = "Don't you click me with that thing.";
                            introH2.addEventListener('click', () => {
                                introH2.innerHTML = "Ew get that cursor away from me!!!";
                                introText.innerHTML = "Gross disgusting yucky, nasty gross gross gross gross horrible gross gross. Gross dirty gross, disgusting gross no no ew gross hate gross gross gross. Ick yucky nasty horrible awful do not touch.";
                            });
                        });
                    });
                });
            });
    
        });
        
    });
});


//3


for (let i = 0; i < allATags.length; i++) {
    allATags[i].addEventListener('click', () => {
        preventDefault();
        });
        
}



//4


busNav.addEventListener('click', () => { 
    TweenMax.to(busNav, 2, {
        x:-490, 
        opacity: 0,
        scale: 0.9,
        ease:Expo.easeIn
    });
    setTimeout(function () {
        TweenMax.to(allATags, 2, {
            x:-490, 
            opacity: 0,
            scale: 0.9,
            ease:Expo.easeIn
        })        
    }, 2)

});



//5

const buttons = document.querySelectorAll('.btn');

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].style.border = "1px solid red";

// }

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseenter', () => {
        buttons[i].style.backgroundColor = "yellow";
        buttons[i].addEventListener('click', () => {
            buttons[i].style.opacity = "0";
            buttons[i].style.cursor = "default"
        })
        
    });
}




//6

const adventure = document.querySelector('.adventure-img');

adventure.addEventListener('mouseleave', () => {
    adventure.style.opacity = "0";
    
    adventure.addEventListener('click', () => {
        adventure.style.opacity = "1";
        adventure.setAttribute('src', "img/littlebus.png");
    
        adventure.addEventListener('mouseleave', () => {
            adventure.style.opacity = "1";
            });
    });

});

//7


const fun = document.querySelector('.fun-img');

fun.addEventListener('mouseleave', () => {
    fun.style.opacity = "0";
    
    fun.addEventListener('click', () => {
        fun.style.opacity = "1";
        fun.setAttribute('src', "img/littlebus.png");
    
        fun.addEventListener('mouseleave', () => {
            fun.style.opacity = "1";
            });
    });

});


//8

const go = document.querySelector('.go');


go.addEventListener('mouseenter', () => { 
    go.innerHTML = "Go away!";
    go.classList.toggle('yellow');
  });
  
  go.addEventListener('mouseleave', () => { 
     go.classList.toggle('yellow');
    });
    


//9

const goText = document.querySelectorAll('.go-text');

// for (let i = 0; i < goText.length; i++) {
//     goText[i].style.border = "1px solid red";

// }

for (let i = 0; i < goText.length; i++) {
    goText[i].addEventListener('click', () => {
        goText[i].style.color = "black";
        goText[i].innerHTML = "Goodbye goodbye baby bye bye bye, so long, farewell, go away go away goodbye, na na na na, na na na na, hey, hey, hey, goodbye, make like a tree and get the heck outta here!"
        
    });
}

//10


