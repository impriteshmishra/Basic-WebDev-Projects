let timer= document.querySelector('.timer');
let stopbtn=document.getElementById('stopbtn');
let startbtn=document.getElementById('startbtn');
let resetbtn=document.getElementById('resetbtn');

let milisec=0o0;
let sec=0o0;
let min=0o0;

let timerId=null;

startbtn.addEventListener('click', function(){
    if(timerId!==null){
        clearInterval(timerId);
    }
    timerId=setInterval(startTimer,10);
});

stopbtn.addEventListener('click', function(){

        clearInterval(timerId);

});

resetbtn.addEventListener('click', function(){
    clearInterval(timerId);
    timer.innerHTML=`00 : 00 : 00`;
    min=sec=milisec=0o0;
});


function startTimer(){
    milisec++;
    if(milisec==100){
        milisec=0;
        sec++;
        if(sec==60){
            sec=0;
            min++;
        }
    }


let msecStr=milisec<10? `0${milisec}`: milisec;
let secStr=sec<10? `0${sec}`: sec;
let minStr=min<10? `0${min}`: min;

timer.innerHTML=`${minStr} : ${secStr} : ${msecStr}`;
}