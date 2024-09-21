document.getElementById('btn-add-money')
.addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputByID('addmoney-input');
    const addMoneyPin = getInputByID('addmoney-pin');

    if(addMoneyPin === 1234){
        const balance = getTextByNumber('balance');
        const newBalance = balance + addMoney;
        document.getElementById('balance').innerText = newBalance;

        
    }
    else{
        alert('failed add money')
    }


})