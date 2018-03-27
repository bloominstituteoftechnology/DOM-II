//  const block = document.querySelectorAll(".block");
// //Rockets
// block.forEach((obj) => {
//     obj.addEventListener("click", () => {        
//         const blocks = obj.parentNode;
//         //blocks.removeChild(obj); 
//         blocks.prepend(obj); 
//     });
// });
 //Traveler
 const blocks = document.getElementsByClassName("blocks");
 const block = document.getElementsByClassName("block");
 const blockArr = Array.from(block);
 
 blockArr.forEach(function(obj){
     obj.addEventListener('mousedown', function () {
         this.style.marginLeft = "800px";
     });
     obj.addEventListener('mouseout', function (){
         this.style.marginLeft = "10px";
     });
 })