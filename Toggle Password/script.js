let input=document.getElementById("input");
let icon=document.getElementById("icon");

icon.onclick=function(){
    if(input.type=="password"){
        input.type="text";
        icon.src="view.png";
    }
    else{
        input.type="password"
        icon.src="eye.png";
    }
}