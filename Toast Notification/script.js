let toastbox=document.getElementById('toastbox');
let successMsg='<i class="fa-solid fa-check"></i> Successfully submitted.';
let errorMsg='<i class="fa-solid fa-xmark"></i>Please fix the error.';
let ivalidMsg='<i class="fa-solid fa-circle-exclamation"></i>Invalid, Check again.';


function showToast(msg){
      let toast=document.createElement('div');
      toast.classList.add('toast');
      toast.innerHTML=msg;
      toastbox.appendChild(toast);

      if(msg.includes('error')){
        toast.classList.add('error');
      }
      if(msg.includes('Invalid')){
        toast.classList.add('Invalid');
      }
      setTimeout(()=>{
        toast.remove();
      },5000);

}