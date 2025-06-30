
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

    var isSwapped = JSON.parse(localStorage.getItem('isSwapped'));

    var colorChange = document.querySelector('.colorSwitch');

    var onHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#29adbe"><path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm400-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM480-480Z"/></svg>
    `

    var offHTML = `
    <svg  xmlns="http://www.w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" fill="#FFFFFF"><path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm200-120Z"/></svg>
    `
  
    function displaySwitch(){
  
    if (isSwapped === true) {
        colorChange.innerHTML = onHTML;
    } else {
        colorChange.innerHTML = offHTML;
    }

  }
  
  displaySwitch();



colorChange.addEventListener('click', () => {
   isSwapped = JSON.parse(localStorage.getItem('isSwapped'));
  
  console.log('hi');
  
  if (!isSwapped) {
    console.log('hi');
    
    document.documentElement.style.setProperty('--backroundBlue', 'rgb(6, 5, 5)');
    document.documentElement.style.setProperty('--mainWhite', 'rgb(41, 173, 190)');
    localStorage.setItem('isSwapped', true);
  } else {
    document.documentElement.style.setProperty('--backroundBlue', 'rgb(41, 173, 190)');
    document.documentElement.style.setProperty('--mainWhite', 'white');
    localStorage.setItem('isSwapped', false);
  }

  isSwapped = localStorage.getItem('isSwapped');
  displaySwitch();
  
});