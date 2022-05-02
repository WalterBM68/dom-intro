//get a reference to the add button
const radioBillAddBtn = document.querySelector('.radioBillAddBtn');
const totalOfCall = document.querySelector('.callTotalTwo');
const totalOfSms = document.querySelector('.smsTotalTwo');
const theTotalOfRadioBtn = document.querySelector('.totalTwo');
const theTotalOfRadioBtnWithColors = document.querySelector('.orange');
//create a variable that will keep track of the total bill
let radioTotalCall = 0;
let radioTotalSms = 0;

function radioBillFunc(){ 
   let checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
   let theCheckingRadionBtn = checkedRadioBtn.value;
    if (theCheckingRadionBtn === "call") {
        radioTotalCall += 2.75;
    }else if (theCheckingRadionBtn === "sms") {
        radioTotalSms += 0.75;
    }
   totalOfCall.innerHTML = radioTotalCall.toFixed(2);
   totalOfSms.innerHTML = radioTotalSms.toFixed(2);
   let totalOfCallAndSmsInRadioBtn = radioTotalCall + radioTotalSms;
   theTotalOfRadioBtn.innerHTML = totalOfCallAndSmsInRadioBtn.toFixed(2);

   theTotalOfRadioBtnWithColors.classList.remove("warning");
   theTotalOfRadioBtnWithColors.classList.remove("danger");

  if (totalOfCallAndSmsInRadioBtn >= 30 && totalOfCallAndSmsInRadioBtn < 50 ) {
    theTotalOfRadioBtnWithColors.classList.add("warning");
  } else if (totalOfCallAndSmsInRadioBtn >= 50) {
    theTotalOfRadioBtnWithColors.classList.add("danger");
  }
}
radioBillAddBtn.addEventListener('click', radioBillFunc);