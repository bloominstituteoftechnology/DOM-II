// Your code goes here
count = 0;

let boxes = document.querySelectorAll("div");

for (count = 0;count < boxes.length;count++){
  boxes[count].addEventListener('dblclick', (e)=>{

    e.target.style.display = 'none';
  });

  boxes[count].addEventListener('contextmenu', (e)=>{

    e.target.style.backgroundColor = 'green';
  });

  boxes[count].addEventListener('mouseover', (e)=>{

    e.target.style.backgroundColor = 'black';
  });

  boxes[count].addEventListener('click', (e)=>{

    e.target.style.backgroundColor = 'blue';
  });

  boxes[count].addEventListener('wheel', (e)=>{

    e.target.style.backgroundColor = 'orange';
  });

  boxes[count].addEventListener('drag', (e)=>{

    e.target.style.fontSize = '3em';
  });

//7
  boxes[count].addEventListener('mousedown', (e)=>{

    e.target.style.backgroundColor = 'yellow';
  });
//8
  boxes[count].addEventListener('cut', (e)=>{

    e.target.style.backgroundColor = 'pink';
  });

//9
boxes[count].addEventListener('copy', (e)=>{

    e.target.style.backgroundColor = 'gray';
  });
//10

  boxes[count].addEventListener('mouseout', (e)=>{

    e.target.style.backgroundColor = 'maroon';
  });





//stopprop - moved out of loop
//   boxes[count].addEventListener('click', (e)=>{

//     e.stopPropagation();
//   });

//preventdefault - moved down below
// boxes[count].addEventListener('click', (e)=>{

//     e.preventDefault();
//   });
};
//end of for loop



let stoppage = document.querySelector("a");
//stopprop
stoppage.addEventListener('mouseout', (e)=>{

    e.stopPropagation();
  });


let prevent = document.querySelector(".btn");
//preventdefault
  prevent.addEventListener('click', (e)=>{

    e.preventDefault();
  });
