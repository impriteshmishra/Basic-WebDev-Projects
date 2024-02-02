const notescontainer = document.querySelector(".notes-container");
const addbtn = document.getElementById("addbtn");
let notes = document.querySelector(".input");

function showNotes(){
    notescontainer.innerHTML=localStorage.getItem("notes");
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes", notescontainer.innerHTML);
}


addbtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "stuff/dlt.png"
    notescontainer.appendChild(inputBox).appendChild(img);
})

notescontainer.addEventListener("click", function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="p"){
        notes=document.querySelectorAll(".input");
        notes.forEach(note => {
            note.onkeyup=function(){
                updateStorage();
            }
        });
    }
})

document.addEventListener("keydown", event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})