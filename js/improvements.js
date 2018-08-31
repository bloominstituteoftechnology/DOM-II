//** Nav items change colors on click 2/10**
//NON Looping way to do it:
// const nav1 = document.querySelectorAll('.nav a')[0];
// const nav2 = document.querySelectorAll('.nav a')[1];
// const nav3 = document.querySelectorAll('.nav a')[2];
// const nav4 = document.querySelectorAll('.nav a')[3];

// const nav1List = nav1.classList;
// const nav2List = nav2.classList;
// const nav3List = nav3.classList;
// const nav4List = nav4.classList;

// nav1.onclick = function(event){
//     var result = nav1List.toggle('go');
//     if(result) {
//         nav1.style.color = 'red';
//     } else {
//         nav1.style.color = '';
//     }
// }

// nav2.onclick = function(event){
//     var result = nav2List.toggle('go');
//     if(result) {
//         nav2.style.color = 'orange';
//     } else {
//         nav2.style.color = '';
//     }
// }

// nav3.onclick = function(event){
//     var result = nav3List.toggle('go');
//     if(result) {
//         nav3.style.color = 'green';
//     } else {
//         nav3.style.color = '';
//     }
// }

// nav4.onclick = function(event){
//     var result = nav4List.toggle('go');
//     if(result) {
//         nav4.style.color = 'blue';
//     } else {
//         nav4.style.color = '';
//     }
// }

//SOLVING WITH LOOPS

// const navs = document.querySelectorAll('.nav a');
// const testarray = [];
// for (let i=0; i<navs.length; i++) {
//     testarray.push(document.querySelectorAll('.nav a')[i]);
// }
// const classListArray = [];
// for (let i=0; i<navs.length; i++) {
//     classListArray.push(testarray[i].classList);
// }

// const colorArray = ['red', 'orange', 'green', 'blue',];

// for (let i=0; i<testarray.length; i++) {
//     testarray[i].onclick = function(event){
//         var result = classListArray[i].toggle('go');
//         if(result){
//             testarray[i].style.color = colorArray[i];
//         } else {
//             testarray[i].style.color = '';
//         }
//     }
// }



// ***Adjusted from doing individual event listeners to batching like elements with identical
// styles

// **NON LOOP**
// const bottomDiv1 = document.querySelectorAll('.destination')[0];
// const bottomDiv2 = document.querySelectorAll('.destination')[1];
// const bottomDiv3 = document.querySelectorAll('.destination')[2];

// bottomDiv1.addEventListener('mouseover', function(){
//     if (bottomDiv1.style.color === ''){
//     bottomDiv1.style.color = 'aqua';
//     } else {bottomDiv1.style.color = ''}
// })

// bottomDiv2.addEventListener('mouseover', function(){
//     if (bottomDiv2.style.color === ''){
//     bottomDiv2.style.color = 'aqua';
//     } else {bottomDiv2.style.color = ''}
// })

// bottomDiv3.addEventListener('mouseover', function(){
//     if (bottomDiv3.style.color === ''){
//     bottomDiv3.style.color = 'aqua';
//     } else {bottomDiv3.style.color = ''}
// })


// **For loop**
// const bottomDivs = document.querySelectorAll('.destination');
// for (let i=0; i<bottomDivs.length; i++){
// bottomDivs[i].addEventListener('mouseover', function(){
//     bottomDivs[i].style.color = 'aqua';
// })}