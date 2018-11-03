// Your code goes here
const h1 = document.querySelector('.logo-heading');
const body = document.querySelector('body');
const sandBus = document.querySelector('.intro img');

//Hovering cursor over 'Fun Bus' title toggles a palette of text colors
h1.addEventListener('mouseover', function(event){
    h1.classList.toggle('logo-colors');
    //need to remove class before next mouseover
})

//Toogles website dark palette by pressing '-'
body.addEventListener('keydown', function(event){
    const keyName = event.key;
    if(keyName === '-'){
        body.classList.toggle('dark-mode');
    }
    //Need to fix colors
})

//Bus img moves side to side
sandBus.addEventListener('wheel', function(event){
    sandBus.classList.toggle('.vrooom');
    //fix, class is being toggled, but style isn't being added
})

//Dblclicked text changes colors except for h1
body.addEventListener('dblclick', function(event){
    const cursorTarget = event.target;
    console.log(cursorTarget)
    if(cursorTarget === h1){
    }else{
      if(cursorTarget.style.color === 'black' 
      || cursorTarget.style.color === 'white'){
          cursorTarget.style.color = 'khaki';
      }else{
          cursorTarget.style.color = 'black';
      }
}
})
