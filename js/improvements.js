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