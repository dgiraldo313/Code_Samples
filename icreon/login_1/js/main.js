var addButton= document.getElementsByClassName("add")[0];
var container= document.getElementsByClassName("container")[0];
var close= document.getElementsByClassName("close")[0];

console.log(document.getElementsByClassName("container"));
addButton.addEventListener("click", function(){
    container.className += " " + "active";
});

close.addEventListener("click", function(){
    container.className = "container";
});
