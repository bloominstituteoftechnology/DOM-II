const selected = 0;
const blockList = document.querySelector('.blocks')

const length = blockList.children.length;

for(i=0; i < length; i++){
  blockList.children[i].addEventListener('click', function(event){
    blockList.prepend(event.target);
  })
}

for(i=0; i< length; i++){
  blockList.children[i].addEventListener('mousedown', function(event){
    event.style.left="500px";
  })
}

for(i=0; i< length; i++){
  blockList.children[i].addEventListener('mouseup', function(event){
    console.log('mouseup');
  })
}
