var password=document.getElementById("input");
var button=document.getElementById("btn");
var info=document.getElementById("info");
var strength=document.getElementById("strength");

password.addEventListener('input',()=>{
    if(password.value.length>0){
        info.style.display="block";
    }
    else{
        info.style.display="none";
    }
    if(password.value.length<=5){
        strength.innerHTML="weak";
        password.style.borderColor="#ff5925";
        info.style.color="#ff5925";
        strength.style.color="#ff5925";

    }
    else if(password.value.length>=7 && password.value.length<10){
        strength.innerHTML="good";
        password.style.borderColor="yellow";
        info.style.color="yellow";
        strength.style.color="yellow";
    }
    else if(password.value.length>11){
        strength.innerHTML="strong";
        password.style.borderColor="#0aff2b";
        info.style.color="#0aff2b";
        strength.style.color="#0aff2b";
    }
})