
if (localStorage.getItem('isSwapped') === null) {
  localStorage.setItem('isSwapped', false);
}
    
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
     isSwapped = JSON.parse(localStorage.getItem('isSwapped'));

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
      isSwapped = JSON.parse(localStorage.getItem('isSwapped'));

      if (!isSwapped) {
       lightTheme();
      } else {
       darkTheme();
       }
    }

    
    displayTheme();



colorChange.addEventListener('click', () => {
   isSwapped = JSON.parse(localStorage.getItem('isSwapped'));
  
  console.log('hi');
  
  if (!isSwapped) {
    
   darkTheme();
    localStorage.setItem('isSwapped', true);
  } else {
    lightTheme();
    localStorage.setItem('isSwapped', false);
  }

  isSwapped = localStorage.getItem('isSwapped');
  displaySwitch();
  
});


// ====== charedy options ======

if (localStorage.getItem('charity') === null) {
  localStorage.setItem('charity', "matbia");
}

function displayCharidy(){
var myCharity = localStorage.getItem('charity');
var goTo = document.querySelector('.goTo');

if (myCharity === 'matbia') {
  goTo.href = 'https://matbia.org/dashboard';
  goTo.textContent = 'Go To Matbia';
}
else if (myCharity === 'ojc') {
  goTo.href = 'https://ojcfund.org'
  goTo.textContent = 'Go To OJC';
}

}

displayCharidy();

function changeCharity() {
  var charitySelect = document.getElementById('charitySelect');

  charitySelect.addEventListener('change', function() {
    localStorage.setItem('charity', charitySelect.value);
  })
}

changeCharity();





