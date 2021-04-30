function radioBill(){
    var callSum = 0;
    var smsSum = 0;
    var totalBill = 0;
    
    var warningLevel2 = 30;
    var criticalLevel2 = 50;
   

    function radioBillTotal(billItemType){
        if (billItemType === "call"){
            callSum += 2.75
            totalBill += 2.75
        }
        else if (billItemType === "sms"){
            smsSum += 0.75;
            totalBill += 0.75;
    
        }
    }

    function getRadioTotal(){
        return totalBill.toFixed(2);
    }

    function getRadioCallTotal(){
            return callSum.toFixed(2);
    }

    function getRadioSmsTotal(){
            return smsSum.toFixed(2);
    }
    
    
   

        function colorRadio(){
            if(totalBill >= criticalLevel2){
                return "danger";
            }

            if(totalBill >= warningLevel2){
                return "warning";
            }
           
        }
    




    return{
        radioBillTotal,
        getRadioTotal,
        getRadioCallTotal,
        getRadioSmsTotal,
        colorRadio,
    

       
    }
}