import { loadAcounts, acounts, saveToAcountsStorage } from "./acount.js";
import {allAcounts, loadMaaser, saveToAllStorage} from "./maaser.js"
loadMaaser();
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

if(localStorage.getItem('login') == 'true' && localStorage.getItem('ditnoua') !== null){
 boxModal.style.display = 'block';
 loginModal.style.display = 'none';
}

else{
    boxModal.style.display = 'none';
    loginModal.style.display = 'grid';
    loginModal.innerHTML = ` <img src="./logos/logo.png" alt="">
        <form action="" class"form">
            
            <div class="signH"> Welcome Sign In</div>
            <div class="textBoxes">
                <input type="text" placeholder=" Name" class="name" autofocus>
                <input type="text" placeholder=" Password" class="password">
            </div>
            <input type="submit" name="" id="" class="signInNow">
            <div class="signUp"> Don't have an account? <a href=""> Sign Up</a></div>
        </form>
  <div class="signUpModal">
          <div class="suH">
            כי על כן ברכך ד' אלקך  <br>בכל מעשה ידך <span>דברים יד,כט</span>
        </div>
        <form action="">
            <input type="text" class="suName" placeholder="Name">
            <input type="text" class="suPassword" placeholder="Password">
            <input type="text" class="suEmail" placeholder="EmailAddress">
            <input type="submit" placeholder="submit" class="suSubmit">
        </form>
        <div class="backToSI">
            Have An Acount ? <a href="">Sign In</a>
        </div>
    </div>

        `


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
    function newAccount(){
    var openNewModal = document.querySelector('.signUp');
    var NewModal = document.querySelector('.signUpModal');
    var countId = 0;

    openNewModal.addEventListener('click', (e)=>{
      e.preventDefault();
      NewModal.style.display = 'block';
    })

    var newName = document.querySelector('.suName');
    var newPassword = document.querySelector('.suPassword');
    var newEmail = document.querySelector('.suEmail');
    var newSubmit = document.querySelector('.suSubmit');

  

    newSubmit.addEventListener('click', (e)=>{
        e.preventDefault();
        console.log('hi');
        
        for(var i = 0; i < acounts.length; i++){
          countId++
          }
          var creatId = `Ma${0}${countId}ser`;
        
        acounts.push({
          acountId: creatId,
          name: newName.value,
          password: newPassword.value,
          email: newEmail.value
          })

          allAcounts.push({
                "acountId": creatId,
                "autoPay": false,
                "isSwapped": false,
                "myCharity": "matbia",
                "customCharity": {name: '', url: ''},
                "incomes":{
                "myPay": 0,
                "typesOfPay": [
                  
                  ]
                  },
                "currentBalance": 0,
                "donations": []
          })

          


      
        saveToAcountsStorage(acounts);
        saveToAllStorage(allAcounts);
        
        NewModal.style.display = 'none';
    
      })



    }
    newAccount();
}
}
displayapp();



});
  