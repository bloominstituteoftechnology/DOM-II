// Your code goes here
let signUpButton= document.querySelectorAll('.destination > .btn');
console.log(signUpButton);

let bottomImage= document.querySelector('.content-destination > img')
console.log(bottomImage);

//changes images towards bottom when clicked

signUpButton[0].addEventListener('click',() =>{
    bottomImage.src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=350"
})

signUpButton[1].addEventListener('click',() =>{
    bottomImage.src="https://www.worldatlas.com/r/w728-h425-c728x425/upload/66/14/d8/kangchenjunga.jpg"
});

signUpButton[2].addEventListener('click',() =>{
    bottomImage.src="https://www.islands.com/sites/islands.com/files/styles/1000_1x_/public/images/2018/07/remote-caribbean-islands-01-bequia-shutterstock.jpg?itok=ZGzw-tYu&fc=50,50"
});