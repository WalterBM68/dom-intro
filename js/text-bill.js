const theBillTypeText = document.querySelector(".billTypeText");
const addToBillBtn = document.querySelector(".addToBillBtn");
const theCallTotal = document.querySelector(".callTotalOne");
const theSmsTotal = document.querySelector(".smsTotalOne");
const textBillTotal = document.querySelector(".totalOne");
const colorChangingTextBillTotal = document.querySelector('.red');

let totalAmountOfCalls = 0; 
let totalAmountOfSms = 0;

function calculateTextBill() {
  let calculateTheBill = theBillTypeText.value;
  if (calculateTheBill === "call") {
    totalAmountOfCalls += 2.75;
  } else if (calculateTheBill === "sms") {
    totalAmountOfSms += 0.75;
  }
  theCallTotal.innerHTML = totalAmountOfCalls.toFixed(2);
  theSmsTotal.innerHTML = totalAmountOfSms.toFixed(2);
  let totalAmountOfCallsAndSms = totalAmountOfCalls + totalAmountOfSms;
  textBillTotal.innerHTML = totalAmountOfCallsAndSms.toFixed(2);

  colorChangingTextBillTotal.classList.remove("warning");
  colorChangingTextBillTotal.classList.remove("danger");

  if (totalAmountOfCallsAndSms >= 30 && totalAmountOfCallsAndSms < 50) {
    colorChangingTextBillTotal.classList.add("warning");
  } else if (totalAmountOfCallsAndSms >= 50) {
    colorChangingTextBillTotal.classList.add("danger");
  }
}
addToBillBtn.addEventListener("click", calculateTextBill);
