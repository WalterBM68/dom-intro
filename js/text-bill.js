// get a reference to the textbox where the bill type is to be entered
const theTextBox = document.querySelector(".billTypeText");

//get a reference to the add button
const myButton = document.querySelector(".addToBillBtn");
const theCallTotal = document.querySelector(".callTotalOne");
const theSmsTotal = document.querySelector(".smsTotalOne");
const theTotal = document.querySelector(".totalOne");
const textTotal = document.querySelector('.red');

//create a variable that will keep track of the total bill
let callsTotal = 0;
let smsTotal = 0;

function textBill() {
  let newText = theTextBox.value;
  let theNewestText = newText.split(",");
  for (let i = 0; i < theNewestText.length; i++) {
    let afterTrim = theNewestText[i].trim().toLowerCase();
    if (afterTrim  === "call") {
      callsTotal += 2.75;
    } else if (afterTrim  === "sms") {
      smsTotal += 0.75;
    }
  }
  theCallTotal.innerHTML = callsTotal.toFixed(2);
  theSmsTotal.innerHTML = smsTotal.toFixed(2);
  let totalBill = callsTotal + smsTotal;
  theTotal.innerHTML = totalBill.toFixed(2);

  textTotal.classList.remove("warning");
  textTotal.classList.remove("danger");

  if (totalBill >= 30 && totalBill < 50) {
    textTotal.classList.add("warning");
  } else if (totalBill >= 50) {
    textTotal.classList.add("danger");
  }
}
//add an event listener for when the add button is pressed
myButton.addEventListener("click", textBill);
