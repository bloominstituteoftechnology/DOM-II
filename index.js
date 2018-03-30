
    // const blocks = document.querySelector('.blocks');
    

    // const ourFunction = (event) => {
    //     event.stopPropagation();
    //     let parent = event.target.parentNode;
    //     parent.removeChild(event.target);
    //     parent.prepend(event.target);
    // };
    
    // for (i = 0; i < blocks.children.length; i++) {
    // blocks.children[i].addEventListener('click', ourFunction);
    // }


    // const blocks = document.querySelector('.blocks');
    

    // const ourFunction = (event) => {
    //     event.stopPropagation();
    //     let parent = event.target.parentNode;
    //     parent.removeChild(event.target);
    //     parent.prepend(event.target);
    // };
    
    // for (i = 0; i < blocks.children.length; i++) {
    // blocks.children[i].addEventListener('click', ourFunction);
    // }

    let blocks = document.querySelectorAll('.blocks');

    const ourFunction = (event) => {
      let distance = 0;
      
      const moveRight = () => {
        distance += 10;
        event.target.style.marginLeft = `${distance}px`;
      }
      setInterval(moveRight, 100);
    }
    
    
    blocks = Array.from(blocks).map( item => {
      item.addEventListener('click', ourFunction);  
    })
    
    // for (let i = 0; i < blocks.children.length; i++) {
    //   blocks.children[i].addEventListener('click', ourFunction);
    // }



// const blocks = document.querySelector('.blocks');

// const ourFunction = (event) => {
//      event.stopPropagation();
//     event.target.style.position = "absolute";
//     event.target.style.right = x_pos+='20px';
//     };


// for (i = 0; i < blocks.children.length; i++) {
//      blocks.children[i].addEventListener('click', ourFunction);
//      }

//my goal is to get a box to move on it's own right at refresh, the box i want moved is this: <div class="block block--red"></div>
// will try using an interval to constantly apply function to move.

    // const redBlock = document.querySelector('.block--red');

    // function move () {
    // redBlock.style.marginLeft += 20px;
    // }

// let int = setInterval(move,1000);

//after i complete that I want to create a class that will move on it's own when applied

//after i complete that I need to use element.classList.toggle('class) to give it the class when clicked, and take away the class when unclicked