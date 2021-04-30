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

var instanceRadio = radioBill();

function radioBillTotal(){
    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  
    instanceRadio.radioBillTotal(checkedRadioBtn.value)

       //update the totals that is displayed on the screen.
       callTotalTwo.innerHTML = instanceRadio.getRadioCallTotal();
       smsTotalTwo.innerHTML =instanceRadio.getRadioSmsTotal();
      
       totalTwo.innerHTML = instanceRadio.getRadioTotal();
    
       totalTwo.classList.add(instanceRadio.colorRadio());

    // update the correct total
   
}  




//add an event listener for when the add button is pressed
buttonForRadio.addEventListener('click', radioBillTotal);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
