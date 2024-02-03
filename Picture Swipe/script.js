let imagegallery=document.querySelector(".image-gallery");
let backbtn=document.getElementById("backbtn");
let forwardbtn=document.getElementById("forwardbtn");

imagegallery.addEventListener("wheel", (e)=>{
    e.preventDefault();
    imagegallery.scrollLeft+=e.deltaY;
    imagegallery.style.scrollBehavior="smooth";

});
backbtn.addEventListener("click", ()=>{
    imagegallery.style.scrollBehavior="smooth";
    imagegallery.scrollLeft+=500;
});

forwardbtn.addEventListener("click", ()=>{
    imagegallery.style.scrollBehavior="smooth";
    imagegallery.scrollLeft-=500;
})

