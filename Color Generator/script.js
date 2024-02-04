let btn =document.getElementById("btn");
let code=document.getElementById("color-code");

const getColor=()=>{
    // creting hex code
    const randomNumber=Math.floor(Math.random()*16777215);
    const randomCode="#"+randomNumber.toString(16);
    console.log(randomNumber,randomCode);
    document.body.style.backgroundColor=randomCode;
    code.innerHTML=randomCode;
    //copy to clip board
    navigator.clipboard.writeText(randomCode);
}
btn.addEventListener('click',getColor);