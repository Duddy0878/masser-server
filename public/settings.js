

const colorSwitchBtn = document.querySelector('.colorSwitch');
let isSwapped = false;

colorSwitchBtn.addEventListener('click', () => {
  if (!isSwapped) {
    document.documentElement.style.setProperty('--backroundBlue', 'rgb(6, 5, 5)');
    document.documentElement.style.setProperty('--mainWhite', 'rgb(41, 173, 190)');
    isSwapped = true;
  } else {
    document.documentElement.style.setProperty('--backroundBlue', 'rgb(41, 173, 190)');
    document.documentElement.style.setProperty('--mainWhite', 'white');
    isSwapped = false;
  }
});