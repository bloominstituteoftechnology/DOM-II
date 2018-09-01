// Your code goes here
const logoHeading = document. querySelector('.logo-heading');
logoHeading.addEventListener('dblclick', function() {
    logoHeading.style.backgroundColor = 'aqua';
});
// logo on navbar

const yellowBus = document.querySelector(".intro img");
yellowBus.addEventListener('mouseenter', function() {
    yellowBus.setAttribute('src','http://p.fod4.com/p/channels/legacy/profile/1324963/43cabe19f80f9db1779b4d327fcc40cb.jpg');
});

yellowBus.addEventListener('mouseleave', function() {
    yellowBus.setAttribute('src','https://vignette.wikia.nocookie.net/mycun-the-movie/images/b/ba/Wheels-on-the-bus-yellow-e1445874888499.png/revision/latest?cb=20160128213056');
});

const welcomeMessage = document.querySelector('h2');
document.addEventListener('wheel', function() {
    welcomeMessage.innerText = 'Welcome to the Bun Fus!';
});

const dragPTag = document.querySelector('p');
dragPTag.addEventListener('drag', function() {
    this.style.display = 'none';
})

const footer = document.querySelector('footer');
document.addEventListener('keypress', function(event){
    if(event.key = "w") {
        footer.style.backgroundColor = 'aqua';
    }
})

window.addEventListener('resize', function (event) {
    yellowBus.style.display = 'none';
})

// document.addEventListener('scroll', function() {
//     alert('You have encounterd the Scroll Lock monster.  Please Do not do this again!');
// })

const nav = document.querySelector('.nav');
window.addEventListener('contextmenu', function() {
    nav.style.display = none;
})
//shoutout to Ryan Matthews for the Konami Code
// I just changed the alert
document.addEventListener("keydown", function(event)    {
    if(event.key == "ArrowUp")  {
        document.addEventListener("keydown", function(event)    {
            if(event.key == "ArrowUp")  {
                document.addEventListener("keydown", function(event)    {
                    if(event.key == "ArrowDown")    {
                        document.addEventListener("keydown",    function(event) {
                            if(event.key == "ArrowDown")    {
                                document.addEventListener("keydown", function(event) {
                                    if(event.key == "ArrowLeft")    {
                                        document.addEventListener("keydown",    function(event) {
                                            if(event.key == "ArrowRight")   {
                                                document.addEventListener("keydown",    function(event) {
                                                    if(event.key == "ArrowLeft")    {
                                                        document.addEventListener("keydown", function(event)    {
                                                            if(event.key == "ArrowRight")   {
                                                                document.addEventListener("keydown",    function(event) {
                                                                    if(event.key == "b"){
                                                                        document.addEventListener("keydown",    function(event) {
                                                                            if(event.key == "a")    {
                                                                                document.addEventListener("keydown",    function(event) {
                                                                                    if(event.key == "Enter")    {
                                                                                        window.location.href = 'https://i.kym-cdn.com/entries/icons/original/000/000/269/hqdefault.jpg';
                                                                                        alert('You just entered the Konami code ... why?');
                                                                                        alert('You have been redirected');
                                                                                    }
                                                                                })
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})

const navs = document.querySelectorAll('.nav a');
for(let i = 0; i < navs.length; i++) {
    navs[i].addEventListener('click',(event) => {
      event.stopPropagation();
      event.preventDefault();
    });
  }
