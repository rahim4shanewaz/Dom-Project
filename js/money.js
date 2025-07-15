document.getElementById('addMoney')
.addEventListener("click", function(event){
    //console.log("worked")
    event.preventDefault();



    let addedAmount = parseFloat(document.getElementById('addAmount').value);
    //console.log(amount)

    let pin = document.getElementById('addMoneyPin').value;
     //console.log(pin)

     let totalAmount = document.getElementById('totalAmount').innerText;
     let totalAmountNum = parseFloat(totalAmount);


     if(pin === "1234"){
        //console.log(totalAmount)

        let newAmount = totalAmountNum + addedAmount;
        //console.log(newAmount);
        document.getElementById('totalAmount').innerText = newAmount


        
     }
     else(
         alert("wrong Phone number or Pin")
     )
 




})