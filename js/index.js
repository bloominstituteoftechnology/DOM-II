/* MVP Items Used (x10):
mouseover
mouseout
*/

/******************************************************************************
************************************ Header ***********************************
*******************************************************************************/
//========================== Home Title ==========================
// (Stretch): use gsap to make the "fun bus" title shake when you hover your mouse over it.


//=========================== Main Nav ===========================
const mainHeaderNavItems = document.querySelector('.main-navigation').querySelector('.nav-container').querySelector('.nav').querySelectorAll('a');
mainHeaderNavHome = mainHeaderNavItems[0];
mainHeaderNavAboutUs = mainHeaderNavItems[1];
mainHeaderNavBlog = mainHeaderNavItems[2];
mainHeaderNavContact = mainHeaderNavItems[3];

/* (Testing): Use for testing the correct element(s) were grabbed from the nav header.
mainHeaderNavItems.forEach(function(item){
  item.style.color = "red";
});
*/
//-------------------------- Home --------------------------
mainHeaderNavHome.addEventListener('mouseover', function(event){
  event.currentTarget.style.color = "blue";
  event.currentTarget.style.textDecoration = "underline";
});

mainHeaderNavHome.addEventListener('mouseout', function(event){
  event.currentTarget.style.color = "black";
  event.currentTarget.style.textDecoration = "none";
});

//------------------------ About Us ------------------------
mainHeaderNavAboutUs.addEventListener('mouseover', function(event){
  event.currentTarget.style.color = "green";
  event.currentTarget.style.textDecoration = "underline";
});

mainHeaderNavAboutUs.addEventListener('mouseout', function(event){
  event.currentTarget.style.color = "black";
  event.currentTarget.style.textDecoration = "none";
});

//-------------------------- Blog --------------------------
mainHeaderNavBlog.addEventListener('mouseover', function(event){
  event.currentTarget.style.color = "red";
  event.currentTarget.style.textDecoration = "underline";
});

mainHeaderNavBlog.addEventListener('mouseout', function(event){
  event.currentTarget.style.color = "black";
  event.currentTarget.style.textDecoration = "none";
});

//------------------------- Contact ------------------------
mainHeaderNavContact.addEventListener('mouseover', function(event){
  event.currentTarget.style.color = "orange";
  event.currentTarget.style.textDecoration = "underline";
});

mainHeaderNavContact.addEventListener('mouseout', function(event){
  event.currentTarget.style.color = "black";
  event.currentTarget.style.textDecoration = "none";
});

//keydown