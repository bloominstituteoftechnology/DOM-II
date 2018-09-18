// Quan's code goes here
const botBtn = document.querySelectorAll(".btn");
for(let i=0; i<botBtn.length; i++){
    botBtn[i].addEventListener('click', (event) => {
        event.backgroundColor="white";
      });
}
