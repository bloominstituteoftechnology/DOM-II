// Your code goes here

const bottomPs = document.querySelectorAll('.destination p');
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button, index)=>{
    button.addEventListener('click', function(){
        button.style.backgroundColor = 'white';
        button.style.width = '215px';
        button.style.height = '52px';
        button.style.border = "2px solid rgba(141, 125, 106, 0.699)"
        button.style.color = 'rgba(141, 125, 106, 0.699)';
        button.style.fontWeight = 'bolder';
        button.style.margin= '10px';
        if(bottomPs[index].style.display === ''){
            bottomPs[index].style.display = 'none';
        }else{
            bottomPs[index].style.display = '';
        }
        
    });
});



const pics = document.querySelectorAll('img');
pics.forEach((pic)=>{
    pic.addEventListener('mouseenter', function(event){
        event.target.style.opacity = '0.7';
    });
    pic.addEventListener('mouseleave',function(event){
        event.target.style.opacity = '';
    })    
});

const headersDarken = document.querySelectorAll('h2');
headersDarken.forEach((header)=>{
    header.addEventListener('mouseenter', function(){
        header.style.backgroundColor = "rgba(141, 125, 106, 0.699)"
        header.style.height = "60px";
        header.style.textAlign = "center";
        header.style.paddingTop = "15px";
        header.style.marginBottom = "15px";
        header.style.fontSize = "4rem"
        header.style.borderRadius = "5px";
        setTimeout(function() {
            header.style.backgroundColor = ""
            header.style.height = "";
            header.style.textAlign = "";
            header.style.paddingTop = "";
            header.style.marginBottom = "";
            header.style.fontSize = ""
            header.style.borderRadius = "";
        }, 1000);
    })

})

const smallHeadersDarken = document.querySelectorAll('.destination h4');
smallHeadersDarken.forEach((header)=>{
    header.addEventListener('mouseenter', function(){
        header.style.backgroundColor = "rgba(141, 125, 106, 0.699)"
        header.style.height = "40px";
        header.style.textAlign = "center";
        header.style.paddingTop = "10px";
        header.style.marginBottom = "10px";
        header.style.fontSize = "2.4rem"
        header.style.borderRadius = "5px";
        setTimeout(function() {
            header.style.backgroundColor = ""
            header.style.height = "";
            header.style.textAlign = "";
            header.style.paddingTop = "";
            header.style.marginBottom = "";
            header.style.fontSize = ""
            header.style.borderRadius = "";
        }, 1000);
    })
})

const navBar = document.querySelector('.main-navigation');
navBar.addEventListener('mouseenter', function(){
    navBar.style.backgroundColor ="rgba(141, 125, 106, 0.699)"
})
navBar.addEventListener('mouseleave', function(){
    navBar.style.backgroundColor = "";
    navBar.style.color = "";
});

const navA = document.querySelectorAll('nav a');
navA.forEach((nav)=>{
    nav.addEventListener('mouseenter', function(){
        nav.style.color = "white";
        nav.style.fontSize = "2rem";
    });    
    nav.addEventListener('mouseleave', function(){
        nav.style.color = " black";
        nav.style.fontSize = "1.6rem";  
    });    
    nav.addEventListener('click', function(){
        nav.style.color = "white";
        nav.style.fontSize = "2.6rem";
        setTimeout(function(){
            nav.style.color = "white ";
            nav.style.fontSize = "1.6rem "; 
        },400);      
    })
})


const paras = document.querySelectorAll('p');
paras.forEach((p)=>{
    p.addEventListener('mouseenter',function(){
        p.style.backgroundColor = "rgba(170, 145, 131, 0.233)"
        p.style.borderRadius = "5px";
        p.style.padding ="10px";
        p.style.margin = '10px';
        p.style.border = "2px solid rgba(170, 152, 131, 0.925)"
    });
    p.addEventListener('mouseleave', function(){
        p.style.backgroundColor = "";
        p.style.borderRadius = "";
        p.style.padding ="";
        p.style.border = "";
    })
});

window.addEventListener('load',function(){
    alert(`Yo dawg! This page is bumping!`);
});

let everything = document.querySelector('html');
window.addEventListener('keydown', function(){
    everything.style.display = "none";
    setTimeout(function(){
        everything.style.display = "";
    },2000);
});

//adds countdown sequence

let count = 10;
let html = document.querySelector('html');
let bottomCounterDiv = document.createElement('div');
bottomCounterDiv.style.textAlign = "center";
let bottomCounterP = document.createElement('p');
bottomCounterP.style.color = 'black';
bottomCounterP.style.fontSize = '5rem';
bottomCounterDiv.appendChild(bottomCounterP);
document.body.appendChild(bottomCounterDiv);
window.addEventListener('click', function(){
    if(count === 0){
        html.style.display = "none";
    }else if(count <= 4){
        bottomCounterP.style.color = 'red';
    }
    count--;
    bottomCounterP.innerHTML = count;

})
