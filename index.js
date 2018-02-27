var list = document.getElementById("blocks").childNodes;

for (var i = 0; i < list.length; i++) {
list[i].addEventListener("click",
function() {
blocks.insertBefore(this, blocks.childNodes[0])
});
}