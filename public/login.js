import { loadAcounts, acounts, saveToAcountsStorage } from "./acount.js";

loadAcounts().then(() => {
  


if(!localStorage.getItem('login')){
  localStorage.setItem('login', false);
}

if(!localStorage.getItem('ditnoua')){
 localStorage.setItem('ditnoua', null);
}

var boxModal = document.querySelector('.box');
var loginModal = document.querySelector('.signIn');

function displayapp(){

if(localStorage.getItem('login') == 'true'){
 boxModal.style.display = 'block';
 loginModal.style.display = 'none';
}

else{
    boxModal.style.display = 'none';
    loginModal.style.display = 'grid';
    loginModal.innerHTML = ` <img src="./logos/logo.png" alt="">
        <form action="">
            
            <div class="signH"> Welcome Sign In</div>
            <div class="textBoxes">
                <input type="text" placeholder=" Name" class="name" autofocus>
                <input type="text" placeholder=" Password" class="password">
            </div>
            <input type="submit" name="" id="" class="signInNow">
        </form>`
}
}
displayapp();

function login(){
  var submit = document.querySelector('.signInNow');
  var name = document.querySelector('.name')
  var password = document.querySelector('.password')
  
  submit.addEventListener('click', (e)=>{
       e.preventDefault();
       
       for(var i = 0; i < acounts.length; i++){
         if(acounts[i].name == name.value && acounts[i].password == password.value){
           localStorage.setItem('login', true);
           localStorage.setItem('ditnoua', acounts[i].acountId);
           displayapp();
           window.location.reload();
         }
       
       }
        
  })

  
  
}
login();

});
  