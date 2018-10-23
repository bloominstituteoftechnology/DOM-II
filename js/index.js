/* MVP Items Used (x10):
1. mouseover -> Nav Items (applies color and underline)
2. mouseout -> Nav Items (returns default color and no underline)
3. keypress ->  pressing i anywhere on the body restores all image visibility
                pressing d anywhere on the body makes all images hidden

4. keydown ->   press(and hold) h anywhere on the body makes all images hidden
5. keyup ->     release h anywhere on the body makes all images become visible
6. dblclick -> double-click on any image to make it disappear
7. wheel -> use on Paragraphs to increase/decrease the font
8. mousedown -> use on "Sign Me Up!" buttons to notice the background and text color change
9. mouseup -> use on "Sign Me Up!" buttons to restore default settings
10. click -> use on "Sign Me Up!" to play a click sound.
*/
/******************************************************************************
************************************* Body ************************************
*******************************************************************************/
const body = document.querySelector('body');
const allImages = body.querySelectorAll('img');
const allParagraphs = body.querySelectorAll('p');
body.addEventListener('keypress', function(event){
  const keyName = event.key;
  if (keyName === 'i'){
    allImages.forEach(function(img){
      img.style.visibility = "visible";
    })
  }

  if (keyName === 'd'){
    allImages.forEach(function(img){
      img.style.visibility = "hidden";
    })
  }
});
body.addEventListener('keydown', function(event){
  const keyName = event.key;
  if (keyName === 'h'){
    allImages.forEach(function(img){
      img.style.visibility = "hidden";
    })
  }
});
body.addEventListener('keyup', function(event){
  const keyName = event.key;
  if (keyName === 'h'){
    allImages.forEach(function(img){
      img.style.visibility = "visible";
    })
  }
});

allImages.forEach(function(img){
  img.addEventListener('dblclick', function(event){
    event.target.style.visibility = "hidden";
  });
})
let fontSize = "16";
allParagraphs.forEach(function(paragraph){
  paragraph.addEventListener('wheel', function(event){
    event.preventDefault(); // ensures the entire page won't scroll
    if (event.deltaY < 0) {
      fontSize++;
    }
    if (event.deltaY > 0) {
      fontSize--;
    }
    event.currentTarget.style.fontSize = `${fontSize}px`;
  });
})

/******************************************************************************
************************************ Header ***********************************
*******************************************************************************/
//========================== Home Title ==========================
// (Stretch): use gsap to make the "fun bus" title shake when you hover your mouse over it.


//=========================== Main Nav ===========================
const mainHeaderNavItems = document.querySelector('.main-navigation').querySelector('.nav-container').querySelector('.nav').querySelectorAll('a');
/* (Testing): Use for testing the correct element(s) were grabbed from the nav header.
mainHeaderNavItems.forEach(function(item){
  item.style.color = "red";
});
*/
//-------------------------- Home --------------------------
const mainHeaderNavHome = mainHeaderNavItems[0];
mainHeaderNavHome.addEventListener('mouseover', function(event){
  event.currentTarget.style.color = "blue";
  event.currentTarget.style.textDecoration = "underline";
});

mainHeaderNavHome.addEventListener('mouseout', function(event){
  event.currentTarget.style.color = "black";
  event.currentTarget.style.textDecoration = "none";
});

//------------------------ About Us ------------------------
const mainHeaderNavAboutUs = mainHeaderNavItems[1];
mainHeaderNavAboutUs.addEventListener('mouseover', function(event){
  event.currentTarget.style.color = "green";
  event.currentTarget.style.textDecoration = "underline";
});

mainHeaderNavAboutUs.addEventListener('mouseout', function(event){
  event.currentTarget.style.color = "black";
  event.currentTarget.style.textDecoration = "none";
});

//-------------------------- Blog --------------------------
const mainHeaderNavBlog = mainHeaderNavItems[2];
mainHeaderNavBlog.addEventListener('mouseover', function(event){
  event.currentTarget.style.color = "red";
  event.currentTarget.style.textDecoration = "underline";
});

mainHeaderNavBlog.addEventListener('mouseout', function(event){
  event.currentTarget.style.color = "black";
  event.currentTarget.style.textDecoration = "none";
});

//------------------------- Contact ------------------------
const mainHeaderNavContact = mainHeaderNavItems[3];
mainHeaderNavContact.addEventListener('mouseover', function(event){
  event.currentTarget.style.color = "orange";
  event.currentTarget.style.textDecoration = "underline";
});

mainHeaderNavContact.addEventListener('mouseout', function(event){
  event.currentTarget.style.color = "black";
  event.currentTarget.style.textDecoration = "none";
});

/******************************************************************************
************************************* Home ************************************
*******************************************************************************/
//=========================== Main Nav ===========================
//------------------- Sign Me Up! (button) -----------------
const contentPickDestinationSignUpBtns = document.querySelector('.content-pick').querySelectorAll('.btn');
contentPickDestinationSignUpBtns.forEach(function(btn){
  console.log(btn);
  btn.addEventListener('mousedown', function(event){
    event.currentTarget.style.color = "white";
    event.currentTarget.style.backgroundColor = "#17A2B8"; // @button-bg
  });

  btn.addEventListener('mouseup', function(event){
    event.currentTarget.style.color = "#17A2B8"; // @button-bg
    event.currentTarget.style.backgroundColor = "white";
  });
  btn.addEventListener('mouseover', function(event){
    event.currentTarget.style.color = "#17A2B8"; // @button-bg
    event.currentTarget.style.backgroundColor = "white";
  });
  btn.addEventListener('mouseout', function(event){
    event.currentTarget.style.color = "white";
    event.currentTarget.style.backgroundColor = "#17A2B8"; // @button-bg
  });
  btn.addEventListener('click', function(event){

  })
})