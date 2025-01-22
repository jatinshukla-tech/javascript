const form = document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault();
 const height= parseInt(document.querySelector('#height').value)
 const weight= parseInt(document.querySelector('#weight').value)
 const result=document.querySelector('#results');

 if(height===0||height < 0 || isNaN(height)){
   result.innerHTML=`PLEASE ENTER A VAILD ${height}`
 }
 else if (weight===0||weight < 0 || isNaN(weight)){
  result.innerHTML=`PLEASE ENTER A VAILD ${weight}`
 }
 else{
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  //show the result
  results.innerHTML = `<span>${bmi}</span>`;
  if(bmi < 18.6){
    result.innerHTML=`the weight was under weight =${bmi}`
  }
   else if(bmi > 18.6 && bmi < 25.0){
    result.innerHTML=`the weight was normal weight =${bmi}`
  }
  else{
    result.innerHTML=`the weight was over weight =${bmi}`

  }


 }
})