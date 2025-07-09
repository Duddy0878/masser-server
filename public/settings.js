import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { loadMaaser, maaser, saveToStorage } from './maaser.js';


loadMaaser().then(()=>{
 
  console.log(maaser);
  

    var settingsBtn = document.querySelector('.settings');
    var settingsModal = document.querySelector('.settingsCon');
    var closeSettings = document.querySelector('.closeSettings');

   settingsBtn.addEventListener('click', () => {
        settingsModal.style.display = 'block';
    })

    closeSettings.addEventListener('click', () => {
        settingsModal.style.display = 'none';
    })



    
 

      // ===== settings theme ==============
    var isSwapped = false;
    var colorChange = document.querySelector('.colorSwitch');

    var onHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" fill="#29adbe"><path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm400-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM480-480Z"/></svg>
    `

    var offHTML = `
    <svg  xmlns="http://www.w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" fill="#FFFFFF"><path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm200-120Z"/></svg>
    `
  
    function displaySwitch(){
     isSwapped = maaser.isSwapped;

    if (!isSwapped) {
        colorChange.innerHTML = offHTML;
    } else {
        colorChange.innerHTML = onHTML;
    }

    }

    displaySwitch();



    function darkTheme(){
       document.documentElement.style.setProperty('--backroundBlue', 'rgb(6, 5, 5)');
        document.documentElement.style.setProperty('--mainWhite', 'rgb(41, 173, 190)');
    }

    function lightTheme(){
        document.documentElement.style.setProperty('--backroundBlue', 'rgb(41, 173, 190)');
        document.documentElement.style.setProperty('--mainWhite', 'white');
    }

    function displayTheme(){
      isSwapped = maaser.isSwapped;
      

      if (!isSwapped) {
       lightTheme();
      } else {
       darkTheme();
       }
    }

    
    displayTheme();



colorChange.addEventListener('click', () => {
   isSwapped = maaser.isSwapped;
  
  if (!isSwapped) {
    darkTheme();
    maaser.isSwapped = true;
    saveToStorage(maaser);
  } else {
    lightTheme();
    maaser.isSwapped = false;
    saveToStorage(maaser);
  }

  isSwapped = maaser.isSwapped;
  
  displaySwitch();
  
});


// ====== charedy options ======


function displayCharidy(){
var myCharity = maaser.myCharity;


var goTo = document.querySelector('.goTo');

  if (charitySelect && myCharity && charitySelect.value === 'matbia' || charitySelect.value === 'ojc') {
    charitySelect.value = myCharity;
  }

  else{
  charitySelect.value = 'add';
  }

if (myCharity === 'matbia') {
  goTo.href = 'https://matbia.org/dashboard';
  goTo.textContent = 'Go To Matbia';
}
else if (myCharity === 'ojc') {
  goTo.href = 'https://ojcfund.org'
  goTo.textContent = 'Go To OJC';
}
else{
  var getCustomCharity = maaser.customCharity;
  goTo.href = getCustomCharity.url;
  goTo.textContent = `Go To ${getCustomCharity.name}`
  
}

}

displayCharidy();

function changeCharity() {
  var charitySelect = document.getElementById('charitySelect');

  charitySelect.addEventListener('change', function() {
    if (charitySelect.value !== 'add') {
    maaser.myCharity = charitySelect.value;
    saveToStorage(maaser);
    displayCharidy();}
    else {
      var customMoadal = document.querySelector('.addCharityModal');
      customMoadal.style.display = 'grid';

      var customName = document.querySelector('.customName');
      var customUrl = document.querySelector('.customUrl');

      var addCustom = document.querySelector('.buttons button[type="submit"]');
      var cancelCustom = document.querySelector('.buttons button[type="reset"]');

      addCustom.addEventListener('click', () => {
        var customCharity = {name: customName.value, url: customUrl.value};
         
         maaser.customCharity = customCharity;
         maaser.myCharity = customCharity.name;
         saveToStorage(maaser);
         displayCharidy();

         customName.value = '';
         customUrl.value = '';
         customMoadal.style.display = 'none';
      })

      cancelCustom.addEventListener('click', () => {
        customName.value = '';
         customUrl.value = '';
        customMoadal.style.display = 'none';
      })

    
    }
  })

  
}

changeCharity();

// ========= auto pay chek =============
var incomes
function getIncomes() {
 incomes = maaser.incomes;
 console.log(incomes);
 
}
getIncomes();


function paySwitches() {
 var onOff = maaser.autoPay;
 var switchHtml = document.querySelector('.paySwitchs');

 if(onOff) {
    switchHtml.innerHTML = `<svg class="paySwitch" xmlns="http://www.w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" ><path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm400-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM480-480Z"/></svg>`;
}
else {
  switchHtml.innerHTML = `<svg class="paySwitch" xmlns="http://www.w3.org/2000/svg" height="29px"  viewBox="0 -960 960 960" width="29px"><path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm200-120Z"/></svg>`;
}
}

paySwitches();

