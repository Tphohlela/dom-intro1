// get a reference to the sms or call radio buttons
var settingsRadioButton = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevel = document.querySelector(".warningLevelSetting");
var criticalLevel = document.querySelector(".criticalLevelSetting");
// get references to all the totals
var callTotalSettingsReference = document.querySelector(".callTotalSettings");
var smsTotalSettingsReference = document.querySelector(".smsTotalSettings");
var totalSettingsReference = document.querySelector(".totalSettings");
//get a reference to the add button
var addButtonReference = document.querySelector(".addRadioBtn");
//get a reference to the 'Update settings' button
var updateSettingsReference = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
// var callCostSettingReference = 0;
// var smsCostSettingReference = 0;
// var warningLevelSettingReference = 0;
// var criticalLevelSettingReference = 0;
// create a variables that will keep track of all three totals.
// var callcost = 0;
// var smscost = 0;
// var total1 = 0;

var settingsInstance = BillWithSettings()
console.log(settingsInstance)
//function
updateSettingsReference.addEventListener('click', function () {
    settingsInstance.setCallCost(Number(callCostSetting.value));
    settingsInstance.setSmsCost(Number(smsCostSetting.value));
    settingsInstance.setWarningLevel(warningLevel.value);
    settingsInstance.setCriticalLevel(criticalLevel.value);
    settingsInstance.hasReachedCriticalLevel();
  
  
});

function settingsBill() {
    
    // get the value entered in the billType textfield
    var radioReference = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if(radioReference){

       settingsInstance.checkCallAndSms(radioReference.value);
     
        
    
}
    //update the totals that is displayed on the screen.
    callTotalSettingsReference.innerHTML = (settingsInstance.getTotalCallCost()).toFixed(2);
    smsTotalSettingsReference.innerHTML = (settingsInstance.getTotalSmsCost()).toFixed(2);
    // total1 = callcost + smscost;
    totalSettingsReference.innerHTML = (settingsInstance.getTotalCost()).toFixed(2);
    
    totalSettingsReference.classList.remove("warning");
    totalSettingsReference.classList.remove("danger");

    totalSettingsReference.classList.add(settingsInstance.totalClassName());

}

addButtonReference.addEventListener('click', settingsBill);


