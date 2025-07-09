import { loadAcounts, acounts, saveToAcountsStorage } from "./acount.js";

loadAcounts().then(() => {
  

for (let i = 0; i < acounts.length; i++) {
  console.log(acounts[i].name);
 
  
}

 console.log('hi');
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
  