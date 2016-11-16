var signUp= document.getElementsByClassName("sign-up")[0];
var form= document.getElementsByClassName("form")[0];
var done= document.getElementsByClassName("done")[0];
var logo= document.getElementsByClassName("logo")[0];
var header= document.getElementsByClassName("header")[0];
var box= document.getElementsByClassName("box")[0];
var feed= document.getElementsByClassName("feed")[0];

// will add active class to container to activate css properties
console.log(signUp);
signUp.addEventListener("click", function(){
    signUp.className+= " "+"expand hidden";
    form.className= "form";
    done.className= "done";
    logo.className+= " "+"up";
});


done.addEventListener("click", function(){
    header.className= "header";
    logo.className += " "+"hidden";
    form.className += " "+"hidden";
    done.className= "add";
    box.className += " "+"feed";
    feed.className = "feed";




});
