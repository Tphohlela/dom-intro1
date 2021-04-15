// get a reference to the sms or call radio buttons
//var billItemTypeRadio = document.querySelector(".billItemTypeRadio"); /*Get bill item type radio button selected*/
//var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
var callTotalTwo = document.querySelector(".callTotalTwo"); /*Where the call total should be displayed*/
var smsTotalTwo = document.querySelector(".smsTotalTwo");  /*Where the sms total should be displayed*/
var totalTwo = document.querySelector(".totalTwo"); /*Where overall total should be displayed*/

//get a reference to the add button
var buttonForRadio = document.querySelector(".radioBillAddBtn"); /*Button to press to add item to bill*/

//create a variable that will keep track of the total bill
var totalBill = 0;
var callSum = 0;
var smsSum = 0;
//function

function textBillTotal(){
    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
    
    // update the correct total
    if (billItemType === "call"){
        callSum += 2.75
        totalBill += 2.75
    }
    else if (billItemType === "sms"){
        smsSum += 0.75;
        totalBill += 0.75;

    }
}  

    //update the totals that is displayed on the screen.
    callTotalTwo.innerHTML = callSum.toFixed(2);
    smsTotalTwo.innerHTML = smsSum.toFixed(2);
    totalBill = callSum + smsSum;
    totalTwo.innerHTML = totalBill.toFixed(2);
    
    if ( totalBill >= 50){
        // adding the danger class will make the text red
        totalTwo.classList.add("danger");
    }
    else if ( totalBill >= 30){
        totalTwo.classList.add("warning");
    }

}



//add an event listener for when the add button is pressed
buttonForRadio.addEventListener('click', textBillTotal);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
