const api="https://api.quotable.io/random";
const quote=document.getElementById("quote");
const auth= document.getElementById("auth");

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML=data.content;
    auth.innerHTML=data.author;
}
function linkedin(){
    window.open("https://linkedin.com/share?text="+quote.innerHTML+" "+"-by"+" "+auth.innerHTML, "LinkedIn Window", "width=600, height=500");
}
