var pswdEl = document.getElementById('pswd');
const cpswdEl = document.getElementById('cpswd');
const pswdauth = document.getElementById('pswdauth');
const submitEl = document.getElementById('submit');


pswdEl.addEventListener('keydown', ()=>{
    var pswdEl = document.getElementById('pswd');
    let x = parseInt(pswdEl.value.length);
    if((x) > 10 ){
        pswdauth.style.color = "rgb(74, 254, 46)";
        pswdauth.textContent = "Password Tough";
    }
    else if((x)>=5 && (x) < 10 ){
        pswdauth.style.color = "orange";
        pswdauth.textContent = "Password moderate";
    }
  
   else if((x) < 5 ){
    pswdauth.style.color = "red";
    pswdauth.textContent = "Password too easy";
   }
   console.log(x);
});
    
submitEl.addEventListener('click', ()=>{
    if((pswdEl.value) !== (cpswd.value)){
        pswdauth.style.color = "red";
        pswdauth.textContent = "Password didn't Match!!";
    }
    else{
        submitEl.setAttribute("type", "submit");

    }
})