function textBill(){
    
    var callsTotal = 0;
    var smsTotal = 0;
    var totals = 0;
    var warningLevel1 = 30;
    var criticalLevel1 = 50;

    function textBillFunc(string){
        if (string === "call"){
            callsTotal += 2.75
            totals += 2.75
        }
        else if (string === "sms"){
            smsTotal += 0.75;
            totals += 2.75;
        } 

    }

    function getCallTotal1(){
        return callsTotal.toFixed(2);

    }

    function getSmsTotal1(){
        return smsTotal.toFixed(2);
    }

    function getTotal1(){
        return totals.toFixed(2);
    }

  

    function colorTextBill(){
        if( totals >= criticalLevel1){
            return "danger";
        }

        else if( totals >= warningLevel1){
            return "warning";
        }
       
    }
    



    return{
        textBillFunc,
        getCallTotal1,
        getSmsTotal1,
        getTotal1,
        colorTextBill,
  

    }
}