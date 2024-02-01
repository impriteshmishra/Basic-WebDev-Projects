const time = document.getElementById("time");
const timeformate = document.getElementById("timeformate");

document.addEventListener('DOMContentLoaded', () => {
    setInterval(Time, 1000);
});

const Time = () => {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    timeformate.innerHTML = hour > 12 ? "PM" : "AM";

    if (hour > 12) {
        hour = hour - 12;
    }
    
    hour = hour < 10 ? `0${hour}` : hour;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    time.innerHTML = `${hour} : ${minutes} : ${seconds}`;
}

if (hour > 12) {
    timeformate = "PM";
}