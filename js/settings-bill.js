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
var callCostSettingReference = 0;
var smsCostSettingReference = 0;
var warningLevelSettingReference = 0;
var criticalLevelSettingReference = 0;
// create a variables that will keep track of all three totals.
var callcost = 0;
var smscost = 0;
var total1 = 0;
//function
updateSettingsReference.addEventListener('click', function () {
    callCostSettingReference = Number(callCostSetting.value);
    //console.log(callCostSettingReference)
    smsCostSettingReference = Number(smsCostSetting.value);
    warningLevelSettingReference = warningLevel.value;
    criticalLevelSettingReference = Number(criticalLevel.value);
});

function settingsBill() {
    // get the value entered in the billType textfield
    var radioReference = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if(radioReference){
    if(total1 < criticalLevelSettingReference) {

        var billType = radioReference.value

        if (billType === "call") {

            callcost += callCostSettingReference;

        }
        else if (billType === "sms" /*< parseFloat(criticalLevel.value)*/) {
            smscost += smsCostSettingReference;
        }
    }
}
    //update the totals that is displayed on the screen.
    callTotalSettingsReference.innerHTML = callcost.toFixed(2);
    smsTotalSettingsReference.innerHTML = smscost.toFixed(2);
    total1 = callcost + smscost;
    totalSettingsReference.innerHTML = total1.toFixed(2);
    addColours(total1);
}

addButtonReference.addEventListener('click', settingsBill);

var addColours = function addColour(total1) {
    if (total1 < warningLevelSettingReference) {
        totalSettingsReference.classList.remove("warning");
        totalSettingsReference.classList.remove("danger");

    }

    else if (total1 >= warningLevelSettingReference && total1 < criticalLevelSettingReference) {
        totalSettingsReference.classList.remove("danger");
        totalSettingsReference.classList.add("warning");
    }

    else if (total1 >= criticalLevelSettingReference) {
        totalSettingsReference.classList.remove("warning");
        totalSettingsReference.classList.add("danger");
    }


}
