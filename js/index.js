// Your code goes here

const bottomPs = document.querySelectorAll('.destination p');
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button)=>{
    button.addEventListener('click', function(){
        button.style.backgroundColor = 'white';
        button.style.width = '215px';
        button.style.height = '52px';
        button.style.border = "2px solid rgba(141, 125, 106, 0.699)"
        button.style.color = 'rgba(141, 125, 106, 0.699)';
        button.style.fontWeight = 'bolder';
        button.style.margin= '10px';
        if(bottomPs.style.display === ''){
            bottomPs.style.display === 'none';
        }
    });
});



const pics = document.querySelectorAll('img');
pics.forEach((pic)=>{
    pic.addEventListener('mouseenter', function(){
        pic.style.opacity = '0.7';
    });
    pic.addEventListener('mouseleave',function(){
        pic.style.opacity = '';
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
    })
})
const navBarNavA = document.querySelectorAll('.nav-link');
const navBar = document.querySelector('.main-navigation');
navBar.addEventListener('mouseenter', function(){
    navBar.style.backgroundColor ="rgba(141, 125, 106, 0.699)"
})
navBar.addEventListener('mouseleave', function(){
    navBar.style.backgroundColor = "";
    navBar.style.color = "";
});


const paras = document.querySelectorAll('p');
paras.forEach((p)=>{
    p.addEventListener('mouseenter',function(){
        p.style.backgroundColor = "rgba(170, 145, 131, 0.233)"
        p.style.borderRadius = "5px";
        p.style.padding ="10px";
        p.style.border = "2px solid rgba(170, 152, 131, 0.925)"
    });
    p.addEventListener('mouseleave', function(){
        p.style.backgroundColor = "";
        p.style.borderRadius = "";
        p.style.padding ="";
        p.style.border = "";
    })
});