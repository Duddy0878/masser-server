
if (localStorage.getItem('isSwapped') === null) {
  localStorage.setItem('isSwapped', false);
}


const colorSwitchBtn = document.querySelector('.colorSwitch');


colorSwitchBtn.addEventListener('click', () => {
  if (localStorage.getItem('isSwapped') === false) {
    document.documentElement.style.setProperty('--backroundBlue', 'rgb(6, 5, 5)');
    document.documentElement.style.setProperty('--mainWhite', 'rgb(41, 173, 190)');
    localStorage.setItem('isSwapped', true);
  } else {
    document.documentElement.style.setProperty('--backroundBlue', 'rgb(41, 173, 190)');
    document.documentElement.style.setProperty('--mainWhite', 'white');
    localStorage.setItem('isSwapped', false);
  }
});