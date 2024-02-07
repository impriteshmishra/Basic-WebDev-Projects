let number = document.getElementById("number");
let count=0;

setInterval(()=>{
    if(count==71){
        clearInterval();
    }
    else{
        count+=1;
        number.innerHTML=count+super();
} 
},15)