email_1 = document.querySelector("#email-1");
btn_1 = document.querySelector("#btn-1");
error_1= document.querySelector(".error-1");

email_2 = document.querySelector("#email-2");
btn_2 = document.querySelector("#btn-2");
error_2 = document.querySelector(".error-2");

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btn_1.addEventListener('click', function onClick(e) {
    if(!(email_1.value.match(mailformat))){
        error_1.style.opacity = "1";
     }else{
         error_1.style.opacity = "0";
     } 
});

btn_2.addEventListener('click', function onClick(e) {
    if(!(email_2.value.match(mailformat))){
        error_2.style.opacity = "1";
     }else{
         error_2.style.opacity = "0";
     } 
});