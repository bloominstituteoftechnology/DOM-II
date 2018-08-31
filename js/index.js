const navA = document.querySelectorAll('nav a');
const anchorHandler = function(){
    if (this.style.color === ''){
        this.style.color = 'gold'
    } else if (this.style.color === 'gold'){
        this.style.color = ''
    }
}
navA.forEach( function(element) {
    element.addEventListener('mouseover',anchorHandler)
});

navA.forEach(function(element){
    element.addEventListener('click',function(e){
        e.preventDefault();
    })
})
const h2 = document.querySelectorAll('h2');
h2.forEach(function(element){
    element.addEventListener('dblclick',function(){
        if (this.style.fontSize === ""){
            this.style.fontSize = "42px"} 
        else if (this.style.fontSize ==="42px"){
            this.style.fontSize =""
        }  
    })
})

const imgFun = document.querySelector('.intro img')
console.log(imgFun)
imgFun.addEventListener('mouseleave',function(){
    if(this.style.border === ''){
        this.style.border = '5px solid gray'
    } else if (this.style.border === '5px solid gray'){
        this.style.border =''
    }
})

imgFun.addEventListener('dragstart', function () {
       this.src = 'img/snoopy.jpg'
        
})
imgFun.addEventListener('dragend', function () {
    this.src = 'img/fun-bus.jpg'

})

const btn = document.querySelectorAll('.btn');
const AlertA =['Next stop Paradise!','King of The Mountain !','Relaxing getaway'];
for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener('mouseout',function(){
        alert(AlertA[i])
    })
}

const logo = document.querySelector('.logo-heading');
logo.addEventListener('contextmenu',function(event){
    if(this.style.color=== ''){
        this.style.color = 'gold';
    } else if(this.style.color = 'gold'){
        this.style.color = ''
    }
})

const body = document.querySelector('body');

const span = document.createElement('span');
span.innerHTML="CLick To Invert Text";
span.style.fontSize = '14px';
span.style.fontFamily = 'roboto';
span.style.border = '1px solid black'
span.style.marginLeft= '30px';
span.style.padding = '10px';
span.style.cursor = 'pointer';
const nav = document.querySelector('nav');
logo.appendChild(span);
span.addEventListener('click', function () {
    if(body.style.backgroundColor === ''){
        body.style.backgroundColor = 'black'
        body.style.color = 'white';
        logo.style.color= 'black';
        span.style.color= 'black';
    } else if (body.style.backgroundColor === 'black'){
        body.style.backgroundColor = ''
        body.style.color = '';
        logo.style.color = '';
        span.style.color = '';
    }
})
const para = document.querySelectorAll('p');
para.forEach(function(element){
    element.addEventListener('mouseenter', function(){
        if(this.style.fontSize ===""){
        this.style.fontSize = "22px"
        } else if (this.style.fontSize === "22px"){
            this.style.fontSize = "";
        }
    })
})
body.addEventListener('keypress',function(){
    if (logo.style.color === "") {
        logo.style.color = "red"
    } else if (logo.style.color === "red") {
        logo.style.color = "orange";
    }else if(logo.style.color === 'orange'){
        logo.style.color = 'yellow';
    } else if (logo.style.color === 'yellow') {
        logo.style.color = 'green';
    } else if (logo.style.color === 'green') {
        logo.style.color = 'blue';
    } else if (logo.style.color === 'blue') {
        logo.style.color = 'red';
    }
})

const firstTextContent = document.querySelector('.text-content');
firstTextContent.addEventListener('click',function(event){
    event.stopPropagation();
    if (this.style.border === ''){
    this.style.border = '1px dotted red';}
    else if (this.style.border === '1px dotted red'){
        this.style.border = ''
    }
})

const firstContentSection = document.querySelector('.content-section');
firstContentSection.addEventListener('click', function () {
    if (this.style.border === ''){
    this.style.border = '1px solid dodgerblue';}
    else if (this.style.border === '1px solid dodgerblue'){
        this.style.border = ''
    }
})