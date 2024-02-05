let signUpbtn=document.getElementById("signUpbtn");
let signInbtn=document.getElementById("signInbtn")
let title=document.getElementById("title");
let namefield=document.getElementById("name-field");
let emailfield=document.getElementById("email-field");
let mobilefield=document.getElementById("mobile-field");
let dobfield=document.getElementById("dob-field");
var passwordfield=document.getElementsByName("password")[0];


signInbtn.onclick=function(){
    title.innerHTML="Sign In";
    namefield.style.maxHeight="0";
    emailfield.style.maxHeight="0";
    mobilefield.style.maxHeight="0";
    dobfield.style.maxHeight="0";

    passwordfield.placeholder=' Password';
    signUpbtn.classList.add("disable");
    signInbtn.classList.remove("disable");

}
signUpbtn.onclick=function(){
    title.innerHTML="Sign Up";
    namefield.style.maxHeight="60px";
    emailfield.style.maxHeight="60px";
    mobilefield.style.maxHeight="60px";
    dobfield.style.maxHeight="60px";
    passwordfield.placeholder=' Create password';
    signUpbtn.classList.remove("disable");
    signInbtn.classList.add("disable");

}