
const formEl= document.querySelector('.form');
const submitBtn = document.querySelector('button[type="submit"]');

submitBtn.addEventListener('click', onPressSubmit);


function onPressSubmit(event) {
  let formValues={};
  event.preventDefault();
  const formData=new FormData(formEl);

  formData.forEach((value,key) => {
    formValues[key]=value
  });


  // const delay = parseInt(formData.get('delay'));
  // const step = parseInt(formData.get('step'));
  // const amount = parseInt(formData.get('amount'));

  // for (let [name, value] of formData) {
  //   formValues[name] = value};
    const {delay,step, amount}=formValues;

     
for (let i = 0; i < amount; i+=1) {
  const currentDelay = delay + i * step;
  createPromise(i+1,currentDelay).then(({position, delay})=>
  {console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);}).catch(({position, delay})=>
  {console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });  
}  
}


function createPromise(position, delay) {
  return new Promise ((resolve, reject)=>{
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    
    }, delay);

  })  
}
console.log('promise');






// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });