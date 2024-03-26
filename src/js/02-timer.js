import datepicker from 'js-datepicker';
import 'js-datepicker/dist/datepicker.min.css'


const startBtn = document.querySelector('button[data-start]');
const daysEl= document.querySelector('.value[data-days]');
const hoursEl= document.querySelector('.value[data-hours]');
const minutesEl= document.querySelector('.value[data-minutes]');
const secondsEl= document.querySelector('.value[data-seconds]');

startBtn.addEventListener('click', onPressStartBtn);

let intervalId=null;


let selectedData= 0;

const options = {
       startDate: new Date(),
    
    onSelect: (instance, _) => {      
      selectedData=instance.dateSelected.getTime();
      if(selectedData <Date.now()){
        window.alert("Please choose a date in the future");
        startBtn.disabled=true;
    
      } else {
        startBtn.disabled=false;
      }
      
      },
     
  };


 datepicker('#datetime-picker', options);


  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

 function addLeadingZero(value) {
  return String(value).padStart(2,'0');
 }



 function onPressStartBtn () {     
    intervalId =setInterval(()=>{
      const currentTime = Date.now();
      const deltaTime= selectedData-currentTime;
      if(Math.floor(deltaTime)===0){
        clearInterval(intervalId);
        return;
      };
      const deltaTimeInMs= convertMs(deltaTime);
      updateClock(deltaTimeInMs);

    },1000);
  
 }

 function updateClock({days, hours,minutes, seconds}) {
  daysEl.textContent= addLeadingZero(days);
  hoursEl.textContent=addLeadingZero(hours);
  minutesEl.textContent=addLeadingZero(minutes);
  secondsEl.textContent=addLeadingZero(seconds);

   };