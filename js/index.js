// Your code goes here

const myBtn = document.querySelector('.btn');
const contentPick = document.querySelector('.content-pick');
const myHeader = document.querySelectorAll('.home h2');

console.log(myHeader);


console.log(contentPick);
contentPick.addEventListener('click', () => {
    contentPick.classList.toggle('change-background');
});

// myBtn.addEventListener('click', () => {
    // Step 3: Do something!
//     console.log("still works");
//   });