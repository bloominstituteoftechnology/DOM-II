// Your code goes here
// const scrollOverNav = document.querySelectorAll(".nav-link");
// function changeNavColor() {
//     for (var i = 0; i < scrollOverNav.length; i++){
//         if (scrollOverNav[i].style.backgroundColor === ''){
//             scrollOverNav[i].style.backgroundColor = 'dodgerblue';
//         } else {
//             scrollOverNav[i].style.backgroundColor = '';
//         }
//     };
// };
// scrollOverNav[].addEventListener('mouseenter', changeNavColor);
const moveOverNav = document.querySelectorAll(".nav-link");
moveOverNav.forEach(function(element){
    if (element.style.color === ''){
        element.addEventListener('mouseenter', function(){
            element.style.backgroundColor = 'dodgerblue';
            element.style.color = 'white';
            element.style.fontSize = '3.5rem';
        })
    }
});
moveOverNav.forEach(function(element){
    if (element.style.color === 'white'){
        element.addEventListener('mouseleave', function(){
          element.style.backgroundColor = 'white';
          element.style.color = 'black';
          element.style.fontSize = '';
        })
    }    
});