const calculateButton = document.querySelector('.calculateBtn');
const billTotal = document.querySelector('.billTotal');
const billString = document.querySelector('.billString');
const billTotalWithColors = document.querySelector('.total');

function calculateBtnClicked(){
    let theBillString = billString.value.split(",");
    let theBillTotal = 0;
    for (let i = 0; i < theBillString.length; i++){
        let billItem = theBillString[i].trim().toLowerCase();
        if (billItem === "call"){
            theBillTotal += 2.75;
        }else if (billItem === "sms"){
            theBillTotal += 0.75;
        }
    }
    let roundedBillTotal = theBillTotal.toFixed(2);
    billTotal.innerHTML = roundedBillTotal;
    
    billTotalWithColors.classList.remove('warning');
    billTotalWithColors.classList.remove('danger');

    if (roundedBillTotal >= 20 && roundedBillTotal < 30){
        billTotalWithColors.classList.add("warning");
    }else if (roundedBillTotal >= 30){
        billTotalWithColors.classList.add("danger");
    }
}
calculateButton.addEventListener('click', calculateBtnClicked);
