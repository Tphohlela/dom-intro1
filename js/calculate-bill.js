// get a reference to the textbox where the bill type is to be entered
var billStringField = document.querySelector(".billString");
//get a reference to the add button
var addButton = document.querySelector(".calculateBtn");
//create a variable that will keep track of the total bill

//var total = document.querySelector(".total");
var theBillTotal = document.querySelector(".billTotal");

var calculateInstance = calculateBill();

function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringField.value;
    //split the string
   calculateInstance.getBillItem(billString);

    //round to two decimals
    // var roundedBillTotal = (calculateInstance.getTotalCalc()).toFixed(2);
    theBillTotal.innerHTML = calculateInstance.getBillItem(billString);
 
    
        theBillTotal.classList.remove("danger");
        theBillTotal.classList.remove("warning");

        theBillTotal.classList.add(calculateInstance.totallevel(billString));

    
  }

addButton.addEventListener('click', calculateBtnClicked);