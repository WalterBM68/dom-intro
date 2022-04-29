//get a reference to the add button
const theButton = document.querySelector('.radioBillAddBtn');
const totalOfCall = document.querySelector('.callTotalTwo');
const totalOfSms = document.querySelector('.smsTotalTwo');
const generalTotal = document.querySelector('.totalTwo');
const finalTotal = document.querySelector('.orange');
//create a variable that will keep track of the total bill
let theTotalCall = 0;
let theTotalSms = 0;

function radioBillFunc(){ 
   let checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
   let aRadio = checkedRadioBtn.value;
    if (aRadio === "call") {
        theTotalCall += 2.75;
    }else if (aRadio === "sms") {
        theTotalSms += 0.75;
    }
   totalOfCall.innerHTML = theTotalCall.toFixed(2);
   totalOfSms.innerHTML = theTotalSms.toFixed(2);
   let theOverrallTotal = theTotalCall + theTotalSms;
   generalTotal.innerHTML = theOverrallTotal.toFixed(2);

   finalTotal.classList.remove("warning");
   finalTotal.classList.remove("danger");

  if (theOverrallTotal >= 30 && theOverrallTotal < 50 ) {
    finalTotal.classList.add("warning");
  } else if (theOverrallTotal >= 50) {
    finalTotal.classList.add("danger");
  }
}
theButton.addEventListener('click', radioBillFunc);