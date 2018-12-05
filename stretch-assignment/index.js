const rockets = document.querySelectorAll('.block');

console.log(rockets);

rocketsArray = Array.from(rockets);
// console.log(Object.keys(rockets));

for (let i = 0; i < rocketsArray.lenght; i++) {
  rocketsArray[i].addEventListener('click', (arr, fromIndex, toIndex) => {
    var element = rocketsArray[i];
    arr.splice(rocketsArray[i], 1);
    arr.splice(rocketsArray[0], 0, element);
  });
};


console.log(rocketsArray);