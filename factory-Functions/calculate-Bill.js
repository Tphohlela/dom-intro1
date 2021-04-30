function calculateBill(){
    var call=0;
    var sms =0;

    
    var warningLevel2 =20;
    var criticalLevel2= 30;


    function getBillItem(list){
      var  data  = list.split(",");
      var totalBill=0;
       for (var i=0;i<data.length;i++){
            var item = data[i].trim();
        if(item ==='call'){
            call += 2.75;
            totalBill += 2.75;
        }
        else if (item === 'sms'){
         sms += 0.75;
         totalBill += 0.75;
        }

        
    }
    return totalBill.toFixed(2);
}
      
    


    function totallevel(list){
        if( getBillItem(list) >= criticalLevel2) {
            return 'danger';
        }

        else if( getBillItem(list) >= warningLevel2 && getBillItem(list) < criticalLevel2){
            return 'warning';
        }
       
    }


    return{
        getBillItem,
        totallevel,
    }
}


