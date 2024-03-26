
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

startBtn.addEventListener('click', onPressStartBtn);
stopBtn.addEventListener('click',onPressStopBtn);


let timerId =null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };

  function onPressStartBtn() {
     timerId=setInterval(()=>{
    body.style.backgroundColor =getRandomHexColor();
    },1000);
    startBtn.disabled= true;   
     };

  function onPressStopBtn() {
     clearInterval(timerId);
    startBtn.disabled=false;
  };