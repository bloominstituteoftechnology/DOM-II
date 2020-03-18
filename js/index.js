// Your code goes here


//Mouse over==========================================
var navLink = document.querySelectorAll(".nav-link");
navLink[0].addEventListener('mouseover', () => {
    navLink[0].style.fontSize = "1.9em";
    navLink[0].addEventListener('mouseleave', () => {
        navLink[0].style.fontSize = "1.6em";
    });
});
navLink[1].addEventListener('mouseover', () => {
    navLink[1].style.fontSize = "1.9em";
    navLink[1].addEventListener('mouseleave', () => {
        navLink[1].style.fontSize = "1.6em";
    });
});
navLink[2].addEventListener('mouseover', () => {
    navLink[2].style.fontSize = "1.9em";
    navLink[2].addEventListener('mouseleave', () => {
        navLink[2].style.fontSize = "1.6em";
    });
});
navLink[3].addEventListener('mouseover', () => {
    navLink[3].style.fontSize = "1.9em";
    navLink[3].addEventListener('mouseleave', () => {
        navLink[3].style.fontSize = "1.6em";
    });
});
//key down=======================================================
 var page = document.querySelector("html");

page.addEventListener('keydown', () => {
    alert("Thank you for pressing on the key board :)");
});
//wheel=======================================================
page.addEventListener('wheel', () => {
    page.style.backgroundColor = "#d1d1d1";
});
//drag==========================
let introImg = document.querySelector('#img');
introImg.addEventListener('drag', () => {
    document.querySelector('header').style.backgroundColor = 'orange'
  })

//load==============================
var nav = document.querySelector('.nav');

addEventListener('load', () => {
    alert("your page has loaded :)");
});

//focus=====================
//resize=============================
window.addEventListener('resize', () => {
    console.log('resizing has happened');
  })
//scroll=============================
addEventListener('scroll', () => {
    console.log('scrolling has happened');
});
//select============================




//dblclick=================================

introImg.addEventListener('dblclick', event => {
    event.target.style.transform = 'rotate(180deg)'
  })
  

