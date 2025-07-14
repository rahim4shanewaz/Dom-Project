
//phone number and Pin

document.getElementById('btn-login')
    .addEventListener('click', function(event){
        event.preventDefault();

        //geting phone number
        const phoneNumber = document.getElementById('phone-number').value;

        console.log(phoneNumber)

        //getting Pin
        const pinNumber = document.getElementById('pin').value;

        console.log(pinNumber);

        if(phoneNumber === "1111" && pinNumber === "1234"){
            //console.log("loggd in")
            window.location.href = '/home.html'

        }
        else{
            alert("wrong Phone number or Pin")

        }
        } )