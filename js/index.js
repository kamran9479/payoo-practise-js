document.getElementById('log-in-button')
.addEventListener('click', function(event){
    event.preventDefault();


    const phoneNumber = document.getElementById('number-input').value;
    const pinNumber = document.getElementById('pin-input').value;

    
    if(phoneNumber === '01734989479' && pinNumber === "1234"){
        
        window.location.href = "/home.html";
        
    }
    else{
        alert('invalid pin or number');
    }

})