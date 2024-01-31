let passbox=document.getElementById("passbox");
let inputrange=document.getElementById("inputrange");
let rangevalue=document.getElementById("rangevalue");
let upercase=document.getElementById("upercase");
let lowercase=document.getElementById("lowercase");
let number=document.getElementById("number");
let specialCharacter=document.getElementById("specialCharacter");
let button=document.getElementById("button");
let copy=document.getElementById("copy");

rangevalue.textContent=inputrange.value;

inputrange.addEventListener('input', ()=>{
    rangevalue.textContent=inputrange.value;
});

button.addEventListener('click', ()=>{
    passbox.value=generatePassword();
})

let lowerChar="abcdefghijklmnopqrstuvwxyz";
let upperChar="ABCDEFGHIJKLMONOPQRSTUVWXYZ";
let allNumbers="0123456789";
let allSymbols="~!@#$%^&*()_=";

// function to generate password
function generatePassword(){
    let genPassword="";
    let allChars="";

    allChars+=lowercase.checked?lowerChar: "";
    allChars+=upercase.checked?upperChar: "";
    allChars+=number.checked?allNumbers: "";
    allChars+=specialCharacter.checked?allSymbols: "";

    if(allChars==""||allChars.length==0){
        return genPassword;
    }

    let i=1;
    while(i<=inputrange.value){
        genPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++;
    }
    return genPassword;
}

copy.addEventListener('click', ()=>{
   if(passbox.value!=""){
    navigator.clipboard.writeText(passbox.value);
    copy.title="copied";
    setTimeout(()=>{
        copy.title="copy";
        
    },4000)
   }
});