function autoPayCheck(){
  var switchAutoPayOn = document.querySelector('.paySwitchs');
  

  switchAutoPayOn.addEventListener('click', () => {
    
   if(!maaser.autoPay){
    if(incomes.myPay === 0) {
     swal.fire({
      title: 'Error',
      text: 'You Need To Set An Income Before Turning on Auto Pay.',
      color: 'var(--mainWhite)',
      icon: 'error',
      width: '300px',
      iconColor: 'red',
      background: 'var(--backroundBlue)',
      showConfirmButton: false,
      timer: 6000,  
     })     
    }
    else {
      maaser.autoPay = true;
    }
   }
   else {
    maaser.autoPay = false;
  }
    saveToStorage(maaser);
    paySwitches();
  })
}

autoPayCheck();

function incomeDisplay() {
 var incomeAmount = incomes.myPay;
 var toDisplay = document.querySelector('.weekIncome');

 toDisplay.textContent = `Your Income Is: $${incomeAmount}`;
}

incomeDisplay();


// update



var openUpdate = document.querySelector('.update');
var updateModal = document.querySelector('.updateModal');
var closeUpdate = document.querySelector('.cancelUpdate');

openUpdate.addEventListener('click', () => {
  updateModal.style.display = 'block';
})

var count = 1;

function displayTypesOfPay() {
  var incomesHTML =`<div class="eachBox newIncome">
                        New Income <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                    </div>`;
  var typesOf = incomes.typesOfPay

  for(let i = 0; i < typesOf.length; i++) {
     incomesHTML += ` 
      <div class="eachBox ${typesOf[i].name}" data-name-id="${typesOf[i].name}" >
        <svg class="trash" xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
        
        <label for="">${typesOf[i].name} $${typesOf[i].amount}</label>
            <input type="number" class="" placeholder="Enter Updated Amount">
            <div class="eachUpdate">update</div>
      </div>`
    
  }

  document.querySelector('.currenPay').innerHTML = incomesHTML;
  
    var eachUpdate = document.querySelectorAll('.eachUpdate');
    
    eachUpdate.forEach((update) => {
      update.addEventListener('click', (e) => {
        var nameId = e.target.parentElement.dataset.nameId;
      if(count === 1) {
        document.querySelector(`.${nameId} input`).style.display = 'block';
        document.querySelector(`.${nameId} .eachUpdate`).style.display = 'none';
        count++;
      }
      else{
        displayTypesOfPay();
        document.querySelector(`.${nameId} input`).style.display = 'block';
        document.querySelector(`.${nameId} .eachUpdate`).style.display = 'none';
        count++;
      }
      localStorage.setItem('updateName', nameId);
      
        
      })
    })
}
displayTypesOfPay();

function addNewIncomeChoice() {
  var newIncomeChoice = document.querySelector('.newIncome');
  var addChoice = document.querySelector('.newIncome svg');
  addChoice.addEventListener('click', () => {
    var newIncomeName = prompt('Enter The Name Of The Income:');
    if (newIncomeName) {
      var newIncomeAmount = prompt('Enter The Amount Of The Income:');
      if (newIncomeAmount) {
        incomes.typesOfPay.push({name: newIncomeName, amount: Number(newIncomeAmount)});
        maaser.incomes = incomes;
        saveToStorage(maaser);
        countPay();
        displayTypesOfPay();
        incomeDisplay();
      } else {
        alert('Please enter a valid amount.');
      }
    } else {
      alert('Please enter a valid name.');
    }
  })
}
addNewIncomeChoice();

// update pay
function countPay() {
getIncomes();
var countPay = 0;
for (let i = 0; i < incomes.typesOfPay.length; i++) {
  countPay += incomes.typesOfPay[i].amount;
  console.log(countPay);
  
}
incomes.myPay = countPay;
maaser.incomes = incomes;
saveToStorage(maaser);

}

countPay();

var updatePay = document.querySelector('.submitUpdate');

updatePay.addEventListener('click', () => {
    var updateName = localStorage.getItem('updateName');
    var newPay = document.querySelector(`.${updateName} input`);
    incomes.typesOfPay.forEach((type) => {
      if(type.name === updateName) {
        type.amount = Number(newPay.value);
      }
    })
    maaser.incomes = incomes;
    saveToStorage(maaser);
    updateModal.style.display = 'none';
    countPay();
    incomeDisplay();
    displayTypesOfPay();
})

closeUpdate.addEventListener('click', () => {
  updateModal.style.display = 'none';
  displayTypesOfPay();
})

function refresh() {
  loadMaaser().then(() => {
    



  var jsonMaaser = maaser;
  var countNow = 0;
  for (let i = 0; jsonMaaser.donations.length > i; i++) {
    if (jsonMaaser.donations[i].type === '++') {
    countNow += Number(maaser.donations[i].amount);
    }
    else{
      countNow -= Number(maaser.donations[i].amount);
    }
  }
  
  maaser.currentBalance = countNow;
  saveToStorage(maaser);
})
}


var refreshNow = document.querySelector('.refresh');
refreshNow.addEventListener('click', () => {
  refresh();
  window.location.reload();
})

});

