// get a reference to the textbox where the bill type is to be entered
var billStringField = document.querySelector(".billString");
//get a reference to the add button
var addButton = document.querySelector(".calculateBtn");
//create a variable that will keep track of the total bill

//var total = document.querySelector(".total");
var theBillTotal = document.querySelector(".billTotal");

function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringField.value;
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    theBillTotal.innerHTML = roundedBillTotal;
    if (roundedBillTotal >= 30){
        theBillTotal.classList.remove("warning");
        theBillTotal.classList.add("danger");
    }

    else if (roundedBillTotal >= 20){
        
        theBillTotal.classList.remove("danger");
        theBillTotal.classList.add("warning");
    }
    else{
        theBillTotal.classList.remove("danger");
        theBillTotal.classList.remove("warning");

    }
  }

addButton.addEventListener('click', calculateBtnClicked);