document.getElementById('btn-add-money')
.addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = document.getElementById('addmoney-input').value;
    const addMoneyNumber = parseFloat(addMoney);

    const addMoneyPin = document.getElementById('addmoney-pin').value;

    if(addMoneyPin === '1234'){
        const balance = document.getElementById('balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;

        document.getElementById('balance').innerText = newBalance;

        

        
    }
    else{
        alert('failed')
    }

    
})