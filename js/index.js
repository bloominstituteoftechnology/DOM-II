// Your code goes here

//`dblclick`

let dblclickEvent = document.getElementsByClassName("btn")
for (let i = 0; dblclickEvent.lemgth; i++){
    dblclickEvent[i].addEventlistener('dblclick', callback)
}
