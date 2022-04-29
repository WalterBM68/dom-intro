//get a reference to the calculate button
const calculateButton = document.querySelector('.calculateBtn');

//get a reference to the billTotal element
const billTotal = document.querySelector('.billTotal');

//get a reference to the billString
const billString = document.querySelector('.billString');

const theColor = document.querySelector('.total');

function calculateBtnClicked(){
    let theBillString = billString.value;
    let billItems = theBillString.split(",");
    let theBillTotal = 0;
    for (let i = 0; i < billItems.length; i++){
        let billItem = billItems[i].trim().toLowerCase();
        if (billItem === "call"){
            theBillTotal += 2.75;
        }else if (billItem === "sms"){
            theBillTotal += 0.75;
        }
    }
    let roundedBillTotal = theBillTotal.toFixed(2);
    billTotal.innerHTML = roundedBillTotal;
    
    theColor.classList.remove('warning');
    theColor.classList.remove('danger');

    if (roundedBillTotal >= 20 && roundedBillTotal < 30){
        theColor.classList.add("warning");
    }else if (roundedBillTotal >= 30){
        theColor.classList.add("danger");
    }
}
calculateButton.addEventListener('click', calculateBtnClicked);
