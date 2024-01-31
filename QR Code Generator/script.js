let imgBox=document.getElementById("imgBox");
let qrimg=document.getElementById("qrimg");
let QRtext=document.getElementById("QRtext");

function generateQR(){
   if(QRtext.value.length>0){
    qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRtext.value;
   imgBox.classList.add("show-qr");
   }
   else{
     QRtext.classList.add("none");
     setTimeout(()=>{
        QRtext.classList.remove("none");
     },1000);
   };
  
}