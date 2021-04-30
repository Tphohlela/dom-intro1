// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
var addButton = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;

var callTotalOne = document.querySelector(".callTotalOne");
var smsTotalOne = document.querySelector(".smsTotalOne");
var totalOne = document.querySelector(".totalOne");

var instanceTextBill = textBill();
//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    instanceTextBill.textBillFunc(billTypeEntered);

   
    //update the totals that is displayed on the screen.
    callTotalOne.innerHTML = instanceTextBill.getCallTotal1();
    smsTotalOne.innerHTML = instanceTextBill.getSmsTotal1();
 
    totalOne.innerHTML = instanceTextBill.getTotal1();
    totalOne.classList.add(instanceTextBill.colorTextBill());
}
addButton.addEventListener('click', textBillTotal);
