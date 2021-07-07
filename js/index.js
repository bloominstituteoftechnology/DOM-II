// Your code goes here

const container = document.querySelector('.home');
console.log(container);

const buttonAlert = document.querySelectorAll('section.content-pick .destination .btn')


function alert (){
    buttonAlert.addEventListener('click', alert);
    alert ('Signing Up!');
}

function alert (){
    buttonAlert.addEventListener('click', function(){
        this.style.backgroundColor='red';
    })
}



